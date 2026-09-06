import { constructMetadata } from "@/components/seo/Metadata";
import { CollectionSchema } from "@/components/seo/CollectionSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { PageHero } from "@/components/common/PageHero";
import { ProductCard } from "@/components/common/Cards";
import { CTA } from "@/components/common/CTA";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Images } from "@/assets/images";
import { products } from "@/data/products";
import { FiBriefcase, FiAward, FiUsers, FiCheckCircle } from "react-icons/fi";

export const metadata = constructMetadata({
  title: "Corporate Gifting Solutions Pune | Custom Logo Boxes & Kits",
  description: "Enterprise corporate gifting for employee onboarding, client appreciation, executive rewards, and Diwali. Complete with company logo branding and multi-address fulfillment.",
  canonical: "/products/categories/corporate-gifts",
});

const corporateProducts = products.filter(
  (p) => p.categorySlug === "corporate-gifts" || p.category === "Corporate Gifts"
);

const faqs = [
  {
    question: "What branding options exist for corporate gift boxes?",
    answer: "We offer gold foil stamping, UV printing, laser engraving on wooden boxes, custom branded ribbon ties, and personalized greeting cards.",
  },
  {
    question: "Do you support GST billing and corporate credit terms?",
    answer: "Yes, we provide standard B2B GST tax invoicing on corporate gifting orders for your accounting requirements.",
  },
];

export default function CorporateGiftsCategoryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <CollectionSchema
        name="Corporate Gifts"
        description="Custom branded corporate gift boxes and executive hampers tailored for organizations."
        url="/products/categories/corporate-gifts"
        itemCount={corporateProducts.length}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Category Catalog"
        title="Corporate Gifting Solutions"
        description="Strengthen client partnerships and reward employee excellence with tailor-made gourmet dry fruit boxes, artisan chocolates, and customized executive hampers."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Categories", href: "/products#categories" },
          { label: "Corporate Gifts" },
        ]}
        image={Images.rigidBoxGold}
        imageAlt="Corporate Branded Gift Box"
        primaryCta={{ label: "View Corporate Gifts", href: "/products" }}
        secondaryCta={{ label: "Request Corporate Proposal", href: "/corporate-gifting" }}
        sideBadge="Corporate Gifting"
      />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FiBriefcase className="h-6 w-6" />, title: "Custom Logo Printing", desc: "Metallic plate & box lid engraving" },
          { icon: <FiAward className="h-6 w-6" />, title: "Quantity-Based Pricing", desc: "Bulk corporate discounts available" },
          { icon: <FiUsers className="h-6 w-6" />, title: "Pan-India Address Dispatch", desc: "Hassle-free direct recipient shipping" },
          { icon: <FiCheckCircle className="h-6 w-6" />, title: "GST Invoicing Available", desc: "Official B2B invoices for corporate orders" },
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
          eyebrow="Enterprise Assortment"
          title="Popular Corporate Gift Solutions"
          description="Curated for annual client appreciation, employee onboarding kits, and festive corporate galas."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {corporateProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image || Images.rigidBoxGold}
              slug={product.slug}
              description={product.shortDescription || product.description}
              badge="Corporate Choice"
              moq="25 Kits"
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Corporate Gifts FAQ" />
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
        title="Planning Corporate Gifting for Your Team in Pune?"
        description="Send your logo files and budget target. Our corporate account manager will create customized digital box designs for your review."
        primaryButtonText="Contact Corporate Team"
        primaryButtonHref="/corporate-gifting"
      />
    </div>
  );
}
