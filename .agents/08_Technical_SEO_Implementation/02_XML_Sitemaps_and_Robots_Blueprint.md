# 02 — Enterprise XML Sitemap & Robots.txt Blueprint

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Automate dynamic sitemap generation for dynamic routes and establish clear crawler access rules in `robots.txt`.  

---

## 1. Dynamic XML Sitemap Implementation (`app/sitemap.ts`)

Next.js App Router allows dynamic sitemap generation supporting static pages, e-commerce products, and blog posts.

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://reetfoodsngiftings.com';

  // Static routes definition
  const staticRoutes = [
    '',
    '/corporate-gifting',
    '/corporate-gifting-pune',
    '/corporate-gifting-hinjewadi',
    '/corporate-gifting-mumbai',
    '/products',
    '/products/cashews',
    '/products/almonds',
    '/products/pistachios',
    '/products/walnuts',
    '/products/dates',
    '/products/raisins',
    '/products/chocolates',
    '/wedding-return-gifts',
    '/employee-onboarding-kits',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/corporate-gifting' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route.startsWith('/corporate') || route.startsWith('/products') ? 0.8 : 0.5,
  }));

  // Dynamic Blog & Product fetches can be appended here
  
  return staticRoutes;
}
```

---

## 2. Optimized `robots.txt` Specification (`public/robots.txt` or `app/robots.ts`)

```txt
# ==============================================================================
# Reet Foods & Gifting — Production Robots Directives
# Website: https://reetfoodsngiftings.com
# ==============================================================================

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /*?*sort=
Disallow: /*?*filter=
Disallow: /*?*search=
Disallow: /*?*sessionid=

# ------------------------------------------------------------------------------
# Explicit Access for AI Search Engine Crawlers & RAG Models
# ------------------------------------------------------------------------------
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

# ------------------------------------------------------------------------------
# XML Sitemap Declaration
# ------------------------------------------------------------------------------
Sitemap: https://reetfoodsngiftings.com/sitemap.xml
```
