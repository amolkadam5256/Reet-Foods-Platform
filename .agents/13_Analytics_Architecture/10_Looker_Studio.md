# 10_Looker_Studio.md
# Looker Studio Executive & Tactical Dashboards — Reet Foods & Giftings

---

## SECTION 1 — Dashboard Suite Overview

The Looker Studio reporting suite consists of 10 customized dashboard pages connecting to GA4, BigQuery, Google Ads, Search Console, and Meta Ads.

```
 Looker Studio Master Suite
 ├── 01. Executive Overview Dashboard (Revenue, Leads, ROAS, Top Channels)
 ├── 02. SEO Performance Dashboard (GSC Queries, Organic Landing Pages, City Ranks)
 ├── 03. Paid Ads Dashboard (Google Ads + Meta Ads ROAS, CPA, Spend)
 ├── 04. B2B Corporate Leads Dashboard (Quote Forms, Phone Calls, WhatsApp Leads)
 ├── 05. E-commerce Sales & Funnel Dashboard (Checkout Funnel, AOV, Product Performance)
 ├── 06. Content & Blog Performance Dashboard (Traffic, Scroll Depth, Assisted Leads)
 ├── 07. Local SEO & Map Pack Dashboard (Google Maps Clicks, Hinjewadi / City Performance)
 ├── 08. CRO & User Friction Dashboard (Clarity Rage Clicks, Dead Clicks, Form Drop-off)
 ├── 09. Technical Health Dashboard (CWV, Page Speeds, 404 Errors, JS Exceptions)
 └── 10. AI Search Visibility Dashboard (Gemini / ChatGPT Referred Traffic & Citations)
```

---

## SECTION 2 — Executive Dashboard Blueprint (Page 1)

### Header KPI Scorecards
1. **Total Revenue (INR):** `SUM(ecommerce.value)` | YoY & MoM % Change
2. **Total Corporate Leads:** `COUNT(generate_lead) + COUNT(phone_call_click) + COUNT(whatsapp_click)`
3. **Blended ROAS:** `Total Revenue / Total Ad Spend (Google + Meta)`
4. **Blended CPA (Per B2B Lead):** `Total Ad Spend / Total Leads`

### Main Visualizations
- **Time Series Line Chart:** Daily Revenue & Lead Volume (Breakdown by Channel Grouping).
- **Bar Chart:** Top 10 Revenue-Generating Products & Top 10 B2B Lead City Origins.
- **Pie Chart:** Lead Source Attribution (Organic Search, Paid Search, Meta Ads, Direct, Referral).

---

## SECTION 3 — B2B Lead Dashboard Blueprint (Page 4)

- **Map Visualizer:** Geographic distribution of leads across Pune, Mumbai, Delhi, Bangalore, etc.
- **Table Component:** Lead Details (Timestamp, Lead Type, City, Corporate Size, Page Referrer, Contact Channel).
- **Funnel Visualization:** Visitors → Quote Form Impression → Quote Form Start → Quote Form Submit.

---

*References: 00_Analytics_Master.md, 11_BigQuery.md, 19_KPI_Dashboard.md*
