import Script from "next/script";

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  image = "https://reetfoodsngiftings.com/assets/images/blog-default.jpg",
  datePublished = "2026-01-01",
  dateModified = "2026-08-01",
  authorName = "Reet Foods Editorial Team",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": url.startsWith("http") ? url : `https://reetfoodsngiftings.com${url}`,
    "image": [image],
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Reet Foods & Gifting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://reetfoodsngiftings.com/assets/images/logo.png"
      }
    }
  };

  return (
    <Script
      id={`article-schema-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
