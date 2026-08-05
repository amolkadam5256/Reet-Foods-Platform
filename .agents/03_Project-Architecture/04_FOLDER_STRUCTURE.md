# Folder Structure

## Recommended application structure

This is a target implementation pattern, not a claim about the current codebase.

```text
src/
├── app/                    # Route entry points or equivalent route layer
│   ├── jobs/
│   ├── results/
│   ├── admit-cards/
│   ├── districts/
│   ├── exam-calendar/
│   ├── current-affairs/
│   └── study-material/
├── features/
│   ├── jobs/               # Listing, detail, status, official-source logic
│   ├── exams/
│   ├── locations/
│   ├── search/
│   └── content/
├── components/
│   ├── layout/
│   ├── jobs/
│   ├── navigation/
│   └── ui/
├── lib/
│   ├── data/
│   ├── seo/
│   ├── validation/
│   └── analytics/
├── content/                # Editorial content or content adapters
└── tests/
```

## Content and data boundaries

- Keep job facts, editorial summaries, source URLs, publication/review dates, and status as structured fields—not only prose.
- Centralize taxonomy definitions for categories, departments, qualifications, states, and districts.
- Keep SEO metadata generation beside the route/domain logic that owns it.
- Keep external-source validation, expiry rules, and outbound-link testing testable and separate from presentation components.

## Repository documentation structure

Use the numbered `.agents` folders for decisions and operating procedures. Keep code implementation documentation next to the code only when it is component- or API-specific; link to the relevant numbered operating document.
