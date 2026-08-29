# Security Audit

Updated: 2026-08-29

## Summary

The main production risk was public filesystem exposure through asset browsing and serving routes. Those routes are now disabled as public project-file access points.

## Fixed

- Disabled project-wide asset index API at `/api/assets/index`.
- Disabled project-relative image serving at `/api/assets/serve`.
- Disabled direct dynamic project asset serving at `/assets/[...path]`.
- Removed the public `/assets` internal asset browser page.
- Removed hardcoded Web3Forms access key from source.
- Moved analytics IDs behind environment variables.
- Added `.env.example` with placeholders only.
- Upgraded Next.js to 16.3.3 and aligned `eslint-config-next`.
- `npm audit --omit=dev` reports 0 vulnerabilities.
- Existing security headers include `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, and `Referrer-Policy`.

## External Domains Intentionally Used

- `api.web3forms.com` for lead forms.
- `www.googletagmanager.com` for GA4/GTM when configured.
- `www.clarity.ms` for Microsoft Clarity when configured.
- `wa.me` for WhatsApp CTAs.
- `www.google.com` for embedded maps.

## Remaining Risks

- Form submissions are client-to-Web3Forms. Web3Forms handles the server endpoint, but anti-spam settings should be configured in the Web3Forms account.
- The internal asset browser was removed. Rebuild it behind authentication if the team still needs it.
- Social profile ownership and Google Maps embeds need human verification.

## Final Security Checks

- Secret scan for known old IDs: clear.
- Mojibake scan in source: clear.
- Filesystem route exposure: disabled.
- Dependency audit: 0 production vulnerabilities.
