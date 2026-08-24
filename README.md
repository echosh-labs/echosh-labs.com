# 🌐 Echo SH Labs: Architect's Dossier (`echosh-labs.com`)

> **Organization:** [Echo SH Labs](https://echosh-labs.com) (`echosh-labs.com`)  
> **Architect & Founder:** Justin Andrew Wood  
> **Platform Type:** Standalone Next.js 14 Static Export (`output: 'export'`)  
> **Design Paradigm:** Mercury Dash Architecture & "Five Projects, Five Flavors"  
> **Production Hosting:** Google Cloud Storage (`gs://echosh-labs.com`)  

---

## 🏛️ Executive Summary

`echosh-labs.com` is the central static web portal and interactive engineering dossier for **Echo SH Labs**. It showcases the complete spectrum of systems engineering, zero-token infrastructure, and generative audio projects architected by Justin Andrew Wood over the past couple of years.

The site is built with a decoupled, purely static Next.js 14 architecture with zero runtime backend dependencies, integrating low-level Web Audio 2.0 DSP synthesis and client-side simulation sandboxes.

---

## 🎭 "Five Projects, Five Flavors" Route Matrix

Each route in the dossier embodies the authentic visual identity, typography, color palette, and interactive sandbox of its respective project:

```
================================================================================
                    ECHO SH LABS // THE 6 DOSSIER ROUTES
================================================================================
 01. /                   -> Mercury Dash Void & Web Audio DSP Synthesizer
 02. /martial-arts.html  -> Bold Crimson & Gold Dojo (武道), 5-Discipline Sandbox
 03. /axis-mundi.html    -> Cybernetic Violet & Emerald TUI, MCP Tool Registry
 04. /foundations.html   -> Alchemical Watercolor Gallery & Harmonic Drones
 05. /compendium.html    -> Esoteric Celestial Gold & Vimshottari Dasha Matrix
 06. /echosh.html        -> Retro 1980s Synthwave CRT Terminal & DSP Soundboard
================================================================================
```

### 1. Root Dossier & Synesthetic Engine ([`/`](https://echosh-labs.com))
- **Role:** Central capabilities index and interactive Web Audio 2.0 DSP synthesizer console.
- **Aesthetic:** Minimalist deep space void (`#05070a`), refracted glass panels, glowing accent borders.

### 2. Martial Arts Academy Engine ([`/martial-arts`](https://echosh-labs.com/martial-arts.html))
- **Role:** High-throughput martial arts studio management engine and student portal showcase.
- **Aesthetic:** Bold Crimson & Gold Dojo (`武道`), fiery text gradients (`text-dojo-gradient`), dojo glow shadows.
- **Features:** 5-discipline curriculum sandbox (Kung Fu, Karate, Kobudo, Tai Chi, Qigong), 21 SQL migration tiers visualizer, and live interactive token ledger simulator with instant cancellation refunds.

### 3. Axis Mundi Engine ([`/axis-mundi`](https://echosh-labs.com/axis-mundi.html))
- **Role:** High-speed zero-token voice ingestion daemon in Go.
- **Aesthetic:** Cybernetic Neon Violet & Emerald, CRT scanline overlay (`.scanline-crt`), monospace telemetry logs.
- **Features:** Interactive JSON-RPC 2.0 MCP tool sandbox, split-pane TUI terminal with simulated live SSE telemetry stream.

### 4. Foundations Storyboard ([`/foundations`](https://echosh-labs.com/foundations.html))
- **Role:** 4-stage philosophical and alchemical journey (Intuition, Idealism, Illumination, Genesis).
- **Aesthetic:** Exhibition watercolor gallery, dynamic chromatic radial chakra glows matching frequencies (432Hz Violet, 528Hz Cyan, 639Hz Solar Gold, 741Hz Emerald).
- **Features:** Interactive Web Audio harmonic frequency resonance button and full keyboard navigation (Arrows / Numbers 1-4 / Space).

### 5. Astrological & Alchemical Compendium ([`/compendium`](https://echosh-labs.com/compendium.html))
- **Role:** Esoteric matrix powering the Mercury Dash architecture.
- **Aesthetic:** Celestial Gold & Quicksilver metallic sheen.
- **Features:** 17-Year Vimshottari Mahadasha planetary transit visualizer, interactive relational context knowledge graph explorer, quicksilver fluid crucible, and ancient Hermetic axiom parchment panels.

### 6. echoSH Origin Progenitor ([`/echosh`](https://echosh-labs.com/echosh.html))
- **Role:** The original August 2025 Electron.js synesthetic terminal environment that birthed the procedural audio architecture.
- **Aesthetic:** Retro 1980s Synthwave, CRT scanlines, tactile keycaps (`.keycap-pill`).
- **Features:** Interactive CLI command prompt simulator with real-time Web Audio DSP synthesis and 42 generative sound presets.

---

## 🛠️ Development & Deployment Pipeline

```bash
# ⚡ Start local Next.js development server (http://localhost:3000)
pnpm dev

# 🧪 Run Vitest test suite and route integrity tests
pnpm test

# 🔍 Typecheck TypeScript source
pnpm typecheck

# 🏗️ Compile static export into ./out and generate directory indices
bash scripts/verify.sh

# 🚀 Sync static artifacts to Google Cloud Storage (gs://echosh-labs.com)
bash scripts/deploy.sh
```

---

## ☁️ Google Cloud Storage Hosting Architecture

- **Target Bucket:** `gs://echosh-labs.com`
- **Routing Configuration:** Configured with `--web-main-page-suffix=index.html` and `--web-error-page=404.html`.
- **Clean URL Resolution:** Generates directory indices (`out/<route>/index.html`) so both extensionless (`/martial-arts`) and trailing-slash (`/martial-arts/`) URLs resolve cleanly with `200 OK`.
- **Cache-Control:** All HTML entry points deployed with `no-store, no-cache, must-revalidate` for immediate propagation.
