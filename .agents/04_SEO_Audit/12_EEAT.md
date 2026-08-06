# 12 — E-E-A-T Audit

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026  
**E-E-A-T:** Experience, Expertise, Authoritativeness, Trustworthiness  

---

## 12.1 E-E-A-T Score

| Signal | Score | Grade |
|--------|-------|-------|
| Experience | 6/10 | B- |
| Expertise | 5/10 | C+ |
| Authority | 4/10 | C |
| Trust | 6/10 | B- |
| **Overall E-E-A-T** | **53/100** | **C+** |

---

## 12.2 Experience Signals

**Definition:** First-hand, real-world experience demonstrated through the content.

| Signal | Present | Quality |
|--------|---------|---------|
| Founded date (2016) | ✅ About page | ✅ |
| 50,000+ gift boxes stat | ✅ About page | ✅ — but needs citation |
| 350+ enterprise clients | ✅ About page | ✅ — but needs citation |
| Production capacity (500/day) | ✅ | ✅ |
| Largest order (1,000+ Diwali) | ✅ business.ts | ❌ Not visible on website |
| Process walkthrough | ✅ About + Corporate pages | ✅ |
| Behind-the-scenes content | ❌ No factory photos | Missing |
| Team expertise | ❌ No team page | Missing |
| Case studies | ❌ None | Missing |
| Customer success stories | ✅ Testimonials section | Needs photos for authenticity |

**Recommendation:** Add a dedicated "Our Work" or "Case Studies" section showing real corporate orders with volume, occasion, and outcome.

---

## 12.3 Expertise Signals

**Definition:** Demonstrated knowledge and skill in the subject area.

| Signal | Present | Quality |
|--------|---------|---------|
| FSSAI license displayed | ✅ Contact page | ✅ |
| FSSAI license number | ✅ `21526079003816` | ✅ |
| GSTIN displayed | ✅ Contact page | ✅ |
| Product origin knowledge | ⚠️ Blog mentions | Needs deeper content |
| Dry fruit quality grading | ❌ None | Should explain W240, W320 cashews etc. |
| Nutrition/quality info | ❌ None | Should add |
| Industry-specific copy | ✅ Corporate page | ✅ — IT, Pharma, Finance |
| Food safety knowledge | ⚠️ "Nitrogen packed" mentioned | Needs explanation |
| Author credentials on blog | ❌ None | Missing |
| Expert third-party citations | ❌ None | Missing |

**Recommendation:** Add a "Food Quality Standards" page explaining FSSAI, nitrogen packing, sourcing practices, and quality grades.

---

## 12.4 Authoritativeness Signals

**Definition:** Recognized as a go-to source by others in the field.

| Signal | Present | Quality |
|--------|---------|---------|
| Backlinks from industry sites | ❌ Unknown | Need link building |
| Media mentions | ❌ None on site | Missing |
| Industry association memberships | ❌ None | Check if any apply |
| Awards or recognition | ❌ None | Source or create |
| Google Business Reviews | ❌ Unknown | Build reviews |
| IndiaMART/Justdial presence | ❌ Unknown | Build citations |
| Social media following | ❌ Not on site | Add social proof numbers |
| Press/news coverage | ❌ None | Target food/gifting publications |

**Recommendation:** 
1. Submit to "Best Corporate Gifting Companies in Pune" roundup articles
2. Participate in industry events and get listed
3. Create shareable research content (e.g., "State of Corporate Gifting in India")

---

## 12.5 Trust Signals

**Definition:** Clear indicators that the business is legitimate, transparent, and accountable.

| Signal | Present | Quality |
|--------|---------|---------|
| Physical address displayed | ✅ Contact page | ✅ |
| Multiple phone numbers | ✅ Two numbers | ✅ |
| Email address displayed | ✅ | ✅ |
| Privacy Policy page | ✅ | ✅ |
| Terms & Conditions page | ✅ | ✅ |
| Return/Refund Policy | ✅ | ✅ |
| Shipping Policy | ✅ | ✅ |
| FSSAI certification | ✅ | ✅ |
| SSL/HTTPS | ✅ | ✅ |
| WhatsApp contact | ✅ | ✅ |
| Social media links | ✅ (in schema) | Needs to be visible on page |
| Business registration | ✅ GSTIN | ✅ |
| Actual customer reviews | ⚠️ Testimonials (no rating stars) | Add star ratings |
| Review schema | ⚠️ Products page only | Incomplete |
| No spam signals | ✅ | ✅ |

