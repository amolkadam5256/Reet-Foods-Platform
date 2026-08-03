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
  title: "Celebration Hampers Pune | Grand Festival & Wedding Gift Baskets",
  description: "Bespoke luxury hampers combining premium dry fruits, artisan chocolates, cold pressed juices, and handcrafted copperware for weddings and Diwali.",
  canonical: "/products/categories/hampers",
});

const hamperProducts = products.filter(
  (p) => p.categorySlug === "hampers" || p.category === "Celebration Hampers"
);

const faqs = [
  {
    question: "Can we curate bespoke hampers with our preferred mix of items?",
    answer: "Yes, you can handpick dry fruits, artisan chocolates, juices, brass diyas, and greeting cards to compose a completely custom hamper.",
  },
  {
    question: "Do you ship hampers to multiple individual recipient addresses?",
    answer: "Yes! For corporate teams and client gifting, we manage individual door-to-door dispatch to hundreds of addresses with real-time tracking.",
  },
];

export default function HampersCategoryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <CollectionSchema
        name="Celebration Hampers"
        description="Grand curated luxury hampers for weddings, festivals, and milestones."
        url="/products/categories/hampers"
        itemCount={hamperProducts.length}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Category Catalog"
        title="Bespoke Celebration Hampers"
        description="Grand gift baskets featuring premium dry fruit jars, handcrafted chocolates, copper drinkware, and gold-foiled greeting notes."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Categories", href: "/products#categories" },
          { label: "Celebration Hampers" },
        ]}
        image={Images.rigidBoxGold}
        imageAlt="Luxury Celebration Hamper Basket"
        primaryCta={{ label: "Explore Hampers", href: "/products" }}
        secondaryCta={{ label: "Design Custom Hamper", href: "/contact#quote" }}
        sideBadge="Grand Edition"
      />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FiGift className="h-6 w-6" />, title: "Bespoke Curation", desc: "Select items across all categories" },
          { icon: <FiAward className="h-6 w-6" />, title: "Artisanal Baskets", desc: "Woven rattan & leatherette trays" },
          { icon: <FiHeart className="h-6 w-6" />, title: "Personal Notes", desc: "Custom printed greeting messages" },
          { icon: <FiLayers className="h-6 w-6" />, title: "Multi-Location Shipping", desc: "Direct to client doorsteps" },
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
          eyebrow="Luxury Baskets"
          title="Curated Celebration Hampers"
          description="Unforgettable gifts designed for weddings, Diwali, New Year, and VIP executive milestones."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hamperProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image || Images.rigidBoxGold}
              slug={product.slug}
              description={product.shortDescription || product.description}
              badge="VIP Hamper"
              moq="5 Hampers"
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Hampers FAQ" />
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
        title="Customizing Hampers for a Wedding or Festive Gala?"
        description="Connect with our Pune design team to select custom basket trims, ribbon colors, and laser-engraved keepsakes."
        primaryButtonText="Create Custom Hamper"
        primaryButtonHref="/contact#quote"
      />
    </div>
  );
}
