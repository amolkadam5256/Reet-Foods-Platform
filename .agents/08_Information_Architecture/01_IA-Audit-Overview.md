# 08 — Information Architecture: Site Audit & Structure

> **Audited Site:** [searchsarkarinaukri.com](https://www.searchsarkarinaukri.com/)
> **Audit Date:** July 2026
> **Tech Stack:** React SPA + Prerender SSR backend | OneSignal Push | `api.searchsarkarinaukri.com`

---

## Audit Summary

| Dimension | Finding | Status |
|-----------|---------|--------|
| Tech Stack | React SPA with prerender backend for crawlers | ⚠️ Crawl risk if prerender fails |
| Canonical Tags | Dynamically injected via react-helmet-async | ⚠️ Risk of missing canonicals on unhelmeted routes |
| Schema | Organization + WebSite + SearchAction on all pages | ✅ Good baseline |
| Navigation | Not visible in source (JS-rendered) | ❌ Noscript fallback needed improvement |
| URL Structure | Mix of clean paths + query params | ⚠️ See Issues below |
| Breadcrumbs | Unknown (JS-rendered) | 🔍 Needs live audit |
| Site Search | `?search=` query param on `/jobs` | ✅ Exists |
| Push Notifications | OneSignal v16 integrated | ✅ Active |
| Districts | `/districts` + `?district_slug=` filter | ⚠️ Query params hurt SEO |
| Department | `?category=` query params on `/jobs` | ❌ Should be `/jobs/category/[slug]` |

---

## Key IA Issues Found

> [!CAUTION]
> **Critical: Department/Category Pages use Query Parameters**
> `/jobs?category=mpsc` is NOT an indexable clean URL. Google may ignore or merge these pages.
> **Fix:** Create canonical hub pages at `/jobs/mpsc`, `/jobs/ssc`, `/jobs/railway` etc.

> [!WARNING]
> **District pages use `?district_slug=` params**
> `/jobs?district_slug=pune` should be `/district/pune` for clean indexable URLs.
> Current `/districts` index page exists but district detail uses params.

> [!WARNING]
> **No hardcoded canonical in `<head>`**
> The site intentionally omits server-side canonical — this is a risk if any route fails to set canonical via Helmet. Prerender must inject correct per-route canonical reliably.

> [!NOTE]
> **React SPA with Prerender** — crawlers see prerendered HTML, users get full SPA. This is acceptable only if prerender is comprehensive. Verify all route types render correctly.

---

## Related Documents

| File | Description |
|------|-------------|
| [02_Site-Hierarchy.md](02_Site-Hierarchy.md) | Full site tree with all page types |
| [03_URL-Mapping.md](03_URL-Mapping.md) | Current vs recommended URL structure |
| [04_Navigation-Audit.md](04_Navigation-Audit.md) | Nav structure + gaps |
| [05_Category-Pages.md](05_Category-Pages.md) | Department/exam category pages |
| [06_State-Pages.md](06_State-Pages.md) | State hub page architecture |
| [07_District-Pages.md](07_District-Pages.md) | District-level pages (all 36 MH districts) |
| [08_Qualification-Pages.md](08_Qualification-Pages.md) | Qualification filter pages |
| [09_Organization-Pages.md](09_Organization-Pages.md) | Organization/department entity pages |

---
*Document Version: 1.0 | Audited: July 2026*
