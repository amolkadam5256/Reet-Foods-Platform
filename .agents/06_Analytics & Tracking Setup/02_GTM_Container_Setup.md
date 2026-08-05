# SearchSarkariNaukri — Google Tag Manager (GTM) Master Setup Guide

**Project:** SearchSarkariNaukri
**Document type:** GTM Implementation, Configuration & Migration Reference
**Status:** Active / Production

---

## 1. Container Information

| Item           | Value                               |
| -------------- | ----------------------------------- |
| Account        | searchsarkarinaukri                 |
| Website        | https://www.searchsarkarinaukri.com |
| Container Name | www.searchsarkarinaukri.com         |
| Container ID   | `GTM-TC789H5W`                      |
| Environment    | Production                          |
| Status         | Active                              |

---

## 2. Repository Folder Structure

```
docs/
  accounts/
    google/
      GOOGLE_TAG_MANAGER.md
exports/
  gtm/
    gtm-production-import.json
    gtm-production.json
    README.md
```

**Rules:**

- Never hand-edit the exported JSON files.
- Always re-export immediately after every publish.
- Store every export under `exports/gtm/` — never overwrite prior versions.

---

## 3. Export Files

| File                                     | Purpose                               |
| ---------------------------------------- | ------------------------------------- |
| `exports/gtm/gtm-production-import.json` | Clean import-ready container snapshot |
| `exports/gtm/gtm-production.json`        | Full raw export of the live container |

These represent the complete enterprise GTM configuration and are the source of truth for rollback/versioning.

---

## 4. Installation Snippets

### 4.1 Head (paste immediately inside `<head>`)

```html
<!-- Google Tag Manager -->
<script>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-TC789H5W");
</script>
<!-- End Google Tag Manager -->
```

### 4.2 Body (immediately after `<body>`)

```html
<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-TC789H5W"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe>
</noscript>
<!-- End Google Tag Manager -->
```

### 4.3 Next.js (App Router)

In `app/layout.tsx`:

- Insert the head script into the `<head>` (e.g. via `next/script` with `strategy="afterInteractive"` or a custom `<Head>` component).
- Insert the noscript iframe as the first child of `<body>`.
- Deploy and confirm firing via GTM Preview mode.

---

## 5. Import Strategy

1. Open **Google Tag Manager**.
2. Go to **Container → Import Container**.
3. Select the file: `gtm-production-import.json`.
4. Choose Workspace: **Default Workspace**.
5. Import Mode:
   - **Merge** — _Recommended._ Use when adding to or updating an existing container.
   - **Overwrite** — Use **only** for brand-new, empty containers.
6. Click **Confirm** → review the diff → **Submit** → **Publish**.

> ⚠️ Always take a backup export of the current live container **before** importing.

---

## 6. Container Contents

The container currently manages:

- Google Analytics 4
- Google Ads
- Meta Pixel
- LinkedIn Insight Tag
- Microsoft Clarity
- Custom Events
- Conversion tracking
- Remarketing
- Data Layer
- Scroll tracking
- Form tracking
- Search tracking
- Video tracking
- Error tracking
- Outbound link tracking
- File download tracking

---

## 7. Built-in Variables to Enable

| Category     | Variables                                      |
| ------------ | ---------------------------------------------- |
| Page         | Page URL, Page Path, Hostname, Referrer        |
| Clicks       | Click Classes, Click ID, Click URL, Click Text |
| Forms        | Form Classes, Form ID                          |
| Scroll/Video | Scroll Depth, Video Status, Video Percent      |
| Errors       | Error Message, Error URL                       |

---

## 8. Data Layer Variables (DLVs)

```
page_location      page_title        page_path
content_name       content_category  content_type
cta_text           destination       goal
service            search_term       search_string
form_type          form_name         form_location
lead_type          platform          currency
value              error_type        status_code
method
```

---

## 9. Standard Events

```
page_view          job_view          job_search
job_apply          login             register
newsletter_signup  whatsapp_click    phone_call
contact_click      cta_click         scroll_depth
video_progress     file_download     search
filter             share             bookmark
error              api_error
```

