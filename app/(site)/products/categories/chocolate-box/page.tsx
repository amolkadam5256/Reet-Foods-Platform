import { constructMetadata } from "@/components/seo/Metadata";
import { CollectionSchema } from "@/components/seo/CollectionSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { PageHero } from "@/components/common/PageHero";
import { ProductCard } from "@/components/common/Cards";
import { CTA } from "@/components/common/CTA";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Images } from "@/assets/images";
import { products } from "@/data/products";
import { FiGift, FiAward, FiHeart, FiLayers } from "react-icons/fi";

export const metadata = constructMetadata({
  title: "Luxury Chocolate Gift Boxes Pune | Custom Praline Boxes",
  description: "Exquisite gold-embossed rigid magnetic chocolate gift boxes, velvet praline trays, and customizable corporate chocolate hampers from Reet Foods Pune.",
  canonical: "/products/categories/chocolate-box",
});

const boxProducts = products.filter(
  (p) => p.categorySlug === "chocolate-box" || p.category === "Chocolate Gift Boxes"
);

const faqs = [
  {
    question: "What piece counts are available in chocolate gift boxes?",
    answer: "We offer 6, 12, 18, 24, and 36-piece praline boxes with custom tray inserts and ribbon ties.",
  },
  {
    question: "Can we combine dry fruits and chocolates in one gift box?",
    answer: "Absoluty! Our signature hybrid boxes feature dedicated partitioned sections for both artisanal chocolates and jumbo dry fruits.",
  },
];

export default function ChocolateBoxCategoryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <CollectionSchema
        name="Chocolate Gift Boxes"
        description="Luxury magnetic rigid boxes filled with handcrafted artisan chocolates and pralines."
        url="/products/categories/chocolate-box"
        itemCount={boxProducts.length}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Category Catalog"
        title="Luxury Chocolate Gift Boxes"
        description="Elegantly crafted rigid gift boxes, gold-foiled sleeves, and velvet keepsake chests loaded with handcrafted truffles and nut rocks."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Categories", href: "/products#categories" },
          { label: "Chocolate Gift Boxes" },
        ]}
        image={Images.chocolatesInBox}
        imageAlt="Luxury Chocolate Gift Box"
        primaryCta={{ label: "View Chocolate Boxes", href: "/products" }}
        secondaryCta={{ label: "Request Corporate Catalog", href: "/contact#quote" }}
        sideBadge="Luxury Packaging"
      />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FiGift className="h-6 w-6" />, title: "Custom Partition Trays", desc: "6 to 36 truffle count options" },
          { icon: <FiAward className="h-6 w-6" />, title: "Rigid Box Structure", desc: "Magnetic closures & gold foil print" },
          { icon: <FiHeart className="h-6 w-6" />, title: "Hybrid Boxes", desc: "Combine dry fruits & chocolates" },
          { icon: <FiLayers className="h-6 w-6" />, title: "Satin Ribbon Finish", desc: "Personalized card & wrap inclusion" },
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
          eyebrow="Curated Gift Boxes"
          title="Signature Chocolate Box Collection"
          description="Sophisticated presentation designed to elevate corporate gifts, birthday surprises, and holiday festivities."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {boxProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image || Images.chocolatesInBox}
              slug={product.slug}
              description={product.shortDescription || product.description}
              badge="Best Seller"
              moq="5 Boxes"
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Chocolate Gift Boxes FAQ" />
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
        title="Planning Corporate Chocolate Gifts in Pune?"
        description="Get custom branded box sleeves, metallic logo badges, and personal note cards tailored to your brand identity."
        primaryButtonText="Request Custom Mockup"
        primaryButtonHref="/contact#quote"
      />
    </div>
  );
}
