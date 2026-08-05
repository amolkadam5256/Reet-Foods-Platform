# Structured Data (Schema.org) Implementation Guide

> **Site:** searchsarkarinaukri.com
> **Current Schema:** Organization + WebSite + SearchAction only
> **Status:** ⚠️ Incomplete — missing JobPosting, BreadcrumbList, Organization entity schemas

---

## Current Schema Implementation

### What's Currently Implemented

```json
// Organization schema (server-rendered fallback)
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SearchSarkariNaukri",
  "url": "https://www.searchsarkarinaukri.com/",
  "logo": "https://www.searchsarkarinaukri.com/logo.png"
}

// WebSite with SearchAction
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SearchSarkariNaukri",
  "url": "https://www.searchsarkarinaukri.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.searchsarkarinaukri.com/jobs?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### Missing Schema Types

| Schema Type | Pages | Impact | Priority |
|-------------|-------|--------|----------|
| JobPosting | All individual job posts | Rich results in SERP | P0 |
| BreadcrumbList | All pages | Enhanced search result display | P0 |
| Organization entity (sameAs) | Homepage | Knowledge panel | P1 |
| FAQPage | Eligibility Checker, Study Material | SERP feature | P1 |
| Event (for Results/Admit Cards) | Results/Admit card pages | Date-based rich results | P1 |
| WebPage | All content pages | Contextual SEO | P1 |
| ImageObject og:image | Homepage + social | Social sharing | P1 |

---

## Implementation Guide

### 1. JobPosting Schema (P0)

**Location:** All individual job posts at `/jobs/[slug]`

**React/Helmet Implementation:**

```jsx
// src/pages/JobPost.jsx
import { Helmet } from 'react-helmet-async';

function JobPost({ job }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: `${job.description.substring(0, 300)}`,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.organization || 'Government of Maharashtra',
      sameAs: 'https://www.searchsarkarinaukri.com/',
      logo: 'https://www.searchsarkarinaukri.com/logo.png'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.district || 'Maharashtra',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      }
    },
    datePosted: job.postingDate || job.publishedAt,
    validThrough: job.applicationDeadline,
    employmentType: job.fullTime ? 'FULL_TIME' : 
                   job.partTime ? 'PART_TIME' : 
                   job.contract ? 'CONTRACT' : 'FULL_TIME',
    experienceRequirements: job.experience || '0 years',
    educationalRequirements: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: job.qualification || 'Any'
    },
    skills: job.skills || [],
    jobLocationType: 'LOCATION',
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.minSalary,
        maxValue: job.maxSalary,
        unitText: 'MONTH'
      }
    },
    url: `https://www.searchsarkarinaukri.com/jobs/${job.slug}`,
    appliesVia: job.applyLink,
    industry: job.category,
    occupationalCategory: job.examType || 'Government'
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
        <title>{`${job.title} | ${job.organization || 'Government'} | SearchSarkariNaukri`}</title>
        <meta name="description" 
              content={`${job.title} at ${job.organization || 'Government'}. Apply online with direct link. Eligibility, last date, salary details.`} />
        <link rel="canonical" href={`https://www.searchsarkarinaukri.com/jobs/${job.slug}`} />
      </Helmet>
      {/* ... rest of component */}
    </>
  );
}
```

### 2. BreadcrumbList Schema (P0)

**Location:** All pages

**Reusable Component:**

```jsx
// src/components/BreadcrumbSchema.jsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export function BreadcrumbSchema({ breadcrumbs }) {
  const location = useLocation();
  
  const defaultBreadcrumbs = [
    { name: 'Home', url: 'https://www.searchsarkarinaukri.com/' },
    ...breadcrumbs
  ];
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: defaultBreadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url || `https://www.searchsarkarinaukri.com${location.pathname}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
}

// Usage examples:
// Job post page:
// <BreadcrumbSchema breadcrumbs={[
//   { name: 'Jobs', url: '/jobs' },
//   { name: 'MPSC', url: '/department/mpsc' },
//   { name: job.title }
// ]} />

// Department hub:
// <BreadcrumbSchema breadcrumbs={[
//   { name: 'Jobs', url: '/jobs' },
//   { name: 'MPSC Bharti' }
// ]} />
```

### 3. Organization Schema with sameAs (P1)

