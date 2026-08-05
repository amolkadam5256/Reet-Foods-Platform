# Architecture audit

## Directly related file consolidated

| Original path | Current path | Decision |
| --- | --- | --- |
| `.agents/02-project-architecture.md` | `02-project-architecture.md` | Moved unchanged; retained as the original strategic architecture source. |

## Supporting material reviewed, not moved

- `.agents/07-technical-seo.md`, `.agents/seo/technical/*`: technical SEO and sitemap implementation.
- `.agents/11-programmatic-seo.md`: programmatic page-quality controls.
- `.agents/12-schema.md`: breadcrumb and structured-data implementation.
- `.agents/04-domain-hosting.md`: infrastructure, DNS, security, and hosting controls.
- `.agents/analytics/*`: analytics implementation architecture.

## Findings

1. The original route matrix contains planned clean paths such as `/state/[slug]` and `/department/[slug]`.
2. The live homepage currently exposes category and district discovery through `/jobs?category={slug}` and `/jobs?district_slug={slug}`.
3. The live sitemap index separates static, jobs, locations, qualifications, departments, cross-filters, news, blogs, results, admit cards, and districts—confirming a broad content taxonomy.
4. Do not change public URLs without a redirect map, canonical review, analytics annotation, and post-release crawl validation.
