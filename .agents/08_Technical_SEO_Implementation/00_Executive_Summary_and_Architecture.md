# 00 — Executive Summary & Website Architecture Blueprint

**Website:** https://reetfoodsngiftings.com  
**Framework:** Next.js (App Router), TypeScript, Tailwind CSS  
**Target Search Engines:** Googlebot, Bingbot, Google AI Overviews, ChatGPT Search, Perplexity AI, Claude, Gemini  
**Date:** August 2026  

---

## 1. Executive Summary

This manual provides an enterprise-level Technical SEO Implementation Audit and Architectural Blueprint for **Reet Foods & Gifting**.

### Key Technical Deficiencies Identified:
1. **Client-Side Hydration Overhead (`app/(site)/page.tsx`):** The primary homepage component is flagged with `"use client"`, forcing React to hydrate large JavaScript bundles on the client browser. This causes TTFB and LCP delays and reduces initial HTML content visibility for fast-crawling bots.
2. **Modular Schema Injection:** Structured data components (`OrganizationSchema.tsx`, `ProductSchema.tsx`) rely on client-side script injection (`next/script afterInteractive`) rather than server-rendered inline JSON-LD `<script type="application/ld+json">`.
3. **Missing HTTP Security Headers:** Response headers lack `Strict-Transport-Security` (HSTS), `Content-Security-Policy` (CSP), `X-Frame-Options`, and `Permissions-Policy` in `next.config.js`.
4. **Dynamic Sitemap Coverage:** The dynamic sitemap (`app/sitemap.ts`) only references static paths, omitting dynamic blog articles and granular product collection URLs.
5. **AI Crawler Access Directives:** `robots.txt` lacks explicit directives for modern AI search crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`).

---

## 2. Website Architecture & SILO Hierarchy

```
                                ┌─────────────────────────────────────────┐
                                │         REET FOODS ROOT LEVEL (/)       │
                                └────────────────────┬────────────────────┘
                                                     │
         ┌──────────────────┬────────────────────────┼────────────────────────┬──────────────────┐
         ▼                  ▼                        ▼                        ▼                  ▼
┌─────────────────┐┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐┌──────────────────┐
│ Hub 1:          ││ Hub 2:           │    │ Hub 3:           │    │ Hub 4:           ││ Hub 5:           │
│ Corporate       ││ Festive & Event  │    │ Single Nuts &    │    │ Artisanal        ││ Knowledge &      │
│ Gifting (B2B)   ││ Gifting          │    │ Dry Fruits       │    │ Chocolates       ││ Content Hub      │
└────────┬────────┘└────────┬─────────┘    └────────┬─────────┘    └────────┬─────────┘└────────┬─────────┘
         │                  │                       │                       │                   │
  ├── Welcome Kits   ├── Diwali Hampers      ├── Cashews (W240/W320)├── Handcrafted Bars├── Blog Articles
  ├── Client Gifts   ├── New Year Hampers    ├── Mamra Almonds       ├── Chocolate Dragees├── Buying Guides
  ├── Executive Boxes├── Wedding Favors      ├── Roasted Pistachios  ├── Gift Boxes      ├── FAQ Database
  ├── Budget Tiers   ├── Return Gifts        ├── Kashmiri Walnuts    └── Bulk Tins       ├── Case Studies
  └── Geo Landing    └── Rakhi & Eid         └── Ajwa Dates                              └── Quality Specs
```

---

## 3. URL Structure & Pattern Rules

To ensure 100% crawl efficiency and clean canonical signals:

| Route Type | URL Pattern Standard | Example URL | Canonical Rule |
|------------|──────────────────────|-------------|----------------|
| **Homepage** | `/` | `https://reetfoodsngiftings.com/` | Self-referential |
| **Category Hub** | `/products` | `https://reetfoodsngiftings.com/products` | Self-referential |
| **Product Detail** | `/products/[slug]` | `https://reetfoodsngiftings.com/products/cashews` | Self-referential |
| **B2B Pillar** | `/corporate-gifting` | `https://reetfoodsngiftings.com/corporate-gifting` | Self-referential |
| **B2B Budget Tier** | `/corporate-gifting/[tier]` | `https://reetfoodsngiftings.com/corporate-gifting/under-500` | Self-referential |
| **Geo Landing Page** | `/corporate-gifting-[city]` | `https://reetfoodsngiftings.com/corporate-gifting-pune` | Self-referential |
| **Blog Pillar** | `/blog` | `https://reetfoodsngiftings.com/blog` | Self-referential |
| **Blog Article** | `/blog/[slug]` | `https://reetfoodsngiftings.com/blog/mamra-vs-california-almonds` | Self-referential |

### Technical Slug Standards:
- Lowercase alphanumeric characters only (`a-z`, `0-9`).
- Use hyphens (`-`) as word separators; never use underscores (`_`) or spaces.
- No trailing slashes (enforced via Next.js `trailingSlash: false`).
- Strip session IDs, tracking tokens (`?utm_*`), and filter parameters from canonical URLs.
