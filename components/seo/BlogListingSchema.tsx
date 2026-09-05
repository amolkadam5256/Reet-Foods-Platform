import Script from "next/script";
import type { BlogPost } from "@/data/blog";

const SITE_URL = "https://www.reetfoodsngiftiings.com";

export function BlogListingSchema({ posts }: { posts: BlogPost[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Reet Foods & Gifting Blog",
    "description": "Corporate gifting, wedding hamper, dry fruit, chocolate packaging, and premium food gifting insights from Reet Foods.",
    "url": `${SITE_URL}/blog`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${SITE_URL}/blog/${post.slug}`,
        "name": post.title,
        "description": post.excerpt,
        "datePublished": post.datePublished,
        "dateModified": post.dateModified,
      })),
    },
  };

  return (
    <Script
      id="blog-listing-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
