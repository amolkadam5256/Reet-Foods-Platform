# SEO, AEO, and GEO Implementation

Updated: 2026-08-29

## Metadata

- Root metadata is centralized around the production domain `https://reetfoodsngiftings.com`.
- Shared metadata helper: `components/seo/Metadata.tsx`.
- Canonicals are generated with `absoluteUrl()` from `lib/site.ts`.
- Open Graph and Twitter metadata use the site logo fallback unless a page provides a better image.

## Structured Data

Implemented helpers:

- Organization
- LocalBusiness
- Product
- CollectionPage
- Article/BlogPosting
- BreadcrumbList
- FAQPage

Schema now uses the central entity facts from `lib/site.ts` and avoids unsupported certifications or exaggerated claims.

## Local SEO / GEO

The site consistently anchors the business to:

- Reet Foods & Gifting
- Hinjewadi Phase I, Pune
- Maharashtra, India
- Corporate gifting, dry fruit boxes, chocolates, hampers, wedding return gifts
- PAN India delivery support

Root metadata includes geo tags for Pune.

## AEO

Improved answer-engine readiness through:

- More direct FAQ answers.
- Conservative, factual business descriptions.
- Consistent NAP and entity facts.
- Machine-readable business facts in schema and public JSON/LLM resources.
- Quote forms that capture intent, quantity, date, budget, and branding need.

## Internal Linking

The site has clear navigation between:

- Home
- Products
- Product categories
- Product details
- Corporate gifting
- Pune corporate gifting
- Blog
- Gallery
- FAQ
- Contact

Breadcrumb rendering was added to `SiteShell`.

## Content Rules

Avoid adding:

- Fake client counts.
- Fake delivered-box statistics.
- Unsupported ISO/HACCP/Vegetarian Society claims.
- Guaranteed cold-chain language.
- Unverified Belgian/organic sourcing claims.
- Fake awards, press, or reviews.

Use `BUSINESS_FACTS_TO_VERIFY.md` before restoring stronger claims.
