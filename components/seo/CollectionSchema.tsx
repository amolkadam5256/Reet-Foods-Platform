import Script from "next/script";
import { absoluteUrl, site } from "@/lib/site";

export interface CollectionSchemaProps {
  name: string;
  description: string;
  url: string;
  itemCount?: number;
}

export function CollectionSchema({
  name,
  description,
  url,
  itemCount = 10,
}: CollectionSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(url),
    numberOfItems: itemCount,
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(site.defaultImage),
      },
    },
  };

  return (
    <Script
      id={`collection-schema-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
