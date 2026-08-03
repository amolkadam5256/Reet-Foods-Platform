import Script from "next/script";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reet Foods & Gifting",
    "url": "https://reetfoods.com",
    "logo": "https://reetfoods.com/assets/images/logo.png",
    "description": "Pune's premier partner for premium dry fruits, chocolates, cold pressed juices, and custom corporate gift hampers.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop F14, Streets of Europe Mall, Hinjewadi Phase I",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411057",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    "sameAs": [
      "https://www.facebook.com/reetfoodsgifting",
      "https://www.instagram.com/reetfoodsgifting",
      "https://www.linkedin.com/company/reetfoodsgifting"
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
