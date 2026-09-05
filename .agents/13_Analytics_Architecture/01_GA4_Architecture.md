# 01_GA4_Architecture.md

# Google Analytics 4 Architecture — Reet Foods & Giftings

---

## SECTION 1 — GA4 Property & Stream Configuration

### Property Setup

- **Property Name:** Reet Foods & Giftings - Production
- **Reporting Timezone:** India (GMT+05:30)
- **Currency:** Indian Rupee (INR - ₹)
- **Data Retention:** 14 Months (Max allowed for event data)
- **Google Signals:** Enabled (for cross-device demographic & remarketing data)
- **Granular Location & Device Data:** Enabled

### Data Stream

- **Stream Name:** Reet Foods Web Stream
- **Stream URL:** `https://reetfoodsngiftings.com`
- **Stream ID:** `G-XXXXXXXXXX`

---

## SECTION 2 — Enhanced Measurement Configuration

| Feature           | Status   | Configuration Details                                                       |
| ----------------- | -------- | --------------------------------------------------------------------------- |
| Page views        | ENABLED  | Standard page view tracking on route changes                                |
| Scrolls           | ENABLED  | Threshold at 90% vertical scroll                                            |
| Outbound clicks   | ENABLED  | Tracks clicks to external links, social profiles, external maps             |
| Site search       | ENABLED  | Search term query parameters: `q`, `s`, `search`, `keyword`                 |
| Video engagement  | ENABLED  | JS API tracking for embedded YouTube product showcases                      |
| File downloads    | ENABLED  | Extensions: `pdf`, `xlsx`, `csv`, `zip`, `docx` (e.g., catalogue downloads) |
| Form interactions | DISABLED | **Manual GTM tracking used instead** to prevent duplicate lead counts       |

---

## SECTION 3 — Key Event (Conversion) Declarations

In GA4, key business interactions must be marked as **Key Events**:

| Event Name           | Description                                | Business Type | Priority   |
| -------------------- | ------------------------------------------ | ------------- | ---------- |
| `purchase`           | Completed online transaction               | E-commerce    | P1 (Macro) |
| `generate_lead`      | Submitted corporate quote or contact form  | B2B           | P1 (Macro) |
| `phone_call_click`   | Clicked phone link (+91 9225130732)        | Local / B2B   | P1 (Macro) |
| `whatsapp_click`     | Clicked WhatsApp button (+91 9225130732)   | Local / B2B   | P1 (Macro) |
| `catalogue_download` | Downloaded corporate gifting catalogue PDF | B2B Micro     | P2 (Micro) |
| `begin_checkout`     | Entered checkout funnel                    | E-commerce    | P2 (Micro) |
| `add_to_cart`        | Added product to cart                      | E-commerce    | P3 (Micro) |

---

## SECTION 4 — Audiences & User Segments

### 1. High-Value Corporate Buyers (B2B Intent)

- **Condition:** Triggered `generate_lead` OR `catalogue_download` OR `whatsapp_click` with `lead_type = corporate`.
- **Use Case:** Google Ads & Meta retargeting with corporate bulk-gifting offers.

### 2. High-Intent Cart Abandoners

- **Condition:** Triggered `add_to_cart` or `begin_checkout` AND did NOT trigger `purchase` within 7 days.
- **Use Case:** Dynamic retargeting campaigns with festival discount offers.

### 3. Pune & Maharashtra Local Audience

- **Condition:** Geo location = Pune / Maharashtra OR visited `/corporate-gifts/pune/` / `/corporate-gifts/hinjewadi/`.
- **Use Case:** Local SEO & local Google Ads audience targeting.

### 4. Repeat Corporate Buyers

- **Condition:** `purchase` count > 1 OR `generate_lead` count > 1.
- **Use Case:** Loyalty email marketing & festive pre-order campaigns.

---

## SECTION 5 — Data Privacy, Consent Mode v2 & Exclusions

### Consent Mode v2 Setup

- **Default State (Before User Choice):**
  - `ad_storage`: `denied`
  - `analytics_storage`: `denied`
  - `ad_user_data`: `denied`
  - `ad_personalization`: `denied`
- **Updated State (After Consent Granted):**
  - Update all parameters to `granted` via GTM consent listener.

### Referral Exclusions & Domain Settings

- **Unwanted Referrals Exclusions:**
  - `paytm.com`, `razorpay.com`, `billdesk.com`, `phonepe.com` (Payment Gateways)
  - `secure.ccavenue.com`
- **Internal Traffic Filters:**
  - Rule Name: `Internal_Office_IP`
  - Filter IP: Office/Store IP addresses (Hinjewadi Store & Factory)
  - Action: Exclude traffic matching `traffic_type = internal`.

---

## SECTION 6 — BigQuery Integration

- **Dataset ID:** `reetfoods_ga4_raw`
- **Frequency:** Daily Export + Continuous Streaming
- **Included Options:** Include advertising identifiers (Mobile ID / User ID)
- **Tables Created:**
  - `events_YYYYMMDD` (Daily full export)
  - `events_intraday_YYYYMMDD` (Real-time streaming export)

---

_References: 00_Analytics_Master.md, 02_GTM_Architecture.md, 11_BigQuery.md, 20_Developer_Implementation.md_
