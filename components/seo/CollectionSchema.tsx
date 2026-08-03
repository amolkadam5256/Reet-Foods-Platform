import Script from "next/script";

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
    "name": name,
    "description": description,
    "url": url.startsWith("http") ? url : `https://reetfoods.com${url}`,
    "numberOfItems": itemCount,
    "publisher": {
      "@type": "Organization",
      "name": "Reet Foods & Gifting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://reetfoods.com/assets/images/logo.png"
      }
    }
  };

  return (
    <Script
      id={`collection-schema-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
