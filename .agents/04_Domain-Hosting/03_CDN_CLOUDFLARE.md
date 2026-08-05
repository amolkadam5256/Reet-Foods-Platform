# CDN and Cloudflare

## Current status

Cloudflare use is **unverified** by this audit. The legacy source proposes Cloudflare Registrar and Cloudflare Enterprise, but current public responses identify an nginx/Ubuntu server and do not prove whether a proxy/CDN sits in front of it.

## If Cloudflare is the chosen platform

1. Confirm the zone owner, billing owner, recovery contacts, and multi-factor authentication.
2. Confirm orange-cloud proxy state for public web records and protect the origin from direct public access where feasible.
3. Configure cache rules by content class:
   - Versioned static assets: long immutable cache.
   - Public job/result/admit-card HTML: short cache with controlled revalidation and reliable purge process.
   - Authenticated, admin, search, and sensitive API responses: no shared cache.
4. Set WAF, rate limits, bot controls, and cache-purge permissions using least privilege.
5. Test official application links and freshness/expiry updates after every caching rule change.

## CDN acceptance checks

- Cache key does not mix candidates' personalized or sensitive data.
- Cache purge is documented and limited to trusted operators.
- Origin remains reachable during CDN bypass testing only through approved controls.
- Core Web Vitals, error rate, stale-content reports, and cache-hit rate are monitored.
