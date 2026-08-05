# Internal Linking Architecture

> **Site:** searchsarkarinaukri.com
> **Current Status:** ⚠️ Strong homepage links but weak cross-hub linking and missed opportunities

---

## Current Internal Link Structure

### Homepage Link Distribution

| Link Type | Count | URL Examples | Status |
|-----------|-------|--------------|--------|
| Hub Pages | 7 | `/jobs`, `/admit-cards`, `/results`, `/exam-calendar`, `/current-affairs`, `/eligibility-checker`, `/study-material` | ✅ Strong |
| Department Links | 12 | `/jobs?category=mpsc`, `/jobs?category=upsc`, etc. | ⚠️ Query params |
| District Links | 18 | `/jobs?district_slug=pune`, etc. | ⚠️ Query params |
| Quick Links | 8 | Various hub pages | ✅ Good |

### Current Link Flow

```
HOMEPAGE
 ├── Hubs (7): → /jobs, /admit-cards, /results, /exam-calendar, /current-affairs, /eligibility-checker, /study-material
 ├── Departments (12): → /jobs?category=[slug] (query param)
 └── Districts (18): → /jobs?district_slug=[slug] (query param)

JOBS HUB (/jobs)
 ├── Individual Jobs: → /jobs/[slug]
 ├── Search: → /jobs?search=[term]
 ├── Department Filter: → /jobs?category=[slug] (query param)
 └── District Filter: → /jobs?district_slug=[slug] (query param)

DEPARTMENT HUB (missing)
 [Should be /department/[slug]]
   ├── Individual Jobs: → /jobs/[slug] (filtered)
   └── Related Departments: → [missing]

DISTRICT HUB (/districts)
   ├── District Pages: → /district/[slug] (currently via /jobs?district_slug)
   └── Related Cities: → [missing]
```

---

## Internal Linking Strategy

### 1. Hub Page Linking (P0)

Each hub should link to:
- **Related hubs** in same category
- **Individual items** (paginated)
- **Filters/Categories** (when applicable)
- **Tools/Utilities**

#### Homepage Links

| Section | Links To | Purpose | Priority |
|---------|----------|---------|----------|
| Quick Links | All hubs | Top-level navigation | P0 |
| Department Section | `/department/[slug]` | Replace query params | P0 |
| District Section | `/district/[slug]` | Replace query params | P0 |
| Search Box | `/jobs` with search parameter | User-initiated | P1 |

#### Jobs Hub (`/jobs`)

| Link Type | Destination | Purpose | Priority |
|-----------|-------------|---------|----------|
| Department Filter | `/department/[slug]` | Replace `/jobs?category=` | P0 |
| District Filter | `/district/[slug]` | Replace `/jobs?district_slug=` | P0 |
| Recent Jobs | `/jobs/[slug]` (last 10) | Deep linking | P1 |
| Popular Departments | `/department/[slug]` (top 5) | Authority flow | P1 |
| Related Hubs | `/admit-cards`, `/results` | Cross-promotion | P1 |
| Search Box | `/jobs?search=[term]` | User functionality | P1 |

#### Department Hub (`/department/[slug]`)

| Link Type | Destination | Purpose | Priority |
|-----------|-------------|---------|----------|
| All Jobs | `/jobs` | Main hub | P1 |
| Recent Jobs | `/jobs/[slug]` (filtered) | Content access | P1 |
| Location Filter | `/district/[slug]` | Geographic refinement | P1 |
| Qualification Filter | `/qualification/[slug]` | Experience level | P1 |
| Related Departments | `/department/[related]` | Topical authority | P2 |
| Admit Cards | `/admit-cards/[slug]` (related) | Cross-content | P1 |
| Results | `/results/[slug]` (related) | Cross-content | P1 |

#### District Hub (`/district/[slug]`)

| Link Type | Destination | Purpose | Priority |
|-----------|-------------|---------|----------|
| All Districts | `/districts` | Main hub | P1 |
| District Jobs | `/jobs?district_slug=[slug]` (temporary until redirect) | Content access | P1 |
| City/Town Filter | `/city/[slug]` (future) | Geographic drilldown | P2 |
| Department Filter | `/department/[slug]` | Industry focus | P1 |
| Nearby Districts | `/district/[related]` | Geographic authority | P2 |
| Government Resources | External (.gov.in) | Trust signals | P2 |

### 2. Content Page Linking (P1)

#### Individual Job Post (`/jobs/[slug]`)

| Link Type | Destination | Purpose | Priority |
|-----------|-------------|---------|----------|
| Back to Department | `/department/[slug]` | Navigation | P1 |
| Similar Jobs | `/department/[slug]?query=related` | Content discovery | P1 |
| Apply Now | External (application site) | Conversion | P0 |
| Eligibility Checker | `/eligibility-checker` | User tool | P1 |
| Related Departments | `/department/[related]` | Cross-linking | P2 |
| Admit Card (if applicable) | `/admit-cards/[slug]` | Content series | P1 |
| Result (if applicable) | `/results/[slug]` | Content series | P1 |

