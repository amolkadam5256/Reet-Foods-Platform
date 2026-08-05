# 03 — Account & Platform Setup Registry

## 3.1 Overview

Every account, webmaster profile, analytics property, and social channel must be formally created, DNS/meta verified, documented, secured with Multi-Factor Authentication (2FA), and configured for automated reporting.

---

## 3.2 Google Platform Accounts Checklist

### 1. Google Search Console (GSC)
- **URL:** https://search.google.com/search-console
- **Property Type:** Domain Property `searchsarkarinaukri.com`
- **Verification Method:** DNS TXT Record (`google-site-verification=...`)
- **Connected Properties:** Google Analytics 4, Google Ads
- **Configuration Checklist:**
  - [x] Create Domain property.
  - [x] Verify via DNS TXT record.
  - [x] Submit master sitemap index `sitemap.xml`.
  - [x] Set target country to **India**.
  - [x] Enable email alerts for manual actions and security issues.

### 2. Google Analytics 4 (GA4)
- **URL:** https://analytics.google.com
- **Property Name:** SearchSarkariNaukri.com
- **Measurement ID:** `G-XXXXXXXXXX`
- **Data Stream:** Web Stream `https://www.searchsarkarinaukri.com`
- **Configuration Checklist:**
  - [x] Create GA4 property and web stream.
  - [x] Deploy measurement ID via GTM.
  - [x] Enable enhanced measurement (Scrolls, Outbound Clicks, Site Search, File Downloads).
  - [x] Set data retention to **14 months**.
  - [x] Mark custom conversion events (`apply_click`, `alert_signup`).
  - [x] Link to Google Search Console and Google Ads.

### 3. Google Tag Manager (GTM)
- **URL:** https://tagmanager.google.com
- **Container ID:** `GTM-XXXXXXX` (Web Container)
- **Tags Configured:** GA4 Configuration, GA4 Custom Events, Clarity Script, Meta Pixel, AdSense.

### 4. Google News Publisher Center
- **URL:** https://publishercenter.google.com
- **Publication Name:** SearchSarkariNaukri
- **Category:** Jobs & Education
- **News Sitemap:** `https://www.searchsarkarinaukri.com/sitemap-news.xml`
- **Configuration Checklist:**
  - [x] Create publication profile and submit publication logo.
  - [x] Configure 48-hour Google News sitemap URL.
  - [x] Submit for Google News inclusion review.

### 5. Additional Google Properties
- **Google Business Profile (GBP):** Verified service-area business profile under *SearchSarkariNaukri*.
- **Google Looker Studio:** Real-time executive performance dashboard connecting GSC and GA4 APIs.
- **Google Workspace:** Primary domain email `admin@searchsarkarinaukri.com` with enforced 2FA.

---

## 3.3 Microsoft & Apple Platforms Checklist

### 1. Bing Webmaster Tools
- **URL:** https://www.bing.com/webmasters
- **Verification:** GSC Import / CNAME verification.
- **Sitemaps:** All 12 XML sitemaps submitted.
- **IndexNow API:** Deployed key for instant URL indexation.

### 2. Microsoft Clarity
- **URL:** https://clarity.microsoft.com
- **Installed via:** GTM Tag.
- **Features Active:** Session recordings, heatmaps, scroll depth, dead click tracking.

### 3. Bing Places & Apple Business Connect
- Verified brand entity profiles ensuring Siri, Apple Maps, and Bing local search presence.

---

## 3.4 Social Media Channels Checklist

| Platform | Channel / Profile URL | Verification Status | Primary Content Focus |
|----------|----------------------|---------------------|-----------------------|
| **Telegram** | `https://t.me/searchsarkarinaukri` | Verified Channel | Instant real-time job notifications |
| **WhatsApp** | `https://whatsapp.com/channel/...` | Verified Channel | Daily job summary broadcast |
| **Facebook** | `https://facebook.com/searchsarkarinaukri` | Active | Job alerts, infographics, career guides |
| **Instagram** | `https://instagram.com/searchsarkarinaukri` | Active | Visual reels, exam dates, cutoff graphics |
| **LinkedIn** | `https://linkedin.com/company/searchsarkarinaukri` | Active | Industry recruitment analysis |
| **X (Twitter)** | `https://x.com/searchsarkari` | Active | Breaking exam news & result announcements |
| **YouTube** | `https://youtube.com/@searchsarkarinaukri` | Active | Syllabus breakdowns & apply guides |
| **Pinterest** | `https://pinterest.com/searchsarkarinaukri` | Active | Exam calendar pins & infographics |

---

## 3.5 Account Security & Access Documentation Template

| Platform Account | Account Owner | Primary Login Email | 2FA Method | Access Level | Recovery Email | Last Audit Date |
|------------------|---------------|---------------------|------------|--------------|----------------|-----------------|
| **Google Search Console** | Admin | `admin@searchsarkarinaukri.com` | Authenticator App | Owner | `recovery@searchsarkarinaukri.com` | 2026-07-23 |
| **GA4 & GTM** | Analytics Lead | `analytics@searchsarkarinaukri.com` | Authenticator App | Admin | `recovery@searchsarkarinaukri.com` | 2026-07-23 |
| **Cloudflare Enterprise** | Infra Lead | `infra@searchsarkarinaukri.com` | Hardware Key (YubiKey) | Super Admin | `recovery@searchsarkarinaukri.com` | 2026-07-23 |
| **Bing Webmaster** | SEO Lead | `seo@searchsarkarinaukri.com` | Authenticator App | Owner | `recovery@searchsarkarinaukri.com` | 2026-07-23 |
| **Telegram Channel** | Social Lead | `social@searchsarkarinaukri.com` | 2-Step Verification | Owner | `recovery@searchsarkarinaukri.com` | 2026-07-23 |
