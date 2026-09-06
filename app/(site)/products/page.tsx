import { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQList } from "@/components/common/FAQList";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Products & Gift Boxes | Reet Foods Pune",
  description:
    "Explore Reet Foods premium dry fruits, dry fruit gift boxes, festive hampers and custom corporate gifting solutions from Pune. FSSAI No. 21525083009881, luxury packaging with custom logo engraving.",
  keywords: [
    "premium dry fruits",
    "dry fruit gift boxes",
    "corporate gifting hampers",
    "luxury dry fruit gift boxes",
    "custom logo corporate gifts",
    "Reet Foods Pune",
    "wedding favours Pune",
    "FSSAI licensed dry fruits",
    "premium chocolates gift box",
    "bulk gifting India",
    "corporate gifting solutions",
    "luxury gift hampers",
    "handcrafted gifts Pune",
  ],
  alternates: {
    canonical: "https://www.reetfoodsngiftiings.com/products",
  },
  openGraph: {
    title: "Premium Dry Fruits, Gift Boxes & Corporate Hampers | Reet Foods",
    description:
      "Premium dry fruits, festive hampers and custom corporate gifts for teams, clients and celebrations. FSSAI licensed with luxury packaging.",
    url: "https://www.reetfoodsngiftiings.com/products",
    siteName: "Reet Foods",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.reetfoodsngiftiings.com/products-og.jpg",
        width: 1200,
        height: 630,
        alt: "Reet Foods luxury gifting collection with premium dry fruits, chocolates, and corporate hampers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Dry Fruits, Gift Boxes & Corporate Hampers | Reet Foods",
    description:
      "Curated luxury gifting assortment for corporate events, weddings, and festive celebrations. FSSAI licensed.",
  },
};

const faqs = [
  {
    question:
      "What is the Minimum Order Quantity (MOQ) for corporate bulk orders?",
    answer:
      "Bulk corporate orders are welcome. Quantity-based pricing is available for employee, client, and executive gifting programs. Final contents and pricing depend on quantity, customization and delivery requirements.",
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
      "Dry fruits are packed for freshness, and chocolate orders are planned with season-aware handling guidance and insulated packing options where suitable.",
  },
  {
    question: "Can we request a sample box before committing to a bulk order?",
    answer:
      "Absolutely. Corporate clients and event planners can request sample boxes delivered directly to their office address. Contact our sales team via WhatsApp or the quote form to request your sample.",
  },
  {
    question: "What is the typical shelf life of Reet Foods gifting items?",
    answer:
      "Shelf life depends on the product, batch, packaging, and storage conditions. The team confirms current shelf-life guidance before dispatch.",
  },
  {
    question: "Do you offer premium dry fruits in bulk packaging for weddings?",
    answer:
      "Yes, we provide bulk dry fruits in premium packaging for wedding return gifts, trousseau packing, and luxury room hampers for guests.",
  },
  {
    question: "What types of chocolates are included in your hampers?",
    answer:
      "Our luxury hampers can feature artisanal truffles, hand-poured dark chocolates, nut pralines, and curated dry fruit assortments.",
  },
  {
    question: "Are your gift boxes suitable for Diwali corporate gifting?",
    answer:
      "Yes, we offer an exclusive range of Diwali gift boxes for corporates, featuring premium dry fruits, chocolates, and festive diyas in custom branded packaging.",
  },
  {
    question:
      "Do you provide FSSAI licensed products for corporate distribution?",
    answer:
      "Yes, Reet Foods operates with FSSAI licensing (FSSAI No. 21525083009881). Products are handled with food-grade packaging and dispatch quality checks.",
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
    question: "Is GST invoicing available on corporate gifting orders?",
    answer:
      "Yes, GST invoicing is available for corporate orders. We are GST registered and can provide official B2B invoices for your business accounting.",
  },
  {
    question:
      "Can you manage individual deliveries to remote employee addresses?",
    answer:
      "Yes, our multi-address dispatch service covers major courier-serviceable pin codes across India, ensuring your team and clients receive their gift boxes directly.",
  },
  {
    question: "Do you offer tiered pricing for large-scale enterprise orders?",
    answer:
      "Yes, we provide attractive tiered bulk discounts for corporate gifting orders. Final contents and pricing depend on quantity, customization, and delivery requirements.",
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
              url: "https://www.reetfoodsngiftiings.com/products",
              description:
                "Browse Reet Foods premium dry fruits, gift boxes, festive hampers and custom corporate gifting solutions.",
              publisher: {
                "@type": "Organization",
                name: "Reet Foods",
                logo: "https://www.reetfoodsngiftiings.com/logo.png",
              },
              hasPart: [
                {
                  "@type": "Product",
                  name: "Royal Pistachio & Cashew Gold Tin",
                  category: "Dry Fruits",
                  description:
                    "Handpicked pistachios and Jumbo W240 cashews in an airtight metallic gold tin.",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    price: "1499",
                    url: "https://www.reetfoodsngiftiings.com/products/categories/dry-fruits",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Product",
                  name: "Artisanal Truffle Assortment",
                  category: "Chocolates",
                  description:
                    "12 pieces of hand-poured dark chocolates with nut pralines in a magnetic rigid box.",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    price: "1299",
                    url: "https://www.reetfoodsngiftiings.com/products/categories/chocolates",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Product",
                  name: "Grande Corporate Executive Hamper",
                  category: "Celebration Hampers",
                  description:
                    "Dry fruit quartet, artisanal chocolate bark, and custom branded packaging.",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    price: "3499",
                    url: "https://www.reetfoodsngiftiings.com/products/categories/hampers",
                    availability: "https://schema.org/InStock",
                  },
                },
              ],
              about: [
                "Premium Dry Fruits",
                "Artisanal Chocolates",
                "Celebration Hampers",
                "Corporate Gifting",
                "FSSAI Licensed",
                "Quality Checked",
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
                  item: "https://www.reetfoodsngiftiings.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: "https://www.reetfoodsngiftiings.com/products",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Reet Foods",
              url: "https://www.reetfoodsngiftiings.com",
              logo: "https://www.reetfoodsngiftiings.com/logo.png",
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
                "https://facebook.com/reetfoodsgifting",
                "https://instagram.com/reetfoodsgifting",
                "https://www.linkedin.com/company/reet-foods-pune/?viewAsMember=true",
                generateWhatsAppUrl({ type: "generic" }),
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9225130732",
                  email: "reetfoodspune@gmail.com",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
