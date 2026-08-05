# MICROSOFT_CLARITY.md

# Microsoft Clarity Implementation Guide

## Project

**SearchSarkariNaukri**

Website

```
https://www.searchsarkarinaukri.com
```

---

# Objective

Implement Microsoft Clarity on the website to record user sessions, generate heatmaps, analyze user behavior, identify usability issues, and improve website performance.

---

# Project Information

| Item          | Value                               |
| ------------- | ----------------------------------- |
| Project Name  | SearchSarkariNaukri                 |
| Website       | https://www.searchsarkarinaukri.com |
| Platform      | Next.js 15/16                       |
| Environment   | Production                          |
| Tracking Tool | Microsoft Clarity                   |

---

# Clarity Project ID

```
xrks90vf6t
```

---

# Installation Method

Manual Installation

Microsoft recommends adding the tracking script inside the HTML `<head>` section.

---

# Tracking Code

```html
<script type="text/javascript">
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "xrks90vf6t");
</script>
```

---

# Developer Tasks

## Task 1

Install Microsoft Clarity.

---

## Task 2

Add the tracking script inside the global `<head>` section.

Do **NOT** install it on individual pages.

It must load on every page.

---

## Next.js Implementation

### App Router

Install globally.

File

```
app/layout.tsx
```

or

Use

```
next/script
```

Example

```tsx
import Script from "next/script";

<Script id="microsoft-clarity" strategy="afterInteractive">
  {`
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);
    t.async=1;
    t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xrks90vf6t");
`}
</Script>;
```

---

# Deployment

Deploy the production website after implementation.

---

# Verification

Open

Microsoft Clarity

↓

Project

↓

Settings

↓

Verify Installation

Data may take up to **2 hours** to appear after installation.

---

# Test Checklist

Verify

- Script loads successfully
- No JavaScript errors
- Clarity script loads only once
- No duplicate tracking
- Script loads on every page
- HTTPS pages only
- Works on Desktop
- Works on Mobile
- Works on Tablet

---

# Features Expected

After successful installation Microsoft Clarity will automatically provide

- Session Recordings
- Heatmaps
- Click Tracking
- Scroll Tracking
- Rage Click Detection
- Dead Click Detection
- Quick Back Detection
- Excessive Scrolling
- User Journey Analysis
- Device Reports
- Browser Reports
- Operating System Reports
- Country Reports
- JavaScript Error Reports
- User Engagement Metrics

---

# Pages to Verify

Confirm Clarity is recording on

- Home Page
- Job Listing Pages
- Job Detail Pages
- Search Results
- Admit Card Pages
- Result Pages
- Answer Key Pages
- Syllabus Pages
- Contact Page
- About Page
- Login Page
- Register Page

---

# QA Checklist

Developer must verify

- Homepage Recording
- Job Listing Recording
- Job Detail Recording
- Search Recording
- Form Recording
- Scroll Recording
- Click Recording
- Mobile Recording
- Desktop Recording

---

# Privacy

Microsoft Clarity masks sensitive information automatically.

Ensure the following are never exposed

- Passwords
- OTP
- Credit Card Details
- Bank Details
- Aadhaar Number
- PAN Number
- Personal Identification Information

If custom sensitive fields exist, configure additional masking.

---

# Performance

Verify

- No impact on Core Web Vitals
- No layout shift
- No blocking scripts
- Script loads asynchronously
- No console warnings
- No failed network requests

---

# Integration

Recommended integrations

- Google Analytics 4
- Google Tag Manager
- Google Ads
- Microsoft Bing Webmaster Tools
- Looker Studio

---

# Deliverables

Developer must complete

- ✅ Clarity Script Installed
- ✅ Global Installation
- ✅ Production Deployment
- ✅ Verification Successful
- ✅ Session Recordings Active
- ✅ Heatmaps Active
- ✅ Click Tracking Working
- ✅ Scroll Tracking Working
- ✅ Mobile Tracking Working
- ✅ Desktop Tracking Working
- ✅ No Console Errors
- ✅ No Duplicate Scripts

---

# Maintenance

Weekly

- Check Recordings
- Review Rage Clicks
- Review Dead Clicks
- Review JavaScript Errors
- Verify Script Status

Monthly

- Analyze Heatmaps
- Review User Journey
- Identify UX Issues
- Improve High Exit Pages
- Optimize Conversion Funnel

---

# Related Documentation

- GOOGLE_ANALYTICS.md
- GOOGLE_TAG_MANAGER.md
- GOOGLE_SEARCH_CONSOLE.md
- BING_WEBMASTER_TOOLS.md
- LOOKER_STUDIO.md
- SEO_AUDIT.md

---

# Expected Output

After implementation, Microsoft Clarity will provide:

- Complete session recordings for visitors
- Click heatmaps and scroll heatmaps
- User interaction analysis
- Rage click and dead click detection
- Device and browser insights
- User behavior analytics
- UX issue identification
- Performance improvement opportunities
- Conversion optimization insights
- Actionable data to improve the SearchSarkariNaukri user experience