**Location:** Homepage only

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SearchSarkariNaukri",
  "url": "https://www.searchsarkarinaukri.com/",
  "logo": "https://www.searchsarkarinaukri.com/logo.png",
  "description": "India's trusted Sarkari Naukri portal — daily-updated government job vacancies, eligibility, last dates & apply links across MPSC, UPSC, SSC, RRB Railway, IBPS, SBI, State PSC, Police Bharti and more.",
  "sameAs": [
    "https://twitter.com/searchsarkari",
    "https://www.facebook.com/searchsarkari",
    "https://www.youtube.com/@searchsarkari",
    "https://t.me/searchsarkari"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "Maharashtra"
  }
}
```

### 4. FAQPage Schema (P1)

**Location:** Eligibility Checker, Study Material hub pages

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the eligibility criteria for MPSC Bharti 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have a Bachelor's degree from a recognized university and be between 20-38 years of age as of the application deadline."
      }
    },
    {
      "@type": "Question",
      "name": "How can I apply for SSC CGL 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the official SSC website and apply online through the SSC CGL portal. Direct apply links are available on SearchSarkariNaukri."
      }
    }
  ]
}
```

### 5. Event Schema for Results & Admit Cards (P1)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "UPSC CSE 2026 Prelims Result",
  "startDate": "2026-08-15T00:00:00+05:30",
  "endDate": "2026-09-30T23:59:59+05:30",
  "location": {
    "@type": "Place",
    "name": "New Delhi"
  },
  "url": "https://www.searchsarkarinaukri.com/results/upsc-cse-prelims-result-2026",
  "eventStatus": "EventScheduled",
  "organizer": {
    "@type": "Organization",
    "name": "Union Public Service Commission"
  }
}
```

---

## Complete Implementation Checklist

### Homepage (P0)
- [ ] Organization schema with sameAs
- [ ] WebSite schema with SearchAction
- [ ] BreadcrumbList schema (homepage only)
- [ ] ImageObject for og:image

### Job Detail Pages (P0)
- [ ] JobPosting schema
- [ ] BreadcrumbList schema
- [ ] WebPage schema
- [ ] Correct canonical URL in og:url

### Department Hub Pages (P0)
- [ ] CollectionPage schema
- [ ] BreadcrumbList schema
- [ ] Proper meta title with department name

### Results Pages (P1)
- [ ] Event schema (for past results)
- [ ] BreadcrumbList schema
- [ ] CollectionPage schema (for results list)

### Admit Cards Pages (P1)
- [ ] Event schema (admit card is an "Event" — the exam)
- [ ] BreadcrumbList schema

### Study Material Pages (P1)
- [ ] Article schema
- [ ] FAQPage schema (if Q&A format)
- [ ] BreadcrumbList schema

### Eligibility Checker (P1)
- [ ] WebPage schema
- [ ] FAQPage schema

---

## Testing & Validation

### Google Rich Results Test
```bash
# Test any URL's schema
curl -s https://www.searchsarkarinaukri.com/jobs/sample-job | \
  grep -o '<script type="application/ld+json">.*</script>' | \
  sed 's/<script type="application\/ld+json">//g' | \
  sed 's/<\/script>//g' | \
  python3 -m json.tool
```

### Online Validators
1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Schema.org Validator:** https://validator.schema.org/
3. **JSON-LD Validator:** https://jsonld.dev/

### Expected SERP Enhancements

| Schema Type | SERP Feature | Example |
|-------------|--------------|---------|
| JobPosting | Job posting rich result with salary, location | 🃏 Job snippet with apply link |
| BreadcrumbList | Enhanced breadcrumb navigation in SERP | Home › Jobs › MPSC |
| FAQPage | FAQ dropdown in SERP | Click-to-expand questions |
| Event | Event date display | Result date shown under listing |
| Organization | Knowledge panel | Right-side panel with logo |

---

## Priority Action Items

| # | Schema Type | Pages | Impact | Effort |
|---|-------------|-------|--------|--------|
| 1 | JobPosting | All job posts (~250+) | ⭐⭐⭐⭐⭐ High | 3h |
| 2 | BreadcrumbList | All pages | ⭐⭐⭐⭐ Medium | 2h |
| 3 | Organization (sameAs) | Homepage only | ⭐⭐⭐ Medium | 30min |
| 4 | FAQPage | Eligibility + Study Material | ⭐⭐⭐ Medium | 1h |
| 5 | Event (Results/Admit Cards) | All results & admit card posts | ⭐⭐ Medium | 2h |
| 6 | CollectionPage | All hub pages | ⭐⭐ Medium | 1h |
| 7 | WebPage | All remaining pages | ⭐ Low | 1h |

---

*Document Version: 1.0 | Updated: July 2026*