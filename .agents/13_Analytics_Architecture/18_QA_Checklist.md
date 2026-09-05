# 18_QA_Checklist.md

# Analytics QA & Verification Checklist — Reet Foods & Giftings

---

## SECTION 1 — GA4 & GTM Verification

- [ ] GTM container script installed in Next.js `head` and `body` without rendering blocking.
- [ ] GA4 measurement ID `G-XXXXXXXXXX` set as constant in GTM.
- [ ] Enhanced Measurement enabled (scrolls, outbound clicks, file downloads, site search).
- [ ] Data Retention set to 14 months in GA4 property settings.
- [ ] Google Signals enabled.
- [ ] Referral exclusions added for Razorpay, Paytm, CCAvenue, PhonePe gateways.
- [ ] Internal IP exclusion filter configured for Hinjewadi store & factory office IPs.
- [ ] Consent Mode v2 implemented with default `denied` state before user interaction.

---

## SECTION 2 — Event Tracking & Conversions Verification

- [ ] `purchase` marked as Key Event in GA4; verified with test transaction.
- [ ] `generate_lead` marked as Key Event; verified on B2B quote modal and contact form.
- [ ] `phone_call_click` marked as Key Event; fires on `tel:+919225130732` & `+918007518088`.
- [ ] `whatsapp_click` marked as Key Event; fires on WhatsApp buttons.
- [ ] `catalogue_download` marked as Key Event; fires on PDF download link.
- [ ] Full E-commerce dataLayer lifecycle (`view_item_list` -> `view_item` -> `add_to_cart` -> `begin_checkout` -> `purchase`) verified with numerical prices.

---

## SECTION 3 — Meta Pixel & CAPI Deduplication Verification

- [ ] Meta Pixel ID `123456789012345` configured in GTM and API.
- [ ] Advanced Matching passing hashed SHA-256 email and phone parameters.
- [ ] Server-Side CAPI endpoint `/api/capi` receiving and transmitting events to Meta Graph API v19.0.
- [ ] `event_id` payload matches 100% between browser pixel and server CAPI events.
- [ ] Meta Events Manager confirms zero duplicate events and EMQ score > 8.0/10.

---

## SECTION 4 — Google Ads & Clarity Verification

- [ ] Conversion Linker tag firing on all pages.
- [ ] Enhanced Conversions passing SHA-256 hashed customer data to Google Ads.
- [ ] Call tracking firing on phone clicks with 60s qualification threshold.
- [ ] Microsoft Clarity project connected and capturing recordings/heatmaps.
- [ ] Clarity session URL passed into GA4 custom dimension `clarity_session_url`.

---

## SECTION 5 — Dashboards & Warehouse Verification

- [ ] GA4 to BigQuery daily export dataset `reetfoods_analytics` active and receiving data.
- [ ] Looker Studio dashboards (Executive, SEO, Paid Ads, B2B Leads) built and displaying correct totals.
- [ ] All 20 custom event dimensions and 5 custom metrics registered in GA4 Admin.

---

_Sign-off required by Analytics Lead and Lead Developer before production launch._
