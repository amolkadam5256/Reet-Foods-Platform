# 17 — International & Multilingual SEO Audit

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026  

---

## 17.1 Target Market & Geographical Scope

- **Primary Target Market:** India (Domestic B2B & B2C)
- **Secondary Target Market:** NRI (Non-Resident Indian) Gifting into India (US, UAE, UK, Canada sending gifts to families/corporates in India)
- **Current Target Language:** English (`en`)

---

## 17.2 International SEO Infrastructure Audit

| Technical Component | Status | Recommendation |
|---------------------|--------|----------------|
| `hreflang` tags | Not Configured | Not required currently (single language site) |
| Language Tag (`<html lang="en">`) | Present | Ensure correct locale tag (`en-IN` or `en`) |
| Geo-targeting in Google Search Console | Default (Unset) | Target India as main geographic area |
| Currency Handling | INR (₹) | Clear display; consider multi-currency display for NRI buyers |
| CDN Edge Delivery | Vercel Edge / Cloudflare | Fast global routing |

---

## 17.3 Recommendations for International / NRI Audience

1. **Locale Metadata:** Update `html lang` attribute in `layout.tsx` to `en-IN` or set default meta region to `IN`.
2. **NRI Gifting Landing Pages:**
   - Create targeted content for global NRIs sending Diwali/wedding gifts to India:
     - Title: *"Send Festive Gift Hampers to India | Reet Foods"*
     - Payment Gateways: Ensure international credit card support (Stripe / Razorpay International).
3. **Geo-Specific Schema:** Ensure `PostalAddress` in `Organization` schema explicitly includes `"addressCountry": "IN"`.
