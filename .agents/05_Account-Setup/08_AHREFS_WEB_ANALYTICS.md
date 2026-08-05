# AHREFS_WEB_ANALYTICS.md

# Ahrefs Web Analytics Implementation

## Project

**SearchSarkariNaukri**

Website

```
https://www.searchsarkarinaukri.com
```

---

# Objective

Install **Ahrefs Web Analytics** on the website and verify that it is collecting website traffic data.

This task is limited to **Ahrefs Web Analytics installation only**.

---

# Important

The implementation must **only add Ahrefs Web Analytics**.

Do **NOT**:

- Remove any existing scripts
- Replace any existing analytics
- Modify any existing tracking
- Modify SEO settings
- Modify metadata
- Modify robots.txt
- Modify sitemap.xml
- Modify structured data
- Modify canonical URLs
- Modify Open Graph tags
- Modify verification tags
- Change existing website functionality

Only add the Ahrefs tracking code.

---

# Tracking Information

Tracking Key

```
919y6hluTnHUSCJOOQsUpg
```

Tracking Script

```html
<script
  src="https://analytics.ahrefs.com/analytics.js"
  data-key="919y6hluTnHUSCJOOQsUpg"
  async
></script>
```

---

# Installation

Add the above tracking script inside the global `<head>` section so that it loads on every page of the website.

Only one instance of the script should exist.

---

# Alternative Installation (Google Tag Manager)

If the project manages analytics through Google Tag Manager, create a **Custom HTML Tag** using the following code.

```html
<script>
  var ahrefs_analytics_script = document.createElement("script");
  ahrefs_analytics_script.async = true;
  ahrefs_analytics_script.src = "https://analytics.ahrefs.com/analytics.js";
  ahrefs_analytics_script.setAttribute("data-key", "919y6hluTnHUSCJOOQsUpg");
  document.getElementsByTagName("head")[0].appendChild(ahrefs_analytics_script);
</script>
```

Trigger

```
Initialization – All Pages
```

Publish the container after testing.

---

# Verification

After deployment

1. Open Ahrefs
2. Go to **Web Analytics**
3. Click **Verify Installation**
4. Wait until the status changes to **Installed**

---

# Validation Checklist

Verify that

- Tracking script is loaded.
- Script loads only once.
- Script is available on every page.
- No duplicate tracking exists.
- No JavaScript errors occur.
- No console errors occur.
- No existing analytics are affected.

---

# Expected Analytics

After successful installation Ahrefs should begin reporting

- Visitors
- Sessions
- Page Views
- Top Pages
- Referring Websites
- Traffic Sources
- Countries
- Devices
- Browsers
- Operating Systems
- UTM Campaigns (if used)

---

# Deliverables

- ✅ Ahrefs Web Analytics Installed
- ✅ Tracking Verified
- ✅ Script Loading Successfully
- ✅ No Duplicate Script
- ✅ No Errors
- ✅ Existing Analytics Unchanged
- ✅ Existing SEO Configuration Unchanged
- ✅ Existing Tracking Unchanged

---

# Rollback

If any issue occurs

- Remove only the Ahrefs Web Analytics script.
- Verify that the website functions normally.
- Ensure all existing analytics continue to work.

No other changes should be made.

---

# Success Criteria

The task is complete when:

- Ahrefs reports the installation as **Verified**.
- Traffic data begins appearing in Ahrefs.
- No existing analytics, SEO settings, or website functionality have been modified.
