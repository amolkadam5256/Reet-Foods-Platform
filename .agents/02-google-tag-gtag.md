# Install the Google Tag (gtag.js) — Manual Method

**Tag ID:** `G-CNBH2V6Y6T`

> ⚠️ Use this method **only if you are NOT using Google Tag Manager**. If you
> installed GTM (see `03-google-tag-manager.md`), configure this tag inside
> GTM instead of pasting it into your HTML — do not do both.

## Purpose

This snippet loads the base Google tag, which is required for Google
Analytics, Google Ads, and other Google measurement/marketing products tied
to this account.

## The Code

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

## Step-by-Step Instructions

### 1. Locate your site's `<head>` section
This is usually in a shared layout/template file so it applies site-wide
(e.g., `header.php`, `_document.js`, `layout.html`, `base.html`, a WordPress
theme's `header.php`, etc.). **Do not paste this into every individual page
file** — use a shared template so all pages inherit it automatically.

### 2. Paste the code immediately after the opening `<head>` tag

```html
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-CNBH2V6Y6T"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-CNBH2V6Y6T');
  </script>

  <!-- ...rest of your existing <head> content (title, meta tags, CSS, etc.) -->
</head>
```

### 3. Confirm it appears on every page
Since it's in a shared template, every page render (home, product pages,
checkout, blog, etc.) should include this snippet automatically.

### 4. Deploy to production
Push the change live. This tag only reports data once it's on your **live,
publicly accessible** site — not on localhost or a staging environment behind
authentication.

### 5. Do not duplicate the tag
Make sure this snippet appears **only once per page**. If you use a
site-builder plugin (e.g., a WordPress SEO or Analytics plugin) that already
injects a Google tag, don't add this snippet as well — pick one method.

## Platform-Specific Notes

- **WordPress:** Paste into `header.php` right after `<head>`, or use a
  plugin like "Insert Headers and Footers" / "Site Kit by Google" instead of
  editing theme files directly (safer against theme updates overwriting it).
- **Shopify:** Go to **Online Store → Themes → Edit code → theme.liquid** and
  paste right after `<head>`.
- **Wix / Squarespace:** Use the built-in "Custom Code" / "Tracking & Analytics"
  settings panel rather than editing raw template files.
- **React / Next.js:** Add via `next/script` in `_document.js` or `app/layout.js`
  using the `beforeInteractive` strategy, or place in `pages/_document.js`
  `<Head>`.

## Testing

1. Open your live site in a browser.
2. Open **DevTools → Network tab**, filter for `gtag` or `collect`.
3. Reload the page — you should see a request to
   `googletagmanager.com/gtag/js?id=G-CNBH2V6Y6T` and subsequent hits to
   `google-analytics.com/g/collect`.
4. Alternatively, install the **"Google Tag Assistant"** or **"Google
   Analytics Debugger"** Chrome extension for a guided check.
5. Check **Google Analytics → Reports → Realtime** to confirm your visit is
   being tracked live.

## EEA / Consent Mode (if applicable)

If you have visitors from the European Economic Area, set up Consent Mode
before/alongside this tag so ad personalization and measurement respect user
consent choices:
https://support.google.com/tagmanager/answer/12811173
