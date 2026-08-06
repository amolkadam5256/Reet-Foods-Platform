# Yandex Webmaster Verification & Implementation Guide

## Project

**Reet Foods & Gifting**

Website

```
https://reetfoodsngiftings.com
```

---

# Objective

Verify ownership of the website in **Yandex Webmaster** using the HTML verification file `public/yandex_7aa57418186c0be0.html`.

---

# Verification Information

Verification ID

```
7aa57418186c0be0
```

HTML File Name

```
public/yandex_7aa57418186c0be0.html
```

File Content

```html
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>Verification: 7aa57418186c0be0</body>
</html>
```

---

# Recommended Verification Method

✅ Meta Tag Verification

Reason

- Fastest
- Safest
- No DNS propagation delay
- No additional files
- Easy maintenance
- No impact on existing implementation

---

# Developer Tasks

## Task 1

Add the following meta tag inside the global `<head>` section.

```html
<meta name="yandex-verification" content="09463710b0a1a1f7" />
```

---

## Next.js

### App Router

Update

```
app/layout.tsx
```

or

the global metadata configuration.

Example

```tsx
export const metadata = {
  verification: {
    other: {
      "yandex-verification": "09463710b0a1a1f7",
    },
  },
};
```

Do not replace any existing verification metadata.

Simply add the Yandex verification alongside the existing ones.

---

# Task 2

Deploy the website.

---

# Task 3

Open

Yandex Webmaster

↓

Click

Verify

---

# Verification Checklist

Confirm

- Meta tag exists
- Meta tag appears inside `<head>`
- Website deployed successfully
- No build errors
- No hydration errors
- Verification successful

---

# Alternative Verification Methods

These methods are **NOT required** unless Meta Tag verification fails.

## Option 1

HTML Verification File

Create

```
yandex_09463710b0a1a1f7.html
```

Root directory

Contents

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body>
    Verification: 09463710b0a1a1f7
  </body>
</html>
```

Accessible at

```
https://www.reetfoodsngiftings.com/yandex_09463710b0a1a1f7.html
```

---

## Option 2

DNS TXT Record

TXT Value

```
yandex-verification: 09463710b0a1a1f7
```

Wait up to 24 hours.

Verify.

---

## Option 3

Google Tag Manager

Only use if specifically requested.

Create

Official Yandex Webmaster Tag

Verification ID

```
09463710b0a1a1f7
```

Trigger

```
Initialization — All Pages
```

Publish

Verify.

---

## Option 4

Yandex Tag Manager

Only if using Yandex Metrica Tag Manager.

Create

Yandex Webmaster Tag

Verification ID

```
09463710b0a1a1f7
```

Publish

Verify.

---

# Post Verification

After verification

Check

- Site Ownership
- Crawl Status
- Index Status
- Sitemap Submission
- robots.txt
- Crawl Errors
- Search Performance

---

# Deliverables

Developer must complete

- ✅ Meta Tag Added
- ✅ Website Deployed
- ✅ Existing Code Unchanged
- ✅ Existing Verification Tags Preserved
- ✅ Verification Successful
- ✅ No Console Errors
- ✅ No Build Errors
- ✅ No SEO Changes
- ✅ No Tracking Changes

---

# Files Allowed To Modify

Only

```
app/layout.tsx
```

or

Global Metadata Configuration

---

# Files That MUST NOT Be Modified

- robots.txt
- sitemap.xml
- GTM
- Google Analytics
- Google Search Console
- Bing Webmaster Verification
- Microsoft Clarity
- Meta Pixel
- Open Graph
- Schema
- Canonical URLs
- Any existing metadata
- Any SEO configuration
- Any analytics configuration

---

# Expected Result

After deployment:

- Yandex Webmaster successfully verifies ownership.
- Existing SEO, analytics, tracking, and website functionality remain unchanged.
- No regressions are introduced.

```

```
