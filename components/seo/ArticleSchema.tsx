import Script from "next/script";
import { absoluteUrl, site } from "@/lib/site";

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
  image = site.defaultImage,
  datePublished = "2026-01-01",
  dateModified = "2026-08-01",
  authorName = "Reet Foods Editorial Team",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: absoluteUrl(url),
    image: [absoluteUrl(image)],
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: authorName,
    },
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
      id={`article-schema-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
