# URL Strategy

## Canonical URL policy

- Use lowercase, human-readable slugs with hyphens.
- Adopt one trailing-slash policy and redirect the alternative consistently.
- Keep one canonical URL for each indexable content item.
- Use query parameters for temporary UI state only; they are not automatically indexable landing pages.
- Redirect changed public URLs with a one-to-one 301 map whenever a clear successor exists.

## Current versus target routing

The public homepage currently uses query-driven discovery, including `/jobs?category={slug}` and `/jobs?district_slug={slug}`. The sitemap indicates dedicated taxonomy coverage. Before introducing clean path equivalents such as `/departments/{slug}` or `/districts/{slug}`, decide which version is canonical and implement redirects/canonicals—not both as competing indexable duplicates.

## Recommended canonical patterns

| Content type | Canonical pattern |
| --- | --- |
| Job detail | `/jobs/{job-slug}` |
| Jobs hub | `/jobs` |
| Result detail | `/results/{slug}` |
| Admit-card detail | `/admit-cards/{slug}` |
| District hub | `/districts/{district-slug}` |
| Department hub | `/departments/{department-slug}` |
| Qualification hub | `/qualifications/{qualification-slug}` |
| Editorial article | `/news/{slug}` or `/blog/{slug}`—select by content type |

## Indexation guardrails

- Index a taxonomy or cross-filter page only when it has sufficient active, differentiated, useful content.
- Noindex empty, duplicate, or purely sort/pagination/filter parameter combinations where appropriate.
- Maintain consistent canonicals and internal links to the approved canonical route.
- Preserve useful expired pages only when they provide clear historical context and paths to active alternatives.