**Job-portal-specific custom events to add:**
`admit_card_download`, `result_view`, `notification_click`, `answer_key_download`, `syllabus_view`, `download_pdf`

---

## 10. Triggers

Page View · DOM Ready · Window Loaded · All Pages · History Change · Element Visibility · Scroll Depth · Timer · Click · Form Submission · Custom Event · YouTube

---

## 11. Tag Inventory

- GA4 Configuration
- GA4 Events
- Meta Pixel
- Google Ads (Conversion Tracking)
- Remarketing
- LinkedIn Insight
- Microsoft Clarity
- Custom HTML
- Consent Mode

---

## 12. Naming Conventions

| Type                     | Prefix       |
| ------------------------ | ------------ |
| Tags — GA4               | `GA4 -`      |
| Tags — Meta              | `META -`     |
| Tags — Google Ads        | `ADS -`      |
| Tags — LinkedIn          | `LINKEDIN -` |
| Tags — Microsoft Clarity | `MS -`       |
| Variables — Data Layer   | `DLV -`      |
| Variables — Constant     | `CONST -`    |
| Variables — JS           | `JS -`       |
| Variables — URL          | `URL -`      |
| Triggers — Event         | `EV -`       |
| Triggers — Page View     | `PV -`       |
| Triggers — Click         | `CLK -`      |
| Triggers — Form          | `FORM -`     |
| Triggers — Scroll        | `SCROLL -`   |

**Folder organization:** Analytics · Advertising · Conversions · SEO · Testing

---

## 13. Publishing Workflow

```
Workspace
   ↓
Preview
   ↓
Fix Errors
   ↓
Submit
   ↓
Version Name
   ↓
Publish
   ↓
Export JSON
   ↓
Commit to Git
```

---

## 14. Versioning Policy

- Export JSON after **every** publish.
- Store under `exports/gtm/` with incrementing version labels (`v1`, `v2`, `v3`, `v4`, …).
- Never overwrite an old version — each export is a permanent rollback point.

---

## 15. Preview / QA Testing

```
Preview
   ↓
Connect Website
   ↓
Verify:
  - Tags Fired
  - Variables populated correctly
  - Data Layer pushes correct
  - Network Requests firing
  - No Console Errors
```

Cross-check in each platform's own debugger:

- GA4 → DebugView
- Meta Pixel → Meta Pixel Helper (Chrome extension)
- Google Ads → Tag Assistant / Conversion diagnostics
- Microsoft Clarity → Live session verification

---

## 16. Production Checklist

- [ ] GTM snippet installed (head + body)
- [ ] Container imported (Merge mode)
- [ ] Preview mode passed with no errors
- [ ] All tags fire correctly
- [ ] GA4 working (DebugView confirms events)
- [ ] Meta Pixel working (Pixel Helper confirms)
- [ ] Google Ads conversions working
- [ ] Microsoft Clarity working
- [ ] Custom events firing (job_search, job_apply, etc.)
- [ ] Consent Mode configured
- [ ] Publish complete with version notes
- [ ] Export saved to `exports/gtm/`
- [ ] Git commit made

---

## 17. Maintenance Schedule

**Weekly**

- Review failed tags
- Check for firing errors
- Run a fresh Preview session

**Monthly**

- Clean up unused/stale variables
- Remove deprecated tags
- Optimize trigger conditions
- Backup container (fresh JSON export)

---

## 18. Notes on Uploaded/Legacy Container Files

Several additional container export files were reviewed during migration planning (staging, dev, backup, and prior import versions). A few had UTF-8 BOM encoding, which must be stripped (decode as `utf-8-sig`) before they can be parsed or diffed programmatically. Recommended handling:

1. Re-save any BOM-affected JSON as plain UTF-8 before diffing against production.
2. Treat `gtm-production-import.json` as canonical for imports — it was the only fully-parseable, clean version among the reviewed files (22 variables, 26 tags, 25 triggers).
3. Retire `gtm-dev.json`, `gtm-staging.json`, and older `gtm-import-v*.json` files from active use once production is confirmed stable; archive them, don't delete.
4. Source lineage: these exports trace back to a third-party "Recommended Analytics Container" template (Growthik Media), later customized for SearchSarkariNaukri's job-portal event set.

