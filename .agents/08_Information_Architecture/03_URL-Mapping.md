# URL Mapping — Current vs Recommended

> **Audit Date:** July 2026 | **Site:** searchsarkarinaukri.com

---

## URL Issues Summary

| Issue Type | Count | Severity |
|-----------|-------|----------|
| Query param category pages (not canonical-friendly) | 12+ | 🔴 Critical |
| Query param district pages | 36 | 🔴 Critical |
| Missing department hub clean URLs | 9 | 🟡 High |
| Missing state hub clean URLs | 28 | 🟡 High |
| Missing qualification hub clean URLs | 8+ | 🟡 High |
| `/jobs` and homepage may share OG url (og:url = `/`) | 1 | 🟡 High |

---

## Complete URL Mapping Table

### Level 0 — Homepage

| Current URL | Recommended URL | Status | Notes |
|------------|----------------|--------|-------|
| `https://www.searchsarkarinaukri.com/` | `/` | ✅ Correct | OG url correctly set |

---

### Level 1 — Hub Pages

| Current URL | Recommended URL | Status | Notes |
|------------|----------------|--------|-------|
| `/jobs` | `/jobs` | ✅ Keep | Main job listing hub |
| `/admit-cards` | `/admit-cards` | ✅ Keep | Admit card hub |
| `/results` | `/results` | ✅ Keep | Results hub |
| `/districts` | `/districts` | ⚠️ Rename | Should be `/district` or expand to state-specific |
| `/exam-calendar` | `/exam-calendar` | ✅ Keep | Exam calendar hub |
| `/current-affairs` | `/current-affairs` | ✅ Keep | Current affairs hub |
| `/eligibility-checker` | `/eligibility-checker` | ✅ Keep | Interactive tool |
| `/study-material` | `/study-material` | ✅ Keep | Guides hub |
| ❌ Missing | `/department` | ❌ Create | Department index page |
| ❌ Missing | `/state` | ❌ Create | State index page |
| ❌ Missing | `/qualification` | ❌ Create | Qualification index page |

---

### Level 2 — Category/Department Pages

| Current URL (Query Param) | Recommended URL | Priority | Status |
|--------------------------|----------------|----------|--------|
| `/jobs?category=mpsc` | `/department/mpsc` | P0 | ❌ Fix needed |
| `/jobs?category=upsc` | `/department/upsc` | P0 | ❌ Fix needed |
| `/jobs?category=ssc` | `/department/ssc` | P0 | ❌ Fix needed |
| `/jobs?category=railway` | `/department/railway` | P0 | ❌ Fix needed |
| `/jobs?category=banking` | `/department/banking` | P0 | ❌ Fix needed |
| `/jobs?category=police` | `/department/police` | P0 | ❌ Fix needed |
| `/jobs?category=talathi` | `/department/talathi` | P0 | ❌ Fix needed |
| `/jobs?category=zp` | `/department/zilla-parishad` | P1 | ❌ Fix needed |
| `/jobs?category=forest` | `/department/forest` | P1 | ❌ Fix needed |
| `/jobs?category=health` | `/department/health` | P1 | ❌ Fix needed |
| `/jobs?category=education` | `/department/education` | P1 | ❌ Fix needed |
| `/jobs?category=central` | `/department/central-govt` | P1 | ❌ Fix needed |

---

### Level 2 — State Hub Pages (All Missing)

| Keyword Target | Recommended URL | Priority | Status |
|---------------|----------------|----------|--------|
| UP sarkari naukri | `/state/uttar-pradesh` | P0 | ❌ Create |
| Bihar sarkari naukri | `/state/bihar` | P0 | ❌ Create |
| Rajasthan sarkari naukri | `/state/rajasthan` | P0 | ❌ Create |
| MP sarkari naukri | `/state/madhya-pradesh` | P0 | ❌ Create |
| Maharashtra sarkari naukri | `/state/maharashtra` | P0 | ❌ Create |
| Andhra Pradesh sarkari naukri | `/state/andhra-pradesh` | P1 | ❌ Create |
| Assam sarkari naukri | `/state/assam` | P1 | ❌ Create |
| Chhattisgarh sarkari naukri | `/state/chhattisgarh` | P1 | ❌ Create |
| Gujarat sarkari naukri | `/state/gujarat` | P1 | ❌ Create |
| Haryana sarkari naukri | `/state/haryana` | P1 | ❌ Create |
| Himachal Pradesh sarkari naukri | `/state/himachal-pradesh` | P1 | ❌ Create |
| Jharkhand sarkari naukri | `/state/jharkhand` | P1 | ❌ Create |
| Karnataka sarkari naukri | `/state/karnataka` | P1 | ❌ Create |
| Kerala sarkari naukri | `/state/kerala` | P1 | ❌ Create |
| Manipur sarkari naukri | `/state/manipur` | P2 | ❌ Create |
| Meghalaya sarkari naukri | `/state/meghalaya` | P2 | ❌ Create |
| Mizoram sarkari naukri | `/state/mizoram` | P2 | ❌ Create |
| Nagaland sarkari naukri | `/state/nagaland` | P2 | ❌ Create |
| Odisha sarkari naukri | `/state/odisha` | P1 | ❌ Create |
| Punjab sarkari naukri | `/state/punjab` | P1 | ❌ Create |
| Sikkim sarkari naukri | `/state/sikkim` | P2 | ❌ Create |
| Tamil Nadu sarkari naukri | `/state/tamil-nadu` | P1 | ❌ Create |
| Telangana sarkari naukri | `/state/telangana` | P1 | ❌ Create |
| Tripura sarkari naukri | `/state/tripura` | P2 | ❌ Create |
| Uttarakhand sarkari naukri | `/state/uttarakhand` | P1 | ❌ Create |
| West Bengal sarkari naukri | `/state/west-bengal` | P1 | ❌ Create |
| Delhi sarkari naukri | `/state/delhi` | P0 | ❌ Create |
| Jammu & Kashmir sarkari naukri | `/state/jammu-kashmir` | P1 | ❌ Create |
| Arunachal Pradesh | `/state/arunachal-pradesh` | P2 | ❌ Create |
| Goa sarkari naukri | `/state/goa` | P2 | ❌ Create |
| Ladakh sarkari naukri | `/state/ladakh` | P2 | ❌ Create |
| Chandigarh sarkari naukri | `/state/chandigarh` | P2 | ❌ Create |
| Puducherry sarkari naukri | `/state/puducherry` | P2 | ❌ Create |
| Andaman & Nicobar | `/state/andaman-nicobar` | P2 | ❌ Create |
| Dadra & Nagar Haveli | `/state/dadra-nagar-haveli` | P2 | ❌ Create |
| Lakshadweep | `/state/lakshadweep` | P2 | ❌ Create |

