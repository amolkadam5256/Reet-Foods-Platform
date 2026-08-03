import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/assets/"],
    },
    sitemap: "https://reetfoods.com/sitemap.xml",
  };
}
