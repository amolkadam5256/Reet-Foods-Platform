# Platform Setup Registry

## Common controls for every platform

- Use organization-owned email accounts, named users, multi-factor authentication, least-privilege roles, recovery contacts, and a quarterly access review.
- Record the account owner, technical owner, business purpose, verification method, renewal/billing owner, and last audit date in a secure access register.
- Remove access promptly when a contractor or employee leaves.

| Platform                   | Required setup and linkage                                                               | Evidence to retain securely                  | Review cadence                  |
| -------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------- |
| Google Account / Workspace | Organization-owned admin account; MFA; recovery controls                                 | Owner and recovery contacts                  | Quarterly                       |
| Google Search Console      | Domain property; DNS verification; submit sitemap index; link GA4                        | Property owner and sitemap submission status | Weekly operational review       |
| GA4                        | Web property/data stream; retention; internal traffic rules; link GSC/Ads as appropriate | Property ID held in secure register          | Monthly                         |
| GTM                        | Web container; production workspace/versioning; least-privilege publishing               | Container ID, version and publisher log      | Every publish                   |
| Bing Webmaster Tools       | Verify domain/import GSC where appropriate; submit sitemaps                              | Verification method and sitemap state        | Monthly                         |
| Microsoft Clarity          | Create project; deploy only through approved tagging path; configure masking/consent     | Project owner and privacy configuration      | Monthly                         |
| Google Business Profile    | Use only if the business is eligible; verify ownership and public business details       | Profile owner and verification state         | Quarterly                       |
| Google Ads                 | Billing ownership, conversion linkage, consent-aware tags, account access roles          | Account owner and conversion mapping         | Monthly                         |
| Meta Business              | Business portfolio, verified domain if needed, pixel/CAPI governance, access roles       | Owner and dataset/pixel mapping              | Monthly                         |
| IndexNow                   | Generate/store key securely; submit only canonical, eligible URLs                        | Key owner and submission log                 | Weekly during active publishing |
| Ahrefs                     | Verified project; rank/technical crawl settings; owner and billing contact               | Project access role                          | Monthly                         |
| SEMrush                    | Verified project; position tracking, site audit, owner and billing contact               | Project access role                          | Monthly                         |

## Platform setup order

1. Secure Google/organization identity and domain ownership.
2. Verify Search Console and Bing; submit the sitemap index.
3. Create GA4 and GTM; define consent and test measurement before publishing tags.
4. Configure Clarity, Ads, Meta, and IndexNow only after the privacy and event plans are approved.
5. Configure Ahrefs and SEMrush for independent SEO monitoring.
6. Set up GBP only if the entity meets Google eligibility requirements.
