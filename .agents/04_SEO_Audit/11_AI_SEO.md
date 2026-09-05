# 11 — AI SEO Audit

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026  
**AI Search Engines Evaluated:** Google AI Overviews, Bing Copilot, ChatGPT, Perplexity, Gemini, Claude

---

## 11.1 AI SEO Readiness Score

| Dimension                   | Score      | Notes                                          |
| --------------------------- | ---------- | ---------------------------------------------- |
| Entity clarity              | 5/10       | Business entity exists but inconsistent naming |
| Structured content          | 4/10       | FAQ present but thin                           |
| Question-answer format      | 4/10       | Limited FAQ coverage                           |
| Knowledge graph eligibility | 4/10       | Organization schema present but errors         |
| Topical authority           | 3/10       | Blog minimal, no authoritative content         |
| Semantic coverage           | 4/10       | Keywords present but no semantic depth         |
| Factual accuracy            | 7/10       | Business data is accurate                      |
| Citation-worthiness         | 3/10       | No data sources, no unique research            |
| **Overall**                 | **43/100** | **Low AI Search Visibility**                   |

---

## 11.2 How AI Engines Evaluate This Site

### Google AI Overviews (SGE)

Google's AI Overviews pull content from:

1. High-authority pages with clear E-E-A-T signals
2. Pages with explicit structured data (FAQ, HowTo, Article)
3. Pages that clearly and directly answer a specific question
4. Sources with established brand recognition

**Current Gaps:**

- ❌ No "HowTo" schema (e.g., "How to order a corporate gift box")
- ❌ FAQ answers are too short (1-2 sentences) — AI needs detailed answers
- ❌ No statistics with citations from third-party sources
- ❌ No original research or proprietary data
- ❌ Brand name inconsistency ("Reet Foods", "Reet Foods & Gifting", "Reet Foods and Giftings") confuses AI entity resolution

---

### Bing Copilot

Bing Copilot tends to cite:

- Pages with clean, extractable text
- Pages with proper schema markup
- Microsoft-verified sources (Bing Webmaster connected ✅)
- Pages with high confidence NAP data

**Current Gaps:**

- ⚠️ Bing Webmaster Tools verification present (`msvalidate.01`) — ✅ Good
- ❌ No Bing Sitelinks or IndexNow submission verified
- ❌ LocalBusiness schema errors reduce confidence
- ❌ Missing rich product data for Bing Shopping

---

### ChatGPT / Claude / Perplexity

These models cite:

- High-quality published articles (Reddit, Wikipedia, industry blogs)
- Brand websites with clear authority content
- Structured pages with facts and figures

**Current Gaps:**

- ❌ No "About" content structured as Knowledge Graph fodder
- ❌ No press mentions or media citations on the site
- ❌ Blog posts are minimal — no authoritative long-form content

---

## 11.3 Entity SEO

### Entity Definition

Reet Foods & Gifting must be clearly defined as a unique entity across the web.

**Required Entity Properties:**

```json
{
  "@type": "Organization",
  "name": "Reet Foods & Gifting",
  "alternateName": ["Reet Foods", "Reet Foods and Giftings", "Reet Gifting"],
  "foundingDate": "2016",
  "foundingLocation": "Pune, Maharashtra, India",
  "description": "Premium dry fruits, artisanal chocolates, and custom corporate gifting solutions from Hinjewadi, Pune.",
  "knowsAbout": [
    "Corporate Gifting",
    "Premium Dry Fruits",
    "Artisanal Chocolates",
    "Festive Hampers",
    "FSSAI Certified Food Products",
    "Private Label Manufacturing"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "FSSAI",
      "identifier": "21525083009881"
    }
  ]
}
```

**Current Issue:** The three name variants (`Reet Foods`, `Reet Foods & Gifting`, `Reet Foods and Giftings`) prevent AI systems from building a unified knowledge graph entity.

**Fix:** Choose ONE canonical name and use it EVERYWHERE:

- Recommended: **"Reet Foods & Gifting"** (matches brand perception)

---

## 11.4 Semantic Content Gaps

AI search engines extract semantically rich content. The following topics need deeper coverage:

| Topic                              | Current Coverage          | AI Value                    |
| ---------------------------------- | ------------------------- | --------------------------- |
| FSSAI certification benefits       | Mentioned once            | Need 200-word explanation   |
| Nitrogen packing technology        | Mentioned in products FAQ | Need 200-word explanation   |
| Corporate gifting compliance India | ❌ None                   | Blog article needed         |
| GST on corporate gifts India       | ❌ None                   | High-value question article |
| MOQ for corporate orders           | Partial FAQ               | Need detailed breakdown     |
| Custom packaging materials         | Partial                   | Need deeper content         |
| Dry fruit varieties and origin     | ❌ None                   | Product-education content   |
| Wedding gift etiquette India       | ❌ None                   | Blog opportunity            |
| Difference between gift box types  | ❌ None                   | Comparison content          |

---

## 11.5 Question-Answer Coverage for AI Snippets

