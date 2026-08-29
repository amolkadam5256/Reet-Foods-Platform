# Production Audit

Updated: 2026-08-29

## Architecture

The project is a Next.js 16 App Router marketing and lead-generation website. It contains static commercial pages, product/category pages, blog pages, policy pages, gallery pages, Web3Forms lead capture, analytics integrations, and SEO/schema helpers.

## Route Inventory

| URL | Status | Indexable | Title/Metadata | Canonical | H1 | Schema | Issues |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Static | Yes | Root metadata | `/` | Present | Organization, LocalBusiness, FAQ | Verify social URLs. |
| `/about` | Static | Yes | Page metadata | `/about` | Present | Organization, FAQ, Breadcrumb | Good. |
| `/products` | Static | Yes | Page metadata | `/products` | Present | FAQ, Collection JSON-LD | Product claims made conservative. |
| `/products/[slug]` | SSG | Yes | Generated metadata | `/products/[slug]` | Present | Product, FAQ, Breadcrumb | Prices are placeholder-derived; verify before ecommerce use. |
| `/products/categories/*` | Static | Yes | Page metadata | Matching category path | Present | Collection, FAQ | Good. |
| `/corporate-gifting` | Static | Yes | Page metadata | `/corporate-gifting` | Present | FAQ/Breadcrumb content | Good. |
| `/corporate-gifting/pune` | Static | Yes | Page metadata | `/corporate-gifting/pune` | Present | LocalBusiness, FAQ, Breadcrumb | Verify exact map embed/place. |
| `/blog` | Static | Yes | Page metadata | `/blog` | Present | Blog listing | Blog dates should be reviewed before publish. |
| `/blog/[slug]` | SSG | Yes | Generated metadata | `/blog/[slug]` | Present | Article, FAQ where present | Review future dates/content proof. |
| `/gallery` | Static | Yes | Page metadata | Inherited | Present | FAQ | Gallery claims made conservative. |
| `/gallery/photos` | Static | Yes | Metadata present | Inherited | Present | None specific | Good. |
| `/gallery/videos` | Static | Yes | Page metadata | `/gallery/videos` | Present | None specific | Good. |
| `/contact` | Static | Yes | Page metadata | Inherited | Present | Contact/business content | Form improved. |
| `/faq` | Static | Yes | Page metadata | Inherited | Present | FAQ | Claims softened. |
| `/privacy-policy` | Static | Yes | Basic metadata | Inherited | Present | None | Legal review recommended. |
| `/terms-conditions` | Static | Yes | Basic metadata | Inherited | Present | FAQ-style content | Legal review recommended. |
| `/shipping-policy` | Static | Yes | Basic metadata | Inherited | Present | FAQ | Cold-chain claim softened. |
| `/return-refund-policy` | Static | Yes | Basic metadata | Inherited | Present | FAQ-style content | Legal review recommended. |
| `/api/assets/index` | Dynamic API | No | N/A | N/A | N/A | N/A | Disabled safe stub. |
| `/api/assets/serve` | Dynamic API | No | N/A | N/A | N/A | N/A | Disabled safe stub. |
| `/assets/[...path]` | Dynamic API | No | N/A | N/A | N/A | N/A | Disabled safe stub. |

## API Endpoints

- `/api/assets/index`: returns empty disabled index.
- `/api/assets/serve`: returns disabled 404 response.
- `/assets/[...path]`: returns disabled 404 response.

No database, file upload, authentication, or server actions were found.

## Forms

- Homepage quote form.
- Contact page enquiry form.
- Newsletter form.
- Footer newsletter form.
- Seasonal offer popup form.

Forms use Web3Forms and now read the access key from `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.

## External Services

- Web3Forms
- WhatsApp
- Google Tag Manager
- GA4
- Microsoft Clarity
- Google Maps embeds

## Dependencies

- Next.js 16.3.3
- React 19.2.4
- React DOM 19.2.4
- React Icons
- Tailwind CSS 4
- TypeScript 5
- ESLint 9

## Security

The public filesystem exposure issue has been fixed by disabling file-serving routes and removing the internal asset browser page. Dependency vulnerabilities were resolved. Hardcoded service IDs were moved to environment variables.

## SEO / AEO / GEO

Entity facts now come from `lib/site.ts`. Metadata and schema use consistent NAP, local Pune signals, canonical URLs, and conservative business language.

## Performance

The site builds statically for most pages. Next/Image is used broadly. Existing image reports show a large image inventory, so further manual asset cleanup is recommended before deployment.

## Accessibility

Forms have visible labels. The modal/popup uses dialog semantics. Further browser-based keyboard testing is recommended for mobile menu, search overlay, and seasonal popup.

## Final Validation

Run on 2026-08-29:

- `npm.cmd run lint`: pass.
- `npm.cmd run build`: pass.
- `npm.cmd audit --omit=dev`: 0 vulnerabilities.

## Remaining Work Requiring Human Verification

See `BUSINESS_FACTS_TO_VERIFY.md`.
