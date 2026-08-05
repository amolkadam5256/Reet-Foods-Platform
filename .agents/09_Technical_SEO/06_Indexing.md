# Indexing Audit & Optimization

> **Site:** searchsarkarinaukri.com
> **Current Status:** ⚠️ Query param pages risk duplicate content indexing

---

## Indexing Issues Found

### 1. Duplicate Content from Query Parameters

| Query Param URL | Canonical Target | Current Status |
|-----------------|------------------|----------------|
| `/jobs?category=mpsc` | `/department/mpsc` | ❌ No canonical |
| `/jobs?category=upsc` | `/department/upsc` | ❌ No canonical |
| `/jobs?district_slug=pune` | `/district/pune` | ❌ No canonical |
| `/jobs?search=anything` | `/jobs` | ❌ No canonical |
| `/jobs?page=2` | `/jobs/page/2` | ❌ No canonical |

**Risk:** Google may index dozens of duplicate `/jobs?category=*` pages instead of one clean `/department/mpsc` page.

### 2. Homepage og:url Issue

| Page | og:url | Correct? |
|------|--------|----------|
| `/` (homepage) | `https://www.searchsarkarinaukri.com/` | ✅ |
| `/jobs` | `https://www.searchsarkarinaukri.com/` | ❌ Should be `/jobs` |
| `/admit-cards` | Unknown | ❌ Likely wrong |
| `/results` | Unknown | ❌ Likely wrong |

**Impact:** Social shares and rich results may point to wrong URLs.

### 3. Noindex Tags

| Page Type | Current noindex | Recommendation |
|-----------|-----------------|----------------|
| `/admin/*` | robots.txt blocked | ✅ OK |
| `/dashboard` | robots.txt blocked | ✅ OK |
| `/login` | robots.txt blocked | ✅ OK |
| `/register` | robots.txt blocked | ✅ OK |
| `/jobs?search=*` | Not blocked | ❌ Add noindex |
| `/jobs?page=*` | Not blocked | ❌ Add noindex or canonical |
| `/saved-jobs` | robots.txt blocked | ✅ OK |
| `/profile-setup` | robots.txt blocked | ✅ OK |

---

## Indexing Strategy

### Pages to INDEX (High Priority)

| Page Type | URL Pattern | Priority | Change Frequency |
|-----------|-------------|----------|------------------|
| Homepage | `/` | 1.0 | Daily |
| Jobs Hub | `/jobs` | 0.9 | Daily |
| Department Hubs | `/department/[slug]` | 0.9 | Daily |
| State Hubs | `/state/[slug]` | 0.8 | Weekly |
| District Hubs | `/district/[slug]` | 0.8 | Weekly |
| Qualification Hubs | `/qualification/[slug]` | 0.7 | Weekly |
| Individual Jobs | `/jobs/[slug]` | 0.8 | Weekly |
| Admit Cards Hub | `/admit-cards` | 0.8 | Daily |
| Individual Admit Cards | `/admit-cards/[slug]` | 0.7 | Weekly |
| Results Hub | `/results` | 0.8 | Daily |
| Individual Results | `/results/[slug]` | 0.7 | Weekly |
| Current Affairs | `/current-affairs` | 0.7 | Daily |
| Study Material | `/study-material` | 0.7 | Weekly |
| Exam Calendar | `/exam-calendar` | 0.6 | Monthly |
| Eligibility Checker | `/eligibility-checker` | 0.5 | Monthly |

### Pages to NOINDEX (Low Priority)

| Page Type | URL Pattern | Reason |
|-----------|-------------|--------|
| Search Results | `/jobs?search=*` | Low value, infinite URLs |
| Pagination | `/jobs?page=*` | Use rel="prev/next" instead |
| Login/Register | `/login`, `/register` | User-specific pages |
| Admin/Dashboard | `/admin/*`, `/dashboard` | Private areas |
| Profile Setup | `/profile-setup` | User-specific |
| Saved Jobs | `/saved-jobs` | User-specific |
| Preferences | `/preferences` | User-specific |
| API endpoints | `/api/*` | Not for indexing |

### Pages to NOINDEX, FOLLOW

| Page Type | URL Pattern | Reason |
|-----------|-------------|--------|
| Old job posts (> 90 days) | `/jobs/[old-slug]` | Keep link juice, remove from index |
| Expired admit cards | `/admit-cards/[old]` | Keep link juice |
| Expired results | `/results/[old]` | Keep link juice |

---

## Developer Implementation Guide

### 1. Meta Robots Tag Injection

```jsx
// src/components/MetaRobots.jsx
import { Helmet } from 'react-helmet-async';

export function MetaRobots({ 
  index = true, 
  follow = true, 
  noarchive = false,
  maxSnippet = -1,
  maxImagePreview = 'large'
}) {
  const content = [
    index ? 'index' : 'noindex',
    follow ? 'follow' : 'nofollow',
    `max-snippet:${maxSnippet}`,
    `max-image-preview:${maxImagePreview}`
  ].join(', ');
  
  return (
    <Helmet>
      <meta name="robots" content={content} />
    </Helmet>
  );
}

// Usage in components
// Search results page:
<MetaRobots index={false} follow={true} />

// Individual job post:
<MetaRobots index={true} follow={true} />
```

### 2. Conditional Noindex for Old Content

```jsx
// src/pages/JobPost.jsx
function JobPost({ job }) {
  const isExpired = new Date(job.applicationDeadline) < new Date();
  const isOld = new Date(job.publishedDate) < new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
  
  return (
    <>
      <MetaRobots 
        index={!isOld} 
        follow={true}
      />
      {/* ... rest of component */}
    </>
  );
}
```

