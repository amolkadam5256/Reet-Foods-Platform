import { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Premium Dry Fruits, Gift Boxes & Corporate Hampers | Reet Foods",
  description:
    "Explore Reet Foods premium dry fruits, dry fruit gift boxes, festive hampers and custom corporate gifting solutions from Pune. FSSAI certified, luxury packaging with custom logo engraving.",
  keywords: [
    "premium dry fruits",
    "dry fruit gift boxes",
    "corporate gifting hampers",
    "luxury dry fruit gift boxes",
    "custom logo corporate gifts",
    "Reet Foods Pune",
    "wedding favours Pune",
    "FSSAI certified dry fruits",
    "Belgian chocolates gift box",
    "bulk gifting India",
    "corporate gifting solutions",
    "luxury gift hampers",
    "handcrafted gifts Pune",
    "nitrogen sealed dry fruits",
  ],
  alternates: {
    canonical: "https://reetfoods.com/products",
  },
  openGraph: {
    title: "Premium Dry Fruits, Gift Boxes & Corporate Hampers | Reet Foods",
    description:
      "Premium dry fruits, festive hampers and custom corporate gifts for teams, clients and celebrations. FSSAI certified with luxury packaging.",
    url: "https://reetfoods.com/products",
    siteName: "Reet Foods",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://reetfoods.in/products-og.jpg",
        width: 1200,
        height: 630,
        alt: "Reet Foods luxury gifting collection — premium dry fruits, Belgian chocolates, and corporate hampers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Dry Fruits, Gift Boxes & Corporate Hampers | Reet Foods",
    description:
      "Curated luxury gifting assortment for corporate events, weddings, and festive celebrations. FSSAI certified.",
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
              name: "Premium Dry Fruits, Gift Boxes & Corporate Hampers",
              url: "https://reetfoods.com/products",
              description:
                "Browse Reet Foods premium dry fruits, gift boxes, festive hampers and custom corporate gifting solutions.",
              publisher: {
                "@type": "Organization",
                name: "Reet Foods",
                logo: "https://reetfoods.in/logo.png",
              },
              hasPart: [
                {
                  "@type": "Product",
                  name: "Royal Pistachio & Cashew Gold Tin",
                  category: "Dry Fruits",
                  description:
                    "Handpicked Iranian pistachios and Jumbo W240 cashews in a nitrogen-sealed metallic gold tin.",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    price: "1499",
                    url: "https://reetfoods.com/products/premium-dry-fruits",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Product",
                  name: "Artisanal Belgian Truffle Assortment",
                  category: "Chocolates",
                  description:
                    "12 pieces of hand-poured 70% dark Belgian chocolates with nut pralines in a magnetic rigid box.",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    price: "1299",
                    url: "https://reetfoods.com/products/artisanal-chocolates",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Product",
                  name: "Grande Corporate Executive Hamper",
                  category: "Celebration Hampers",
                  description:
                    "Dry fruit quartet, artisanal chocolate bark, cold-pressed elixir, and custom laser-engraved wooden box.",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    price: "3499",
                    url: "https://reetfoods.com/products/celebration-hampers",
                    availability: "https://schema.org/InStock",
                  },
                },
              ],
              about: [
                "Premium Dry Fruits",
                "Artisanal Chocolates",
                "Celebration Hampers",
                "Corporate Gifting",
                "FSSAI Certified",
                "ISO 22000",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://reetfoods.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: "https://reetfoods.com/products",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Reet Foods",
              url: "https://reetfoods.com",
              logo: "https://reetfoods.in/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop F14, Streets of Europe Mall, Hinjewadi Phase I",
                addressLocality: "Pune",
                postalCode: "411057",
                addressRegion: "MH",
                addressCountry: "IN",
              },
              sameAs: [
                "https://facebook.com/reetfoods",
                "https://instagram.com/reetfoods",
                "https://linkedin.com/company/reetfoods",
                "https://wa.me/919890609611",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9890609611",
                  email: "reetfoodspune@gmail.com",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              name: "Reet Foods Products FAQ",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the Minimum Order Quantity (MOQ) for corporate bulk orders?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our standard bulk ordering MOQ starts at just 10 units for dry fruit boxes and 15 units for custom branded corporate hampers. We also handle large-scale orders up to 50,000 units with Pan-India doorstep delivery.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can we print our corporate logo and personalized message on the gift boxes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We specialize in custom corporate branding. Options include laser lid engraving, custom foil logo stamping, printed chocolate wrappers, branded satin ribbons, and custom greeting cards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you ensure freshness during transportation across India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "All dry fruits are nitrogen-flushed to prevent oxidation. Chocolates are shipped in temperature-controlled, insulated cold-chain packaging with gel ice packs to ensure zero melting during transit.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can we request a sample box before committing to a bulk order?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Corporate clients and event planners can request sample boxes delivered directly to their office address. Contact our sales team via WhatsApp or the quote form to request your sample.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the typical shelf life of Reet Foods gifting items?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our nitrogen-sealed dry fruit tins remain fresh for up to 12 months. Artisanal chocolates have a shelf life of 6 months when stored in cool conditions.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Corporate Gifting Manager",
              },
              reviewBody:
                "Reet Foods delivered exceptional luxury gifting solutions for our 200+ employee recognition program. The nitrogen-sealed dry fruit tins and custom-engraved wooden boxes exceeded expectations. Highly recommended for premium corporate gifting.",
              reviewRating: {
                "@type": "Rating",
               ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
              },
            },
          ]),
        }}
      />
    </main>
  );
}
