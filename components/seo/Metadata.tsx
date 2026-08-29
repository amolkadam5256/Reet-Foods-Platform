import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

export interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  keywords?: string[];
  noIndex?: boolean;
}

const DEFAULT_TITLE =
  "Reet Foods & Gifting | Premium Dry Fruits, Chocolates & Corporate Gifts Pune";
const DEFAULT_DESCRIPTION = site.description;
const DEFAULT_IMAGE = site.defaultImage;

export function constructMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  canonical,
  keywords = [...site.keywords],
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  const fullTitle =
    title === DEFAULT_TITLE ? title : `${title} | Reet Foods & Gifting`;

  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description,
    keywords,
    category: "Food gifting",
    applicationName: site.brandName,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    alternates: {
      canonical: absoluteUrl(canonical),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(canonical),
      siteName: site.name,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