---

### Level 2 — District Pages

| Current URL | Recommended URL | Priority | Status |
|------------|----------------|----------|--------|
| `/jobs?district_slug=pune` | `/district/pune` | P0 | ❌ Fix — add clean URL |
| `/jobs?district_slug=mumbai-city` | `/district/mumbai` | P0 | ❌ Fix |
| `/jobs?district_slug=nagpur` | `/district/nagpur` | P0 | ❌ Fix |
| `/jobs?district_slug=nashik` | `/district/nashik` | P0 | ❌ Fix |
| `/jobs?district_slug=thane` | `/district/thane` | P0 | ❌ Fix |
| `/jobs?district_slug=chhatrapati-sambhajinagar` | `/district/chhatrapati-sambhajinagar` | P0 | ❌ Fix |
| `/jobs?district_slug=solapur` | `/district/solapur` | P1 | ❌ Fix |
| `/jobs?district_slug=kolhapur` | `/district/kolhapur` | P1 | ❌ Fix |
| `/jobs?district_slug=amravati` | `/district/amravati` | P1 | ❌ Fix |
| `/jobs?district_slug=satara` | `/district/satara` | P1 | ❌ Fix |
| `/jobs?district_slug=sangli` | `/district/sangli` | P1 | ❌ Fix |
| `/jobs?district_slug=ahmednagar` | `/district/ahilyanagar` | P1 | ❌ Fix |
| `/jobs?district_slug=jalgaon` | `/district/jalgaon` | P1 | ❌ Fix |
| `/jobs?district_slug=latur` | `/district/latur` | P1 | ❌ Fix |
| `/jobs?district_slug=nanded` | `/district/nanded` | P1 | ❌ Fix |
| `/jobs?district_slug=yavatmal` | `/district/yavatmal` | P1 | ❌ Fix |
| `/jobs?district_slug=ratnagiri` | `/district/ratnagiri` | P1 | ❌ Fix |
| `/jobs?district_slug=raigad` | `/district/raigad` | P1 | ❌ Fix |
| ❌ Missing districts (18 more) | `/district/[slug]` | P2 | ❌ Create |

---

### Level 2 — Qualification Pages (All Missing)

| Keyword Target | Recommended URL | Priority | Status |
|---------------|----------------|----------|--------|
| 10th pass sarkari naukri | `/qualification/10th-pass` | P0 | ❌ Create |
| 12th pass sarkari naukri | `/qualification/12th-pass` | P0 | ❌ Create |
| Graduate sarkari naukri | `/qualification/graduate` | P0 | ❌ Create |
| ITI pass sarkari naukri | `/qualification/iti` | P1 | ❌ Create |
| Diploma sarkari naukri | `/qualification/diploma` | P1 | ❌ Create |
| B.Tech / Engineering jobs | `/qualification/engineering` | P1 | ❌ Create |
| MBA sarkari naukri | `/qualification/mba` | P2 | ❌ Create |
| B.Ed (Teaching) jobs | `/qualification/b-ed` | P1 | ❌ Create |
| Law Graduate (LLB) | `/qualification/llb` | P2 | ❌ Create |
| Nursing (GNM/ANM) | `/qualification/nursing` | P2 | ❌ Create |
| Medical (MBBS) | `/qualification/mbbs` | P2 | ❌ Create |
| Post Graduate | `/qualification/post-graduate` | P1 | ❌ Create |

---

### Level 3 — Individual Content Pages

| Current URL Pattern | Status | Schema Required |
|--------------------|--------|----------------|
| `/jobs/[slug]` | ✅ Live | JobPosting, BreadcrumbList |
| `/admit-cards/[slug]` | ✅ Live | Event, BreadcrumbList |
| `/results/[slug]` | ✅ Live | Event, BreadcrumbList |
| `/study-material/[slug]` | 🔍 Confirm | Article, FAQPage |
| `/current-affairs/[slug]` | 🔍 Confirm | Article, BreadcrumbList |

---

## URL Best Practices Checklist

- [x] Lowercase URLs
- [x] Hyphens instead of underscores
- [x] No trailing slashes (confirm)
- [ ] ❌ Remove query params for category/department pages
- [ ] ❌ Remove query params for district pages
- [ ] ❌ Add `/department/`, `/state/`, `/qualification/` hub routes
- [x] www vs non-www redirect (confirm 301 redirect)
- [x] HTTPS
- [ ] ❌ Canonical tags server-rendered on all routes (currently JS-only)

---
*Document Version: 1.0 | Audited: July 2026*
