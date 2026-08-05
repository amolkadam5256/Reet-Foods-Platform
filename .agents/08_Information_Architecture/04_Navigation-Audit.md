# Navigation Audit — Structure, Gaps & Recommendations

> **Audited Site:** [searchsarkarinaukri.com](https://www.searchsarkarinaukri.com/)
> **Audit Date:** July 2026
> **Primary Nav Source:** Homepage noscript fallback + live site crawl

---

## Current Navigation Structure

### Primary Navigation (Homepage)

| Order | Label | URL | Type |
|-------|-------|-----|------|
| 1 | All Active Government Job Vacancies | `/jobs` | Hub |
| 2 | Admit Cards / Hall Tickets | `/admit-cards` | Hub |
| 3 | Government Exam Results | `/results` | Hub |
| 4 | Exam Calendar 2026 | `/exam-calendar` | Hub |
| 5 | Daily Current Affairs | `/current-affairs` | Hub |
| 6 | Eligibility Checker | `/eligibility-checker` | Tool |
| 7 | Study Material & Guides | `/study-material` | Hub |

### Secondary Navigation (Footer / Quick Links)

| Label | URL | Type |
|-------|-----|------|
| XML Sitemap (all pages) | `/sitemap.xml` | Utility |

### Department Quick Links (Homepage)

All department links use **query parameters** on `/jobs`:

| Department | Current URL | Recommended URL |
|-----------|-------------|-----------------|
| MPSC | `/jobs?category=mpsc` | `/department/mpsc` |
| UPSC | `/jobs?category=upsc` | `/department/upsc` |
| SSC | `/jobs?category=ssc` | `/department/ssc` |
| RRB Railway | `/jobs?category=railway` | `/department/railway` |
| IBPS/SBI/RBI | `/jobs?category=banking` | `/department/banking` |
| Police Bharti | `/jobs?category=police` | `/department/police` |
| Talathi | `/jobs?category=talathi` | `/department/talathi` |
| Zilla Parishad | `/jobs?category=zp` | `/department/zilla-parishad` |
| Forest | `/jobs?category=forest` | `/department/forest` |
| Health (NHM) | `/jobs?category=health` | `/department/health` |
| Education | `/jobs?category=education` | `/department/education` |
| Central Govt | `/jobs?category=central` | `/department/central-govt` |

### District Quick Links (Homepage)

All district links use **query parameters** on `/jobs`:

| District | Current URL | Recommended URL |
|----------|-------------|-----------------|
| Pune | `/jobs?district_slug=pune` | `/district/pune` |
| Mumbai | `/jobs?district_slug=mumbai-city` | `/district/mumbai` |
| Nagpur | `/jobs?district_slug=nagpur` | `/district/nagpur` |
| Nashik | `/jobs?district_slug=nashik` | `/district/nashik` |
| Thane | `/jobs?district_slug=thane` | `/district/thane` |
| Chh. Sambhajinagar | `/jobs?district_slug=chhatrapati-sambhajinagar` | `/district/chhatrapati-sambhajinagar` |
| Solapur | `/jobs?district_slug=solapur` | `/district/solapur` |
| Kolhapur | `/jobs?district_slug=kolhapur` | `/district/kolhapur` |
| Amravati | `/jobs?district_slug=amravati` | `/district/amravati` |
| Satara | `/jobs?district_slug=satara` | `/district/satara` |
| Sangli | `/jobs?district_slug=sangli` | `/district/sangli` |
| Ahilyanagar | `/jobs?district_slug=ahmednagar` | `/district/ahilyanagar` |
| Jalgaon | `/jobs?district_slug=jalgaon` | `/district/jalgaon` |
| Latur | `/jobs?district_slug=latur` | `/district/latur` |
| Nanded | `/jobs?district_slug=nanded` | `/district/nanded` |
| Yavatmal | `/jobs?district_slug=yavatmal` | `/district/yavatmal` |
| Ratnagiri | `/jobs?district_slug=ratnagiri` | `/district/ratnagiri` |
| Raigad | `/jobs?district_slug=raigad` | `/district/raigad` |

> **Note:** Homepage shows 18 districts; full list of 36 is available at `/districts`.

---

## Navigation Gaps

### Missing Structural Hubs

| Missing Hub | Purpose | Priority |
|-------------|---------|----------|
| `/department/` | Index page for all exam departments | P0 |
| `/state/` | Index page for all Indian states | P0 |
| `/district/` | Index page for all districts (rename from `/districts`) | P1 |
| `/qualification/` | Index page for qualification filters | P0 |
| `/organization/` | Index page for government organizations | P1 |

### Missing Utility Pages

| Page | Purpose | Priority |
|------|---------|----------|
| `/about` | About the site/team | P2 |
| `/contact` | Contact form / email | P2 |
| `/privacy-policy` | Privacy policy (GDPR/regulatory) | P0 |
| `/terms-of-use` | Terms of service | P1 |
| `/disclaimer` | Job listing disclaimer | P1 |

### Mobile Navigation Concerns

- **Issue:** The site is a React SPA — JS-rendered navigation may not be visible to crawlers without JS execution.
- **Evidence:** Homepage noscript fallback only shows static links; full mobile menu (hamburger) is JS-only.
- **Risk:** Mobile-first indexing may miss category/district pages if not prerendered.
- **Recommendation:** Ensure all nav links are present in noscript fallback or server-rendered HTML.

---

## Breadcrumb Structure

### Current State

Breadcrumbs are **JS-rendered** and not visible in noscript fallback. Based on URL patterns, the inferred breadcrumb structure is:

```
Homepage > Jobs > [Category/District Filter] > [Job Post]
Homepage > Admit Cards > [Admit Card Post]
Homepage > Results > [Result Post]
Homepage > Study Material > [Guide Post]
Homepage > Current Affairs > [Article Post]
```

### Recommended Breadcrumb Markup

Each page should include JSON-LD `BreadcrumbList` schema:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.searchsarkarinaukri.com/" },
    { "@type": "ListItem", "position": 2, "name": "MPSC Jobs", "item": "https://www.searchsarkarinaukri.com/department/mpsc" },
    { "@type": "ListItem", "position": 3, "name": "Job Title", "item": "https://www.searchsarkarinaukri.com/jobs/job-slug" }
  ]
}
```

---

## Internal Linking Strategy

### Homepage to Hub Pages

- Homepage links to `/jobs`, `/admit-cards`, `/results`, `/exam-calendar`, `/current-affairs`, `/eligibility-checker`, `/study-material`
- Homepage links to 12 department category pages (via query params)
- Homepage links to 18 district pages (via query params) + link to `/districts` for all 36

### Hub Page to Detail Pages

- `/jobs` → filters via query params → individual job posts
- `/admit-cards` → individual admit card posts
- `/results` → individual result posts
- `/districts` → all 36 district pages (should be clean URLs)
- `/study-material` → individual study guides
- `/current-affairs` → individual articles

### Cross-Hub Linking

| From Hub | Links To | Opportunity |
|----------|----------|-------------|
| `/jobs` | `/admit-cards`, `/results` | Add cross-links for related admit cards/results |
| `/admit-cards/[slug]` | `/jobs`, `/results` | Link to related job posts and results |
| `/results/[slug]` | `/jobs`, `/admit-cards` | Link to related job posts and admit cards |
| `/districts` | `/district/[slug]` | Convert to clean URLs |
| `/study-material/[slug]` | `/jobs` | Link to relevant job category pages |
| `/current-affairs/[slug]` | `/jobs` | Link to relevant job posts |

---

## Search Functionality

| Feature | Current URL | Status |
|---------|-------------|--------|
| Site Search | `/jobs?search=[query]` | ✅ Exists |
| Job Filter | `?category=`, `?district_slug=` | ⚠️ Query params |
| Pagination | Unknown | 🔍 Needs audit |

### Search Recommendations

- Add dedicated `/search` route that handles all content types (jobs, admit cards, results, study material)
- Implement autocomplete for search suggestions
- Add faceted search filters (department, state, district, qualification, date range)

---

## Sitemap Structure

| Location | URL | Contents |
|----------|-----|----------|
| XML Sitemap | `https://www.searchsarkarinaukri.com/sitemap.xml` | All crawlable pages |
| HTML Sitemap | Not found | ❌ Should be created |

