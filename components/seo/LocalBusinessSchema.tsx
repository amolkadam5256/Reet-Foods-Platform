import Script from "next/script";
import { absoluteUrl, site } from "@/lib/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment", "Store"],
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    image: absoluteUrl(site.defaultImage),
    url: site.url,
    telephone: site.phones[0],
    email: site.email,
    priceRange: site.priceRange,
    description: site.description,
    areaServed: site.areaServed,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.officeAddress.street,
      addressLocality: site.officeAddress.locality,
      addressRegion: site.officeAddress.region,
      postalCode: site.officeAddress.postalCode,
      addressCountry: site.officeAddress.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.openingHours.days,
        opens: site.openingHours.opens,
        closes: site.openingHours.closes,
      },
    ],
    sameAs: site.socialLinks,
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
