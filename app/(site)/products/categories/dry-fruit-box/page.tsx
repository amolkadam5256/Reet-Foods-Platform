import { constructMetadata } from "@/components/seo/Metadata";
import { CollectionSchema } from "@/components/seo/CollectionSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { PageHero } from "@/components/common/PageHero";
import { ProductCard } from "@/components/common/Cards";
import { CTA } from "@/components/common/CTA";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Images } from "@/assets/images";
import { products } from "@/data/products";
import { FiGift, FiAward, FiBriefcase, FiLayers } from "react-icons/fi";

export const metadata = constructMetadata({
  title: "Luxury Dry Fruit Gift Boxes Pune | Wooden & Velvet Hampers",
  description: "Explore exquisite handcrafted wooden, velvet, and metallic dry fruit gift boxes. Perfect for weddings, Diwali, corporate gifting, and VIP client appreciation.",
  canonical: "/products/categories/dry-fruit-box",
});

const boxProducts = products.filter(
  (p) => p.categorySlug === "dry-fruit-box" || p.category === "Dry Fruit Gift Boxes"
);

const faqs = [
  {
    question: "Can I customize the logo on the dry fruit gift boxes?",
    answer: "Yes! We offer laser engraving, gold foil embossing, metallic plate printing, and custom ribbon branding for all corporate and wedding gift box orders.",
  },
  {
    question: "What box materials do you offer?",
    answer: "Our box range includes polished teak wood, rigid magnetic hardtop boxes, soft velvet-lined chests, and food-grade air-tight metallic tin boxes.",
  },
];

export default function DryFruitBoxCategoryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <CollectionSchema
        name="Dry Fruit Gift Boxes"
        description="Luxury handcrafted wooden and rigid magnetic gift boxes packed with premium dry fruits."
        url="/products/categories/dry-fruit-box"
        itemCount={boxProducts.length}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Category Catalog"
        title="Luxury Dry Fruit Gift Boxes"
        description="Impeccable velvet-lined wooden chests, gold-embossed rigid boxes, and acrylic jar trays filled with premium roasted almonds, cashews, pistachios, and walnuts."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Categories", href: "/products#categories" },
          { label: "Dry Fruit Gift Boxes" },
        ]}
        image={Images.rigidBoxGold}
        imageAlt="Luxury Wooden Dry Fruit Gift Box"
        primaryCta={{ label: "View All Gift Boxes", href: "/products" }}
        secondaryCta={{ label: "Custom Logo Branding", href: "/corporate-gifting" }}
        sideBadge="Handcrafted Elegance"
      />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FiGift className="h-6 w-6" />, title: "Custom Box Curation", desc: "Choose 2, 4, or 6 compartment partitions" },
          { icon: <FiAward className="h-6 w-6" />, title: "Gold Embossed Branding", desc: "Laser engraved logo & greeting cards" },
          { icon: <FiBriefcase className="h-6 w-6" />, title: "Corporate Slabs", desc: "Special pricing for orders of 25+ boxes" },
          { icon: <FiLayers className="h-6 w-6" />, title: "Premium Unboxing", desc: "Satin ribbons & magnetic closures" },
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
          eyebrow="Curated Boxes"
          title="Signature Gift Box Assortment"
          description="Designed for memorable unboxing experiences for Diwali, corporate milestones, and weddings."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {boxProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image || Images.rigidBoxGold}
              slug={product.slug}
              description={product.shortDescription || product.description}
              badge="Luxury Edition"
              moq="5 Boxes"
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Dry Fruit Gift Boxes FAQ" />
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
        title="Customizing Gift Boxes for Your Organization?"
        description="Share your brand guidelines and quantity requirements for a complimentary digital mock-up and sample box delivery."
        primaryButtonText="Request Sample & Quote"
        primaryButtonHref="/contact#quote"
      />
    </div>
  );
}
