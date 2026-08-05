# 10_GEO_AI_ISSUES.md

> **Project:** SearchSarkariNaukri Enterprise SEO
>
> **Website:** https://www.searchsarkarinaukri.com
>
> **Module:** GEO (Generative Engine Optimization) & AI Search Audit
>
> **Priority:** P0 – P3
>
> **Status:** Open
>
> **Version:** 1.0

---


# 🔴 LIVE VERIFICATION UPDATE — 2 August 2026

## New Finding: GEO-013 — Non-JS Crawl Path Has No Unique Content Per Page

Live fetches (2 Aug 2026) of `/jobs/3553`, `/admit-cards`, and `/results` show that in the version of the page an AI crawler without JavaScript execution would see:

- Job detail pages render the **generic homepage shell**, not the specific job's title, department, eligibility, or dates.
- `/admit-cards` and `/results` render **identical title/meta to each other and no body content**.

## Why This Matters for GEO Specifically

AI answer engines (ChatGPT, Gemini, Perplexity, Copilot, AI Overviews) generally rely on crawled/indexed text rather than executing JavaScript. If the crawlable version of a job or admit-card page contains no unique facts, **there is nothing for an LLM to cite**, regardless of how good the `llms.txt` file or Organization Schema is. This is very likely the primary reason AI Visibility, ChatGPT Mentions, Gemini Visibility, and AI Overview Presence are all currently at 0 (as reported in `00_EXECUTIVE_SUMMARY.md`).

## Recommended Actions (adds to GEO-001/GEO-002)

- Fix server-side rendering for job/admit-card/result templates (tracked as CR-007 in `01_CRITICAL_ISSUES.md`) before investing further in schema expansion or FAQ content for those templates — the rendering fix is the higher-leverage first step.
- Once fixed, re-test with a plain HTTP fetch (no JS) against a sample of job, admit card, and result URLs to confirm unique title, meta description, H1, and structured facts (department, last date, vacancy count) are present before considering GEO work "done" for that template.

---

# Overview

Generative Engine Optimization (GEO) is the practice of optimizing content so it can be understood, trusted, and cited by AI-powered search engines and Large Language Models (LLMs).

Unlike traditional SEO, GEO focuses on:

- AI Overviews
- ChatGPT
- Google Gemini
- Claude
- Microsoft Copilot
- Perplexity AI
- Meta AI
- Future AI Search Systems

The goal is to increase the probability that SearchSarkariNaukri is selected as a trusted source in AI-generated responses.

---

# GEO Health Summary

| Category | Status |
|----------|---------|
| AI Visibility | 🔴 Very Low |
| AI Readability | 🟡 Moderate |
| Entity Optimization | 🟡 Moderate |
| Structured Data | 🟢 Good |
| Content Structure | 🟡 Needs Improvement |
| Topical Authority | 🔴 Low |
| Citation Readiness | 🔴 Low |
| LLM Optimization | 🟡 Moderate |

---

# GEO Scorecard

| Metric | Status |
|---------|--------|
| AI Visibility | ❌ |
| Structured Answers | ⚠ |
| Entity Coverage | ⚠ |
| FAQ Quality | ⚠ |
| Semantic SEO | ⚠ |
| Schema Coverage | ✅ |
| Content Organization | ⚠ |
| AI Citation Potential | ❌ |

---

# GEO-001 — Low AI Visibility

## Current Status

The audit indicates that AI visibility is extremely limited.

---

## Business Impact

- Low presence in AI-generated answers
- Reduced visibility in AI search
- Fewer citations by LLMs
- Lower authority signals

---

## Recommended Actions

- Publish authoritative content
- Improve entity relationships
- Add structured answers
- Expand topical coverage
- Improve EEAT signals

---

# GEO-002 — Structured Answer Format

## Current Status

Many pages present information in long paragraphs.

---

## Recommendation

Use structured content such as:

- Definitions
- Lists
- Tables
- Step-by-step guides
- Comparison charts
- FAQs
- Key Takeaways

---

## Benefit

AI systems can extract structured information more accurately.

---

# GEO-003 — Entity Optimization

## Important Entities

- Government Departments
- Ministries
- Recruitment Boards
- Exams
- Universities
- States
- Districts
- Qualifications
- Job Categories

---

## Recommendation

Ensure entities are:

- Clearly identified
- Linked contextually
- Supported by structured data
- Mentioned consistently

---

# GEO-004 — Topical Authority

## Goal

Become the most comprehensive resource for every recruitment topic.

---

