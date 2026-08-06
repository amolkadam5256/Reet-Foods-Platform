# Account Setup Audit

## Material consolidated

| Original path | Current path | Decision |
| --- | --- | --- |
| `.agents/01_account-setup-Seo/` | `01_PLATFORM_SETUP_GUIDES/` | Moved intact and sequenced: GA4, GTM, Bing, Clarity, Yandex, Ahrefs guidance and Bing verification asset. |
| `.agents/03-account-setup.md` | `04_MASTER_ACCOUNT_SETUP.md` | Moved unchanged and renamed only to reflect its place in the setup sequence. |

## Related material reviewed, not moved

- `.agents/05-search-console.md` and `.agents/06-analytics.md`: implementation/operating guidance.
- `.agents/ads/google/google-ads-tracking.md`: Google Ads tracking implementation.
- `.agents/analytics/*`, `.agents/tracking/*`, `.agents/exports/gtm/*`: tracking architecture, exports, and implementation evidence.
- `.agents/15-local-seo.md`: local/GBP strategy.

## Safety findings

- Existing documents include placeholder IDs and status check marks. Treat them as plans until authorized platform access verifies each account.
- `BingSiteAuth.xml` is a verification asset. Keep it deployed only as required by Bing and do not alter it without re-verification planning.
- Account access records should identify named owners and roles but must not contain secrets.