### Sitemap Recommendations

- Create HTML sitemap page at `/sitemap` (human-readable)
- Ensure XML sitemap includes all clean URL routes (`/department/[slug]`, `/district/[slug]`, `/state/[slug]`, `/qualification/[slug]`)
- Exclude query-param URLs from sitemap; only include canonical clean URLs

---

## Navigation Recommendations Summary

| # | Issue | Recommendation | Priority |
|---|-------|----------------|----------|
| 1 | Query param category pages | Create `/department/[slug]` routes | P0 |
| 2 | Query param district pages | Create `/district/[slug]` routes | P0 |
| 3 | Missing state hub pages | Create `/state/[slug]` for 28 states | P0 |
| 4 | Missing qualification hub pages | Create `/qualification/[slug]` routes | P0 |
| 5 | Missing organization hub pages | Create `/organization/[slug]` routes | P1 |
| 6 | JS-rendered nav | Ensure noscript fallback for all nav links | P0 |
| 7 | Breadcrumbs not visible | Implement JSON-LD `BreadcrumbList` on all pages | P1 |
| 8 | No HTML sitemap | Create `/sitemap` page | P1 |
| 9 | Missing utility pages | Create `/about`, `/contact`, `/privacy-policy` | P2 |
| 10 | Search limited to jobs | Expand `/search` to all content types | P2 |

---

*Document Version: 1.0 | Audited: July 2026*
