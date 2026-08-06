# 01 — Organization Schema Specification

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Canonical Organization & Brand JSON-LD schema definition with credentials and social sameAs links.  

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://reetfoodsngiftings.com/#organization",
      "name": "Reet Foods & Gifting",
      "alternateName": ["Reet Foods", "Reet Gifting", "Reet Foods and Giftings"],
      "url": "https://reetfoodsngiftings.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://reetfoodsngiftings.com/#logo",
        "url": "https://reetfoodsngiftings.com/images/logo.png",
        "caption": "Reet Foods & Gifting Logo"
      },
      "image": "https://reetfoodsngiftings.com/images/storefront.webp",
      "description": "FSSAI certified premium dry fruits, artisanal chocolates, and custom corporate gifting hampers based in Hinjewadi, Pune.",
      "foundingDate": "2016",
      "email": "info@reetfoodsngiftings.com",
      "telephone": "+91-9876543210",
      "taxID": "27FHIPK0363N1ZX",
      "vatID": "27FHIPK0363N1ZX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hinjewadi Phase I",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "FSSAI Food License",
          "identifier": "21526079003816"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/reetfoodsgifting",
        "https://www.instagram.com/reetfoodsgifting",
        "https://www.linkedin.com/company/reet-foods-gifting"
      ]
    }
  ]
}
```
