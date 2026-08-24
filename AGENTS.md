# 🌌 AGENTS.md — Echo SH Labs Dossier Frontend Standards

> **Organization:** [Echo SH Labs](https://echosh-labs.com) (`echosh-labs.com`)  
> **Project:** Master Systems Dossier & Web Audio DSP Portal  
> **Author & Architect:** Justin Andrew Wood  
> **Repository Path:** `/home/justin/code/echosh-labs/echosh-labs.com`  
> **Deployment Target:** Google Cloud Storage (`gs://echosh-labs.com`)  

---

## 🏛️ 1. Core Architectural Principles

### A. Pure Static Architecture (`output: 'export'`)
- **Zero Runtime Backend:** This package is a purely static Next.js 14 frontend export. There are no runtime Go servers, Node.js express daemons, or database connections in this directory.
- **Client-Side Interactive Sandboxes:** All system interactions (e.g. Martial Arts token ledger, Axis Mundi MCP runner, Compendium Dasha engine, echoSH terminal simulator) must execute entirely in-browser using local state and pure React / Web Audio.
- **Directory Index Generation:** Static builds must produce `out/<route>/index.html` alongside `out/<route>.html` to maintain clean URL resolution on GCS.

### B. "Five Projects, Five Flavors" Styling Mandate
- Each route must strictly preserve its authentic project aesthetic:
  - `/martial-arts`: Bold Crimson & Gold Dojo (`武道`, `.text-dojo-gradient`, `.dojo-glow`)
  - `/axis-mundi`: Cybernetic Violet & Emerald (`.scanline-crt`, MCP inspect panels)
  - `/foundations`: Exhibition Watercolor Gallery (Chakra radial glows, harmonic frequencies)
  - `/compendium`: Celestial Gold & Quicksilver (Vimshottari Dasha, relational knowledge graph)
  - `/echosh`: Retro 1980s Synthwave CRT Terminal (Keycaps, interactive DSP terminal)

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
