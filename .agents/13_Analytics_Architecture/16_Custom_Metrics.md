# 16_Custom_Metrics.md
# Custom Metrics Library — Reet Foods & Giftings

---

## SECTION 1 — Custom Metrics Registry

Register the following custom metrics in GA4 (`Admin -> Custom definitions -> Custom metrics`):

| Metric Name | Parameter Name | Scope | Unit of Measurement | Description |
|-------------|----------------|-------|---------------------|-------------|
| Estimated Quote Value | `estimated_quote_value` | Event | Currency (INR) | Estimated total value of corporate bulk quote requested |
| Bulk Unit Quantity | `estimated_unit_quantity` | Event | Standard (Integer) | Total number of units requested in bulk quote form |
| Catalogue Downloads Count | `catalogue_downloads_count` | Event | Standard (Integer) | Increment metric for PDF catalogue downloads |
| Phone Call Duration (Seconds) | `call_duration_seconds` | Event | Seconds | Duration of qualified phone call from call tracking |
| Cart Recovery Saved Value | `recovered_cart_value` | Event | Currency (INR) | Value of recovered cart via exit-intent or retargeting |

---

## SECTION 2 — Metric Formulation & Business Logic

### 1. Estimated Quote Value Calculation
`estimated_quote_value = estimated_unit_quantity * average_unit_price (₹1,000)`
- Example: 250 units bulk quote -> `estimated_quote_value = ₹2,50,000`

---

*References: 03_Event_Tracking.md, 15_Custom_Dimensions.md, 19_KPI_Dashboard.md*
