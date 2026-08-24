#!/bin/bash
# file: scripts/deploy.sh
# description: Runs pre-flight verification tests and syncs compiled static assets to GCS.

set -euo pipefail

BUCKET="gs://echosh-labs.com"
PROJECT_DIR="$(pwd)"

echo "=========================================================="
echo " 🚀 Deploying Mercury Dasha Dossier to Root GCS"
echo "=========================================================="

cd "$PROJECT_DIR"

echo "🧪 Running full pre-flight verification & test suite..."
bash scripts/verify.sh

echo "⚙️ Configuring GCS bucket static website defaults..."
gcloud storage buckets update "$BUCKET" --web-main-page-suffix=index.html --web-error-page=404.html || true

echo "☁️ Syncing static artifacts to $BUCKET (and deleting legacy files)..."
gcloud storage rsync ./out $BUCKET --recursive --delete-unmatched-destination-objects

echo "🌐 Uploading clean extensionless HTML objects to $BUCKET..."
CLEAN_ROUTES=("compendium" "foundations" "axis-mundi" "martial-arts" "echosh" "archive")
for r in "${CLEAN_ROUTES[@]}"; do
  gcloud storage cp "./out/$r.html" "$BUCKET/$r" --content-type="text/html" --cache-control="no-store, no-cache, must-revalidate" || true
done

echo "⚡ Applying Cache-Control headers for HTML entry points..."
gcloud storage objects update $BUCKET/index.html --cache-control="no-store, no-cache, must-revalidate" || true
gcloud storage objects update $BUCKET/compendium.html --cache-control="no-store, no-cache, must-revalidate" || true
gcloud storage objects update $BUCKET/foundations.html --cache-control="no-store, no-cache, must-revalidate" || true
gcloud storage objects update $BUCKET/axis-mundi.html --cache-control="no-store, no-cache, must-revalidate" || true
gcloud storage objects update $BUCKET/martial-arts.html --cache-control="no-store, no-cache, must-revalidate" || true
gcloud storage objects update $BUCKET/echosh.html --cache-control="no-store, no-cache, must-revalidate" || true
gcloud storage objects update $BUCKET/archive.html --cache-control="no-store, no-cache, must-revalidate" || true

echo "=========================================================="
echo " ✅ Production Deployment complete!"
echo " 🌐 Live at: https://echosh-labs.com"
echo "=========================================================="
