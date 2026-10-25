# ==============================================================================
# echosh-labs / echosh-labs.com
# Multi-stage production container: Next.js Static Export + Static Go Binary
# ==============================================================================

# ------------------------------------------------------------------------------
# Stage 1: Build Next.js Static Export Bundle
# ------------------------------------------------------------------------------
FROM node:22-alpine AS frontend-builder
WORKDIR /app

# Install bash for verify script
RUN apk add --no-cache bash

# Enable pnpm matching local environment
RUN corepack enable && corepack prepare pnpm@11.8.0 --activate

# Install dependencies with frozen lockfile
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy project source
COPY . ./

# Run full pre-flight verification & compilation
RUN bash scripts/verify.sh

# ------------------------------------------------------------------------------
# Stage 2: Compile Static High-Performance Go Binary
# ------------------------------------------------------------------------------
FROM golang:1.23-alpine AS backend-builder
WORKDIR /app

# Copy Go mod files and main.go
COPY go.mod ./
COPY main.go ./

# Inject compiled out/ static directory from stage 1 into current build context
COPY --from=frontend-builder /app/out ./out

# Compile static binary with zero external runtime dependencies (-s -w strips debug symbols)
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
    go build -ldflags="-s -w -extldflags '-static'" \
    -o /app/echosh-web main.go

# ------------------------------------------------------------------------------
# Stage 3: Ultra-Minimal Production Container (~18MB)
# ------------------------------------------------------------------------------
FROM alpine:3.20

# Add CA certificates and timezone data
RUN apk --no-cache add ca-certificates tzdata

# Create dedicated unprivileged user for Cloud Run security
RUN addgroup -S echosh && adduser -S echosh -G echosh

WORKDIR /app
COPY --from=backend-builder /app/echosh-web /app/echosh-web

# Set runtime environment variables for Cloud Run
ENV PORT=8080 \
    SERVICE_NAME=echosh-labs-web \
    NODE_ENV=production

USER echosh
EXPOSE 8080

ENTRYPOINT ["/app/echosh-web"]
