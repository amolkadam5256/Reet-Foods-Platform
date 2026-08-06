# 00 — Executive Summary & Page Inventory Audit

**Website:** https://reetfoodsngiftings.com  
**Scope:** Comprehensive Page-by-Page On-Page SEO Blueprint & Scorecard Matrix  
**Date:** August 2026  

---

## 1. Executive Summary

This manual provides an enterprise-level On-Page SEO, Content, Schema, AI Search (LLM), and Conversion Rate Optimization (CRO) specification for **Reet Foods & Gifting**. 

### Primary On-Page Audit Findings:
1. **Homepage Client Hydration Constraint:** `app/(site)/page.tsx` is configured as a `"use client"` component, causing initial server HTML payload to lack structured static content, hurting Google LCP (Core Web Vitals) and crawl efficiency.
2. **Title & Meta Description Inconsistencies:** Meta titles on secondary routes lack standardized target keywords ("corporate gift hampers pune", "buy dry fruits online india") and brand suffixes.
3. **JSON-LD Schema Execution:** Organization and Product schemas are injected via client-side `next/script` tags (`afterInteractive`), which can be missed by fast search engine crawlers. Schema must be rendered directly in initial server JSX.
4. **Header Tag Hierarchy:** Missing single `<h1>` tag on specific landing pages, and duplicate `<h2>` tags across product grids.
5. **Image Alt Text & Next `<Image>` Usage:** Product images rely on unoptimized `<img>` tags missing descriptive alt text, dimensions, and priority flags for above-the-fold assets.

---

## 2. Master Page Inventory & Intent Classification

| Page Route | Page Type | Search Intent | Funnel Stage | Primary Conversion Goal | SEO Priority | Current Status |
|------------|-----------|---------------|--------------|-------------------------|--------------|----------------|
| `/` | Homepage | Brand / Transactional | Awareness / Purchase | Bulk Quote / Shop Click | CRITICAL | Needs Server Component Refactor |
| `/about` | About | Informational / Trust | Consideration | E-E-A-T Trust Building | HIGH | Needs Team/Facility Photos |
| `/contact` | Contact | Transactional / Local | Decision | Form Submission / Call | HIGH | Needs Map & GSTIN Display |
| `/corporate-gifting` | B2B Pillar | Transactional | Purchase | Bulk RFQ / Catalog Download | CRITICAL | Needs Price Calculator |
| `/products` | Category Hub | Commercial | Consideration | Product Browsing | HIGH | Needs Rich Category Filters |
| `/products/cashews` | Product Page | Transactional | Purchase | Add to Cart / Inquiry | HIGH | Needs Grade W240 Specs |
| `/products/almonds` | Product Page | Transactional | Purchase | Add to Cart / Inquiry | HIGH | Needs Mamra Almond Specs |
| `/products/pistachios` | Product Page | Transactional | Purchase | Add to Cart | MEDIUM | Needs Roasted Salted Specs |
| `/products/walnuts` | Product Page | Transactional | Purchase | Add to Cart | MEDIUM | Needs Kashmiri Walnut Specs |
| `/products/dates` | Product Page | Transactional | Purchase | Add to Cart | MEDIUM | Needs Ajwa Date Specs |
| `/products/raisins` | Product Page | Transactional | Purchase | Add to Cart | MEDIUM | Needs Seedless Raisin Specs |
| `/products/chocolates` | Category | Commercial | Consideration | Cart / Inquiry | MEDIUM | Needs Handcrafted Specs |
| `/privacy-policy` | Policy | Informational | Trust | Compliance | LOW | Active |
| `/terms` | Policy | Informational | Trust | Compliance | LOW | Active |

---

## 3. Page Scorecard Matrix

| Page Route | SEO Score (0-100) | Content Score | UX Score | CWV Score | AI Readiness | E-E-A-T | CRO Score | Overall Grade | Priority |
|------------|-------------------|---------------|----------|-----------|--------------|---------|-----------|---------------|----------|
| `/` | 62/100 | 68/100 | 75/100 | 55/100 | 45/100 | 60/100 | 65/100 | C+ | CRITICAL |
| `/about` | 68/100 | 70/100 | 78/100 | 80/100 | 50/100 | 62/100 | 55/100 | C+ | HIGH |
| `/contact` | 75/100 | 72/100 | 80/100 | 85/100 | 60/100 | 70/100 | 70/100 | B- | HIGH |
| `/corporate-gifting` | 65/100 | 65/100 | 70/100 | 60/100 | 48/100 | 58/100 | 62/100 | C+ | CRITICAL |
| `/products` | 60/100 | 58/100 | 72/100 | 65/100 | 42/100 | 55/100 | 58/100 | C | HIGH |
| `/products/cashews` | 58/100 | 55/100 | 70/100 | 70/100 | 40/100 | 52/100 | 60/100 | C | HIGH |
| `/products/almonds` | 58/100 | 55/100 | 70/100 | 70/100 | 40/100 | 52/100 | 60/100 | C | HIGH |
