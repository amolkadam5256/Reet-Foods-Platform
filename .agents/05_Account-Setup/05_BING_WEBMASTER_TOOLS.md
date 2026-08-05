# Bing Webmaster Tools – Implementation Guide

## Project

**SearchSarkariNaukri**

Website:
https://www.searchsarkarinaukri.com/

---

# Objective

Verify the website in Bing Webmaster Tools, submit sitemaps, configure SEO settings, and ensure proper indexing and monitoring.

---

# Current Status

- Website Added
- Verification Status: ❌ Not Verified
- Verification Method: Meta Tag
- Meta Verification Code:

```html
<meta name="msvalidate.01" content="048D50336F4A7B374493EA0719557EAD" />
```

---

# Developer Tasks

## 1. Add Bing Verification Meta Tag

Add the following meta tag inside the `<head>` section of the website.

```html
<meta name="msvalidate.01" content="048D50336F4A7B374493EA0719557EAD" />
```

### Next.js

If using App Router, add it to:

```
app/layout.tsx
```

or

```
app/head.tsx
```

Example:

```tsx
export const metadata = {
  verification: {
    other: {
      "msvalidate.01": "048D50336F4A7B374493EA0719557EAD",
    },
  },
};
```

---

## 2. Deploy Website

Deploy the updated website to production.

---

## 3. Verify Website

After deployment

Open

Bing Webmaster Tools

↓

Click

**Verify**

---

# 4. Submit XML Sitemap

Submit the following sitemap(s):

```
https://www.searchsarkarinaukri.com/sitemap.xml
```

If multiple sitemaps exist, also submit:

```
/sitemap-index.xml
/jobs-sitemap.xml
/pages-sitemap.xml
/news-sitemap.xml
/images-sitemap.xml
```

(if available)

---

# 5. Configure Crawl Settings

Verify

- Crawl Status
- Robots.txt
- XML Sitemap
- HTTPS
- Canonical URLs

---

# 6. Indexing Audit

Verify

- Homepage Indexed
- Job Pages Indexed
- Category Pages Indexed
- Static Pages Indexed
- Blog Pages Indexed
- News Pages Indexed

---

# 7. SEO Audit

Check

- Title Tags
- Meta Descriptions
- Canonical Tags
- H1 Tags
- Structured Data
- Open Graph Tags
- Twitter Cards
- Robots Meta
- Breadcrumb Schema
- Organization Schema
- WebSite Schema

---

# 8. Performance Audit

Review

- Indexed Pages
- Crawl Errors
- Broken Links
- Redirect Errors
- Duplicate Pages
- Duplicate Titles
- Missing Meta Descriptions
- Missing Alt Tags
- Mobile Usability
- Core Web Vitals

---

# 9. URL Inspection

Inspect important URLs

- Homepage
- Job Listing Pages
- Job Detail Pages
- Admit Card Pages
- Result Pages
- Answer Key Pages
- Syllabus Pages
- Contact Page
- About Page

---

# 10. Security Review

Verify

- HTTPS Enabled
- SSL Certificate
- No Malware
- No Security Issues
- Safe Browsing Status

---

# 11. Monitor Reports

Review regularly

- Search Performance
- Indexed Pages
- Backlinks
- Internal Links
- Crawl Requests
- Crawl Errors
- SEO Recommendations
- Keyword Rankings

---

# Deliverables

Developer must ensure:

- ✅ Meta Tag Added
- ✅ Website Deployed
- ✅ Bing Verification Successful
- ✅ Sitemap Submitted
- ✅ Robots.txt Accessible
- ✅ XML Sitemap Accessible
- ✅ Homepage Indexed
- ✅ No Crawl Errors
- ✅ No Critical SEO Issues
- ✅ Performance Reports Enabled

---

# Related Documentation

- GOOGLE_SEARCH_CONSOLE.md
- GOOGLE_ANALYTICS.md
- GOOGLE_TAG_MANAGER.md
- ROBOTS.md
- SITEMAP.md
- SEO_AUDIT.md
