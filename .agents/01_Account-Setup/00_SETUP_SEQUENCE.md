# Platform Setup Sequence

Use this order when setting up or re-auditing accounts. Existing detailed guides remain unchanged below this sequence document.

1. **Google organization account and security** — create organization-owned access, MFA, recovery contacts, and role ownership.
2. **Domain verification and Google Search Console** — verify the domain, submit the sitemap index, and record property ownership.
3. **Google Analytics 4** — follow [01_GOOGLE_ANALYTICS.md](01_GOOGLE_ANALYTICS.md); create property/data stream and confirm retention/access.
4. **Google Tag Manager** — follow [03_GOOGLE_TAG_MANAGER.md](03_GOOGLE_TAG_MANAGER.md); establish container, data layer, environments, and publishing controls.
5. **Bing Webmaster Tools and IndexNow** — follow [04_Bing_Webmaster_Tools.md](04_Bing_Webmaster_Tools.md); deploy and retain `BingSiteAuth.xml` as required, then configure IndexNow securely.
6. **Microsoft Clarity** — follow [05_MICROSOFT_CLARITY.md](05_MICROSOFT_CLARITY.md); configure masking and consent before production recording.
7. **Google Business Profile** — follow [02_GOOGLE_BUSINESS_PROFILE.md](02_GOOGLE_BUSINESS_PROFILE.md) only if the business meets platform eligibility requirements.
8. **Google Ads and Meta Business** — complete account ownership, billing, consent, conversion linkage, and pixel/tag validation.
9. **Ahrefs and SEMrush** — follow [07_AHREFS_WEB_ANALYTICS.md](07_AHREFS_WEB_ANALYTICS.md) for Ahrefs and configure Semrush with equivalent project ownership and audit controls.
10. **Yandex Webmaster** — follow [06_YANDEX_WEBMASTER.md](06_YANDEX_WEBMASTER.md) only if it supports the approved geographic/search strategy.

Before enabling any production tag, complete the validation gate in [../03_MEASUREMENT_ACCESS.md](../03_MEASUREMENT_ACCESS.md).
