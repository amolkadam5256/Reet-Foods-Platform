import Script from "next/script";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Reet Foods & Gifting",
    "image": "https://reetfoods.com/assets/images/store-front.jpg",
    "url": "https://reetfoods.com",
    "telephone": "+91-9876543210",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop F14, Streets of Europe Mall, Hinjewadi Phase I",
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
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "20:00"
      }
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
