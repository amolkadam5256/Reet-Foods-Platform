# Site Hierarchy

> **Source:** Live audit of [searchsarkarinaukri.com](https://www.searchsarkarinaukri.com/) — July 2026

---

## Full Site Tree

```
searchsarkarinaukri.com/
│
├── /                          ← Homepage (National Hub)
│   ├── Latest Jobs Feed (dynamic)
│   ├── Department Quick Links (category= params)
│   ├── Maharashtra District Links (district_slug= params)
│   └── Quick Links Section
│
├── /jobs                      ← All Jobs Listing (Master Listing)
│   ├── ?search=[query]        ← Search results
│   ├── ?category=mpsc         ← MPSC category filter
│   ├── ?category=upsc         ← UPSC category filter
│   ├── ?category=ssc          ← SSC category filter
│   ├── ?category=railway      ← Railway category filter
│   ├── ?category=banking      ← Banking category filter
│   ├── ?category=police       ← Police category filter
│   ├── ?category=talathi      ← Talathi category filter
│   ├── ?category=zp           ← ZP (Zilla Parishad) filter
│   ├── ?category=forest       ← Forest dept filter
│   ├── ?category=health       ← Health dept filter
│   ├── ?category=education    ← Education dept filter
│   ├── ?category=central      ← Central Govt Jobs filter
│   └── ?district_slug=[slug]  ← District filter
│
├── /jobs/[job-slug]           ← Individual Job Post
│   └── (JobPosting schema, apply link, eligibility, dates)
│
├── /admit-cards               ← Admit Cards Hub
│   └── /admit-cards/[slug]   ← Individual Admit Card Post
│
├── /results                   ← Results Hub
│   └── /results/[slug]       ← Individual Result Post
│
├── /exam-calendar             ← Exam Calendar Hub (referenced in noscript)
│
├── /districts                 ← Maharashtra Districts Index (36 districts)
│   └── ?district_slug=[slug]  ← District filter (on /jobs, not /districts)
│
├── /current-affairs           ← Daily Current Affairs (referenced in noscript)
│
├── /eligibility-checker       ← Interactive Tool (referenced in noscript)
│
├── /study-material            ← Study Guides Hub (referenced in noscript)
│
├── /sitemap.xml               ← XML Sitemap
│
└── [Inferred / Planned]
    ├── /about                 ← About page (not confirmed)
    ├── /contact               ← Contact page (not confirmed)
    └── /privacy-policy        ← Privacy policy (not confirmed)
```

---

## Page Type Inventory

| Page Type | Current URL Pattern | Count (Est.) | Status |
|-----------|-------------------|-------------|--------|
| Homepage | `/` | 1 | ✅ Live |
| Jobs Listing | `/jobs` | 1 | ✅ Live |
| Jobs by Category | `/jobs?category=[slug]` | 12+ | ⚠️ Query params |
| Jobs by District | `/jobs?district_slug=[slug]` | 36 | ⚠️ Query params |
| Individual Job Post | `/jobs/[slug]` | 250+ | ✅ Live |
| Admit Cards Hub | `/admit-cards` | 1 | ✅ Live |
| Individual Admit Card | `/admit-cards/[slug]` | 68+ | ✅ Live |
| Results Hub | `/results` | 1 | ✅ Live |
| Individual Result | `/results/[slug]` | 91+ | ✅ Live |
| Districts Index | `/districts` | 1 | ✅ Live |
| Exam Calendar | `/exam-calendar` | 1 | 🔍 Confirm |
| Current Affairs | `/current-affairs` | 1+ | 🔍 Confirm |
| Eligibility Checker | `/eligibility-checker` | 1 | 🔍 Confirm |
| Study Material | `/study-material` | 1+ | 🔍 Confirm |

---

## Depth Levels

| Level | Pages | Examples |
|-------|-------|---------|
| Level 0 | Homepage | `/` |
| Level 1 | Hub pages | `/jobs`, `/admit-cards`, `/results`, `/districts` |
| Level 2 | Category/filter views | `/jobs?category=mpsc`, `/districts` |
| Level 3 | Individual posts | `/jobs/[slug]`, `/admit-cards/[slug]` |

> [!NOTE]
> Maximum crawl depth is 3 clicks from homepage — this is within Google's recommended limit.
> However, **category hub pages don't have clean Level 2 URLs** (they rely on query params).

---

## Recommended Site Hierarchy (Target State)

```
searchsarkarinaukri.com/
│
├── /                                  ← Homepage
│
├── /jobs                              ← All Jobs Hub
│   └── /jobs/[slug]                  ← Individual Job Post
│
├── /department/[dept-slug]            ← Department Hub (NEW)
│   ├── /department/mpsc
│   ├── /department/upsc
│   ├── /department/ssc
│   ├── /department/railway
│   ├── /department/banking
│   ├── /department/police
│   ├── /department/teaching
│   ├── /department/health
│   └── /department/forest
│
├── /state/[state-slug]                ← State Hub (NEW)
│   └── /state/uttar-pradesh
│       /state/bihar
│       /state/maharashtra ... (28 states)
│
├── /district/[district-slug]          ← District Hub (FIX: was query param)
│   └── /district/pune
│       /district/mumbai ... (36 MH districts)
│
├── /qualification/[qual-slug]         ← Qualification Hub (NEW)
│   ├── /qualification/10th-pass
│   ├── /qualification/12th-pass
│   ├── /qualification/graduate
│   └── /qualification/iti
│
├── /admit-cards                       ← Admit Cards Hub ✅
│   └── /admit-cards/[slug]
│
├── /results                           ← Results Hub ✅
│   └── /results/[slug]
│
├── /exam-calendar                     ← Exam Calendar ✅
├── /current-affairs                   ← Current Affairs ✅
├── /eligibility-checker               ← Tool ✅
├── /study-material                    ← Guides Hub ✅
│   └── /study-material/[guide-slug]
│
└── /about, /contact, /privacy-policy  ← Static pages
```

---
*Document Version: 1.0 | Audited: July 2026*
