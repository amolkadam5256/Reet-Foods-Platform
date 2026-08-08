# Measurement, Tagging, and Access Requirements

## Conversion events for this site

Track decisions, not every interaction. Initial customer-value events should include:

| Event | Purpose | Minimum properties |
| --- | --- | --- |
| `quote_click` | Visitor starts a quote request | product/category slug, CTA location |
| `whatsapp_click` | Visitor opens WhatsApp for sales support | source page, CTA location |
| `catalog_click` | Visitor requests or opens a catalog | product/category context, CTA location |
| `form_submit` | Visitor submits a contact or quote form | form name, source page; no PII in analytics payload |
| `site_search` | Visitor searches products, categories, or pages | sanitized query policy; do not transmit sensitive data |

## GTM and GA4 controls

- Use a documented data-layer and lowercase underscore event naming.
- Publish from GTM preview only after GA4 DebugView and browser validation.
- Prevent duplicate tags/events; keep a versioned container export outside public paths.
- Mark only decision-relevant events as conversions.
- Never send names, email addresses, phone numbers, application IDs, or other personal data to GA4, GTM, Clarity, ad pixels, or URLs.

## Consent and privacy

- Implement consent before non-essential analytics, replay, advertising, or remarketing tags where applicable.
- Configure Clarity masking and review recording settings before enabling production sessions.
- Keep data-retention, deletion, access, and vendor documentation aligned with the applicable privacy policy and legal advice.

## Validation gate

Before any tag or account linkage goes live: verify ownership, test in preview/debug mode, test mobile and desktop, confirm consent behavior, confirm no PII, inspect outbound links, record the GTM version, and capture the approver.
