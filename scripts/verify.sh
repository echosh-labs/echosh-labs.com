#!/usr/bin/env bash
set -e

echo "===================================================="
echo "⚡ ECHO SH LABS // FRONTEND INTEGRITY & TEST SUITE"
echo "===================================================="

# 1. Typecheck
echo "▶ [1/4] Running TypeScript validation..."
npm run typecheck

# 2. Automated Test Suite
echo "▶ [2/4] Running Vitest test suite..."
npm test

# 3. Clean Build Verification
echo "▶ [3/4] Compiling Next.js production static export..."
npm run build

# 4. Artifact & Styling Verification
echo "▶ [4/4] Validating static HTML & CSS export bundle..."
ROUTES=(
  "index.html"
  "foundations.html"
  "architecture.html"
  "studio.html"
  "martial-arts.html"
  "axis-mundi.html"
  "echosh.html"
  "transmissions.html"
  "compendium.html"
  "archive.html"
  "services.html"
  "treasury.html"
  "chronicles.html"
  "404.html"
  "foundations/the-boy-from-battersea.html"
  "foundations/the-first-nine-days.html"
  "foundations/a-family-affair.html"
  "foundations/mark-steven-wood.html"
  "chronicles/the-boy-from-battersea.html"
  "chronicles/the-first-nine-days.html"
  "chronicles/a-family-affair.html"
  "chronicles/mark-steven-wood.html"
)

for route in "${ROUTES[@]}"; do
  FILE="out/$route"
  if [ ! -f "$FILE" ]; then
    echo "❌ Error: Missing generated route file: $FILE"
    exit 1
  fi
  SIZE=$(wc -c < "$FILE")
  if [ "$SIZE" -lt 500 ]; then
    echo "❌ Error: Route file is unexpectedly small ($SIZE bytes): $FILE"
    exit 1
  fi
  echo "  ✔ $route ($SIZE bytes)"
done

# Check CSS build
CSS_COUNT=$(find out/_next/static/css -name "*.css" | wc -l)
if [ "$CSS_COUNT" -eq 0 ]; then
  echo "❌ Error: No compiled CSS bundles found in out/_next/static/css"
  exit 1
fi

echo "  ✔ Found $CSS_COUNT compiled CSS bundle(s)"

# 5. Clean URL & Directory Index Preparation
echo "▶ [5/5] Generating clean URL directory indices for static hosting..."
CLEAN_ROUTES=(
  "foundations"
  "architecture"
  "studio"
  "martial-arts"
  "axis-mundi"
  "echosh"
  "transmissions"
  "compendium"
  "archive"
  "services"
  "treasury"
  "chronicles"
  "foundations/the-boy-from-battersea"
  "foundations/the-first-nine-days"
  "foundations/a-family-affair"
  "foundations/mark-steven-wood"
  "chronicles/the-boy-from-battersea"
  "chronicles/the-first-nine-days"
  "chronicles/a-family-affair"
  "chronicles/mark-steven-wood"
)
for r in "${CLEAN_ROUTES[@]}"; do
  mkdir -p "out/$r"
  cp "out/$r.html" "out/$r/index.html"
  echo "  ✔ Generated out/$r/index.html"
done

echo ""
echo "===================================================="
echo "✅ ALL FRONTEND TESTS & STYLE VERIFICATIONS PASSED!"
echo "===================================================="