#### Individual Admit Card (`/admit-cards/[slug]`)

| Link Type | Destination | Purpose | Priority |
|-----------|-------------|---------|----------|
| Related Exam | `/department/[slug]` or `/jobs/[slug]` | Content association | P1 |
| Result (if published) | `/results/[slug]` | Content sequence | P1 |
| Study Material | `/study-material/[slug]` (related) | Preparation help | P1 |
| Eligibility Checker | `/eligibility-checker` | User tool | P1 |

### 3. Footer/Sidebar Linking (P2)

#### Universal Footer

| Section | Links | Purpose |
|---------|-------|---------|
| Navigation | Home, Jobs, Admit Cards, Results, etc. | Site-wide access |
| Resources | Study Material, Current Affairs, Exam Calendar | Content discovery |
| Tools | Eligibility Checker, Cutoff Predictor | Utility access |
| Legal | Privacy, Terms, Disclaimer, Sitemap | Compliance |
| Social | Twitter, Facebook, YouTube, Telegram | Social signals |

#### Sidebar (Content Pages)

| Position | Content | Purpose |
|----------|---------|---------|
| Top | Breadcrumbs | Navigation context |
| Middle | Related Content | Engagement |
| Bottom | CTA / Newsletter | Conversion |

---

## Link Equity Distribution Strategy

### PageRank Flow Optimization

**High Authority Pages (should link out):**
- Homepage (PR 1.0) → Link to 7 hubs (0.14 each)
- Jobs Hub (PR 0.4) → Link to department hubs (0.05 each)
- Department Hubs (PR 0.2 each) → Link to individual jobs & related hubs

**Link Value Preservation:**
- Use descriptive, keyword-rich anchor text
- Avoid generic "click here" or "read more"
- Prioritize contextual links over navigational
- Maintain reasonable link density (< 100 links per page)

### Recommended Anchor Text Patterns

| Link Type | Good Anchor Text | Bad Anchor Text |
|-----------|------------------|-----------------|
| Department | "MPSC Bharti 2026", "UPSC Notifications" | "Click here", "Department" |
| District | "Pune Govt Jobs", "Mumbai Recruitment" | "Location filter", "District" |
| Job Post | "Assistant Engineer Vacancy", "Clerk Grade II" | "Job details", "Read more" |
| Admit Card | "MPSC Prelims Admit Card", "SSC CGL Hall Ticket" | "Admit card download" |
| Result | "UPSC Prelims Result 2026", "SSC CHSL Final Result" | "Result pdf" |

---

## Implementation Guide

### 1. React Component Updates

```jsx
// src/components/NavigationLinks.jsx
export function DepartmentLinks({ currentDept }) {
  const departments = [
    { slug: 'mpsc', name: 'MPSC Bharti 2026' },
    { slug: 'upsc', name: 'UPSC Civil Services' },
    { slug: 'ssc', name: 'SSC Exams' },
    { slug: 'railway', name: 'RRB Railway Recruitment' },
    { slug: 'banking', name: 'Banking Jobs' },
    { slug: 'police', name: 'Police Bharti' },
    { slug: 'talathi', name: 'Talathi Bharti' },
    { slug: 'zp', name: 'Zilla Parishad' },
    { slug: 'forest', name: 'Forest Department' },
    { slug: 'health', name: 'NHM & Health' },
    { slug: 'education', name: 'Teacher Bharti' },
    { slug: 'central', name: 'Central Govt Jobs' }
  ];

  return (
    <div className="department-links">
      {depts.map(dept => (
        <a 
          key={dept.slug}
          href={`/department/${dept.slug}`}
          className={currentDept === dept.slug ? 'active' : ''}
          title={`View all ${dept.name}`}>
          {dept.name}
        </a>
      ))}
    </div>
  );
}

export function RelatedJobs({ department, currentJobSlug }) {
  // Fetch 3-5 related jobs from same department
  const relatedJobs = getRelatedJobs(department, currentJobSlug, 5);
  
  return (
    <div className="related-jobs">
      <h3>Related Jobs in {getDeptName(department)}</h3>
      <ul>
        {relatedJobs.map(job => (
          <li key={job.slug}>
            <a href={`/jobs/${job.slug}`} title={job.title}>
              {job.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### 2. Server-Side Link Generation

For prerender backend:

```javascript
// link-generator.js
function generateRelatedLinks(pageType, context) {
  const links = [];
  
  switch (pageType) {
    case 'department':
      links.push(
        { text: 'All Government Jobs', url: '/jobs', rel: 'up' },
        { text: 'Recent Notifications', url: `/department/${context.slug}`, rel: 'self' },
        { text: 'Related Districts', url: `/district/related/${context.slug}`, rel: 'directory' },
        { text: 'Qualification Filter', url: `/qualification/${context.slug}`, rel: 'filter' }
      );
      break;
      
    case 'job':
      links.push(
        { text: 'Back to Department', url: `/department/${context.deptSlug}`, rel: 'up' },
        { text: 'Apply Now', url: context.applicationUrl, rel: 'nofollow' },
        { text: 'Eligibility Checker', url: '/eligibility-checker', rel: 'help' },
        { text: 'Similar Positions', url: `/department/${context.deptSlug}?similar=true`, rel: 'related' }
      );
      break;
      
    case 'admit-card':
      links.push(
        { text: 'Exam Details', url: `/jobs/${context.jobSlug}`, rel: 'up' },
        { text: 'Result (if available)', url: `/results/${context.resultSlug}`, rel: 'related' },
        { text: 'Study Material', url: `/study-material/${context.studySlug}`, rel: 'related' }
      );
      break;
  }
  
  return links;
}
```

### 3. Breadcrumbs Implementation

```jsx
// src/components/Breadcrumbs.jsx
export function Breadcrumbs({ pathArray, currentLabel }) {
  const items = [
    { label: 'Home', url: '/' },
    ...pathArray.slice(0, -1),
    { label: currentLabel, url: null } // Current page (not linked)
  ];

  return (
    <nav aria-label="breadcrumb" className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={index} 
              className={index === items.length - 1 ? 'active' : ''}>
            {item.url ? (
              <a href={item.url} aria-label={`Go to ${item.label}`}>
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
          {index < items.length - 1 && <span className="separator"> › </span>}
        ))}
      </ol>
    </nav>
  );
}

