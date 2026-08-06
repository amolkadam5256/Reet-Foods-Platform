# 09_Search_Console.md
# Google Search Console Integration & SEO Analytics — Reet Foods & Giftings

---

## SECTION 1 — Search Console Integration Map

- **Property URL:** `https://reetfoodsngiftings.com/` (Domain Property)
- **GA4 Association:** Linked directly to GA4 Data Stream
- **BigQuery Export:** Bulk Search Console Data Export enabled (Target Dataset: `reetfoods_gsc_raw`)

---

## SECTION 2 — Key SERP Metrics & Monitoring Thresholds

| Metric | Target / Benchmark | Monitoring Cadence | Action if Benchmark Missed |
|--------|-------------------|------------------- |----------------------------|
| **Brand CTR** ("Reet Foods") | > 35% | Weekly | Optimize meta title / snippet, add Organization schema |
| **Local Commercial CTR** ("corporate gifts pune") | > 8% | Weekly | Rewrite title to include "Hinjewadi / Pune Same-Day Delivery" |
| **Top 10 City Page Indexing** | 100% Indexed | Daily | Resubmit via Indexing API, fix canonical/internal links |
| **Rich Results Eligibility** | 0 Errors | Weekly | Fix schema syntax in LocalBusiness, FAQPage, Product schema |
| **Core Web Vitals (Mobile)** | > 90% Good URLs | Monthly | Optimize image sizes, remove render-blocking JS |

---

## SECTION 3 — Query Clustering & Landing Page Mapping

Map Search Console query performance into strategic buckets:

1. **Brand Queries:** `reet foods`, `reet foods gifting`, `reet foods pune`
2. **Local B2B Intent:** `corporate gifts pune`, `corporate gifts hinjewadi`, `corporate hampers mumbai`
3. **Product Intent:** `dry fruit gift box`, `luxury diwali hampers`, `wedding return gift boxes`
4. **Informational Queries:** `corporate gifting budget ideas`, `gst rules on corporate gifts`

---

*References: 00_Analytics_Master.md, 10_Looker_Studio.md, 11_BigQuery.md*
