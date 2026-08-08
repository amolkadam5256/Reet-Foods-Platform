# Bing Webmaster Tools – Implementation Guide

## Project

**Reet Foods & Gifting**

Website:
https://reetfoodsngiftings.com/

---

# Objective

Verify the website in Bing Webmaster Tools, submit sitemaps, configure SEO settings, and ensure proper indexing and monitoring.

---

# Current Status

- Website Added
- Verification Status: ✅ Configured
- Verification Methods: Meta Tag & `BingSiteAuth.xml`
- Meta Verification Code:

```html
<meta name="msvalidate.01" content="67F3216EA312D76D6A20E765AEA31CC4" />
```

---

# Developer Tasks

## 1. Add Bing Verification Meta Tag

Added meta tag inside `app/layout.tsx` metadata and `public/BingSiteAuth.xml`:

```html
<meta name="msvalidate.01" content="67F3216EA312D76D6A20E765AEA31CC4" />
```

### Next.js Layout Configuration

In `app/layout.tsx`:

```tsx
export const metadata = {
  verification: {
    google: "DPxYyQPNikU9BiIBScyDNBoP0iQVCV8_Epnfr9ktfss",
    other: {
      "msvalidate.01": "67F3216EA312D76D6A20E765AEA31CC4",
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
https://www.reetfoodsngiftings.com/sitemap.xml
```

If multiple sitemaps exist, also submit:

```
/sitemap-index.xml
/products-sitemap.xml
/pages-sitemap.xml
/blog-sitemap.xml
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
- Product Pages Indexed
- Category Pages Indexed
- Static Pages Indexed
- Blog Pages Indexed
- Gallery Pages Indexed

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
- Products Page
- Product Detail Pages
- Product Category Pages
- Corporate Gifting Pages
- Gallery Pages
- Blog Pages
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
