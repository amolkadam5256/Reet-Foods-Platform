# 05 — Server Performance, Security & Media Optimization

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Hardening server security, setting cache headers, enabling Brotli compression, and standardizing WebP/AVIF media assets.  

---

## 1. HTTP Security Response Headers (`next.config.js`)

Add enterprise security headers to protect users and comply with Google Security standards:

```js
// next.config.js
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { 
    key: 'Content-Security-Policy', 
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://clarity.ms;" 
  }
];

module.exports = {
  compress: true, // Enables Gzip / Brotli compression
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ];
  },
};
```

---

## 2. Server & CDN Caching Strategy

- **CDN Provider:** Vercel Edge Network / Cloudflare CDN.
- **Protocol Support:** Enforce **HTTP/2** and **HTTP/3** multiplexed connections over TLS 1.3.
- **Static Asset Caching:** `Cache-Control: public, max-age=31536000, immutable` for `/images/`, `/fonts/`, and `/_next/static/`.

---

## 3. Media & Image Optimization Standards

1. **Formats:** Serve images in **WebP** or **AVIF** formats.
2. **Next.js Image Configuration (`next.config.js`):**
```js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```