// Usage in components
// For /department/mpsc/jobs/assistant-engineer-vacancy
<Breadcrumbs 
  pathArray=[
    { label: 'MPSC Bharti', url: '/department/mpsc' },
    { label: 'Engineering Jobs', url: '/department/mpsc/engineering' }
  ] 
  currentLabel="Assistant Engineer Vacancy"
/>
```

---

## Internal Link Audit Checklist

### ✅ Monthly Audit Tasks

- [ ] Check for broken internal links (404s)
- [ ] Identify orphaned pages (no internal links)
- [ ] Find pages with excessive outgoing links (> 100)
- [ ] Validate anchor text relevance
- [ ] Check for redirect chains in internal links
- [ ] Verify HTTPS on all internal links
- [ ] Confirm nofollow usage is correct
- [ ] Audit footer/sidebar link distribution

### 🔍 Tools for Auditing

1. **Screaming Frog SEO Spider**
   - Internal → All: Find broken links
   - Internal → Redirect Chains: Find redirect loops
   - Internal → Depth: Identify orphaned pages
   - Internal → Outlinks: Find excessive linking

2. **Google Search Console**
   - Links → Internal Links: See which pages have most internal links
   - Coverage Report: Find indexing issues from bad linking

3. **Sitebulb / DeepCrawl**
   - Internal Link Equity Reports
   - PageRank Distribution Visualization

---

## Priority Action Items

| # | Issue | Fix | Priority |
|---|-------|-----|----------|
| 1 | Department links use query params | Replace with `/department/[slug]` | P0 |
| 2 | District links use query params | Replace with `/district/[slug]` | P0 |
| 3 | No cross-linking between hubs | Add related hub links | P1 |
| 4 | No breadcrumbs on content pages | Implement breadcrumb component | P1 |
| 5 | Weak internal linking on job posts | Add "Related Jobs" section | P1 |
| 6 | Missing "Back to Department" links | Add navigation links on content | P1 |
| 7 | Footer lacks important pages | Add sitemap, privacy, terms | P2 |
| 8 | Sidebar not used on content pages | Add related content/modules | P2 |

---

## Expected Impact

| Metric | Current | Target (6 months) |
|--------|---------|-------------------|
| Avg. internal links per page | 15-25 | 25-40 |
| Orphaned pages | ~5-10% | < 1% |
| Click depth to important content | 3-4 clicks | 2-3 clicks |
| Internal link equity distribution | Uneven | Balanced |
| Time on site (from internal nav) | Low | Increased |
| Pages per session | 2.1 | 3.5+ |

---

## Related Resources

- [Google Internal Linking Guide](https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox)
- [Moz Internal Linking Best Practices](https://moz.com/learn/seo/internal-links)
- [Screaming Frog Internal Link Analysis](https://www.screamingfrog.co.uk/seo-spider/user-guide/internal/)
- [Ahrefs Internal Linking Guide](https://ahrefs.com/blog/internal-links/)

---

*Document Version: 1.0 | Updated: July 2026*