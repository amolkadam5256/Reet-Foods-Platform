import Script from "next/script";
import { absoluteUrl, site } from "@/lib/site";

export interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  sku?: string;
  price?: string | number;
  currency?: string;
  category?: string;
  inStock?: boolean;
}

export function ProductSchema({
  name,
  description,
  image = site.defaultImage,
  sku = "REET-FOOD-DEFAULT",
  price = "499",
  currency = "INR",
  category = "Gifting",
  inStock = true,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    image: [absoluteUrl(image)],
    description,
    sku,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    category,
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/products"),
      priceCurrency: currency,
      price,
      itemCondition: "https://schema.org/NewCondition",
      availability: inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
      },
    },
  };

  return (
    <Script
      id={`product-schema-${sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
