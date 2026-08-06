# 03 — Canonicalization & Redirect Strategy Blueprint

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Prevent duplicate content indexing, enforce canonical origin consistency, and map 301 redirects.  

---

## 1. Canonicalization Standard & Edge Middleware

### Core Rules:
1. **Canonical Origin:** `https://reetfoodsngiftings.com` (HTTPS, Non-WWW, No Trailing Slash).
2. **Self-Referential Canonicals:** Every indexable route must render an explicit absolute `<link rel="canonical" href="...">` tag.
3. **Parameter Stripping:** URL parameters (`?utm_source=...`, `?ref=...`) must resolve canonically to the base URL without query strings.

---

## 2. Redirect Rules & Edge Configuration

| Trigger Condition | Incoming Request | Target Redirect (301 Permanent) | Execution Level |
|-------------------|------------------|---------------------------------|-----------------|
| HTTP Request | `http://reetfoodsngiftings.com/path` | `https://reetfoodsngiftings.com/path` | Edge / Host Level |
| WWW Request | `https://www.reetfoodsngiftings.com/path` | `https://reetfoodsngiftings.com/path` | Edge / Host Level |
| Trailing Slash | `https://reetfoodsngiftings.com/corporate-gifting/` | `https://reetfoodsngiftings.com/corporate-gifting` | Next.js Engine |
| Uppercase URL | `https://reetfoodsngiftings.com/Corporate-Gifting` | `https://reetfoodsngiftings.com/corporate-gifting` | Next.js Middleware |
| Obsolete URL | `/corporate-gifts.html` | `/corporate-gifting` | Next.js Redirects |

---

## 3. Next.js Redirect Implementation (`next.config.js`)

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/corporate-gifts.html',
        destination: '/corporate-gifting',
        permanent: true,
      },
      {
        source: '/dry-fruits.html',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```
