# 01 — Crawlability & Indexability Technical Matrix

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Eliminate crawl traps, optimize crawl budget, and ensure 100% indexability for core commercial routes.  

---

## 1. Crawlability & Crawl Budget Analysis

### Bot Access Evaluation:
- **Googlebot (Desktop & Smartphone):** Full access to static HTML assets. Needs protection against faceted filter URL traps.
- **Bingbot / YandexBot:** Full access verified.
- **AI Search Crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`):** Currently unrestricted. Must be explicitly permitted in `robots.txt` to capture AI Search citations.

### Crawl Waste & Trap Elimination Strategy:
1. **Filter Parameter URLs:** Internal search queries, sorting parameters (`?sort=price_asc`), and session IDs (`?sid=...`) must be blocked in `robots.txt` or assigned `noindex, follow` tags.
2. **Infinite Scroll Pagination:** Replace client-side dynamic infinite scroll with SEO-friendly numbered pagination (`?page=2`) featuring `rel="canonical"` self-referencing links.
3. **Internal 404 & Redirect Loops:** Audit internal links to ensure zero 404 links or 301 redirect chains exist in navigation or footer menus.

---

## 2. Indexability Matrix for Core Routes

| Route Pattern | Target Status | Meta Robots Tag | Canonical Target | Sitemap Included? | Priority |
|---------------|---------------|-----------------|------------------|-------------------|----------|
| `/` | Indexable | `index, follow, max-image-preview:large` | `https://reetfoodsngiftings.com/` | Yes | 1.0 |
| `/corporate-gifting` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/corporate-gifting` | Yes | 0.9 |
| `/corporate-gifting-pune` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/corporate-gifting-pune` | Yes | 0.8 |
| `/products` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/products` | Yes | 0.9 |
| `/products/[slug]` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/products/[slug]` | Yes | 0.8 |
| `/blog` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/blog` | Yes | 0.8 |
| `/blog/[slug]` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/blog/[slug]` | Yes | 0.7 |
| `/about` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/about` | Yes | 0.6 |
| `/contact` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/contact` | Yes | 0.6 |
| `/privacy-policy` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/privacy-policy` | Yes | 0.3 |
| `/terms` | Indexable | `index, follow` | `https://reetfoodsngiftings.com/terms` | Yes | 0.3 |
| `/api/*` | Noindex | `noindex, nofollow` | N/A | No | N/A |
| `/?*` (Tracking URLs) | Indexable (Clean Canonical) | `index, follow` | Stripped Base Canonical | No | N/A |

---

## 3. Handling Soft & Hard 404 Errors

- **Custom 404 Page (`app/not-found.tsx`):** Must return explicit **HTTP 404 Status Code** (never 200 OK soft 404).
- **Navigation Recovery:** Include search bar and quick links to `/corporate-gifting` and `/products` on the 404 error page.

```tsx
// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 — Page Not Found</h1>
      <p className="text-gray-600 mb-6">The gift hamper or page you are looking for has moved or no longer exists.</p>
      <div className="flex gap-4">
        <Link href="/" className="bg-amber-600 text-white px-6 py-2.5 rounded-lg font-medium">Return Home</Link>
        <Link href="/corporate-gifting" className="bg-gray-100 text-gray-800 px-6 py-2.5 rounded-lg font-medium">Corporate Gifting</Link>
      </div>
    </main>
  );
}
```
