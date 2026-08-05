# Install Google Tag Manager (GTM)

**Container ID:** `GTM-PM6DPLVF`

> ✅ Recommended if you plan to manage multiple tracking tags (Google
> Analytics, Google Ads, Meta/Facebook Pixel, etc.) without needing a code
> deployment every time. If you use this method, do **not** also paste the
> standalone gtag.js snippet from `02-google-tag-gtag.md` — instead configure
> the Google tag as a tag *inside* GTM.

## Purpose

Google Tag Manager (GTM) is a tag-management system. You install one small
snippet on your site once, and then all future tags (Analytics, Ads,
conversion pixels, etc.) are added and managed through the GTM web interface
— no further code changes needed.

## The Code (Two Snippets)

### Snippet 1 — Head script

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PM6DPLVF');</script>
<!-- End Google Tag Manager -->
```

### Snippet 2 — Body noscript fallback

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM6DPLVF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Step-by-Step Instructions

### 1. Add Snippet 1 to `<head>`
Paste it **as high as possible** inside the `<head>` tag, ideally before other
scripts/stylesheets, in your shared site template:

```html
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PM6DPLVF');</script>
  <!-- End Google Tag Manager -->

  <!-- ...rest of <head> content -->
</head>
```

### 2. Add Snippet 2 immediately after `<body>`
Paste it as the **very first element** inside `<body>`:

```html
<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM6DPLVF"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- ...rest of your site content -->
</body>
```

### 3. Apply to every page
Since both snippets live in a shared header/footer template, they'll
automatically appear on every page. Confirm no page template bypasses the
shared layout (e.g., custom landing pages built outside the CMS).

### 4. Deploy to production
GTM only starts collecting real data once this is live and publicly
accessible.

### 5. Configure your tags inside GTM
Log in to https://tagmanager.google.com, open container **GTM-PM6DPLVF**, and
add tags such as:
- **Google Analytics (GA4) Configuration tag** — enter Measurement ID
  `G-CNBH2V6Y6T`, trigger: **All Pages**.
- Any additional tags (Ads conversion tracking, remarketing pixels, etc.)

### 6. Publish the GTM container
Adding tags in the GTM interface only stages them in your **Workspace**. You
must click **Submit → Publish** in GTM for the changes to go live on the
website — editing code again is not required after that.

## Platform-Specific Notes

- **WordPress:** Use "Site Kit by Google" or "GTM4WP" plugin, or paste
  directly into `header.php` / `footer.php` (right after `<body>`).
- **Shopify:** **Online Store → Themes → Edit code → theme.liquid** — head
  snippet after `<head>`, body snippet right after `<body>`.
- **Wix / Squarespace:** Use the built-in Tag Manager / Custom Code
  integration in site settings rather than raw template editing.
- **React / Next.js:** Add the head script via `next/script` with strategy
  `afterInteractive`, and the noscript iframe directly in the body of
  `_document.js` / `layout.js`.

## Testing

1. Open your live site.
2. In GTM, click **Preview**, enter your site URL, and connect.
3. A "Tag Assistant" debug panel should open showing the `gtm.js` container
   load and any fired tags (e.g., GA4 Configuration on page load).
4. Confirm in **GA4 → Reports → Realtime** that your visit registers.
5. Back in GTM workspace, check the **Container quality** / installation
   status — it should move from "No Recent Data" to showing an active
   connection within a few hours of a real visit.

## EEA / Consent Mode (if applicable)

If you have visitors from the European Economic Area, set up Consent Mode in
GTM so ad personalization and measurement respect user consent choices:
https://support.google.com/tagmanager/answer/12811173
