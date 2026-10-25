package main

import (
	"context"
	"embed"
	"encoding/json"
	"io/fs"
	"log"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"strings"
	"syscall"
	"time"
)

//go:embed all:out/*
var embeddedOut embed.FS

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	serviceName := os.Getenv("SERVICE_NAME")
	if serviceName == "" {
		serviceName = "echosh-labs-web"
	}

	log.Printf("Initializing [%s] static server on port :%s...", serviceName, port)

	distFS, err := fs.Sub(embeddedOut, "out")
	if err != nil {
		log.Fatalf("Fatal: failed to isolate embedded out filesystem: %v", err)
	}

	fileServer := http.FileServer(http.FS(distFS))

	mux := http.NewServeMux()

	// Health check endpoint for Cloud Run and Load Balancer
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_ = json.NewEncoder(w).Encode(map[string]any{
			"status":    "UP",
			"service":   serviceName,
			"timestamp": time.Now().UTC().Format(time.RFC3339),
		})
	})

	mux.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_ = json.NewEncoder(w).Encode(map[string]any{
			"status":    "UP",
			"service":   serviceName,
			"timestamp": time.Now().UTC().Format(time.RFC3339),
		})
	})

	// Static asset and page serving handler
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		reqPath := r.URL.Path
		cleanPath := strings.TrimPrefix(reqPath, "/")
		if cleanPath == "" {
			cleanPath = "index.html"
		}

		// Cache-Control headers optimization
		if strings.HasPrefix(cleanPath, "_next/static/") {
			w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
		} else if strings.HasSuffix(cleanPath, ".html") || !strings.Contains(filepath.Base(cleanPath), ".") {
			w.Header().Set("Cache-Control", "public, max-age=0, must-revalidate")
		}

		// Security headers
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.Header().Set("X-Frame-Options", "SAMEORIGIN")

		// 1. Resolve clean routes (without extension) directly to HTML file
		targetFile := cleanPath
		if !strings.Contains(filepath.Base(cleanPath), ".") {
			// Try <cleanPath>.html first (e.g. "studio.html")
			htmlPath := strings.TrimSuffix(cleanPath, "/") + ".html"
			if fHtml, errHtml := distFS.Open(htmlPath); errHtml == nil {
				_ = fHtml.Close()
				targetFile = htmlPath
			} else {
				// Try <cleanPath>/index.html (e.g. "studio/index.html")
				dirIndex := strings.TrimSuffix(cleanPath, "/") + "/index.html"
				if fDir, errDir := distFS.Open(dirIndex); errDir == nil {
					_ = fDir.Close()
					targetFile = dirIndex
				}
			}
		}

		// 2. Open target file
		f, err := distFS.Open(targetFile)
		if err != nil {
			// Try with .html extension as fallback
			htmlPath := targetFile + ".html"
			if fHtml, errHtml := distFS.Open(htmlPath); errHtml == nil {
				_ = fHtml.Close()
				targetFile = htmlPath
				f, err = distFS.Open(targetFile)
			}
		}

		// 4. Handle 404 fallback if target still not found
		if err != nil {
			if f404, err404 := distFS.Open("404.html"); err404 == nil {
				_ = f404.Close()
				data, errRead := fs.ReadFile(distFS, "404.html")
				if errRead == nil {
					w.Header().Set("Content-Type", "text/html; charset=utf-8")
					w.WriteHeader(http.StatusNotFound)
					_, _ = w.Write(data)
					return
				}
			}
			http.NotFound(w, r)
			return
		}

		if f != nil {
			_ = f.Close()
		}

		// If path was resolved to an HTML file, serve with correct Content-Type
		if strings.HasSuffix(targetFile, ".html") {
			data, errRead := fs.ReadFile(distFS, targetFile)
			if errRead == nil {
				w.Header().Set("Content-Type", "text/html; charset=utf-8")
				w.WriteHeader(http.StatusOK)
				_, _ = w.Write(data)
				return
			}
		}

		// Otherwise serve static chunk/asset via FileServer
		r.URL.Path = "/" + targetFile
		fileServer.ServeHTTP(w, r)
	})

	server := &http.Server{
		Addr:         ":" + port,
		Handler:      mux,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 30 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)

	go func() {
		log.Printf("✔ [%s] listening on http://0.0.0.0:%s", serviceName, port)
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Fatal: server error: %v", err)
		}
	}()

	<-stop
	log.Println("Received termination signal, shutting down gracefully...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Printf("Error during shutdown: %v", err)
	}

	log.Println("Server exited cleanly.")
}
