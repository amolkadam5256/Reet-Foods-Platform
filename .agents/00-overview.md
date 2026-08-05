# Website Tracking Setup — Overview

**Domain:** reetfoodsngiftings.com
**Google Tag ID:** G-CNBH2V6Y6T
**Google Tag Manager ID:** GTM-PM6DPLVF

This folder contains step-by-step instructions for your developer to fully set up
Google Search Console verification, the Google tag (gtag.js), and Google Tag
Manager (GTM) on the website.

## Files in this package

| File | Purpose |
|---|---|
| `01-domain-verification.md` | Verify domain ownership in Google Search Console via DNS TXT record |
| `02-google-tag-gtag.md` | Install the base Google tag (gtag.js) directly on the site |
| `03-google-tag-manager.md` | Install Google Tag Manager (GTM) container code |

## Recommended order of implementation

1. **Domain verification first** (`01-domain-verification.md`) — proves ownership
   to Google so Search Console data is trusted and accessible.
2. **Choose ONE tag installation method:**
   - Option A: Install the **Google tag (gtag.js)** directly (`02-google-tag-gtag.md`) — simpler, good if you only need Google Analytics/Ads.
   - Option B: Install **Google Tag Manager** (`03-google-tag-manager.md`) — recommended if you plan to manage multiple tags (Analytics, Ads, Facebook Pixel, etc.) without code changes each time.

> ⚠️ **Important:** Do not install both gtag.js directly AND load the same
> Google tag again through Tag Manager — this causes duplicate/double-counted
> data. If you use GTM, configure the Google Analytics tag *inside* GTM instead
> of pasting the gtag.js snippet in the HTML.

## Quick checklist for the developer

- [ ] Add DNS TXT record for domain verification
- [ ] Click "Verify" in Google Search Console
- [ ] Decide: gtag.js direct install OR Google Tag Manager
- [ ] Add chosen snippet(s) to every page template (ideally in a shared header/footer include, not per-page)
- [ ] Add GTM `<noscript>` snippet right after `<body>` (GTM only)
- [ ] Deploy to production
- [ ] Test using GTM Preview mode or GA4 Realtime reports
- [ ] Confirm "Container quality" / tag status shows data received (may take a few hours)

## Notes on EEA / Consent Mode

If the site has visitors from the European Economic Area (EEA), Google recommends
setting up **Consent Mode** so ads personalization and measurement continue to
work correctly while respecting user consent choices. See:
https://support.google.com/tagmanager/answer/12811173
