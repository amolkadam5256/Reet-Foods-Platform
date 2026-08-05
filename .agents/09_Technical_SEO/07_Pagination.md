# Pagination Strategy & Implementation

> **Site:** searchsarkarinaukri.com
> **Current Status:** ⚠️ Pagination is JS-rendered and lacks proper canonical/noindex strategy

---

## Current Pagination Implementation

### What We Found

1. **Pagination is JavaScript-Rendered**
   - Appears on `/jobs`, `/admit-cards`, `/results`, `/study-material` pages
   - Uses various URL patterns:
     - `/jobs?page=1` → `/jobs?page=2`
     - `/jobs?search=xxx&page=2`
     - `/results?page=2`

2. **Missing Canonical Tags**
   - No `<link rel="canonical">` for paginated URLs
   - Google may index pagination pages separately

3. **No Rel="next/prev" Implementation**
   - Missing proper pagination markup
   - Risk of indexing duplicate content

4. **No Noindex for Older Pages**
   - No `noindex, follow` on pagination > 1

---

## Pagination Best Practices

### 1. Canonical Configuration

| Paginated URL | Canonical Target | Implementation |
|---------------|------------------|----------------|
| `/jobs?page=1` | `/jobs` | Use canonical on page 1 only |
| `/jobs?page=2` | `/jobs?page=1` | No canonical, but add `rel="prev"` |
| `/jobs?page=3` | `/jobs?page=2` | Add `rel="prev"` pointing to previous page |

**HTML Implementation:**
```html
<link rel="canonical" href="https://www.searchsarkarinaukri.com/jobs?page=1">
<link rel="prev" href="https://www.searchsarkarinaukri.com/jobs?page=2">
<link rel="next" href="https://www.searchsarkarinaukri.com/jobs?page=4">
```

### 2. Indexing Strategy

| Page | Index? | Noindex? | Robots Meta | rel="prev/next" |
|------|--------|----------|-------------|----------------|
| Page 1 | ✅ Yes | ❌ No | Yes (index) | Yes |
| Page 2+ | ❌ No | ✅ Yes | `noindex, follow` | Yes (except last) |

### 3. Implementation Types

#### A. React SPA Implementation

```jsx
// src/components/Pagination.jsx
import { MetaRobots } from './MetaRobots';

export function Pagination({ currentPage = 1, totalPages, urlPath }) {
  return (
    <div className="pagination">
      {new Array(totalPages).fill(0).map((_, i) => {
        const pageNum = i + 1;
        const isCurrent = pageNum === currentPage;
        const shouldNoindex = pageNum > 1; // Only page 1 should be index
        const relClass = {
          curr: isCurrent,
          prev: pageNum > 1 && pageNum < totalPages && pageNum === currentPage - 1,
          next: pageNum > 1 && pageNum < totalPages && pageNum === currentPage + 1,
        };

        // Add rel="prev/next" to previous/next links
        const prevHref = pageNum > 1 ? `${urlPath}?page=${pageNum - 1}` : null;
        const nextHref = pageNum < totalPages ? `${urlPath}?page=${pageNum + 1}` : null;

        return (
          <div key={i} className="pagination-item">
            {prevHref && (
              <a href={prevHref} rel={
                pageNum === 2 ? 'prev' : ''
              }>‹ Prev</a>
            )}
            {!isCurrent && (
              <a href={prevHref}>‹ Prev</a>
            )}
            {isCurrent && '‹ Prev'}
            [{i + 1}]
            {nextHref && (
              <a href={nextHref} rel={pageNum === totalPages - 1 ? 'next' : 'next'}>Next ›</a>
            )}
            {pageNum < totalPages && (!isCurrent && (
              <a href={nextHref}>Next ›</a>
            )}
            {pageNum < totalPages && (isCurrent && (
              'Next ›'
            ))}
            {isCurrent && <span>Current page {i + 1}</span>}
          </div>
        );
      })}

      <MetaRobots
        index={pageNum === 1} // Only page 1 should be indexed
        follow={true}
        noarchive={true}
        maxSnippet={-1}
        maxImagePreview="large"
      />
    </div>
  );
}
```

### 2. Server-Side Pagination URLs

For prerender backend:

