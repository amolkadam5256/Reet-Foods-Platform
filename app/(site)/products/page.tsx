import { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQList } from "@/components/common/FAQList";

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
    canonical: "https://reetfoodsngiftings.com/products",
  },
  openGraph: {
    title: "Premium Dry Fruits, Gift Boxes & Corporate Hampers | Reet Foods",
    description:
      "Premium dry fruits, festive hampers and custom corporate gifts for teams, clients and celebrations. FSSAI certified with luxury packaging.",
    url: "https://reetfoodsngiftings.com/products",
    siteName: "Reet Foods",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://reetfoodsngiftings.com/products-og.jpg",
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

const faqs = [
  {
    question:
      "What is the Minimum Order Quantity (MOQ) for corporate bulk orders?",
    answer:
      "Our standard bulk ordering MOQ starts at just 10 units for dry fruit boxes and 15 units for custom branded corporate hampers. We also handle large-scale orders up to 50,000 units with Pan-India doorstep delivery.",
  },
  {
    question:
      "Can we print our corporate logo and personalized message on the gift boxes?",
    answer:
      "Yes! We specialize in custom corporate branding. Options include laser lid engraving, custom foil logo stamping, printed chocolate wrappers, branded satin ribbons, and custom greeting cards.",
  },
  {
    question: "How do you ensure freshness during transportation across India?",
    answer:
      "All dry fruits are nitrogen-flushed to prevent oxidation. Chocolates are shipped in temperature-controlled, insulated cold-chain packaging with gel ice packs to ensure zero melting during transit.",
  },
  {
    question: "Can we request a sample box before committing to a bulk order?",
    answer:
      "Absolutely. Corporate clients and event planners can request sample boxes delivered directly to their office address. Contact our sales team via WhatsApp or the quote form to request your sample.",
  },
  {
    question: "What is the typical shelf life of Reet Foods gifting items?",
    answer:
      "Our nitrogen-sealed dry fruit tins remain fresh for up to 12 months. Artisanal chocolates have a shelf life of 6 months when stored in cool conditions.",
  },
  {
    question: "Do you offer premium dry fruits in bulk packaging for weddings?",
    answer:
      "Yes, we provide bulk dry fruits in premium packaging for wedding return gifts, trousseau packing, and luxury room hampers for guests.",
  },
  {
    question: "What types of chocolates are included in your hampers?",
    answer:
      "Our luxury hampers feature artisanal Belgian truffles, hand-poured 70% dark chocolates, and nut pralines crafted by master chocolatiers.",
  },
  {
    question: "Are your gift boxes suitable for Diwali corporate gifting?",
    answer:
      "Yes, we offer an exclusive range of Diwali gift boxes for corporates, featuring premium dry fruits, chocolates, and festive diyas in custom branded packaging.",
  },
  {
    question:
      "Do you provide FSSAI certified products for corporate distribution?",
    answer:
      "Yes, all our food products, including premium dry fruits and chocolates, are 100% FSSAI certified and packed in our ISO-compliant facility.",
  },
  {
    question: "Can we create a custom hamper with our choice of products?",
    answer:
      "Yes, our 'Build Your Own Hamper' service allows corporate clients to select their preferred dry fruits, chocolates, cold-pressed juices, and packaging style.",
  },
  {
    question: "What is the delivery timeline for PAN India corporate orders?",
    answer:
      "Standard bulk corporate gifting orders are dispatched within 5-7 business days, with tracked PAN India delivery taking an additional 2-4 days.",
  },
  {
    question: "Do you offer eco-friendly or sustainable gift box options?",
    answer:
      "Yes, we prioritize sustainability by offering reusable tin boxes, handcrafted wooden chests, and biodegradable cardboard packaging for our hampers.",
  },
  {
    question: "Is GST input tax credit available on corporate gifting orders?",
    answer:
      "Yes, we provide a 100% compliant B2B GST invoice for all corporate gifting orders, allowing your business to claim full input tax credit (ITC).",
  },
  {
    question:
      "Can you manage individual deliveries to remote employee addresses?",
    answer:
      "Yes, our multi-address dispatch service covers over 19,000 pin codes in India, ensuring every employee receives their gift box directly at home.",
  },
  {
    question: "Do you offer tiered pricing for large-scale enterprise orders?",
    answer:
      "Yes, we provide attractive tiered bulk discounts for large enterprise orders ranging from 50 to 50,000 units. Please request a quote for detailed pricing.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <FAQSchema faqs={faqs} />
      <ProductsClient />

      <div className="bg-[#fbf7f1] pb-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <section className="mt-12 rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
            <SectionHeading
              eyebrow="Learn More"
              title="Products & Orders FAQ"
              description="Common questions about our premium dry fruit boxes, luxury hampers, and ordering process."
            />
            <FAQList faqs={faqs} />
          </section>
        </div>
      </div>

      {/* SEO JSON-LD Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Premium Dry Fruits, Gift Boxes & Corporate Hampers",
              url: "https://reetfoodsngiftings.com/products",
              description:
                "Browse Reet Foods premium dry fruits, gift boxes, festive hampers and custom corporate gifting solutions.",
              publisher: {
                "@type": "Organization",
                name: "Reet Foods",
                logo: "https://reetfoodsngiftings.com/logo.png",
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
                    url: "https://reetfoodsngiftings.com/products/premium-dry-fruits",
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
                    url: "https://reetfoodsngiftings.com/products/artisanal-chocolates",
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
                    url: "https://reetfoodsngiftings.com/products/celebration-hampers",
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
                  item: "https://reetfoodsngiftings.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: "https://reetfoodsngiftings.com/products",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Reet Foods",
              url: "https://reetfoodsngiftings.com",
              logo: "https://reetfoodsngiftings.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shop F14, Streets of Europe Mall, Hinjewadi Phase I",
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
