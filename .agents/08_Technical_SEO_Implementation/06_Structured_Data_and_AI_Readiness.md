# 06 — Structured Data & AI Search Technical Integration

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Provide server-rendered JSON-LD schema code templates for Google Rich Results and AI Engine Knowledge Graphs.

---

## 1. Server-Side Organization & LocalBusiness Schema (`components/seo/OrganizationSchema.tsx`)

```tsx
export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Reet Foods & Gifting",
    alternateName: ["Reet Foods", "Reet Gifting"],
    url: "https://reetfoodsngiftings.com",
    logo: "https://reetfoodsngiftings.com/images/logo.png",
    image: "https://reetfoodsngiftings.com/images/storefront.webp",
    description:
      "FSSAI certified premium dry fruits, custom corporate gift hampers, and artisanal chocolates in Hinjewadi, Pune.",
    telephone: "+91-9876543210",
    email: "info@reetfoodsngiftings.com",
    priceRange: "₹300 - ₹5000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hinjewadi Phase I",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411057",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5912,
      longitude: 73.7389,
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "FSSAI Food License",
        identifier: "21525083009881",
      },
    ],
    sameAs: [
      "https://www.facebook.com/reetfoodsgifting",
      "https://www.instagram.com/reetfoodsgifting",
      "https://www.linkedin.com/company/reet-foods-gifting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
```

---

## 2. Product Schema Implementation (`components/seo/ProductSchema.tsx`)

```tsx
interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  sku: string;
  price: number;
  ratingValue?: number;
  reviewCount?: number;
}

export default function ProductSchema({
  name,
  description,
  image,
  sku,
  price,
  ratingValue = 4.8,
  reviewCount = 24,
}: ProductSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    image: image,
    description: description,
    sku: sku,
    brand: {
      "@type": "Brand",
      name: "Reet Foods",
    },
    offers: {
      "@type": "Offer",
      url: `https://reetfoodsngiftings.com/products/${sku}`,
      priceCurrency: "INR",
      price: price,
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Reet Foods & Gifting",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue,
      reviewCount: reviewCount,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
```

---

## 3. AI Search Engine RAG Readiness

To ensure ChatGPT, Perplexity, and Google AI Overviews cite Reet Foods as an authoritative entity:

1. Embed structured markdown tables for product nutritional facts and packaging dimensions.
2. Use precise entity naming (`Reet Foods & Gifting`, `FSSAI 21525083009881`, `Hinjewadi Pune`).
3. Add `SpeakableSpecification` schema on key corporate and local landing pages.