| Question                                  | Answer Present?               | Quality                           |
| ----------------------------------------- | ----------------------------- | --------------------------------- |
| What is Reet Foods?                       | Partial (About page)          | Too marketing-heavy               |
| Where is Reet Foods located?              | ✅ Contact + schema           | ✅                                |
| What does Reet Foods sell?                | ✅ Products page              | ✅                                |
| How much do corporate gift boxes cost?    | ❌ None                       | Missing — critical                |
| What is the MOQ for bulk orders?          | ✅ FAQ page                   | But answer is vague               |
| Do you do PAN India delivery?             | ✅ FAQ                        | ✅                                |
| Can you print logos on gift boxes?        | ✅ FAQ + Corporate            | ✅                                |
| What certifications does Reet Foods have? | Partial                       | FSSAI mentioned, need more detail |
| How long does delivery take?              | ✅ business.ts                | But not on website publicly       |
| What is your return policy?               | ✅ business.ts — "no returns" | Needs explanation on site         |

---

## 11.6 Content Chunking for LLM Extraction

AI models extract short, clear chunks of text. Optimize content format:

**Current Format (Poor for AI):**

```
"Reet Foods & Gifting was created for people and organizations who want to give well..."
(Long paragraph blocks)
```

**Optimized Format (Good for AI):**

```markdown
## What is Reet Foods & Gifting?

Reet Foods & Gifting is a premium gifting company based in Hinjewadi, Pune.

**Founded:** 2016  
**Location:** Hinjewadi Phase I, Pune, Maharashtra  
**Specialties:** Dry fruits, chocolates, corporate hampers  
**Deliveries:** PAN India  
**FSSAI:** 21525083009881  
**Capacity:** Up to 500 gifts per day
```

---

## 11.7 AI SEO Content Recommendations

### 1. Create "About" Structured Data Page

A dedicated, factual page about the business:

```
- Founded: 2016
- Location: Hinjewadi Phase I, Pune
- Products: [list]
- Certifications: FSSAI 21525083009881
- GSTIN: 27FHIPK0363N1ZX
- Delivery: PAN India, 3-4 days
- Capacity: 500 gifts/day
- Notable order: 1,000+ Diwali gifts single order
```

### 2. Expand FAQs to 50+ Questions

AI searches often return FAQ-style answers. Prioritize:

- Price-related questions
- Process questions
- Policy questions
- Product-specific questions

### 3. Write Authoritative Long-Form Articles

Target:

- "Complete Guide to Corporate Gifting in India" (3,000 words)
- "How to Choose Premium Dry Fruits for Gifting" (2,000 words)
- "FSSAI Requirements for Food Gifting" (1,500 words)

### 4. Add HowTo Schema

```json
{
  "@type": "HowTo",
  "name": "How to Order Custom Corporate Gift Boxes from Reet Foods",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Share your requirements",
      "text": "Tell us quantity, occasion, and budget."
    },
    {
      "@type": "HowToStep",
      "name": "Choose products",
      "text": "Select from dry fruits, chocolates, or hampers."
    },
    {
      "@type": "HowToStep",
      "name": "Approve mock-up",
      "text": "Review digital branding mock-up."
    },
    {
      "@type": "HowToStep",
      "name": "Receive delivery",
      "text": "PAN India delivery in 3-4 business days."
    }
  ]
}
```

---

## 11.8 Knowledge Graph Building

To be cited by AI, build Knowledge Graph presence:

1. **Wikipedia** — Not applicable yet (too small), but create Wikipedia-ready content
2. **Wikidata** — Create or claim Wikidata entry for the business
3. **Google Business Profile** — Verified GBP helps Knowledge Graph
4. **LinkedIn** — Company page with all details
5. **Crunchbase** — Business listing
6. **IndiaMART** — Business profile
7. **Press Releases** — Publish news articles about milestones

---

## 11.9 AI Search Optimization Checklist

| Action                                     | Priority | Status |
| ------------------------------------------ | -------- | ------ |
| Standardize entity name                    | CRITICAL | ❌     |
| Add `knowsAbout` to Organization schema    | HIGH     | ❌     |
| Expand FAQs to 50+ questions               | HIGH     | ❌     |
| Add HowTo schema to corporate gifting      | HIGH     | ❌     |
| Create factual "Company Info" section      | HIGH     | ❌     |
| Write 3+ authoritative blog articles       | HIGH     | ❌     |
| Add citation sources to statistics         | MEDIUM   | ❌     |
| Create Wikidata entry                      | MEDIUM   | ❌     |
| Add `alternateName` to Organization schema | MEDIUM   | ❌     |
| Submit to Bing IndexNow                    | MEDIUM   | ❌     |
| Create LinkedIn company page               | MEDIUM   | ❌     |

---

## Testing

- [ ] Ask ChatGPT: "Tell me about Reet Foods & Gifting Pune" — check if it knows the business
- [ ] Ask Perplexity: "Best corporate gifting companies in Pune" — check if Reet Foods appears
- [ ] Ask Google AI Overview: "Corporate gift boxes Pune" — check for feature
- [ ] Run Google Rich Results Test on FAQ pages
- [ ] Check Google Knowledge Graph: `https://www.google.com/search?q=Reet+Foods+Gifting+Pune`
