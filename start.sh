#!/usr/bin/env bash
# ==============================================================================
# ECHO SH LABS // DOSSIER LOCAL DEV SERVER & TESTER
# ==============================================================================
# Starts the Next.js static dossier frontend (port 3000) and ensures the
# backend API is active on port 8080 for full end-to-end local testing.
# ==============================================================================

set -euo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

# ------------------------------------------------------------------------------
# Subcommand: Test / Verification
# ------------------------------------------------------------------------------
if [[ "${1:-}" == "test" || "${1:-}" == "--test" || "${1:-}" == "verify" ]]; then
    echo "=========================================================="
    echo "🧪 Running Echo SH Labs Dossier Verification Suite"
    echo "=========================================================="
    bash scripts/verify.sh
    exit 0
fi

# ------------------------------------------------------------------------------
# Subcommand: Status
# ------------------------------------------------------------------------------
if [[ "${1:-}" == "status" || "${1:-}" == "--status" ]]; then
    echo "📊 Ecosystem Port Status:"
    echo "  - Port 3000 (Dossier UI): $(lsof -ti:3000 2>/dev/null || echo 'Inactive')"
    echo "  - Port 8080 (Backend API): $(lsof -ti:8080 2>/dev/null || echo 'Inactive')"
    exit 0
fi

# Cleanup function to kill spawned background processes on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down Echo SH Labs local dev environment..."
    if [ -n "${DASHA_PID:-}" ] && kill -0 "$DASHA_PID" 2>/dev/null; then
        echo "  - Stopping Mercury Dasha backend (PID: $DASHA_PID)..."
        kill "$DASHA_PID" 2>/dev/null || true
    fi
    if [ -n "${FRONTEND_PID:-}" ] && kill -0 "$FRONTEND_PID" 2>/dev/null; then
        echo "  - Stopping Next.js frontend (PID: $FRONTEND_PID)..."
        kill "$FRONTEND_PID" 2>/dev/null || true
    fi
    echo "✨ All local development processes terminated cleanly."
    exit 0
}

trap cleanup SIGINT SIGTERM EXIT

# ------------------------------------------------------------------------------
# Default Mode: Interactive Local Dev Environment
# ------------------------------------------------------------------------------
echo "=========================================================="
echo "⚡ Starting Echo SH Labs Dossier & Tester Environment"
echo "=========================================================="

# 1. Backend Service Check & Ingress
DASHA_PID=""
if lsof -ti:8080 >/dev/null 2>&1; then
    EXISTING_PID=$(lsof -ti:8080 | head -n1)
    echo "✔ [1/2] Backend service already active on http://localhost:8080 (PID: $EXISTING_PID)"
else
    DASHA_DIR="$DIR/../mercury-dasha"
    if [ -d "$DASHA_DIR" ] && [ -f "$DASHA_DIR/go.mod" ]; then
        echo "🚀 [1/2] Launching Mercury Dasha Go API backend (port 8080)..."
        (cd "$DASHA_DIR" && /usr/local/go/bin/go run ./cmd/server -port 8080) &
        DASHA_PID=$!
        sleep 0.5
        echo "  ✔ Mercury Dasha running on http://localhost:8080 (PID: $DASHA_PID)"
    else
        echo "ℹ️  [1/2] Standalone frontend mode (backend port 8080 inactive)."
    fi
fi

# 2. Start Next.js Frontend
echo "🌐 [2/2] Launching Next.js dossier frontend (port 3000)..."
echo "=========================================================="
echo " 📍 Central Dossier:  http://localhost:3000"
echo " 📜 Python Archive:   http://localhost:3000/archive"
echo " 🌌 Compendium:       http://localhost:3000/compendium"
echo " 🏛️ Foundations:      http://localhost:3000/foundations"
echo " 🥋 Martial Arts:     http://localhost:3000/martial-arts"
echo " ⚡ echoSH Origin:     http://localhost:3000/echosh"
echo " 📡 Axis Mundi:       http://localhost:3000/axis-mundi"
echo "=========================================================="
echo "Press CTRL+C to stop all servers."
echo ""

pnpm dev --port 3000 &
FRONTEND_PID=$!

wait "$FRONTEND_PID"