### 3. Server-Side Meta Robots

For prerender backend:

```javascript
// prerender-server.js
function getRobotsMeta(req, url) {
  // Noindex for search results
  if (url.includes('?search=')) {
    return 'noindex, follow';
  }
  
  // Noindex for pagination
  if (url.includes('?page=')) {
    return 'noindex, follow';
  }
  
  // Noindex for admin/auth pages
  const noindexPath = ['/admin', '/dashboard', '/login', '/register', 
                        '/saved-jobs', '/profile-setup', '/preferences'];
  if (noindexPath.some(path => url.startsWith(path))) {
    return 'noindex, nofollow';
  }
  
  // Default: index, follow
  return 'index, follow, max-snippet:-1, max-image-preview:large';
}

app.get('*', (req, res) => {
  const robotsMeta = getRobotsMeta(req, req.url);
  // Inject into HTML template
  const html = template.replace('%%ROBOTS%%', robotsMeta);
  res.send(html);
});
```

### 4. X-Robots-Tag Header

For API endpoints and non-HTML responses:

```javascript
// server.js
app.use('/api/', (req, res, next) => {
  res.set('X-Robots-Tag', 'noindex, nofollow');
  next();
});

// For old archived content
app.get('/jobs/:slug', async (req, res) => {
  const job = await getJob(req.params.slug);
  
  if (job.isArchived) {
    res.set('X-Robots-Tag', 'noindex, follow');
  }
  
  // ... render
});
```

### 5. IndexNow API Integration

```javascript
// Notify Bing and Google of content changes
async function notifyIndexNow(urls) {
  const apiKey = process.env.INDEXNOW_API_KEY;
  const host = 'www.searchsarkarinaukri.com';
  
  // Bing IndexNow
  await fetch(`https://ssl.bing.com/indexnow/${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ host, urlList: urls })
  });
  
  // Google IndexNow (if available)
  // Note: Google's IndexNow is limited; use Indexing API for job posts
}

// Google Indexing API for job posts
async function notifyGoogleIndexing(url, jobData) {
  const accessToken = await getGoogleServiceAccountToken();
  
  await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: `https://www.searchsarkarinaukri.com/jobs/${jobData.slug}`,
      type: 'URL_UPDATED'
    })
  });
}
```

---

## Indexing Monitoring Checklist

### Google Search Console

1. **Coverage Report**
   - [ ] Check for "Discovered - currently not indexed" errors
   - [ ] Check for "Crawled - currently not indexed" errors
   - [ ] Fix any "Excluded" pages that should be indexed
   - [ ] Review "Submitted URL not found (404)" errors

2. **URL Inspection Tool**
   - [ ] Test canonical URLs return correct status
   - [ ] Verify noindex tags are respected
   - [ ] Check for "User-declared canonical" vs "Google-selected canonical"

3. **Sitemaps Report**
   - [ ] All sitemaps show 0 errors
   - [ ] All URLs in sitemaps are indexed
   - [ ] No query param URLs in sitemaps

### Manual Testing Commands

```bash
# Check robots meta tag
curl -s https://www.searchsarkarinaukri.com/jobs | grep -i "robots"

# Check X-Robots-Tag header
curl -sI https://www.searchsarkarinaukri.com/api/stats | grep -i "x-robots"

# Check noindex on search page
curl -s "https://www.searchsarkarinaukri.com/jobs?search=test" | grep -i "noindex"

# Check og:url
curl -s https://www.searchsarkarinaukri.com/jobs | grep -i "og:url"

# Verify canonical
curl -s https://www.searchsarkarinaukri.com/jobs | grep -i "rel=\"canonical\""
```

### Prerender Testing

```bash
# Test with Googlebot
curl -s -H "User-Agent: Googlebot" https://www.searchsarkarinaukri.com/jobs | \
  grep -i "robots\|canonical\|og:url"

# Test noindex is present
curl -s -H "User-Agent: Googlebot" "https://www.searchsarkarinaukri.com/jobs?search=test" | \
  grep -i "noindex"
```

---

## Priority Action Items

| # | Issue | Fix | Priority | Effort |
|---|-------|-----|----------|--------|
| 1 | No canonical on any page | Add Helmet + server-side fallback | P0 | 2h |
| 2 | og:url points to homepage | Update to current page URL | P0 | 30m |
| 3 | Query param pages not blocked | Add robots.txt rules | P0 | 15m |
| 4 | No noindex on search results | Add conditional MetaRobots | P1 | 1h |
| 5 | No X-Robots-Tag on API | Add server header | P1 | 30m |
| 6 | No IndexNow integration | Implement API notifications | P2 | 3h |
| 7 | Old content not noindex'd | Add age-based logic | P2 | 1h |

---

## Expected Impact

| Metric | Before | After (Target) |
|--------|--------|----------------|
| Indexed pages (clean URLs) | ~500 | 2000+ |
| Duplicate content warnings | High | 0 |
| Coverage errors | High | < 5 |
| Click-through rate from SERPs | Low | Improved |
| Indexing speed for new jobs | 24-48h | < 1h |

---

## Related Resources

- [Google Indexing Guide](https://developers.google.com/search/docs/crawling-indexing/indexing)
- [Meta Robots Tag Guide](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tags)
- [Google Indexing API](https://developers.google.com/search/apis/indexing-api)
- [IndexNow Protocol](https://www.indexnow.org/)

---

*Document Version: 1.0 | Updated: July 2026*