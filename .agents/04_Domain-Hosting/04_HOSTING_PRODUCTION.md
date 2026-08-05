# Hosting and Production Environment

## Observed production signal

The public `Server` header identifies `nginx/1.24.0 (Ubuntu)`. This does not identify the application runtime, cloud provider, database, container platform, or deployment pipeline; those must be documented by the infrastructure owner.

## Production requirements

- Separate development, staging, and production environments with isolated secrets and least-privilege access.
- Store secrets in an approved secret manager; never in repository files, client bundles, or logs.
- Use repeatable, reviewed deployments with a health check, rollback path, and change record.
- Monitor uptime, latency, server/application errors, resource saturation, failed jobs, source-ingestion failures, and broken official links.
- Back up data on a tested schedule. Define recovery point objective (RPO), recovery time objective (RTO), retention, encryption, and restoration test frequency.
- Plan capacity for result/admit-card traffic spikes and ensure graceful degradation.

## Production readiness checklist

- [ ] Hosting and origin account owner documented.
- [ ] Environment variables and secrets inventory reviewed.
- [ ] Deployment, rollback, and incident runbooks tested.
- [ ] Backup restoration tested and recorded.
- [ ] Health checks, logs, alert routes, and on-call ownership confirmed.
- [ ] Domain, CDN, cache, TLS, and SEO behavior validated after release.
