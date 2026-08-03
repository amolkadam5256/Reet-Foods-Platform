import type { MetadataRoute } from "next";

const baseUrl = "https://reetfoods.com";

const pages = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/corporate-gifting", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/products/premium-dry-fruits", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/products/celebration-hampers", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/products/artisanal-chocolates", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/products/categories/dry-fruits", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/products/categories/dry-fruit-box", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/products/categories/chocolate-box", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/categories/chocolates", priority: 0.7, changeFrequency: "monthly" as const },
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
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    priority,
    changeFrequency,
  }));
}
