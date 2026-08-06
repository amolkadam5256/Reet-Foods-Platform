import type { Metadata } from "next";

export interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  keywords?: string[];
  noIndex?: boolean;
}

const DEFAULT_TITLE = "Reet Foods & Gifting | Premium Dry Fruits, Chocolates & Corporate Gifts Pune";
const DEFAULT_DESCRIPTION = "Pune's premier choice for luxury dry fruits, artisanal chocolates, cold pressed juices, and custom corporate gifting hampers. Delivered with care across India.";
const DEFAULT_IMAGE = "/assets/images/og-image.jpg";
const SITE_URL = "https://reetfoodsngiftings.com";

export function constructMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  canonical,
  keywords = [
    "Reet Foods",
    "Corporate Gifting Pune",
    "Premium Dry Fruits",
    "Luxury Chocolate Gift Boxes",
    "Cold Pressed Juices",
    "Diwali Gifting",
    "Festival Hampers Pune"
  ],
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | Reet Foods & Gifting`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: canonical ? `${SITE_URL}${canonical}` : SITE_URL,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ? `${SITE_URL}${canonical}` : SITE_URL,
      siteName: "Reet Foods & Gifting",
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
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
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
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
