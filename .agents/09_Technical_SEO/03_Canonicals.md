# Canonical Tag Strategy & Implementation

> **Site:** searchsarkarinaukri.com
> **Current Canonical Status:** ❌ Risky — no hardcoded canonical tags

---

## Current Implementation

### What We Found

The site **intentionally omits** server-side canonical tags. Here's the rationale from the source code:

```html
<!-- INTENTIONALLY no hardcoded <link rel="canonical"> here.
     Bots reach the route via the prerender backend (which composes the
     correct per-route canonical), and real users get one injected by
     react-helmet-async at component mount. Hardcoding one would
     silently fall through to the homepage canonical on any route that
     forgets to wrap in <Helmet> — better to omit than to mislabel. -->
```

### Risks of This Approach

| Risk | Description | Impact |
|------|-------------|--------|
| Prerender Failure | If prerender backend fails, bots see no canonical | Duplicate content, indexing issues |
| Helmet Missing | If a React route forgets `<Helmet>`, no canonical is injected | Canonical falls through to homepage |
| Query Params | `/jobs?category=mpsc` and `/jobs?district_slug=pune` have no canonical | Search engines may index duplicates |
| Crawlers Without JS | Some crawlers may not execute prerender correctly | Missed canonical signals |

---

## Canonical Issues by Page Type

### 1. Homepage (`/`)

| Property | Current | Recommended |
|----------|---------|-------------|
| Canonical | None (intentionally omitted) | `<link rel="canonical" href="https://www.searchsarkarinaukri.com/" />` |
| og:url | `https://www.searchsarkarinaukri.com/` | ✅ Correct |

**Status:** ⚠️ Should have hardcoded canonical

### 2. Jobs Listing (`/jobs`)

| Property | Current | Recommended |
|----------|---------|-------------|
| Canonical | None | `<link rel="canonical" href="https://www.searchsarkarinaukri.com/jobs" />` |
| og:url | `https://www.searchsarkarinaukri.com/` | ❌ Should be `/jobs` |

**Status:** ❌ Critical — og:url points to homepage, no canonical

### 3. Jobs by Category (`/jobs?category=mpsc`)

| Property | Current | Recommended |
|----------|---------|-------------|
| Canonical | None | `<link rel="canonical" href="https://www.searchsarkarinaukri.com/department/mpsc" />` |
| og:url | Unknown | Should be `/department/mpsc` |

**Status:** ❌ Critical — query param page needs canonical to clean URL

### 4. Jobs by District (`/jobs?district_slug=pune`)

| Property | Current | Recommended |
|----------|---------|-------------|
| Canonical | None | `<link rel="canonical" href="https://www.searchsarkarinaukri.com/district/pune" />` |
| og:url | Unknown | Should be `/district/pune` |

**Status:** ❌ Critical — query param page needs canonical to clean URL

### 5. Individual Job Posts (`/jobs/[slug]`)

| Property | Current | Recommended |
|----------|---------|-------------|
| Canonical | None (via Helmet) | `<link rel="canonical" href="https://www.searchsarkarinaukri.com/jobs/[slug]" />` |
| og:url | Unknown | Should match canonical |

**Status:** ⚠️ Works via Helmet, but no server-side fallback

---

## Canonical Tag Requirements

### Universal Rules

1. **Every page MUST have exactly one canonical tag**
2. **Canonical must be self-referencing** (point to the page's own URL)
3. **Canonical must use absolute URLs** with `https://`
4. **Canonical must use the preferred domain** (`www.searchsarkarinaukri.com`)
5. **Canonical must match og:url** on every page
6. **Canonical must be present in server-rendered HTML** (not just JS)

### Canonical Patterns by Page Type

| Page Type | Canonical Pattern |
|-----------|-------------------|
| Homepage | `https://www.searchsarkarinaukri.com/` |
| Hub Pages | `https://www.searchsarkarinaukri.com/[hub]` |
| Category Pages | `https://www.searchsarkarinaukri.com/department/[slug]` |
| State Pages | `https://www.searchsarkarinaukri.com/state/[slug]` |
| District Pages | `https://www.searchsarkarinaukri.com/district/[slug]` |
| Qualification Pages | `https://www.searchsarkarinaukri.com/qualification/[slug]` |
| Organization Pages | `https://www.searchsarkarinaukri.com/organization/[slug]` |
| Individual Content | `https://www.searchsarkarinaukri.com/[type]/[slug]` |
| Pagination | `https://www.searchsarkarinaukri.com/[type]/page/[n]` |

---

## Developer Implementation Guide

### 1. React Helmet Implementation

Install required packages:

```bash
npm install react-helmet-async
# or
yarn add react-helmet-async
```

### 2. Helmet Provider Setup

```jsx
// src/App.jsx
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* ... routes */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
```

### 3. Canonical Component

```jsx
// src/components/Canonical.jsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export function Canonical({ path, override }) {
  const location = useLocation();
  const canonicalUrl = override || `https://www.searchsarkarinaukri.com${path || location.pathname}`;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
}
```

### 4. Per-Route Canonical

```jsx
// src/pages/JobPost.jsx
import { Canonical } from '../components/Canonical';

