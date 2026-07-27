import { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Premium Dry Fruits, Chocolates & Luxury Gift Boxes | Reet Foods",
  description:
    "Explore Reet Foods luxury collection of origin dry fruits, hand-poured Belgian chocolates, cold-pressed juices, and bespoke corporate gifting boxes with custom logo printing.",
  keywords: [
    "premium dry fruits",
    "artisanal chocolates",
    "corporate gifting hampers",
    "luxury dry fruit gift boxes",
    "custom logo corporate gifts",
    "Reet Foods Pune",
    "wedding favours Pune",
    "FSSAI certified dry fruits",
  ],
  alternates: {
    canonical: "https://reetfoods.com/products",
  },
  openGraph: {
    title: "Premium Dry Fruits, Chocolates & Luxury Gift Boxes | Reet Foods",
    description:
      "Curated luxury gifting assortment for corporate events, weddings, and festive celebrations. FSSAI certified origin dry fruits and Belgian chocolates.",
    url: "https://reetfoods.com/products",
    siteName: "Reet Foods",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Dry Fruits, Chocolates & Luxury Gift Boxes | Reet Foods",
    description: "Curated luxury gifting assortment for corporate events, weddings, and festive celebrations.",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <ProductsClient />

      {/* SEO JSON-LD Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Premium Dry Fruits, Chocolates & Luxury Gift Boxes",
              "url": "https://reetfoods.com/products",
              "description": "Browse Reet Foods complete collection of origin dry fruits, artisanal Belgian chocolates, and bespoke corporate gifting boxes.",
              "publisher": {
                "@type": "Organization",
                "name": "Reet Foods",
                "logo": "https://reetfoods.com/logo.png"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://reetfoods.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Products",
                  "item": "https://reetfoods.com/products"
                }
              ]
            }
          ]),
        }}
      />
    </main>
  );
}
