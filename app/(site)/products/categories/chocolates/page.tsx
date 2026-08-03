import { constructMetadata } from "@/components/seo/Metadata";
import { CollectionSchema } from "@/components/seo/CollectionSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { PageHero } from "@/components/common/PageHero";
import { ProductCard } from "@/components/common/Cards";
import { CTA } from "@/components/common/CTA";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Images } from "@/assets/images";
import { products } from "@/data/products";
import { FiSmile, FiHeart, FiShield, FiPackage } from "react-icons/fi";

export const metadata = constructMetadata({
  title: "Artisan Premium Chocolates Pune | Handcrafted Pralines & Truffles",
  description: "Discover handcrafted artisan Belgian pralines, dark cocoa truffles, roasted almond rocks, and custom flavor chocolates from Reet Foods Pune.",
  canonical: "/products/categories/chocolates",
});

const chocolateProducts = products.filter(
  (p) => p.categorySlug === "chocolates" || p.category === "Premium Chocolates"
);

const faqs = [
  {
    question: "What cocoa percentages are available in your dark chocolates?",
    answer: "We offer 55%, 70%, and 85% single-origin dark chocolate variants, as well as creamy milk chocolate and ruby chocolate creations.",
  },
  {
    question: "How do you dispatch chocolates safely during warm weather?",
    answer: "All chocolate orders are packed with thermal insulation and re-freezable cool ice gel packs to guarantee zero melting during transit.",
  },
];

export default function ChocolatesCategoryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <CollectionSchema
        name="Artisan Premium Chocolates"
        description="Handcrafted cocoa pralines, truffles, and gourmet chocolate slabs from Reet Foods Pune."
        url="/products/categories/chocolates"
        itemCount={chocolateProducts.length}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Category Catalog"
        title="Artisan Gourmet Chocolates"
        description="Rich Belgian cocoa, creamy hazelnut pralines, salted caramel truffles, and crunchy almond rocks crafted fresh in Pune."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Categories", href: "/products#categories" },
          { label: "Premium Chocolates" },
        ]}
        image={Images.chocolatesInBox}
        imageAlt="Artisan Handmade Chocolates"
        primaryCta={{ label: "Shop Chocolates", href: "/products" }}
        secondaryCta={{ label: "Custom Flavor Boxes", href: "/contact#quote" }}
        sideBadge="Artisan Cocoa"
      />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FiHeart className="h-6 w-6" />, title: "Real Cocoa Butter", desc: "Zero palm oil or compound substitutes" },
          { icon: <FiSmile className="h-6 w-6" />, title: "Custom Flavor Prints", desc: "Edible logo printing on truffles" },
          { icon: <FiPackage className="h-6 w-6" />, title: "Cool-Pack Transit", desc: "Thermal ice pack insulated shipping" },
          { icon: <FiShield className="h-6 w-6" />, title: "Fresh Batch Guarantee", desc: "Handcrafted weekly in small batches" },
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
          eyebrow="Decadent Delights"
          title="Handcrafted Chocolate Collection"
          description="Explore rich dark chocolate truffles, roasted nut rocks, and gold-foiled praline assortments."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {chocolateProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image || Images.chocolatesInBox}
              slug={product.slug}
              description={product.shortDescription || product.description}
              badge="Artisan"
              moq="10 Boxes"
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Chocolates FAQ" />
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
        title="Looking for Edible Logo Chocolates for an Event?"
        description="We craft custom molded chocolates and printed truffles featuring your corporate brand logo for launches and celebrations."
        primaryButtonText="Inquire Chocolate Branding"
        primaryButtonHref="/contact#quote"
      />
    </div>
  );
}
