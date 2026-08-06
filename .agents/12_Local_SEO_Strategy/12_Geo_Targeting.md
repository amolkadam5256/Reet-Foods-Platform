# 12_Geo_Targeting.md
# Geo-Targeting Strategy — Reet Foods & Giftings

---

## Geo-Targeting Hierarchy

```
India (National)
└── Maharashtra (State)
    └── Pune (Primary City)
        ├── Hinjewadi Phase I (Primary Micro-Area)
        ├── Baner, Wakad, Aundh (IT Corridor)
        ├── Koregaon Park, Camp (Premium Zone)
        ├── Kharadi, Viman Nagar, Magarpatta (East Pune IT)
        └── Pimpri-Chinchwad (Industrial Zone)
    └── Mumbai (Tier 1 Expansion)
    └── Bangalore, Delhi, Hyderabad, Chennai (Tier 1 National)
```

---

## SECTION 1 — Google Business Profile Service Areas

### Primary Service Area (Set in GBP)
- Hinjewadi, Pune
- Baner, Pune
- Wakad, Pune
- Aundh, Pune
- Kharadi, Pune
- Viman Nagar, Pune
- Koregaon Park, Pune
- Pimpri-Chinchwad
- Thane (adjacent)
- Navi Mumbai

### Delivery Radius (Set in GBP)
- **Same-day:** Within Pune city (30 km radius)
- **Next-day:** Maharashtra (within 200 km)
- **2–5 days:** PAN-India

---

## SECTION 2 — City Landing Page Geo-Targeting

For each city page (see 03_City_Landing_Pages.md):

| Signal | Implementation |
|--------|---------------|
| URL | `/corporate-gifts/{city}/` |
| Title Tag | Include city name |
| H1 | Include city name |
| First 100 words | Mention city 2x naturally |
| Schema | areaServed: {city} |
| NAP | Always show Pune store address (canonical) |
| Map Embed | Always embed Pune store map |
| CTA | UTM with city parameter |

---

## SECTION 3 — Hyper-Local Targeting (Pune Micro-Areas)

Create dedicated sub-pages for high-value Pune micro-areas:

| Micro-Area | URL | Target Keyword | IT Companies |
|-----------|-----|---------------|-------------|
| Hinjewadi | /corporate-gifts/hinjewadi/ | corporate gifts hinjewadi | Infosys, Wipro, Cognizant |
| Baner | /corporate-gifts/baner/ | corporate gifts baner | Tech startups |
| Wakad | /corporate-gifts/wakad/ | corporate gifts wakad | IT offices |
| Kharadi | /corporate-gifts/kharadi/ | corporate gifts kharadi | EON IT Park |
| Magarpatta | /corporate-gifts/magarpatta/ | corporate gifts magarpatta | Cybercity offices |
| Viman Nagar | /corporate-gifts/viman-nagar/ | corporate gifts viman nagar | — |
| Koregaon Park | /corporate-gifts/koregaon-park/ | corporate gifts koregaon park | Premium corporate zone |
| Pimpri-Chinchwad | /corporate-gifts/pimpri-chinchwad/ | corporate gifts pimpri chinchwad | Manufacturing sector |

---

## SECTION 4 — Localized Content Recommendations

### For Each Targeted City
1. Reference major local employers (IT companies, banks, hospitals).
2. Mention local festivals and regional occasions.
3. Include local delivery time (same-day Pune, next-day within Maharashtra).
4. Reference local landmarks in content ("near Infosys Circle," "in Cybercity Magarpatta").
5. Add regional language if applicable (Marathi for Maharashtra city pages).

### City-Specific Content Hooks
| City | Local Hook |
|------|-----------|
| Hinjewadi | "Premium gifting for Infosys, Wipro & Cognizant employees" |
| Mumbai | "Corporate gifts delivered across BKC, Andheri & Lower Parel" |
| Bangalore | "IT sector gifting for Electronic City & Whitefield companies" |
| Gurgaon | "Corporate hampers for Cyber Hub & DLF corporate offices" |
| Hyderabad | "Festival gifting for HITEC City companies" |

---

## SECTION 5 — Schema Geo-Targeting

Add `areaServed` to LocalBusiness schema dynamically per city page:
```json
"areaServed": [
  {"@type": "City", "name": "{City}", "containedIn": {"@type": "State", "name": "{State}"}},
  {"@type": "Country", "name": "India"}
]
```

---

## SECTION 6 — Google Ads Geo-Targeting (for Paid Search)

| Campaign | Geo Target | Radius | Keywords |
|----------|-----------|--------|---------|
| Pune Local | Pune + 30km | City | corporate gifts pune |
| Hinjewadi IT | Hinjewadi pin | 5km | corporate gifts hinjewadi |
| Maharashtra | Maharashtra | State | corporate gifts maharashtra |
| National Diwali | PAN-India | Country | corporate gifts india |

**Bid Adjustment:** +20% for Pune City Centre | +30% for Hinjewadi | +10% for Maharashtra.

---

*References: 03_City_Landing_Pages.md, 07_Local_Schema.md, 02_Local_Keyword_Research.md*