---

## 19. Recommended Folder Structure (Target State)

```
Analytics
Advertising
Forms
Engagement
Jobs
Debug
Utilities
```

This is a slightly more granular evolution of the current five-folder structure (Analytics / Advertising / Conversions / SEO / Testing) and is recommended once the container's tag count grows past the current 26.

---

## 20. Next Steps

1. Confirm GTM snippet is live on all page templates (home, job listing, job detail, admit card, result).
2. Import `gtm-production-import.json` using Merge mode into the working container.
3. Run full Preview-mode QA against the checklist in Section 16.
4. Publish as a versioned release with clear notes (e.g. "v1.0 — Initial GA4 + Meta + Ads + Clarity rollout").
5. Cross-validate live data in GA4, Search Console, Meta Events Manager, and Google Ads within 24–48 hours.
6. Schedule the first weekly maintenance review.

---

## 21. Related Documentation

- `GOOGLE_ANALYTICS.md`
- `GOOGLE_SEARCH_CONSOLE.md`
- `GOOGLE_ADS.md`
- `LOOKER_STUDIO.md`
- `BIGQUERY.md`
- `exports/gtm/README.md`
- `exports/gtm/gtm-production-import.json`
- `exports/gtm/gtm-production.json`

---

### Scope Note

This guide consolidates the official container documentation with the migration roadmap for SearchSarkariNaukri. It reflects only what is present in the reviewed container exports and documentation — no tags, triggers, or variables have been assumed beyond what was verified.

# Developer Instructions — Google Tag Manager (GTM)

## Project

**SearchSarkariNaukri**

---

## Objective

Implement the Google Tag Manager container on the website and ensure all analytics, marketing, and conversion tracking are working correctly.

---

## Tasks

### 1. Install GTM

- Add the GTM `<script>` inside the `<head>`.
- Add the `<noscript>` iframe immediately after the opening `<body>` tag.
- Container ID: `GTM-TC789H5W`

---

### 2. Import GTM Container

Import:

```
exports/gtm/gtm-production-import.json
```

- Workspace: **Default**
- Import Mode: **Merge** (Recommended)
- Do **not** use **Overwrite** unless the container is completely empty.

---

### 3. Verify Installation

Confirm:

- GTM loads on every page.
- Preview Mode connects successfully.
- No JavaScript errors.
- Container publishes successfully.

---

### 4. Verify Tracking

Ensure the following are firing correctly:

- GA4
- Google Ads
- Meta Pixel
- LinkedIn Insight
- Microsoft Clarity

---

### 5. Verify Events

Confirm tracking for:

- page_view
- job_view
- job_search
- job_apply
- login
- register
- whatsapp_click
- phone_call
- contact_click
- file_download
- search
- scroll_depth
- video_progress

---

### 6. Verify Data Layer

Ensure required Data Layer values are available:

- page_location
- page_title
- page_path
- content_name
- form_name
- form_type
- lead_type
- search_term
- value
- currency

---

### 7. Testing

Run GTM Preview Mode and verify:

- Tags Fired
- Triggers
- Variables
- Data Layer
- Network Requests
- No Console Errors

Also verify:

- GA4 DebugView
- Meta Events Manager
- Google Ads Diagnostics
- Microsoft Clarity

---

### 8. Publish

After successful testing:

1. Submit the workspace.
2. Publish a new version.
3. Add release notes.
4. Export the updated container.

Save exports in:

```
exports/gtm/
```

---

### 9. Git

Commit:

- Updated GTM export
- Documentation changes
- Release notes

---

## Deliverables

The following must be completed before closing the task:

- ✅ GTM installed
- ✅ Container imported
- ✅ Preview passed
- ✅ All tags firing
- ✅ GA4 receiving events
- ✅ Meta Pixel working
- ✅ Google Ads conversions working
- ✅ Microsoft Clarity recording
- ✅ Container published
- ✅ JSON export saved
- ✅ Git commit completed

---

## Reference Files

- `docs/accounts/google/GOOGLE_TAG_MANAGER.md`
- `exports/gtm/gtm-production-import.json`
- `exports/gtm/gtm-production.json`
