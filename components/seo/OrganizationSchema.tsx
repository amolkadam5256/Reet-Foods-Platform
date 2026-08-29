import Script from "next/script";
import { absoluteUrl, site } from "@/lib/site";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl(site.defaultImage),
    image: absoluteUrl(site.defaultImage),
    description: site.description,
    taxID: site.gstNumber,
    knowsAbout: site.keywords,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.officeAddress.street,
      addressLocality: site.officeAddress.locality,
      addressRegion: site.officeAddress.region,
      postalCode: site.officeAddress.postalCode,
      addressCountry: site.officeAddress.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phones[0],
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    sameAs: site.socialLinks,
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