function JobPost({ job }) {
  const slug = job.slug || job.id;
  return (
    <>
      <Canonical path={`/jobs/${slug}`} />
      {/* ... rest of component */}
    </>
  );
}
```

```jsx
// src/pages/DepartmentHub.jsx
function DepartmentHub({ department }) {
  return (
    <>
      <Canonical path={`/department/${department.slug}`} />
      {/* ... rest of component */}
    </>
  );
}
```

```jsx
// src/pages/JobsListing.jsx
function JobsListing() {
  const location = useLocation();
  
  // Canonical for the base /jobs page (no query params)
  return (
    <>
      <Canonical path="/jobs" />
      {/* ... rest of component */}
    </>
  );
}
```

### 5. Prerender Backend Canonical Injection

For the prerender service, ensure canonical is injected server-side:

```javascript
// prerender-server.js
function injectCanonical(html, url) {
  const canonical = url.startsWith('http') ? url : `https://www.searchsarkarinaukri.com${url}`;
  const canonicalTag = `<link rel="canonical" href="${canonical}" />`;
  
  // Inject into <head> if not already present
  if (!html.includes('rel="canonical"')) {
    return html.replace('</head>', `${canonicalTag}\n</head>`);
  }
  
  return html;
}
```

### 6. Query Param Canonical Resolution

```javascript
// src/utils/canonicalResolver.js
export function resolveCanonical(pathname, searchParams) {
  // Resolve /jobs?category=mpsc → /department/mpsc
  if (pathname === '/jobs' && searchParams.has('category')) {
    const category = searchParams.get('category');
    return `/department/${category}`;
  }
  
  // Resolve /jobs?district_slug=pune → /district/pune
  if (pathname === '/jobs' && searchParams.has('district_slug')) {
    const district = searchParams.get('district_slug');
    return `/district/${district}`;
  }
  
  // Resolve /jobs?search=query → /jobs (search results should canonical to /jobs)
  if (pathname === '/jobs' && searchParams.has('search')) {
    return '/jobs';
  }
  
  // Default: self-referencing
  return pathname;
}
```

### 7. Fallback for Non-Helmet Routes

```html
<!-- In the HTML template (public/index.html) -->
<link rel="canonical" href="https://www.searchsarkarinaukri.com/" data-dynamic="true" />

<script>
  // Client-side canonical update for SPA navigation
  window.addEventListener('load', function() {
    const dynamicCanonical = document.querySelector('link[rel="canonical"][data-dynamic="true"]');
    if (dynamicCanonical) {
      dynamicCanonical.setAttribute('href', window.location.href);
    }
  });
</script>
```

---

## Testing Checklist

### Manual Verification

- [ ] Every page returns exactly one `<link rel="canonical">` tag
- [ ] Canonical URL matches the page's own URL (self-referencing)
- [ ] Canonical URL is absolute (includes `https://`)
- [ ] Canonical URL uses `www.searchsarkarinaukri.com` (not non-www)
- [ ] og:url matches canonical on every page
- [ ] Query param pages canonicalize to clean URLs
- [ ] Pagination pages canonicalize correctly
- [ ] Prerender output includes canonical tag (check with `?_escaped_fragment_`)

### Automated Testing

```bash
# Check canonical on homepage
curl -s https://www.searchsarkarinaukri.com/ | grep -i "rel=\"canonical\""

# Check canonical on jobs page
curl -s https://www.searchsarkarinaukri.com/jobs | grep -i "rel=\"canonical\""

# Check canonical on category page
curl -s "https://www.searchsarkarinaukri.com/jobs?category=mpsc" | grep -i "rel=\"canonical\""

# Verify og:url matches canonical
curl -s https://www.searchsarkarinaukri.com/jobs | grep -i "og:url"
```

### Prerender Testing

```bash
# Test with Googlebot user agent
curl -s -H "User-Agent: Googlebot" https://www.searchsarkarinaukri.com/jobs | grep -i "rel=\"canonical\""

# Test with escaped fragment
curl -s "https://www.searchsarkarinaukri.com/jobs?_escaped_fragment_=" | grep -i "rel=\"canonical\""
```

---

## Priority Action Items

| # | Issue | Fix | Priority |
|---|-------|-----|----------|
| 1 | No canonical on homepage | Add `<link rel="canonical" href="https://www.searchsarkarinaukri.com/" />` | P0 |
| 2 | No canonical on /jobs | Add self-referencing canonical | P0 |
| 3 | og:url points to homepage on all pages | Update to match current page URL | P0 |
| 4 | Query param pages have no canonical | Implement canonical resolution | P0 |
| 5 | No server-side fallback | Add to prerender backend | P1 |
| 6 | No automated canonical testing | Add CI/CD check | P1 |

---

## Related Resources

- [Google Canonical Tags Guide](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Moz Canonical Tag Guide](https://moz.com/learn/seo/canonical-tag)
- [Google Search Console Coverage Report](https://search.google.com/search-console/coverage)

---

*Document Version: 1.0 | Updated: July 2026*