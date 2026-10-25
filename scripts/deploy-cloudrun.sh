#!/usr/bin/env bash
# ==============================================================================
# echosh-labs.com // Unified Next.js + Go Single-Binary Cloud Run Deployment
# ==============================================================================

set -euo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"
cd "$DIR"

PROJECT_ID="amra-core"
REGION="northamerica-northeast1"
REPO_NAME="axis-repo"
SERVICE_NAME="echosh-labs"
IMAGE_TAG="$(git rev-parse --short HEAD 2>/dev/null || echo 'manual')"
IMAGE_URI="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/echosh-labs-web:${IMAGE_TAG}"
LATEST_URI="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/echosh-labs-web:latest"

# Ensure automated non-interactive deployments use amra-service
gcloud config set account amra-service@amra-core.iam.gserviceaccount.com 2>/dev/null || true

echo "=========================================================="
echo "🚀 Deploying echosh-labs.com to Google Cloud Run"
echo "Project:  $PROJECT_ID"
echo "Region:   $REGION"
echo "Service:  $SERVICE_NAME"
echo "Image:    $IMAGE_URI"
echo "=========================================================="

# 1. Pre-flight verification & compilation
echo "🧪 [1/4] Running full pre-flight verification & test suite..."
bash scripts/verify.sh

# 2. Build multi-stage container image using Google Cloud Build
echo "🔨 [2/4] Building multi-stage container via Google Cloud Build..."
gcloud builds submit \
    --project "$PROJECT_ID" \
    --tag "$IMAGE_URI" \
    --tag "$LATEST_URI" \
    .

# 3. Deploy to Cloud Run ($0.00 idle cost, scale-to-zero)
echo "⚡ [3/4] Deploying to Cloud Run service '$SERVICE_NAME'..."
gcloud run deploy "$SERVICE_NAME" \
    --image "$IMAGE_URI" \
    --region "$REGION" \
    --project "$PROJECT_ID" \
    --allow-unauthenticated \
    --memory=256Mi \
    --cpu=1 \
    --min-instances=0 \
    --max-instances=5 \
    --concurrency=80 \
    --port=8080

# 4. Verification
echo "🩺 [4/4] Verifying Cloud Run live service endpoint..."
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region "$REGION" --project "$PROJECT_ID" --format 'value(status.url)' 2>/dev/null || echo "")

if [ -n "$SERVICE_URL" ]; then
    echo "=========================================================="
    echo " ✅ Cloud Run Deployment complete!"
    echo " 🌐 Service URL: $SERVICE_URL"
    echo "=========================================================="
    curl -I -s "$SERVICE_URL/" | head -n 10
    curl -s "$SERVICE_URL/healthz"
    echo ""
fi
