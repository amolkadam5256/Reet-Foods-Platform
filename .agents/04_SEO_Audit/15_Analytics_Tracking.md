# 15 — Analytics & Tracking Audit

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026  

---

## 15.1 Measurement & Tracking Status

| Platform | Tracking ID | Status | Issues Identified |
|----------|-------------|--------|-------------------|
| Google Analytics 4 (GA4) | `G-CNBH2V6Y6T` | ⚠️ Inactive / No Data Received | Script injection strategy sub-optimal; stream alert |
| Google Tag Manager (GTM) | `GTM-5B7Q8P4N` | Active | GTM container loaded via `next/script` |
| Microsoft Clarity | `q0q2y3x4z5` | Active | Loaded in `app/layout.tsx` |
| Meta Pixel | N/A | Missing | Not integrated |

---

## 15.2 Critical GA4 Issue Analysis

**Issue Statement:**  
Google Analytics stream details for `https://reetfoodsngiftings.com` indicate: *"No data received in past 48 hours."*

### Root Cause Analysis:
1. **Script Placement & Execution Strategy:** GA4 / GTM scripts rendered with `afterInteractive` in `app/layout.tsx` combined with Client Component hydration issues on `app/(site)/page.tsx` ("use client") cause race conditions during script execution.
2. **Measurement ID Mismatch:** Audit identified potential mismatch between direct GA4 snippet injection (`G-CNBH2V6Y6T`) and tags configured inside GTM.
3. **Ad Blockers / Content Security:** Lacking fallback script handling or server-side GTM setup.

---

## 15.3 Recommended Tracking Architecture

To ensure 100% reliable tracking compliance in Next.js App Router:

### Standardized `Analytics.tsx` Component
Use official `@next/third-parties/google` package for optimized script loading:

```tsx
// app/layout.tsx
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-CNBH2V6Y6T" />
        <GoogleTagManager gtmId="GTM-5B7Q8P4N" />
      </body>
    </html>
  );
}
```

---

## 15.4 Key Ecommerce & Lead Conversion Events

Ensure the following custom events are dispatched to GA4 & GTM:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `generate_lead` | Corporate Gifting form submission | `form_id`, `company_size`, `budget` |
| `select_item` | Click on Product Card | `item_id`, `item_name`, `item_category` |
| `view_item_list` | Browsing Corporate Products | `item_list_name` |
| `click_whatsapp` | Click on floating WhatsApp button | `page_location`, `button_text` |
| `download_catalog` | Catalog PDF download | `file_name` |

---

## 15.5 Verification Checklist

- [ ] Remove duplicate inline GA scripts from `layout.tsx` in favor of `@next/third-parties`.
- [ ] Verify GTM Container debug mode (Tag Assistant) against live domain.
- [ ] Verify `generate_lead` event firing upon successful contact submission.
- [ ] Implement Meta Pixel (Facebook Pixel) if paid social acquisition is planned.
