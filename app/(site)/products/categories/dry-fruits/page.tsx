import { constructMetadata } from "@/components/seo/Metadata";
import { CollectionSchema } from "@/components/seo/CollectionSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { PageHero } from "@/components/common/PageHero";
import { ProductCard } from "@/components/common/Cards";
import { CTA } from "@/components/common/CTA";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Images } from "@/assets/images";
import { products } from "@/data/products";
import { FiCheckCircle, FiShield, FiPackage, FiTruck } from "react-icons/fi";

export const metadata = constructMetadata({
  title: "Premium Dry Fruits Online | Gourmet Almonds, Cashews, Walnuts Pune",
  description: "Shop handpicked premium jumbo almonds, W240 cashews, Chilean walnuts, and Iranian pistachios. Nitrogen-sealed packaging for peak freshness from Reet Foods Pune.",
  canonical: "/products/categories/dry-fruits",
});

const dryFruitProducts = products.filter(
  (p) => p.categorySlug === "dry-fruits" || p.category === "Dry Fruits"
);

const faqs = [
  {
    question: "What grades of dry fruits do you stock?",
    answer: "We source exclusively Grade-A premium jumbo California almonds, W240/W180 cashews, natural Iranian pistachios, and light Chilean walnuts with high kernel yield.",
  },
  {
    question: "How do you maintain freshness during transit?",
    answer: "Our dry fruits are nitrogen-flushed and sealed in food-grade pouching or airtight metallic tins to preserve natural oils and crunchiness for up to 12 months.",
  },
  {
    question: "Can I order custom dry fruit mix assortments for corporate events?",
    answer: "Yes, we curate custom weight splits (e.g. 100g, 250g, 500g tins) with customized branding for bulk corporate orders in Pune and across India.",
  },
];

export default function DryFruitsCategoryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <CollectionSchema
        name="Premium Dry Fruits Collection"
        description="Handpicked gourmet dry fruits sourced from top origins, hygienically packed in Pune."
        url="/products/categories/dry-fruits"
        itemCount={dryFruitProducts.length}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Category Catalog"
        title="Gourmet Premium Dry Fruits"
        description="Discover California Mamra almonds, rich Goa cashews, organic Afghan figs, and Iranian pistachios. Carefully graded and nitrogen-packed for unmatched crunch and nutrition."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Categories", href: "/products#categories" },
          { label: "Dry Fruits" },
        ]}
        image={Images.woodenBoxNuts}
        imageAlt="Premium Dry Fruits Selection"
        primaryCta={{ label: "Explore All Products", href: "/products" }}
        secondaryCta={{ label: "Request Bulk Price List", href: "/contact#quote" }}
        sideBadge="Grade-A Selection"
      />

      {/* Quality Highlights */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FiShield className="h-6 w-6" />, title: "Grade-A Quality", desc: "Uniform size, zero broken pieces" },
          { icon: <FiPackage className="h-6 w-6" />, title: "Nitrogen Sealed", desc: "Maximum shelf life & crunch" },
          { icon: <FiCheckCircle className="h-6 w-6" />, title: "FSSAI Certified", desc: "Strict hygiene & lab testing" },
          { icon: <FiTruck className="h-6 w-6" />, title: "PAN India Express", desc: "Safe temperature controlled transit" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 rounded-xl border border-reef-gold/20 bg-white p-5 shadow-sm">
            <div className="rounded-lg bg-reef-cream p-3 text-reef-burgundy">{item.icon}</div>
            <div>
              <h3 className="text-sm font-bold text-reef-charcoal">{item.title}</h3>
              <p className="mt-1 text-xs text-reef-charcoal/70">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Product Grid */}
      <section>
        <SectionHeading
          eyebrow="Curated Selection"
          title="Handpicked Dry Fruit Favorites"
          description="Select individual varieties or custom mix packs designed for personal health and corporate gifting."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dryFruitProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image || Images.woodenBoxNuts}
              slug={product.slug}
              description={product.shortDescription || product.description}
              badge="Best Seller"
              moq="10 Units"
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Got Questions?" title="Dry Fruits FAQ" />
        <div className="mt-6 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-lg border border-reef-gold/15 bg-reef-cream/40 p-5">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">{faq.question}</h3>
              <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/75">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Need Bulk Dry Fruits for Festive or Corporate Gifting?"
        description="Share your required quantities and budget. Our Pune concierge will send a customized proposal within 2 hours."
        primaryButtonText="Request Bulk Quote"
        primaryButtonHref="/contact#quote"
      />
    </div>
  );
}