## Recommended Topic Coverage

Every recruitment page should include:

- Overview
- Notification
- Eligibility
- Vacancy Details
- Salary
- Selection Process
- Exam Pattern
- Syllabus
- Important Dates
- Admit Card
- Results
- FAQs

---

## Benefit

Comprehensive pages are more likely to be cited by AI systems.

---

# GEO-005 — Semantic SEO

## Recommendation

Strengthen semantic relationships using:

- Related terms
- Synonyms
- Contextual keywords
- Entity connections

Avoid repetitive keyword stuffing.

---

# GEO-006 — FAQ Optimization

## Goal

Provide concise answers to common user questions.

---

## Best Practices

- One question per section
- Direct answer first
- Expand with supporting details
- Add FAQ Schema

---

## Example Topics

- Eligibility
- Age Limit
- Application Fee
- Selection Process
- Admit Card
- Results

---

# GEO-007 — Citation Readiness

## Objective

Increase the likelihood of AI citation.

---

## Recommended Actions

- Cite official sources
- Mention notification numbers
- Include publication dates
- Display last updated date
- Show author and reviewer
- Add references

---

# GEO-008 — AI-Friendly Formatting

## Recommended Structure

- Short paragraphs
- Bullet lists
- Numbered steps
- Tables
- Summary boxes
- Highlighted key points

---

## Benefit

Improves machine readability and information extraction.

---

# GEO-009 — Schema Expansion

## Existing

- Organization Schema

---

## Recommended Additions

- WebSite
- SearchAction
- Breadcrumb
- FAQPage
- JobPosting
- Article
- CollectionPage
- Person
- AboutPage

---

# GEO-010 — LLM Optimization

## Objectives

Ensure content is easy for LLMs to interpret.

---

## Best Practices

- Clear language
- Consistent terminology
- Defined entities
- Logical heading hierarchy
- Minimal ambiguity
- Structured information

---

# GEO-011 — AI Content Freshness

## Recommendation

Maintain:

- Last Updated Date
- Review Date
- Version History
- Notification Status

Update pages immediately when official recruitment information changes.

---

# GEO-012 — Knowledge Graph Readiness

## Improve Recognition By

- Consistent branding
- Organization Schema
- Person Schema
- SameAs links
- Official social profiles
- Government references

---

# GEO Implementation Roadmap

## Phase 1

- Improve EEAT
- Expand schema
- Improve FAQs

---

## Phase 2

- Build topic clusters
- Strengthen entities
- Improve semantic SEO

---

## Phase 3

- Publish authoritative guides
- Expand AI-friendly formatting
- Increase citation opportunities

---

## Phase 4

- Monitor AI search visibility
- Review AI Overview appearances
- Improve based on performance data

---

# Success Metrics

| KPI | Current | Target |
|------|----------|---------|
| AI Visibility | Very Low | High |
| AI Citations | Minimal | Frequent |
| Entity Coverage | Moderate | Comprehensive |
| FAQ Coverage | Limited | Extensive |
| Structured Data | Basic | Advanced |
| Topic Completeness | Moderate | Excellent |
| LLM Readability | Moderate | Excellent |

---

# GEO Checklist

## Content

- [ ] Comprehensive answers
- [ ] Direct responses
- [ ] Tables
- [ ] Lists
- [ ] FAQs
- [ ] Summaries

---

## Technical

- [ ] Expand Schema
- [ ] Validate JSON-LD
- [ ] Improve entity relationships

---

## Authority

- [ ] Add authors
- [ ] Add reviewers
- [ ] Cite official sources
- [ ] Show update dates

---

## AI Optimization

- [ ] Improve semantic SEO
- [ ] Strengthen Knowledge Graph signals
- [ ] Monitor AI visibility
- [ ] Improve citation readiness

---

# Related Documents

- 07_CONTENT_ISSUES.md
- 08_KEYWORD_ISSUES.md
- 09_BACKLINK_ISSUES.md
- 13_EEAT_AUDIT.md
- 14_PROGRAMMATIC_SEO.md
- 20_SCHEMA_AUDIT.md
- 24_AI_SEARCH_MONITORING.md

---

# Conclusion

Generative search is rapidly becoming a primary discovery channel. By strengthening entity optimization, semantic relationships, structured content, EEAT signals, schema coverage, and citation readiness, SearchSarkariNaukri can significantly improve its visibility across AI-powered search engines and future generative search experiences.

---

**Document Status:** Active

**Owner:** AI SEO & GEO Team

**Review Frequency:** Monthly