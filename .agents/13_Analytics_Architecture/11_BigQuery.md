# 11_BigQuery.md
# BigQuery Enterprise Data Warehouse Architecture — Reet Foods & Giftings

---

## SECTION 1 — BigQuery Architecture & Dataset Schema

### Dataset ID
`reetfoods_analytics`

### Tables & Exports
1. `ga4_events_*` — Daily full event exports from GA4
2. `ga4_intraday_*` — Streaming real-time event tables
3. `gsc_search_data` — Daily Google Search Console performance data
4. `meta_capi_logs` — Server-side CAPI event delivery logs

---

## SECTION 2 — Key SQL Queries for Business Analytics

### 1. B2B Corporate Lead Attribution by City & Landing Page
```sql
SELECT
  geo.city AS city,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') AS landing_page,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'lead_type') AS lead_type,
  COUNT(1) AS total_leads
FROM
  `reetfoods_analytics.analytics_XXXXXXXXX.events_*`
WHERE
  event_name IN ('generate_lead', 'phone_call_click', 'whatsapp_click')
  AND _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY))
  AND FORMAT_DATE('%Y%m%d', CURRENT_DATE())
GROUP BY
  city, landing_page, lead_type
ORDER BY
  total_leads DESC;
```

### 2. Full Checkout Funnel Conversion Rate
```sql
SELECT
  COUNT(DISTINCT CASE WHEN event_name = 'view_item' THEN user_pseudo_id END) AS item_views,
  COUNT(DISTINCT CASE WHEN event_name = 'add_to_cart' THEN user_pseudo_id END) AS cart_adds,
  COUNT(DISTINCT CASE WHEN event_name = 'begin_checkout' THEN user_pseudo_id END) AS checkout_starts,
  COUNT(DISTINCT CASE WHEN event_name = 'purchase' THEN user_pseudo_id END) AS purchases,
  ROUND(COUNT(DISTINCT CASE WHEN event_name = 'purchase' THEN user_pseudo_id END) * 100.0 / 
        NULLIF(COUNT(DISTINCT CASE WHEN event_name = 'view_item' THEN user_pseudo_id END), 0), 2) AS overall_conversion_rate_pct
FROM
  `reetfoods_analytics.analytics_XXXXXXXXX.events_*`
WHERE
  _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY));
```

---

## SECTION 3 — Data Retention & Cost Optimization

- Partition all custom analytical tables by `DATE(event_timestamp)`.
- Cluster tables by `event_name` and `user_pseudo_id`.
- Set automatic table expiration on `events_intraday_*` after 3 days to optimize BigQuery storage costs.

---

*References: 00_Analytics_Master.md, 10_Looker_Studio.md, 12_Attribution_Model.md*
