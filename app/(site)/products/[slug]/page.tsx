import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/components/seo/Metadata";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/common/Cards";
import { CTA } from "@/components/common/CTA";
import { productCategories } from "@/data/products";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import {
  FiPhoneCall,
  FiCheckCircle,
} from "react-icons/fi";

const categoryAliasMap: Record<string, string> = {
  "dry-fruits": "premium-dry-fruits",
  "dry-fruit-box": "premium-dry-fruits",
  "chocolates": "artisanal-chocolates",
  "chocolate-box": "artisanal-chocolates",
  "hampers": "celebration-hampers",
  "corporate-gifts": "celebration-hampers",
  "juices": "premium-dry-fruits",
};

export async function generateStaticParams() {
  const categoryParams = productCategories.map((cat) => ({ slug: cat.slug }));
  const aliasParams = Object.keys(categoryAliasMap).map((alias) => ({ slug: alias }));
  const itemParams = productCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      slug: item.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
    }))
  );
  return [...categoryParams, ...aliasParams, ...itemParams];
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const targetSlug = categoryAliasMap[slug] || slug;
  const category = productCategories.find((c) => c.slug === targetSlug);
  
  // Search item match if slug is item
  let itemMatch: { name: string; detail: string } | undefined;
  if (!category) {
    for (const cat of productCategories) {
      const found = cat.items.find(
        (i) => i.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") === slug
      );
      if (found) {
        itemMatch = found;
        break;
      }
    }
  }

  const title = category
    ? `${category.name} | Reet Foods & Gifting Pune`
    : itemMatch
    ? `${itemMatch.name} | Reet Foods & Gifting Pune`
    : "Gourmet Product Details | Reet Foods Pune";

  const description = category
    ? category.intro
    : itemMatch
    ? itemMatch.detail
    : "Explore gourmet dry fruits, artisan chocolates, and custom gift boxes in Pune.";

  return constructMetadata({
    title,
    description,
    canonical: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const targetSlug = categoryAliasMap[slug] || slug;
  
  let category = productCategories.find((c) => c.slug === targetSlug);
  let selectedItem = category ? category.items[0] : undefined;

  if (!category) {
    for (const cat of productCategories) {
      const found = cat.items.find(
        (i) => i.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") === slug
      );
      if (found) {
        category = cat;
        selectedItem = found;
        break;
      }
    }
  }

  if (!category) return notFound();

  const titleName = selectedItem ? selectedItem.name : category.name;
  const descriptionText = selectedItem ? selectedItem.detail : category.intro;
  const mainImage = selectedItem?.image || category.image;

  const faqs = [
    {
      question: "What is the Minimum Order Quantity (MOQ) for custom branding?",
      answer: "Custom logo branding on gift boxes starts at a minimum order of 15 units. Standard non-branded gift boxes have no minimum.",
    },
    {
      question: "What is the expected delivery timeline for corporate orders?",
      answer: "Standard orders in Pune are delivered within 24-48 hours. Custom branded bulk orders across India are dispatched in 3 to 5 business days.",
    },
    {
      question: "Are your dry fruits and chocolates certified for corporate compliance?",
      answer: "Yes, all products carry complete FSSAI certifications, nutritional labeling, ingredient transparency, and food-grade packaging compliance.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <ProductSchema
        name={titleName}
        description={descriptionText}
        image="/images/logo.png"
        category={category.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Products", url: "/products" },
          { name: category.name, url: `/products/categories/${category.slug}` },
          { name: titleName, url: `/products/${slug}` },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow={category.name}
        title={titleName}
        description={descriptionText}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: category.name, href: `/products#${category.slug}` },
          { label: titleName },
        ]}
        image={mainImage}
        imageAlt={titleName}
        primaryCta={{ label: "Request Volume Quote", href: "/contact#quote" }}
        secondaryCta={{ label: "WhatsApp Inquiry", href: generateWhatsAppUrl({ type: "product", data: { productName: titleName } }) }}
        sideBadge="Grade-A Certified"
      />

      {/* Specifications & Overview */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-reef-gold/20 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-charcoal">
              Product Overview & Specifications
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-reef-charcoal/80">
              {descriptionText} Each item in this collection undergoes rigorous quality inspection at our Hinjewadi Phase I facility in Pune. Designed specifically to maintain crunchiness, flavor integrity, and exquisite visual presentation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-reef-cream/50 p-4 border border-reef-gold/15">
                <span className="text-xs font-semibold uppercase tracking-wider text-reef-burgundy">Origin & Quality</span>
                <p className="mt-1 text-xs text-reef-charcoal font-medium">Single-origin premium imports & local artisan craft</p>
              </div>
              <div className="rounded-xl bg-reef-cream/50 p-4 border border-reef-gold/15">
                <span className="text-xs font-semibold uppercase tracking-wider text-reef-burgundy">Packaging Architecture</span>
                <p className="mt-1 text-xs text-reef-charcoal font-medium">Airtight nitrogen-flushed tins & magnetic hardtop boxes</p>
              </div>
              <div className="rounded-xl bg-reef-cream/50 p-4 border border-reef-gold/15">
                <span className="text-xs font-semibold uppercase tracking-wider text-reef-burgundy">Shelf Life</span>
                <p className="mt-1 text-xs text-reef-charcoal font-medium">9 to 12 Months when stored in cool dry environment</p>
              </div>
              <div className="rounded-xl bg-reef-cream/50 p-4 border border-reef-gold/15">
                <span className="text-xs font-semibold uppercase tracking-wider text-reef-burgundy">Certification</span>
                <p className="mt-1 text-xs text-reef-charcoal font-medium">100% FSSAI certified & food-grade compliance</p>
              </div>
            </div>
          </div>

          {/* Corporate Branding & Customization */}
          <div className="rounded-2xl border border-reef-gold/20 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-charcoal">
              Custom Branding & Corporate Personalization
            </h2>
            <p className="mt-2 text-xs text-reef-charcoal/70">
              Elevate your corporate relationships with bespoke box sleeves, metallic plate laser engraving, and custom note cards.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-xs text-reef-charcoal/80">
              <li className="flex items-center gap-2">
                <FiCheckCircle className="h-4 w-4 text-reef-burgundy shrink-0" />
                <span>Gold Foil & Metallic Logo Embossing</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="h-4 w-4 text-reef-burgundy shrink-0" />
                <span>Custom Ribbon Ties & Sleeve Wraps</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="h-4 w-4 text-reef-burgundy shrink-0" />
                <span>Personalized Recipient Message Cards</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="h-4 w-4 text-reef-burgundy shrink-0" />
                <span>PAN India Multi-Address Dispatch</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Purchase Concierge Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-reef-gold/30 bg-reef-charcoal p-6 text-white shadow-xl">
            <span className="inline-block rounded-full bg-reef-gold/20 px-3 py-1 text-[10px] font-semibold uppercase text-reef-gold">
              Concierge Ordering
            </span>
            <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
              Instant Corporate Quote
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              Need 25+ boxes for client gifting or corporate events? Speak directly with our Pune account team for tiered pricing slabs.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="/contact#quote"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-reef-gold px-5 py-3 text-xs font-semibold text-reef-charcoal transition hover:bg-white hover:text-reef-burgundy"
              >
                <FiPhoneCall className="h-4 w-4" />
                <span>Request Custom Quote</span>
              </Link>
              <a
                href={generateWhatsAppUrl({ type: "product", data: { productName: titleName, requirement: `Hi Reet Foods, I want details for ${titleName}` } })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-reef-gold/40 bg-white/10 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                <span>WhatsApp Assistance</span>
              </a>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-[11px] text-white/60 space-y-1">
              <p>✓ Guaranteed Freshness</p>
              <p>✓ Doorstep Delivery in Pune</p>
              <p>✓ GST Compliant Invoicing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Lineup Items */}
      <section>
        <SectionHeading
          eyebrow="Category Lineup"
          title={`More Items in ${category.name}`}
          description="Explore complementary gift boxes and assortments crafted with the same precision."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {category.items.map((item, idx) => {
            const itemSlug = item.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
            return (
              <ProductCard
                key={idx}
                id={`item-${idx}`}
                name={item.name}
                category={category.name}
                image={item.image || category.image}
                slug={itemSlug}
                description={item.detail}
                badge={item.badge || "Gourmet"}
              />
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Have Questions?" title="Product Details FAQ" />
        <div className="mt-6 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-lg border border-reef-gold/15 bg-reef-cream/40 p-5">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">{faq.question}</h3>
              <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/75">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
