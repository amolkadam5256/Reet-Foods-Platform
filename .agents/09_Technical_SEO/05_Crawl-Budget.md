# Crawl Budget Optimization

> **Site:** searchsarkarinaukri.com
> **Current Status:** ⚠️ Inefficient — significant crawl budget wasted on query param URLs

---

## Crawl Budget Fundamentals

Crawl budget = the number of pages Googlebot will crawl on your site within a given timeframe. It's determined by:
1. **Crawl Rate Limit** - How fast Googlebot can crawl without overloading server
2. **Crawl Demand** - How much Google wants to crawl based on popularity and staleness

### Current Waste Analysis

| Waste Source | Estimated URLs | % of Crawl Budget | Priority |
|--------------|----------------|-------------------|----------|
| `/jobs?category=*` (12 categories) | 12+ | ~15% | P0 |
| `/jobs?district_slug=*` (36 districts) | 36+ | ~20% | P0 |
| `/jobs?category=*&district_slug=*` (combinations) | 400+ | ~30% | P0 |
| `/jobs?search=*` (unbounded) | Unlimited | ~10% | P1 |
| `/jobs?page=*` (pagination) | 50+ | ~5% | P1 |
| `sitemap-cross-filter.xml` | Potentially millions | ~15% | P0 🚨 |

**Total estimated waste: 80%+ of crawl budget**

---

## Optimization Strategy

### 1. Eliminate Query Param Crawling (P0)

**Immediate Actions:**
- [ ] Remove query param URLs from ALL sitemaps
- [ ] Add `Disallow: /*?*` to robots.txt for query param patterns
- [ ] Implement 301 redirects from query params to clean URLs
- [ ] Add `rel="canonical"` pointing to clean URLs

**Robots.txt Addition:**
```robots
# Block all query parameter URLs
User-agent: *
Disallow: /*?category=
Disallow: /*?district_slug=
Disallow: /*?search=
Disallow: /*?page=
Disallow: /*?*
Disallow: /*&
```

### 2. Fix Sitemap Structure (P0)

**Current Problem:** `sitemap-cross-filter.xml` creates combinatorial explosion.

**Solution:**
- Remove `sitemap-cross-filter.xml` entirely
- Only include canonical clean URLs in sitemaps
- Each sitemap < 50,000 URLs
- Use sitemap index with lastmod dates

### 3. Optimize Crawl Priority (P1)

**High Priority Pages (crawl daily):**
- Homepage (`/`)
- Jobs hub (`/jobs`)
- Department hubs (`/department/[slug]`)
- District hubs (`/district/[slug]`)
- State hubs (`/state/[slug]`)
- New job posts (last 7 days)

**Medium Priority (crawl weekly):**
- Individual job posts (> 7 days old)
- Admit cards hub & posts
- Results hub & posts
- Current affairs
- Study material

**Low Priority (crawl monthly):**
- Static pages (about, contact, privacy)
- Old job posts (> 90 days)
- Archived content

### 4. Server-Side Crawl Optimization (P1)

**Response Time Targets:**
| Metric | Target | Current Risk |
|--------|--------|--------------|
| TTFB (Time to First Byte) | < 200ms | Prerender may add latency |
| Full HTML Response | < 500ms | React hydration overhead |
| Server Error Rate | < 0.1% | Monitor for 5xx |

**Prerender Optimization:**
```javascript
// prerender-cache.js
const cache = new Map();
const CACHE_TTL = 3600000; // 1 hour

async function getPrerendered(url) {
  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.html;
  }
  
  // Fetch from prerender service
  const html = await fetchPrerendered(url);
  cache.set(url, { html, timestamp: Date.now() });
  return html;
}
```

### 5. Conditional GET Support (P1)

Implement `ETag` and `Last-Modified` headers for efficient re-crawling:

```javascript
// server.js
app.get('/jobs/:slug', (req, res) => {
  const job = getJob(req.params.slug);
  
  // ETag based on content hash
  const etag = crypto.createHash('md5')
    .update(JSON.stringify(job))
    .digest('hex');
  
  res.set('ETag', `"${etag}"`);
  res.set('Last-Modified', job.updatedAt.toUTCString());
  
  // Check If-None-Match / If-Modified-Since
  if (req.headers['if-none-match'] === `"${etag}"` ||
      req.headers['if-modified-since'] === job.updatedAt.toUTCString()) {
    return res.status(304).end();
  }
  
  res.render('job-post', { job });
});
```

---

## Crawl Budget Monitoring

### Key Metrics to Track

| Metric | Tool | Target |
|--------|------|--------|
| Pages crawled per day | GSC Crawl Stats | > 1000/day |
| Crawl rate (requests/sec) | GSC Crawl Stats | > 10/sec |
| 5xx errors | GSC Crawl Stats | 0 |
| 404 errors | GSC Coverage | < 1% |
| Average response time | GSC Crawl Stats | < 300ms |
| Time spent downloading | GSC Crawl Stats | < 100ms |

### GSC Crawl Stats Analysis

1. Open Google Search Console → Settings → Crawl Stats
2. Look for:
   - **Total crawl requests** - Should increase over time
   - **Total download size** - Should correlate with important pages
   - **Average response time** - Should be < 300ms
   - **Host status** - Should be "OK" (no server errors)

### Log File Analysis

```bash
# Analyze Googlebot crawl patterns
grep "Googlebot" /var/log/nginx/access.log | \
  awk '{print $4, $7, $9}' | \
  sort | uniq -c | sort -rn | head -50

# Check for query param crawling
grep "Googlebot.*jobs.*[?&]" /var/log/nginx/access.log | \
  awk '{print $7}' | sort | uniq -c | sort -rn

# Identify crawl waste
grep "Googlebot" /var/log/nginx/access.log | \
  awk '{print $9}' | sort | uniq -c | sort -rn | head -30
```

---

## Implementation Checklist

### Immediate (Week 1)
- [ ] Remove `sitemap-cross-filter.xml`
- [ ] Block query params in robots.txt
- [ ] Submit updated sitemap index to GSC
- [ ] Verify no query param URLs in sitemaps

### Short-term (Week 2-3)
- [ ] Deploy 301 redirects for all query params
- [ ] Add canonical tags to all pages
- [ ] Update internal links to clean URLs
- [ ] Implement ETag/Last-Modified headers

### Medium-term (Month 1)
- [ ] Monitor GSC crawl stats weekly
- [ ] Analyze server logs for crawl patterns
- [ ] Optimize prerender cache hit rate > 90%
- [ ] Reduce average response time < 300ms

### Ongoing
- [ ] Monthly crawl budget audit
- [ ] Quarterly log file analysis
- [ ] Monitor for new query param patterns
- [ ] Update sitemap priorities based on traffic

---

## Expected Results

| Metric | Before | After (Target) |
|--------|--------|----------------|
| Query param URLs crawled | 80% of budget | < 5% |
| Important pages crawled daily | ~200 | ~1000+ |
| Crawl efficiency (important pages / total) | 20% | 80%+ |
| Indexed pages (clean URLs) | ~500 | 2000+ |
| Server load from Googlebot | High | Low |

---

## Related Resources

- [Google Crawl Budget Guide](https://developers.google.com/search/docs/crawling-indexing/crawl-budget)
- [Googlebot Optimization](https://developers.google.com/search/docs/crawling-indexing/googlebot)
- [Log File Analysis for SEO](https://moz.com/blog/log-file-analysis-seo)
- [Crawl Budget Optimization Case Studies](https://www.screamingfrog.co.uk/crawl-budget/)

---

*Document Version: 1.0 | Updated: July 2026*