# 🏛️ Cloud Run API Architecture (Archived / Future Roadmap)

> **Status:** ARCHIVED & PRESERVED FOR FUTURE API INSTANTIATION  
> **Active Static Target:** Google Cloud Storage (`gs://echosh-labs.com`) via `scripts/deploy.sh`  
> **Future API Target:** Dedicated Cloud Run Service (`mercury-dasha`) on `api.echosh-labs.com`  

---

## 📋 1. Architectural Summary

The `echosh-labs.com` frontend repository has been decoupled into a pure static export (`output: 'export'`). Containerized Cloud Run deployment for the static website has been cleanly disabled in this repository.

The Cloud Run infrastructure is preserved specifically for the **Go calculation backend (`mercury-dasha`)** when you are ready to instantiate the live public REST API in the future.

---

## 🛠️ 2. Future Cloud Run API Deployment Specification

When activating the remote Go API backend:

1. **Target Subdomain:** `https://api.echosh-labs.com` (or `https://dasha.echosh-labs.com`)
2. **Project ID:** `echosh-labs-prod` (or `amra-core`)
3. **Region:** `us-central1`
4. **Service Parameters:**
   - **Scale-to-Zero:** `min-instances=0` (guarantees true $0.00 / month idle compute cost)
   - **Max Instances:** `max-instances=1` (protects against cost spikes)
   - **Concurrency:** `concurrency=250`
   - **Memory:** `512Mi`
   - **CPU:** `1`
   - **Port:** `8080`
   - **Container Image:** Built from `mercury-dasha/Dockerfile` via Google Cloud Build

---

## 🚀 3. Activation Command Suite

From the ecosystem root directory (`/home/justin/code/echosh-labs`):

```bash
# 1. Primary Static Dossier Deployment (Active)
make deploy
# Equivalent to: cd echosh-labs.com && bash scripts/deploy.sh

# 2. Standalone Go API Cloud Run Deployment (Future / On-Demand)
make deploy-api-cloudrun
# Equivalent to: cd mercury-dasha && bash scripts/deploy-cloudrun.sh
```
