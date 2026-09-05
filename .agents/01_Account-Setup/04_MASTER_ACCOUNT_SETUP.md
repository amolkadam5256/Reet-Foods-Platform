# 03 — Account & Platform Setup Registry

## 3.1 Overview

Every account, webmaster profile, analytics property, and social channel must be formally created, DNS/meta verified, documented, secured with Multi-Factor Authentication (2FA), and configured for automated reporting.

---

## 3.2 Google Platform Accounts Checklist

### 1. Google Search Console (GSC)

- **URL:** https://search.google.com/search-console
- **Property Type:** Domain Property `reetfoodsngiftings.com`
- **Verification Method:** DNS TXT Record (`google-site-verification=DPxYyQPNikU9BiIBScyDNBoP0iQVCV8_Epnfr9ktfss`) & HTML Meta Tag
- **Connected Properties:** Google Analytics 4 (`G-CNBH2V6Y6T`)
- **Configuration Checklist:**
  - [x] Create Domain property.
  - [x] Verify via DNS TXT record & HTML Meta Tag in `app/layout.tsx`.
  - [x] Submit master sitemap index `sitemap.xml`.
  - [x] Set target country to **India**.
  - [x] Enable email alerts for manual actions and security issues.

### 2. Google Analytics 4 (GA4)

- **URL:** https://analytics.google.com
- **Property Name:** Reet Foods & Gifting
- **Measurement ID:** `G-CNBH2V6Y6T`
- **Data Stream:** Web Stream `https://reetfoodsngiftings.com`
- **Configuration Checklist:**
  - [x] Create GA4 property and web stream.
  - [x] Deploy measurement ID via Next.js `<Script>` in `app/layout.tsx`.
  - [x] Enable enhanced measurement (Scrolls, Outbound Clicks, Site Search, File Downloads).
  - [x] Set data retention to **14 months**.
  - [x] Mark custom conversion events (`inquiry_submit`, `whatsapp_click`).
  - [x] Link to Google Search Console.

### 3. Google Tag Manager (GTM)

- **URL:** https://tagmanager.google.com
- **Container ID:** `GTM-XXXXXXX` (Web Container)
- **Tags Configured:** GA4 Configuration, GA4 Custom Events, Clarity Script, Meta Pixel.

### 4. Additional Google Properties

- **Google Business Profile (GBP):** Verified business profile under _Reet Foods and Giftings_ (Hinjewadi Phase I, Pune).
- **Google Looker Studio:** Real-time executive performance dashboard connecting GSC and GA4 APIs.
- **Google Workspace / Contact:** Primary business email `reetfoodspune@gmail.com`.

---

## 3.3 Microsoft & Apple Platforms Checklist

### 1. Bing Webmaster Tools

- **URL:** https://www.bing.com/webmasters
- **Verification:** GSC Import / CNAME verification.
- **Sitemaps:** XML sitemap `sitemap.xml` submitted.
- **IndexNow API:** Deployed key for instant URL indexation.

### 2. Microsoft Clarity

- **URL:** https://clarity.microsoft.com
- **Installed via:** Layout Script / GTM Tag.
- **Features Active:** Session recordings, heatmaps, scroll depth, dead click tracking.

### 3. Bing Places & Apple Business Connect

- Verified brand entity profiles ensuring Siri, Apple Maps, and Bing local search presence.

---

## 3.4 Social Media Channels Checklist

| Platform        | Channel / Profile URL                           | Verification Status | Primary Content Focus                    |
| --------------- | ----------------------------------------------- | ------------------- | ---------------------------------------- |
| **WhatsApp**    | `https://wa.me/919225130732`                    | Active Channel      | Direct corporate orders & inquiries      |
| **Facebook**    | `https://facebook.com/reetfoodsgifting`         | Active              | Product highlights & festive hampers     |
| **Instagram**   | `https://instagram.com/reetfoodsgifting`        | Active              | Visual product catalog & unboxing reels  |
| **LinkedIn**    | `https://linkedin.com/company/reetfoodsgifting` | Active              | Corporate gifting solutions & OEM        |
| **X (Twitter)** | `https://x.com/reetfoods`                       | Active              | Brand updates & announcements            |
| **YouTube**     | `https://youtube.com/@reetfoods`                | Active              | Hamper showcases & manufacturing process |

---

## 3.5 Account Security & Access Documentation Template

| Platform Account          | Account Owner  | Primary Login Email       | 2FA Method        | Access Level | Recovery Email            | Last Audit Date |
| ------------------------- | -------------- | ------------------------- | ----------------- | ------------ | ------------------------- | --------------- |
| **Google Search Console** | Admin          | `reetfoodspune@gmail.com` | Authenticator App | Owner        | `reetfoodspune@gmail.com` | 2026-08-06      |
| **GA4 & GTM**             | Analytics Lead | `reetfoodspune@gmail.com` | Authenticator App | Admin        | `reetfoodspune@gmail.com` | 2026-08-06      |
| **Bing Webmaster**        | SEO Lead       | `reetfoodspune@gmail.com` | Authenticator App | Owner        | `reetfoodspune@gmail.com` | 2026-08-06      |
