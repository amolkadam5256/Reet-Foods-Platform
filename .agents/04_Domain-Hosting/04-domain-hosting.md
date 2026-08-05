# 04 — Domain, Hosting & Infrastructure

## 4.1 Domain & DNS Management

| Setting | Value / Protocol | Status |
|---------|------------------|--------|
| **Domain Name** | `searchsarkarinaukri.com` | Active |
| **Registrar** | Cloudflare Registrar / Namecheap | Auto-renew ENABLED |
| **WHOIS Privacy** | Full Privacy Protection | ACTIVE |
| **Domain Lock** | Registrar Transfer Lock | ACTIVE |
| **Primary Nameservers** | `ns1.cloudflare.com`, `ns2.cloudflare.com` | Active |

### Master DNS Configuration Record

| Type | Name | Target / Value | TTL | Proxy Status | Purpose |
|------|------|----------------|-----|--------------|---------|
| **A** | `@` | `192.0.2.1` *(Origin Server IP)* | Auto | Proxied (Cloudflare) | Root domain routing |
| **CNAME** | `www` | `searchsarkarinaukri.com` | Auto | Proxied (Cloudflare) | www hostname canonical routing |
| **TXT** | `@` | `google-site-verification=...` | 3600 | DNS Only | Google Search Console verification |
| **TXT** | `@` | `v=spf1 include:_spf.google.com ~all` | 3600 | DNS Only | SPF Email Authentication |
| **TXT** | `google._domainkey` | `v=DKIM1; k=rsa; p=...` | 3600 | DNS Only | DKIM Email Signature |
| **TXT** | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:dmarc@...` | 3600 | DNS Only | DMARC Enforcement |
| **MX** | `@` | `ASPMX.L.GOOGLE.COM` (Priority 1) | 3600 | DNS Only | Google Workspace Email |

---

## 4.2 Hosting Architecture & CDN Caching Rules

- **Hosting Environment:** Serverless / Edge SSR Deployment (Mumbai PoP primary location, TTFB target < 200ms).
- **CDN Edge Network:** Cloudflare Enterprise CDN.
- **Protocols:** HTTP/2 and HTTP/3 (QUIC) enabled sitewide.
- **Edge Caching Rules:**
  - HTML Page Caching: 5 minutes edge cache TTL (stale-while-revalidate).
  - Static Assets (CSS, JS, Fonts): 1-year browser cache TTL (`Cache-Control: public, max-age=31536000, immutable`).
  - Dynamic API Endpoints: `Cache-Control: no-store, private`.
- **Text Compression:** Brotli compression active (Gzip fallback enabled).

---

## 4.3 Security Headers & SSL Protocol

- **SSL Certificate:** Let's Encrypt / Cloudflare SSL (TLS 1.3 enforced, 256-bit encryption).
- **HTTPS Enforcement:** Strict 301 redirect from all HTTP URLs to HTTPS.
- **HSTS Header:** `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` (Submitted to hstspreload.org).

### Production Security Headers Code Block

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com;
```

---

## 4.4 Backup, Disaster Recovery & Uptime SLA

| Parameter | Specification | Target SLA |
|-----------|---------------|------------|
| **Database Snapshots** | Automated every 6 hours | 30-day multi-region retention |
| **Code Base** | Git repository version control | Instantaneous deployment rollback |
| **RTO (Recovery Time Objective)** | Time required to restore full site | < 15 minutes |
| **RPO (Recovery Point Objective)** | Max acceptable data loss period | < 1 hour |
| **Uptime Target** | Continuous availability SLA | 99.9% uptime (< 8.7 hours downtime/year) |
| **TTFB Target** | Time-to-First-Byte from India | < 200ms |
