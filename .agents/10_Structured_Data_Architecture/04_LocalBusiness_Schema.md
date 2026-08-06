# 04 — LocalBusiness Schema Specification

**Website:** https://reetfoodsngiftings.com  

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://reetfoodsngiftings.com/#localbusiness",
  "name": "Reet Foods & Gifting Hinjewadi",
  "image": "https://reetfoodsngiftings.com/images/storefront.webp",
  "telephone": "+91-9876543210",
  "priceRange": "₹300 - ₹5000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hinjewadi Phase I",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411057",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5912,
    "longitude": 73.7389
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "19:30"
    }
  ]
}
```
