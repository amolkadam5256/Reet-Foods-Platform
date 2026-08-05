# SSL and Edge Security

## Verified public HTTPS baseline

| Control | Observed value on 2026-07-29 |
| --- | --- |
| HTTPS request | HTTP 200 response |
| HSTS | `max-age=31536000; includeSubDomains` |
| Content-type protection | `X-Content-Type-Options: nosniff` |
| Frame protection | `X-Frame-Options: SAMEORIGIN` |
| Referrer policy | `strict-origin-when-cross-origin` |
| Permissions policy | Geolocation, microphone, and camera disabled |

## Controls to verify or improve

- Certificate issuer, expiry, automatic renewal, supported TLS versions, and redirect from HTTP to HTTPS.
- Content-Security-Policy in report-only mode before enforcement; tune it around the actual application, analytics, ads, fonts, and source domains.
- Secure and HttpOnly cookie flags, same-site policy, and session-management controls where applicable.
- Rate limiting, bot controls, WAF rules, and DDoS response ownership.
- Security-header testing in CI and after CDN/proxy configuration changes.

## Release rule

No TLS, proxy, DNS, or header change is complete until HTTPS redirects, certificate chain, critical pages, sitemap, robots, analytics, and official outbound links have been checked from production.
