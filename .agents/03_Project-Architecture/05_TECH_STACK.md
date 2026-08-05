# Tech Stack

## Publicly observed signals (2026-07-29)

| Layer | Observation | Confidence |
| --- | --- | --- |
| Transport | HTTPS and HSTS are enabled | Verified from response headers |
| Web server | Response identifies `nginx/1.24.0 (Ubuntu)` | Verified from response headers |
| Front-end marker | Homepage source contains React markers | Verified, framework not identified |
| Sitemap | Sitemap index contains separate content-type sitemaps | Verified from `/sitemap.xml` |

## Decisions still required

- Front-end framework/version and rendering model (SSR, SSG, ISR, or client rendering).
- CMS/database and job-data ingestion mechanism.
- Search/filter engine and cache strategy.
- Hosting, CDN, monitoring, backup, and deployment pipeline ownership.
- Authentication and notification stack if saved jobs or alerts are introduced.

## Engineering requirements

- Render indexable job and hub content reliably for crawlers.
- Cache high-demand result/admit-card pages while preserving freshness controls.
- Validate all structured job data before publication.
- Use observability for application errors, failed source checks, broken outbound links, and sitemap generation.
- Avoid exposing secrets or internal source-ingestion endpoints in client-side code.
