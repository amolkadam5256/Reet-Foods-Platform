# Routing

## Route contracts

| Route group | Required inputs | Required output | Failure handling |
| --- | --- | --- | --- |
| Job detail | Valid job slug | Structured job facts, status, official source, related links | 404 for unknown; closed status for expired |
| Jobs hub | Optional approved filters | Relevant listing results and clear filter state | Useful empty state; prevent thin indexable variants |
| District/category/qualification hub | Valid taxonomy slug | Hub introduction and relevant active listings | 404 for unknown taxonomy; noindex/empty-state policy for no inventory |
| Results/admit cards | Valid content slug | Official source and update context | 404 for unknown; clear unavailable status where needed |
| Utility pages | No sensitive default input | Self-contained tool/content experience | Validation and accessible error messaging |

## Routing rules

1. Normalize case, encoded variants, trailing-slash variants, and deprecated paths before rendering.
2. Validate slugs and query inputs server-side; never interpolate untrusted values into queries or markup.
3. Make 404, expired, and closed states intentional pages with helpful next actions.
4. Use permanent redirects only for durable route replacements; do not redirect unknown URLs to the homepage.
5. Maintain a versioned redirect map for public URL changes.
6. Include route tests for canonical output, status codes, meta tags, breadcrumb generation, and source-link rendering.

## Release checklist for a route change

- Route map and redirect map approved.
- Canonical, breadcrumb, structured data, navigation, and sitemap behavior verified.
- Analytics event names preserved or migration documented.
- Internal links updated.
- Crawl test and production monitoring completed after release.
