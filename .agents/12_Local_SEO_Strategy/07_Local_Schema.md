# 07_Local_Schema.md
# Local Schema.org Implementation — Reet Foods & Giftings

---

## 1. LocalBusiness JSON-LD (Homepage / Contact Page)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://reetfoodsngiftings.com/#organization",
  "name": "Reet Foods & Giftings",
  "alternateName": "Reet Foods",
  "description": "Pune-based premium corporate gifting company offering luxury hampers, dry fruit gift boxes, wedding gifts, and bulk corporate gifting solutions with PAN-India delivery.",
  "url": "https://reetfoodsngiftings.com",
  "logo": "https://reetfoodsngiftings.com/images/reet-foods-logo.png",
  "image": "https://reetfoodsngiftings.com/images/store-front.jpg",
  "telephone": ["+91-9890609611", "+91-8007518088"],
  "email": "reetfoodspune@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle",
    "addressLocality": "Hinjewadi Phase I",
    "addressRegion": "Pune",
    "postalCode": "411057",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.5908",
    "longitude": "73.7276"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, NEFT, RTGS",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Corporate Gifting Products",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Luxury Diwali Hamper"}},
      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Premium Dry Fruit Box"}},
      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Corporate Gift Box"}},
      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Wedding Return Gift"}},
      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Custom Branded Hamper"}}
    ]
  },
  "areaServed": [
    {"@type": "City", "name": "Pune"},
    {"@type": "City", "name": "Mumbai"},
    {"@type": "City", "name": "Delhi"},
    {"@type": "City", "name": "Bangalore"},
    {"@type": "City", "name": "Hyderabad"},
    {"@type": "AdministrativeArea", "name": "Maharashtra"},
    {"@type": "Country", "name": "India"}
  ],
  "sameAs": [
    "https://www.facebook.com/reetfoodsngiftings",
    "https://www.instagram.com/reetfoodsngiftings",
    "https://www.linkedin.com/company/reet-foods-giftings"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

---

## 2. City Landing Page — LocalBusiness (Example: Hinjewadi)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://reetfoodsngiftings.com/corporate-gifts/hinjewadi/#localbusiness",
  "name": "Reet Foods & Giftings — Hinjewadi Corporate Gifts",
  "url": "https://reetfoodsngiftings.com/corporate-gifts/hinjewadi/",
  "telephone": "+91-9890609611",
  "email": "reetfoodspune@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle",
    "addressLocality": "Hinjewadi Phase I",
    "addressRegion": "Pune",
    "postalCode": "411057",
    "addressCountry": "IN"
  },
  "areaServed": {"@type": "City", "name": "Hinjewadi, Pune"},
  "description": "Premium corporate gift hampers and dry fruit boxes for IT companies in Hinjewadi, Pune. Same-day delivery available."
}
```

---

## 3. FAQPage Schema (City Pages & FAQ Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you deliver corporate gifts in Hinjewadi Pune same day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Reet Foods & Giftings offers same-day delivery in Hinjewadi for orders placed before 12 PM. Call +91 9890609611."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum order for corporate bulk gifting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum bulk order is 50 units. Contact reetfoodspune@gmail.com for a custom quote."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer GST invoices for corporate orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide GST billing. Our GSTIN is 27FHIPK0363N1ZX."
      }
    }
  ]
}
```

---

## 4. BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://reetfoodsngiftings.com/"},
    {"@type": "ListItem", "position": 2, "name": "Corporate Gifts", "item": "https://reetfoodsngiftings.com/corporate-gifts/"},
    {"@type": "ListItem", "position": 3, "name": "Corporate Gifts Hinjewadi", "item": "https://reetfoodsngiftings.com/corporate-gifts/hinjewadi/"}
  ]
}
```

---

## 5. Product Schema (Product Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Dry Fruit Gift Box",
  "description": "Handcrafted dry fruit gift box with cashews, almonds, raisins, and pistachios. Perfect for Diwali, weddings, and corporate gifting.",
  "brand": {"@type": "Brand", "name": "Reet Foods & Giftings"},
  "image": "https://reetfoodsngiftings.com/images/dry-fruit-gift-box.jpg",
  "offers": {
    "@type": "Offer",
    "url": "https://reetfoodsngiftings.com/products/premium-dry-fruit-box/",
    "priceCurrency": "INR",
    "price": "499",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Reet Foods & Giftings"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "85"
  }
}
```

---

## 6. Organization Schema (Sitewide)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reet Foods & Giftings",
  "legalName": "Reet Foods Pvt Ltd",
  "url": "https://reetfoodsngiftings.com",
  "logo": "https://reetfoodsngiftings.com/images/reet-foods-logo.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9890609611",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-8007518088",
      "contactType": "sales",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle",
    "addressLocality": "Hinjewadi Phase I",
    "addressRegion": "Pune",
    "postalCode": "411057",
    "addressCountry": "IN"
  }
}
```

---

## Implementation Notes

- Inject all JSON-LD via `<script type="application/ld+json">` in `<head>`.
- Use the `LocalSchema.tsx` component in Next.js (see 16_Developer_Implementation.md).
- Validate all schema at https://search.google.com/test/rich-results before deploying.
- Update `aggregateRating` values monthly from actual review counts.
- Add `@id` anchors consistently so Google can graph entities across pages.

---

*References: 00_Local_SEO_Master.md, 01_Google_Business_Profile.md, 16_Developer_Implementation.md*
