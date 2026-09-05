# 00_Analytics_Master.md

# Enterprise Analytics & Measurement Architecture — Reet Foods & Giftings

---

## Executive Summary

**Business Name:** Reet Foods & Giftings  
**Domain:** https://reetfoodsngiftings.com  
**Primary Business:** Corporate Gifting, Premium Dry Fruits, Luxury Hampers, Wedding Gifts, Bulk Orders  
**Store Address:** Shop No. F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I, Pune – 411057  
**Factory Address:** Yashodevi Avenue, Building B2, Vishwashanti Colony No. 4, near Govind Garden, Pune – 411027  
**Phone:** +91 9890609611 / +91 8007518088 | **Email:** reetfoodspune@gmail.com  
**FSSAI Licence No.:** 21525083009881 | **GSTIN:** 27FHIPK0363N1ZX

This document serves as the master blueprint for the entire analytics, tracking, measurement, and data architecture for Reet Foods & Giftings.

---

## STEP 1 — Business KPI Discovery

### Primary Business Goals

1. **Drive B2B Corporate Gifting Quotes:** High-intent inquiries from IT companies in Hinjewadi/Pune, MNCs, and enterprise procurement teams across India.
2. **E-commerce Revenue Growth:** Direct-to-consumer and corporate online sales of dry fruit gift boxes, luxury hampers, and festival gift packs.
3. **Omnichannel Lead Generation:** Phone calls, WhatsApp inquiries, contact form submissions, and catalogue downloads.

### Core Conversion Hierarchy

| Goal Type            | Conversion Action                    | Target Metric                | Business Impact            |
| -------------------- | ------------------------------------ | ---------------------------- | -------------------------- |
| **Macro Conversion** | Online Purchase                      | Revenue, AOV                 | Direct E-commerce Sales    |
| **Macro Conversion** | Corporate Quote Request Form         | Lead Count, Deal Size        | High-Value B2B Pipeline    |
| **Macro Conversion** | Direct Phone Call (+91 9890609611)   | Call Volume, Duration        | Immediate Sales Conversion |
| **Macro Conversion** | WhatsApp Lead Click (+91 9890609611) | Chat Volume, Conversion Rate | Rapid Local Engagement     |
| **Micro Conversion** | Catalogue PDF Download               | Download Count               | Top-of-Funnel B2B Interest |
| **Micro Conversion** | Add to Cart / Begin Checkout         | Drop-off Rate, Cart Recovery | E-commerce Funnel Health   |
| **Micro Conversion** | Newsletter / Offer Signup            | Subscriber Count             | Nurture Campaign Base      |

---

## SECTION 2 — Measurement Ecosystem Architecture

```
                                    [ USER INTERACTION ]
                                             │
                       ┌─────────────────────┴─────────────────────┐
                       ▼                                           ▼
             [ Client-Side (GTM) ]                        [ Server-Side (Next.js Edge) ]
                       │                                           │
         ┌─────────────┼──────────────┐                            │
         ▼             ▼              ▼                            ▼
      [ GA4 ]    [ Meta Pixel ]  [ Clarity ]              [ Meta CAPI (Server) ]
         │             │                                           │
         ▼             └───────────────────┬───────────────────────┘
  [ BigQuery Export ]                      ▼
         │                      [ Data Deduplication ]
         ▼
[ Looker Studio Dashboards ]
```

---

## SECTION 3 — Core Platform Matrix

| Platform                  | Primary Function                              | Primary KPIs                               | Key Integration Point              |
| ------------------------- | --------------------------------------------- | ------------------------------------------ | ---------------------------------- |
| **GA4**                   | Traffic, behavior, e-commerce, user journeys  | Sessions, Conversions, LTV, ROAS           | GTM + BigQuery Native Export       |
| **GTM**                   | Tag orchestration, trigger management         | Container versioning, tag health           | Next.js `Script` + dataLayer       |
| **Meta Pixel & CAPI**     | Paid social attribution, dynamic retargeting  | Purchases, B2B Leads, EMQ score            | Dual Client + Server Deduplication |
| **Google Ads**            | Paid search attribution, enhanced conversions | Conversions, CPA, ROAS                     | GTM + Enhanced Conversion Hashing  |
| **Microsoft Clarity**     | Session replays, heatmaps, UX diagnostics     | Dead clicks, rage clicks, scroll depth     | Direct GTM Tag                     |
| **Google Search Console** | Organic search performance, index status      | Clicks, Impressions, CTR, Position         | GA4 + BigQuery Linking             |
| **BigQuery**              | Raw data warehouse, advanced SQL modeling     | LTV, churn, custom multi-touch attribution | Daily/Streaming GA4 Export         |
| **Looker Studio**         | Business reporting dashboards                 | Revenue, Leads, ROAS, Local SERP Rank      | BigQuery + GA4 Direct Connector    |

---

## SECTION 4 — 12-Month Analytics & Optimization Roadmap

### Month 1: Foundation & Infrastructure

- [x] Deploy GTM Container (`GTM-XXXXXXX`) via Next.js `Script`.
- [x] Configure GA4 Property, Web Data Stream, Enhanced Measurement, and Consent Mode v2.
- [x] Implement standard dataLayer events for all page views, clicks, and form submissions.
- [x] Set up Microsoft Clarity tag and connect to GA4.

### Month 2: Enhanced E-commerce & Server-Side Tracking

- [ ] Implement full GA4 Enhanced E-commerce dataLayer (`view_item`, `add_to_cart`, `purchase`).
- [ ] Deploy Meta Pixel & Server-Side Conversion API (CAPI) with SHA-256 hashing and deduplication.
- [ ] Set up Google Ads Enhanced Conversions and call tracking.

### Month 3: BigQuery & Looker Studio Dashboards

- [ ] Enable GA4 to BigQuery daily export pipeline.
- [ ] Build Executive, SEO, Paid Ads, B2B Lead, and Local SERP dashboards in Looker Studio.
- [ ] Configure custom dimensions and user properties in GA4.

### Months 4–6: Funnel Optimization & CRO Diagnostics

- [ ] Establish CRO baseline in Clarity (heatmaps, rage clicks, exit intent).
- [ ] Run A/B tests on Hinjewadi corporate quote form and checkout funnel.
- [ ] Perform data validation audit across GTM, GA4, Meta CAPI, and Google Ads.

### Months 7–12: Advanced Attribution & Predictive Modeling

- [ ] Implement custom multi-touch attribution model in BigQuery.
- [ ] Build predictive churn and repeat-purchase models for corporate clients.
- [ ] Conduct quarterly data privacy, consent mode, and analytics architecture reviews.

---

_References: 01_GA4_Architecture.md, 02_GTM_Architecture.md, 20_Developer_Implementation.md_