```javascript
// When generating paginated URLs
functioneneratePaginatedURL(path, page) {
  if (page === 1) {
    return `/${path}`; // No /page/1 in URL
  }
  return `/${path}/page/${page}`;
}

// For canonical injection:
function getCanonicalURL(reqUrl, reqQuery) {
  const url = new URL(`https://www.searchsarkarinaukri.com${reqUrl}`);
  
  // If query param is page=1, use clean URL
  if (reqQuery.page === '1') {
    return url.href.replace(/(\/page\/1\?|(\?page=1))/i, '');
  }
  
  // Otherwise keep the page URL but add rel="prev" logic
  return url.href;
}
```

---

## Canonical & Rel Implementation Checklist

### ✅ Must-Have Checklist

- [ ] Every paginated page has `<link rel="canonical">` pointing to the appropriate URL
- [ ] Page 1 canonical points to base URL (no query params)
- [ ] Page 2+ canonical points to page 1 (or appropriate fallback)
- [ ] Previous/Next links include `rel="prev"` and `rel="next"`
- [ ] Noindex meta tag on page 2+ (`<MetaRobots index={false} />`)
- [ ] OG tags use canonical URL
- [ ] JSON-LD schema includes pagination context

### 🟡 Optional Enhancements

- [ ] Add `rel="last"` for the final page
- [ ] Add `rel="first"` for the first page
- [ ] Dynamic snippet/preview limits per page
- [ ] Structured data for pagination

---

## Testing Commands

```bash
# Verify canonical tags on paginated URLs
curl -s https://www.searchsarkarinaukri.com/jobs\?page\=2 | grep -i "rel.*canonical"

# Should return something like:
# <link rel="canonical" href="https://www.searchsarkarinaukri.com/jobs" />

# Verify prev/next relationships
curl -s https://www.searchsarkarinaukri.com/jobs\?page\=3 | grep -i "rel.*next"
curl -s https://www.searchsarkarinaukri.com/jobs\?page\=3 | grep -i "rel.*prev"

# Check meta robots
curl -s https://www.searchsarkarinaukri.com/jobs\?page\=3 | grep -i "robots"

# Should return:
# <meta name="robots" content="noindex, follow, max-snippet:-1, max-image-preview:large">

# Verify og:url matches canonical
curl -s https://www.searchsarkarinaukri.com/jobs\?page\=3 | grep -i "og:url"
```

### Common Errors to Watch For

| Error | How to Fix |
|-------|------------|
| Missing canonical tag on page | Add `<link rel="canonical" href="https://www.searchsarkarinaukri.com/jobs">` |
| Canonical on page 2 points to itself | Change canonical to point to `/jobs` page 1 |
| No rel="next/prev" | Add to pagination links |
| Wrong noindex tag | Only page 1 should have `index`, others `noindex, follow` |
| og:url not matching canonical | Update all og:url to match canonical |

---

## Priority Action Items

| # | Action | Implementation |
|---|--------|----------------|
| 1 | Add canonical tags to all paginated pages | Update React components |
| 2 | Add `rel="prev"` and `rel="next"` to pagination links | Manual edit or automate |
| 3 | Add meta robots noindex for page 2+ | Update MetaRobots component |
| 4 | Implement rel="last" for final paginated page | Edge case handling |
| 5 | Verify OG tags use canonical URL | Check/fix og:url |
| 6 | Validate XML sitemap doesn't include paginated URLs | Remove from sitemaps |
| 7 | Add structured data for pagination | JSON-LD schema |

---

## Expected Impact

| Metric | Before | After (Target) |
|--------|--------|----------------|
| Pagination indexed as duplicates | High | 0 |
| Crawl efficiency on pagination | Wasted 15% budget | Fully optimized |
| Indexing of last page | Potentially incorrectly | Correctly noindexed |
| Search engine understanding | Limited | Full context via rel attributes |

---

## Related Resources

- [Google Pagination Guide](https://developers.google.com/search/docs/advanced/pagination)
- [Moz Pagination Guide](https://moz.com/learn/seo/pagination)
- [Screaming Frog Pagination Testing](https://www.screamingfrog.co.uk/seo-spider/)
- [Google Search Console Coverage Report](https://search.google.com/search-console/coverage)

---

*Document Version: 1.0 | Updated: July 2026*