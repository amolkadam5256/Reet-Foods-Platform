# 14 — Security & SSL Audit

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026  

---

## 14.1 Security Health Summary

| Security Domain | Status | Rating |
|-----------------|--------|--------|
| SSL/TLS Encryption | Active | Pass |
| HTTPS Redirects | Configured | Pass |
| HTTP Security Headers | Partially Configured | Warning |
| Subresource Integrity (SRI) | Missing | Warning |
| Dependency Vulnerabilities | Low Risk | Pass |
| Sensitive File Exposure | Secured | Pass |

---

## 14.2 HTTP Security Headers Audit

Security headers protect users from Cross-Site Scripting (XSS), Clickjacking, and MIME-type sniffing.

| Header | Current Status | Recommended Value |
|--------|----------------|-------------------|
| `Strict-Transport-Security` (HSTS) | ⚠️ Missing / Unverified | `max-age=31536000; includeSubDomains; preload` |
| `X-Frame-Options` | ⚠️ Missing | `SAMEORIGIN` |
| `X-Content-Type-Options` | ⚠️ Missing | `nosniff` |
| `Referrer-Policy` | ⚠️ Missing | `strict-origin-when-cross-origin` |
| `Content-Security-Policy` (CSP) | ⚠️ Missing | Fine-tuned script/style/img directive |
| `Permissions-Policy` | ⚠️ Missing | `camera=(), microphone=(), geolocation=()` |

### Implementation in Next.js (`next.config.js` / `next.config.mjs`)

```js
// next.config.js
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

---

## 14.3 SSL / Canonical Domain Consistency

- **Canonical Origin:** `https://reetfoodsngiftings.com`
- **HTTP to HTTPS Redirect:** Working properly via edge router / host.
- **Non-WWW to WWW Redirection:** Configured to map seamlessly to canonical domain.
- **Mixed Content Warnings:** No active HTTP resource requests detected in rendered JSX/HTML templates.

---

## 14.4 Form Security & CSRF Protection

- Form submissions (e.g. Corporate Inquiry form) utilize API routes (`/api/contact` or third-party webhooks).
- **Recommendation:** Implement rate-limiting (e.g., via Upstash Redis or Vercel KV) and turnstile/reCAPTCHA token verification to prevent spam and DDoS on lead submission endpoints.