---

## 12.6 Author & Entity Trust

### Blog Post Authors
**Current:** No author information on blog posts.

Google quality raters look for:
- Who wrote the content?
- What is their expertise?
- Can this be verified?

**Fix:** Add author attribution to blog posts:
```tsx
// components/blog/BlogPost.tsx — add author block
<div className="author-bio">
  <p className="font-semibold">Written by Reet Foods Team</p>
  <p>Reet Foods & Gifting has been creating premium gift experiences since 2016.</p>
</div>
```

For better E-E-A-T, add a real named author (owner or content manager) with a short bio.

---

## 12.7 Business Information Completeness

| Info | On Website | In Schema | In GBP |
|------|-----------|-----------|--------|
| Legal business name | ✅ (contact) | ⚠️ inconsistent | Unknown |
| Phone | ✅ (correct) | ❌ (wrong) | Unknown |
| Email | ✅ | ❌ missing | Unknown |
| Office address | ✅ | ✅ | Unknown |
| Factory address | ✅ | ❌ missing | Unknown |
| FSSAI number | ✅ | ❌ missing | Unknown |
| GSTIN | ✅ | ❌ missing | Unknown |
| Business hours | ❌ Not on website | ✅ (in schema) | Unknown |
| Year established | ✅ About page | ❌ missing | Unknown |

---

## 12.8 Policy Pages Audit

| Policy | Status | Quality |
|--------|--------|---------|
| Privacy Policy | ✅ Exists | ⚠️ Review for completeness |
| Terms & Conditions | ✅ Exists | ⚠️ Review for completeness |
| Return/Refund Policy | ✅ Exists | ✅ Clear "no returns" policy |
| Shipping Policy | ✅ Exists | ✅ |
| Cookie Policy | ❌ Missing | Add GDPR/DPDP notice |
| Accessibility Statement | ❌ Missing | Add for full trust |

---

## 12.9 Social Proof Audit

| Type | Current | Recommendation |
|------|---------|---------------|
| Google Reviews | ❌ Not shown | Add Google Reviews widget |
| Client testimonials | ✅ Homepage | Add photos and designation |
| Instagram feed | ❌ Missing | Add shoppable Instagram section |
| Client logo wall | ❌ Missing | Add "Trusted by" logos |
| Star ratings | ❌ Missing | Add to product pages |
| Video testimonials | ❌ Missing | High impact addition |
| Press quotes | ❌ Missing | "As seen in" strip |

---

## 12.10 E-E-A-T Improvement Plan

### Priority 1 — Fix Schema Inconsistencies (Week 1)
- Standardize business name in all schema
- Fix phone number in schema
- Add FSSAI number to schema (`hasCredential`)
- Add founding date to Organization schema

### Priority 2 — Add Trust Content (Week 2-3)
- Add team member section to About page
- Add client logo wall to homepage
- Add Google Reviews embed to homepage
- Display business hours visibly on site

### Priority 3 — Build Authority Content (Month 1-2)
- Publish 3 expert blog posts with citation sources
- Create "Food Quality Standards" page
- Create "About FSSAI" mini-guide
- Submit to industry directories and award programs

### Priority 4 — External Authority (Month 2-3)
- Seek media coverage in food/gifting publications
- Create shareable research report
- Build quality backlinks from Pune business blogs

---

## Testing Checklist

- [ ] Google Search Quality Rater — review site against "Your Money or Your Life" guidelines
- [ ] Review all blog posts — confirm no page lacks author attribution
- [ ] Test privacy policy link in footer — confirm it works
- [ ] Verify FSSAI number on contact page is accurate
- [ ] Verify GSTIN on contact page is accurate
- [ ] Test social media links in footer — confirm they link to correct profiles
- [ ] Add AggregateRating schema and verify via Rich Results Test
- [ ] Check that `foundingDate` and `email` are in Organization schema
- [ ] Confirm `knowsAbout` array is in Organization schema
