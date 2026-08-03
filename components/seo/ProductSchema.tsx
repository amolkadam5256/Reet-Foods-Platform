import Script from "next/script";

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
  image = "https://reetfoods.com/assets/images/product-default.jpg",
  sku = "REET-FOOD-DEFAULT",
  price = "499",
  currency = "INR",
  category = "Gifting",
  inStock = true,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "image": [image],
    "description": description,
    "sku": sku,
    "brand": {
      "@type": "Brand",
      "name": "Reet Foods & Gifting"
    },
    "category": category,
    "offers": {
      "@type": "Offer",
      "url": `https://reetfoods.com/products`,
      "priceCurrency": currency,
      "price": price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Reet Foods & Gifting"
      }
    }
  };

  return (
    <Script
      id={`product-schema-${sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
