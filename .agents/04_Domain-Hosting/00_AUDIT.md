# Domain & Hosting Audit

## Directly related file consolidated

| Original path | Current path | Decision |
| --- | --- | --- |
| `.agents/04-domain-hosting.md` | `04-domain-hosting.md` | Moved unchanged; preserved as the original infrastructure plan. |

## Related material reviewed, not moved

- `.agents/20-security.md`: application security policy.
- `.agents/07-technical-seo.md`: crawl, robots, and sitemap controls.
- `.agents/deployments/*` and `.agents/instructions/deployment-guide.md`: deployment and rollback procedures.
- `.agents/backups/README.md`: backup domain documentation.
- `.agents/03_Project-Architecture/05_TECH_STACK.md`: observed production stack signals.

## Public observations (2026-07-29)

- `https://searchsarkarinaukri.com/` returned HTTP 200.
- The public A-record response included `157.245.102.177`.
- The HTTP `Server` response header identifies `nginx/1.24.0 (Ubuntu)`.
- HSTS, `nosniff`, `SAMEORIGIN`, referrer policy, and restrictive camera/microphone/geolocation permissions headers are present.

## Important verification gap

The preserved source names Cloudflare, Cloudflare Enterprise, serverless/edge SSR, and specific DNS values. Public checks do not verify those claims. Confirm registrar, DNS provider, origin owner, CDN/proxy state, certificate issuer, cache rules, backups, and RTO/RPO through authorized provider access before treating them as production facts.
