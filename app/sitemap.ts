import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { productCategories } from "@/data/products";

const baseUrl = "https://www.reetfoodsngiftiings.com";

const pages = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/corporate-diwali-gifting-pune", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/corporate-gifting", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/corporate-gifting/pune", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/hampers", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/bulk-orders", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/customization", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/products/premium-dry-fruits", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/products/celebration-hampers", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/products/artisanal-chocolates", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/products/categories/dry-fruits", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/products/categories/dry-fruit-box", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/products/categories/chocolate-box", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/categories/chocolates", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/categories/corporate-gifts", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/products/categories/hampers", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/products/categories/juices", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/gallery/photos", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/gallery/videos", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/shipping-policy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/return-refund-policy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    priority,
    changeFrequency,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
    lastModified: post.dateModified,
  }));

  const productPages = productCategories.flatMap((cat) =>
    cat.items.map((item) => {
      const slug = item.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      return {
        url: `${baseUrl}/products/${slug}`,
        priority: 0.8,
        changeFrequency: "weekly" as const,
      };
    })
  );

  return [...staticPages, ...blogPages, ...productPages];
}
