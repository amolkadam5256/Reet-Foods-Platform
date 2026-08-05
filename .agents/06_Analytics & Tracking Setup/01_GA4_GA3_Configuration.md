# Google Analytics 4 (GA4) Setup Guide

**Project:** SearchSarkariNaukri

**Website**
https://www.searchsarkarinaukri.com

---

# Document Information

| Item         | Value              |
| ------------ | ------------------ |
| Platform     | Google Analytics 4 |
| Status       | In Progress        |
| Priority     | High               |
| Environment  | Production         |
| Created By   | Growthik Media     |
| Last Updated | 24 July 2026       |

---

# Account Details

## Account Name

SearchSarkariNaukri

## Property Name

searchsarkarinaukri

## Platform

Web

## Stream Name

searchsarkarinaukri

## Website URL

https://www.searchsarkarinaukri.com

## Stream ID

15312333814

## Measurement ID

G-GGE1EC2V8F

---

# Objective

Google Analytics is used to collect website traffic, user behaviour, engagement, conversions, and SEO performance.

After implementation it should measure

- Page Views
- Sessions
- Users
- New Users
- Scroll Tracking
- Click Tracking
- Outbound Links
- File Downloads
- Form Submissions
- Search Queries
- Custom Events
- Conversions

---

# Prerequisites

Before implementation ensure

- Google Analytics Property Created
- Website Live
- HTTPS Enabled
- Admin Access Available
- Source Code Access
- GitHub Repository Access
- Deployment Access
- Vercel Access (if applicable)

---

# Implementation Method

This project uses

Next.js App Router

Do NOT use plugins.

Implement directly in the application.

---

# Step 1

Open project

```
SearchSarkariNaukri
```

---

# Step 2

Navigate to

```
app/layout.tsx
```

or

```
app/layout.jsx
```

---

# Step 3

Import Script

```tsx
import Script from "next/script";
```

---

# Step 4

Inside the `<head>` section add

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-GGE1EC2V8F"
  strategy="afterInteractive"
/>
```

---

# Step 5

Immediately below add

```tsx
<Script id="google-analytics" strategy="afterInteractive">
  {`
window.dataLayer = window.dataLayer || [];

function gtag(){
dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-GGE1EC2V8F');
`}
</Script>
```

---

# Step 6

Final layout should look like

```tsx
<html lang="en">
  <head>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-GGE1EC2V8F"
      strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
      {`
window.dataLayer = window.dataLayer || [];

function gtag(){
dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-GGE1EC2V8F');

`}
    </Script>
  </head>

  <body>{children}</body>
</html>
```

---

# Step 7

Save

Commit

Push

Deploy

---

# Step 8

After deployment

Visit

https://www.searchsarkarinaukri.com

---

# Step 9

Open

Developer Tools

Network Tab

Filter

```
collect
```

You should see

```
https://www.google-analytics.com/g/collect
```

If present

Analytics is working.

---

# Step 10

Install

Google Tag Assistant

Refresh website

Verify

Google Analytics

Measurement ID

```
G-GGE1EC2V8F
```

---

# Step 11

Open Google Analytics

Realtime Report

Visit website

Within a few seconds you should see

```
1 Active User
```

---

# Enhanced Measurement

Enable

- Page Views
- Scroll
- Outbound Clicks
- Site Search
- File Downloads
- Video Engagement
- Form Interactions

---

# Recommended Custom Events

Track

```
job_search

job_view

job_apply

ad_click

download_notification

share_job

bookmark_job

newsletter_signup

contact_submit

login

register

```

---

# Recommended Conversions

Mark these as conversions

- Registration
- Login
- Job Apply
- Newsletter Signup
- Contact Form
- WhatsApp Click
- Telegram Join

---

# Connect Services

Connect

- Google Search Console
- Google Ads
- Google Tag Manager
- BigQuery
- Looker Studio

---

# Internal Traffic Filter

Exclude

Office IP

Development Server

Localhost

Testing Environment

---

# Debug Mode

Install

Google Analytics Debugger

Enable DebugView

Verify every event

---

# Verification Checklist

| Task                     | Status |
| ------------------------ | ------ |
| Account Created          | ✅     |
| Property Created         | ✅     |
| Stream Created           | ✅     |
| Measurement ID Generated | ✅     |
| Script Installed         | ⬜     |
| Website Deployed         | ⬜     |
| Realtime Working         | ⬜     |
| Events Received          | ⬜     |
| Search Console Connected | ⬜     |
| Google Ads Connected     | ⬜     |
| BigQuery Connected       | ⬜     |
| Looker Studio Connected  | ⬜     |
| Custom Events Added      | ⬜     |
| Conversions Configured   | ⬜     |

---

# Common Errors

## No Data Received

Possible reasons

- Script missing
- Wrong Measurement ID
- Deployment pending
- JavaScript error
- Ad Blocker
- CSP Blocking
- Wrong environment
- Cache issue

---

# Troubleshooting

Verify

1. Script exists in HTML

2. Network request sent

3. Realtime active

4. Measurement ID correct

5. HTTPS working

6. Website accessible

7. Browser console has no errors

---

# Maintenance

Weekly

- Check Realtime
- Check Events
- Check Conversions
- Check Traffic Sources

Monthly

- Audit Events
- Remove Unused Events
- Verify Links
- Update Documentation

---

# Change Log

| Date        | Version | Changes               |
| ----------- | ------- | --------------------- |
| 24 Jul 2026 | 1.0     | Initial Documentation |

---

# Related Documents

docs/05-search-console.md

docs/06-analytics.md

docs/07-technical-seo.md

docs/accounts/google/GOOGLE_TAG_MANAGER.md

docs/accounts/google/GOOGLE_SEARCH_CONSOLE.md
