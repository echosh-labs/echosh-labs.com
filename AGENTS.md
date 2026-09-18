# 🌌 AGENTS.md — Echo SH Labs Dossier Frontend Standards

> **Organization:** [Echo SH Labs](https://echosh-labs.com) (`echosh-labs.com`)  
> **Project:** Master Systems Dossier & Web Audio DSP Portal  
> **Author & Architect:** Justin Andrew Wood  
> **Repository Path:** `/home/justin/code/echosh-labs/echosh-labs.com`  
> **Deployment Target:** Google Cloud Storage (`gs://echosh-labs.com`)  

---

## 🏛️ 1. Core Architectural Principles

### A. Pure Static Architecture (`output: 'export'`) & Decoupling Mandate
- **Zero Runtime Backend Dependency:** This repository is a purely static Next.js 14 frontend export. There are no runtime Go servers, Node.js express daemons, or database connections in this directory.
- **Client-Side Interactive Sandboxes:** All system interactions (e.g. Martial Arts token ledger, Axis Mundi MCP runner, Compendium Dasha engine, echoSH terminal simulator) must execute entirely in-browser using local state and pure React / Web Audio.
- **Anti-Pollution Principle:** Sub-project routes (`/martial-arts`, `/axis-mundi`, `/archive`, etc.) are independent architectural case studies and sandboxes. Never import or introduce live database dependencies, unready backend business logic, or fragile cross-project state machines into this package.
- **Directory Index Generation:** Static builds must produce `out/<route>/index.html` alongside `out/<route>.html` to maintain clean URL resolution on GCS.

### B. Single URL, Dual-Target Ingress Architecture (`https://echosh-labs.com`)
The production domain `https://echosh-labs.com` resolves to Google Cloud Anycast IP `34.111.120.147` (External HTTPS Load Balancer `echosh-url-map`), which bifurcates traffic:
1. **Default Path (`/*`):** Directed to the **GCS Backend Bucket** (`gs://echosh-labs.com`). Serves all static HTML, CSS, Next.js chunks, and client assets. Deployed via `bash scripts/deploy.sh`.
2. **API Path (`/api/*`, `/healthz`):** Directed to the **Serverless NEG** (`mercury-dasha-neg`) running the Go engine on Cloud Run (`mercury-dasha` in `us-central1`). Deployed via `mercury-dasha/scripts/deploy-cloudrun.sh`.
*Note:* The static dossier must remain 100% resilient and functional even when Cloud Run is scaled to zero or unreachable.

### C. `echoSH` Flagship Brand Identity Standard
- **Wordmark Anatomy:** All lowercase `echo` immediately followed by uppercase `SH` (`echoSH`).
- **Color Differential:**
  - `echo`: Liquid Quicksilver / Platinum (`.text-echosh-echo` / `.text-silver-gradient`).
  - `SH`: Phosphor Emerald Neon (`.text-echosh-sh`) with ambient drop-shadow bloom (`drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]`).
- **Component:** Always utilize [`<EchoSHLogo />`](file:///home/justin/code/echosh-labs/echosh-labs.com/src/components/ui/EchoSHLogo.tsx) across headers, hero sections, and cards.

### D. "Five Projects, Five Flavors" Styling Mandate
- Each route must strictly preserve its authentic project aesthetic:
  - `/echosh`: Retro 1980s Synthwave CRT Terminal (Keycaps, interactive DSP terminal, `<EchoSHLogo />`)
  - `/martial-arts`: Bold Crimson & Gold Dojo (`武道`, `.text-dojo-gradient`, `.dojo-glow`)
  - `/axis-mundi`: Cybernetic Violet & Emerald (`.scanline-crt`, MCP inspect panels)
  - `/foundations`: Exhibition Watercolor Gallery (Chakra radial glows, harmonic frequencies)
  - `/compendium`: Celestial Gold & Quicksilver (Vimshottari Dasha, relational knowledge graph)

---

## 🎙️ 2. Voice-Coding Session Protocols

When collaborating with the architect in voice-generated coding sessions:
1. **Understand Architectural Synonyms:**
   - Spoken "frontend" or "the site" ➔ `echosh-labs.com` dossier.
   - Spoken "deploy" / "push update" ➔ execute `bash scripts/deploy.sh` or `make deploy`.
2. **Strict Background Task Cleanup:**
   - When the user issues commands like "shut down", "stop both tasks", or switches tasks, immediately terminate running background tasks using `manage_task(Action='kill')`. Never leave orphan Node/Go tasks consuming CPU/ports.
3. **Continuous Verification:**
   - Always run `npm test` and `bash scripts/verify.sh` prior to deploying.

---

## 🛠️ 3. Verification & Deployment Commands

```bash
# Start local dev server
pnpm dev

# Run Vitest test suite (including route integrity tests)
pnpm test

# Validate TypeScript without emitting JS
pnpm typecheck

# Full pre-flight verification & directory index generation
bash scripts/verify.sh

# Deploy to Google Cloud Storage with cache invalidation
bash scripts/deploy.sh
```
