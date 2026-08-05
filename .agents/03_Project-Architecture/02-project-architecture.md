# 02 — Project Architecture & Information Design

## 2.1 Information Architecture & Site Map

SearchSarkariNaukri.com employs a clear, shallow, and logical information architecture designed for high crawlability and user navigation efficiency:

```
SearchSarkariNaukri.com (Root Domain)
├── Jobs Hub (/jobs)
│   ├── By State (/state/[state-slug])
│   │   └── District Level (/district/[district-slug])
│   ├── By Department (/department/[dept-slug])
│   ├── By Qualification (/qualification/[qual-slug])
│   └── Programmatic Cross-Filters (/jobs/[state]/[qualification])
├── Results Hub (/results)
│   └── [Exam Result Pages] (/results/[exam-slug]-result)
├── Admit Cards Hub (/admit-cards)
│   └── [Admit Card Pages] (/admit-cards/[exam-slug]-admit-card)
├── News Hub (/news)
│   └── [News Articles] (/news/[news-slug])
├── Blog & Exam Prep (/blog)
│   └── [Career Guides] (/blog/[post-slug])
└── Trust Infrastructure (/about-us, /contact-us, /privacy-policy, /editorial-policy, etc.)
```

---

## 2.2 Complete URL Structure Matrix

| Page Type | URL Structure Pattern | Example URL | Crawl Priority |
|-----------|----------------------|-------------|----------------|
| **Homepage** | `/` | `https://www.searchsarkarinaukri.com/` | 1.0 (Daily) |
| **Job Listing** | `/jobs/[job-slug]` | `/jobs/ssc-cgl-2026-notification` | 0.9 (Daily) |
| **State Hub** | `/state/[state-slug]` | `/state/uttar-pradesh` | 0.9 (Weekly) |
| **District Hub** | `/district/[district-slug]` | `/district/lucknow` | 0.8 (Weekly) |
| **Department Hub** | `/department/[dept-slug]` | `/department/railway` | 0.9 (Weekly) |
| **Qualification Hub** | `/qualification/[qual-slug]` | `/qualification/10th-pass` | 0.9 (Weekly) |
| **Cross-Filter Route** | `/jobs/[state]/[qualification]` | `/jobs/uttar-pradesh/graduate` | 0.8 (Weekly) |
| **Result Page** | `/results/[slug]` | `/results/ssc-cgl-2026-result` | 0.9 (Daily) |
| **Admit Card Page** | `/admit-cards/[slug]` | `/admit-cards/ssc-cgl-2026-admit-card` | 0.9 (Daily) |
| **News Article** | `/news/[slug]` | `/news/upsc-2026-calendar-announced` | 0.9 (Real-time) |
| **Blog Article** | `/blog/[slug]` | `/blog/how-to-prepare-ssc-cgl` | 0.7 (Weekly) |
| **Trust Pages** | `/[page-slug]` | `/about-us`, `/privacy-policy` | 0.5 (Monthly) |

---

## 2.3 URL Standardization Rules

- **Lowercase Only:** Force lowercase URLs sitewide (`/jobs/ssc-cgl`, never `/jobs/SSC-CGL`).
- **Hyphen Separators:** Use hyphens `-` exclusively to separate words (never underscores `_` or spaces `%20`).
- **No Trailing Slashes:** Enforce single standard sitewide without trailing slash (301 redirect all slash variations).
- **Clean Parameter Handling:** Parameterized URLs (e.g., `?sort=date&page=2`) are kept for dynamic UI state but canonicalized to the clean primary URL.
- **Maximum Depth:** Important pages must sit within **<= 3 clicks** of the homepage.

---

## 2.4 Breadcrumb Architecture & Schema Mapping

Breadcrumbs must be displayed at the top of every internal page and marked up with JSON-LD `BreadcrumbList` schema.

| Page Type | Breadcrumb Hierarchy Structure |
|-----------|--------------------------------|
| **Job Listing** | `Home > Jobs > [Department/State] > [Job Title]` |
| **State Hub** | `Home > Jobs > States > [State Name]` |
| **District Page** | `Home > Jobs > States > [State] > Districts > [District Name]` |
| **Department Hub** | `Home > Jobs > Departments > [Department Name]` |
| **Qualification Hub** | `Home > Jobs > Qualifications > [Qualification]` |
| **Cross-Filter Route** | `Home > Jobs > [State Name] > [Qualification]` |
| **Result Page** | `Home > Results > [Exam Result Title]` |
| **Admit Card Page** | `Home > Admit Cards > [Admit Card Title]` |
| **Blog Post** | `Home > Blog > [Article Category] > [Article Title]` |

---

## 2.5 Navigation Hierarchy & Structure

### Header Navigation Grid
`[Logo (Home)] | Latest Jobs ▾ | Results | Admit Cards | State Jobs ▾ | News | Blog | Search Bar`

### Footer Navigation Grid
```
Column 1: Quick Links     Column 2: Top States     Column 3: Departments     Column 4: Trust & Legal
├── Latest Jobs 2026       ├── UP Sarkari Naukri    ├── Railway Bharti        ├── About Us
├── Exam Results           ├── Bihar Govt Jobs      ├── SSC Recruitment       ├── Contact Us
├── Admit Cards Download   ├── Rajasthan Jobs       ├── Police Vacancy        ├── Editorial Policy
├── Govt Exam News         ├── MP Sarkari Naukri    ├── Teaching Jobs         ├── Privacy Policy
└── Master Sitemap Index   └── All 36 States        └── All Departments       └── Disclaimer
```

---

## 2.6 Internal Linking Hierarchy Rules

1. **Homepage Link Equity:** Links directly to top-level hubs (Jobs, Results, Admit Cards, News, Blog, Top 5 States).
2. **Category Hub Power:** State, Department, and Qualification hub pages link dynamically to their 50 most recent active job listings.
3. **Cross-Linking Matrix:**
   - Every Job Listing links back to its parent State Hub, Department Hub, Qualification Hub, and official source.
   - Job listings cross-link to their corresponding Result and Admit Card pages once published.
4. **Contextual Text Links:** Descriptive, natural anchor text used in paragraph bodies (avoid generic "click here" anchors).
5. **Link Ceiling:** Maximum 100 internal links per page for hub pages; 30–50 for individual job listings.
