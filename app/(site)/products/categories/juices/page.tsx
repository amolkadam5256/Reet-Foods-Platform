import { constructMetadata } from "@/components/seo/Metadata";
import { CollectionSchema } from "@/components/seo/CollectionSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { PageHero } from "@/components/common/PageHero";
import { ProductCard } from "@/components/common/Cards";
import { CTA } from "@/components/common/CTA";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Images } from "@/assets/images";
import { products } from "@/data/products";
import { FiCheckCircle, FiShield, FiHeart, FiTruck } from "react-icons/fi";

export const metadata = constructMetadata({
  title: "Cold Pressed Juices Pune | 100% Natural Fresh Fruit Blends",
  description: "Pure cold-pressed juices with zero added sugar, artificial preservatives, or added water. Freshly extracted daily in Pune for events, detox, and wellness hampers.",
  canonical: "/products/categories/juices",
});

const juiceProducts = products.filter(
  (p) => p.categorySlug === "juices" || p.category === "Cold Pressed Juices"
);

const faqs = [
  {
    question: "Do your cold pressed juices contain added sugar or preservatives?",
    answer: "No, our cold pressed juices are 100% natural, containing zero added sugar, no artificial colorings, and no chemical preservatives.",
  },
  {
    question: "What is the shelf life of cold pressed juices?",
    answer: "When refrigerated between 2°C to 4°C, our cold pressed juices maintain optimal nutrient density and taste for up to 72 hours.",
  },
];

export default function JuicesCategoryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <CollectionSchema
        name="Cold Pressed Juices"
        description="Freshly extracted cold pressed fruit and botanical juices from Reet Foods Pune."
        url="/products/categories/juices"
        itemCount={juiceProducts.length}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Category Catalog"
        title="Cold Pressed Pure Juices"
        description="100% natural fruit and botanical cold-pressed blends. Extracted slowly to retain live enzymes, minerals, and pristine natural flavor."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Categories", href: "/products#categories" },
          { label: "Cold Pressed Juices" },
        ]}
        image={Images.juicesArrangement}
        imageAlt="Cold Pressed Juices Assortment"
        primaryCta={{ label: "View Juice Range", href: "/products" }}
        secondaryCta={{ label: "Event Bulk Orders", href: "/contact#quote" }}
        sideBadge="100% Natural"
      />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FiHeart className="h-6 w-6" />, title: "Zero Added Sugar", desc: "Only natural fruit fructose" },
          { icon: <FiShield className="h-6 w-6" />, title: "Cold Extraction", desc: "Retains 98% vital enzymes & vitamins" },
          { icon: <FiCheckCircle className="h-6 w-6" />, title: "No Preservatives", desc: "Freshly made daily in Pune" },
          { icon: <FiTruck className="h-6 w-6" />, title: "Careful Handling", desc: "Packed with care for safe delivery" },
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

      <section>
        <SectionHeading
          eyebrow="Pure & Refreshing"
          title="Cold Pressed Blends"
          description="Detox greens, pomegranate antioxidant elixirs, and citrus vitamin C boost juices."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {juiceProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image || Images.juicesArrangement}
              slug={product.slug}
              description={product.shortDescription || product.description}
              badge="Fresh Daily"
              moq="12 Bottles"
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Cold Pressed Juices FAQ" />
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
        title="Need Fresh Cold Pressed Juices for an Event or Corporate Desk?"
        description="We supply chilled daily juice deliveries for office wellness programs, conferences, and wedding functions in Pune."
        primaryButtonText="Order Event Juices"
        primaryButtonHref="/contact#quote"
      />
    </div>
  );
}
