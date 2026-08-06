# 17_Debugging.md
# Data Quality & Debugging SOP — Reet Foods & Giftings

---

## SECTION 1 — Tooling & Environment Setup

| Tool | Debugging Target | Chrome Extension / Access |
|------|------------------|---------------------------|
| **GA4 DebugView** | Real-time GA4 event validation | Enable via GTM Preview Mode or Chrome Extension `Google Analytics Debugger` |
| **GTM Tag Assistant** | Tag firing order, dataLayer inspector | `tagassistant.google.com` |
| **Meta Pixel Helper** | Meta Pixel event payloads & warnings | Chrome Extension `Meta Pixel Helper` |
| **Meta Test Events Tool** | Server-side CAPI event deduplication (`event_id`) | Events Manager -> Test Events -> Enter Test Code |
| **Google Tag Assistant Syntax** | Google Ads Conversion tags & Linker | `tagassistant.google.com` |

---

## SECTION 2 — Step-by-Step Debugging Workflows

### 1. GA4 DebugView Workflow
1. Open GTM Tag Assistant and connect to `https://reetfoodsngiftings.com?gtm_debug=true`.
2. Perform test action (e.g. click WhatsApp button or submit Hinjewadi quote form).
3. Open GA4 -> Admin -> DebugView.
4. Verify event `generate_lead` or `whatsapp_click` appears within 10 seconds.
5. Click event to inspect parameters (`city_location`, `lead_type`, `user_data`).

### 2. Meta CAPI Deduplication Test Workflow
1. Obtain Meta Test Event Code (e.g. `TEST12345`) from Meta Events Manager.
2. Pass `test_event_code` in payload to `/api/capi`.
3. Submit test purchase or lead on website.
4. Verify Meta Events Manager shows BOTH **Browser** (Pixel) and **Server** (CAPI) events received.
5. Confirm Meta displays status: **Deduplicated** (using matching `event_id`).

---

*References: 02_GTM_Architecture.md, 07_Conversion_API.md, 18_QA_Checklist.md*
