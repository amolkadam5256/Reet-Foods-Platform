# Google Search Console Verification & Google Tag Setup

**Primary Domain:** reetfoodsngiftings.com  
**Google Search Console Verification Token:** `google-site-verification=DPxYyQPNikU9BiIBScyDNBoP0iQVCV8_Epnfr9ktfss`  
**Google Tag (GA4 Measurement ID):** `G-CNBH2V6Y6T`

---

## 1. Google Search Console Verification

### Method A: DNS TXT Record (Recommended by Search Console)

Add the following TXT record to your domain DNS configuration at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

| Field | Value |
|---|---|
| **Type** | `TXT` |
| **Host / Name** | `@` (or leave blank for root domain) |
| **Value / Content** | `google-site-verification=DPxYyQPNikU9BiIBScyDNBoP0iQVCV8_Epnfr9ktfss` |
| **TTL** | Default / Auto / 3600 |

### Method B: HTML Meta Tag Verification (Built into Website Code)

The website layout (`app/layout.tsx`) includes the metadata verification tag automatically:
```html
<meta name="google-site-verification" content="DPxYyQPNikU9BiIBScyDNBoP0iQVCV8_Epnfr9ktfss" />
```
Once deployed, you can click **Verify** on Google Search Console using either Domain or URL Prefix method.

---

## 2. Google Tag / Google Analytics 4 (GA4) Integration

The Google tag (`G-CNBH2V6Y6T`) is configured inside `app/layout.tsx` using Next.js `next/script` component:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CNBH2V6Y6T"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CNBH2V6Y6T');
</script>
```

---

## 3. Configuration Status

- Standardized target domain across all metadata, OpenGraph, JSON-LD schemas, sitemap, and robots configuration: **`https://reetfoodsngiftings.com`**.
- Removed all legacy domain references (`reetfoods.com`, `reetfoods.in`).
- Verified zero references to unrelated domains (`reetfoodsngiftings.com`).
