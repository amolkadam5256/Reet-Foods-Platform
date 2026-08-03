import { constructMetadata } from "@/components/seo/Metadata";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTA } from "@/components/common/CTA";
import { Images } from "@/assets/images";
import {
  FiHeart,
  FiPackage,
  FiUsers,
  FiCheck,
  FiMapPin,
  FiAward,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "About Reet Foods & Gifting Pune | Our Story, Mission & Quality",
  description: "Learn about Reet Foods & Gifting, Pune's trusted boutique partner for gourmet dry fruits, artisanal chocolates, and luxury corporate hampers.",
  canonical: "/about",
});

const values = [
  {
    icon: FiHeart,
    title: "Quality Worth Giving",
    detail: "We select products and ingredients with the care you would use when choosing a gift for someone close to you.",
  },
  {
    icon: FiPackage,
    title: "Presentation with Purpose",
    detail: "Every box is assembled to look polished, protect its contents, and make the unboxing feel truly special.",
  },
  {
    icon: FiUsers,
    title: "People-First Service",
    detail: "You get a responsive team to help with assortment, personalization, quantities, and delivery planning.",
  },
];

const statistics = [
  { value: "50,000+", label: "Gift Boxes Delivered" },
  { value: "350+", label: "Enterprise Corporate Clients" },
  { value: "100%", label: "FSSAI & Hygiene Compliant" },
  { value: "4.9/5", label: "Client Satisfaction Rating" },
];

const qualityStandards = [
  "Carefully selected premium-grade ingredients and gift-ready products.",
  "Freshness-conscious packing suited to the product and delivery route.",
  "A final presentation check before every order leaves our facility.",
  "Clear coordination for branding, recipient lists, and delivery timelines.",
];

const process = [
  ["01", "Tell us the occasion", "Share your quantity, budget, recipients and delivery date."],
  ["02", "Choose your curation", "We help you select products, packaging and personal touches."],
  ["03", "Approve the details", "Review the final assortment and branding before production begins."],
  ["04", "Receive with confidence", "We prepare, check and coordinate delivery with care."],
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />

      <PageHero
        eyebrow="Our Story & Vision"
        title="Thoughtful Gifting, Crafted with Precision in Pune."
        description="Reet Foods & Gifting brings together premium dry fruits, artisan chocolates, cold-pressed juices, and curated hampers for businesses, celebrations, and everyday gestures. We make gifting effortless."
        breadcrumbs={[
          { label: "About Reet Foods" },
        ]}
        image={Images.woodenBoxNuts}
        imageAlt="Reet Foods Gifting Curation"
        primaryCta={{ label: "Explore Collections", href: "/products" }}
        secondaryCta={{ label: "Contact Pune Studio", href: "/contact" }}
        sideBadge="Established in Pune"
      />

      {/* Statistics Bar */}
      <section className="grid gap-6 rounded-2xl border border-reef-gold/20 bg-reef-charcoal p-8 text-white sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((stat, idx) => (
          <div key={idx} className="text-center sm:text-left">
            <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-gold sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-white/75 uppercase tracking-wider font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Brand Story */}
      <section className="grid gap-8 rounded-2xl border border-reef-gold/15 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">Our Journey</p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Good gifts should feel personal, not complicated.
          </h2>
          <div className="mt-4 space-y-4 text-xs leading-relaxed text-reef-charcoal/80 sm:text-sm">
            <p>
              Reet Foods & Gifting was created for people and organizations who want to give well - without spending weeks managing suppliers, quality assurance, packaging, and delivery tracking.
            </p>
            <p>
              From our Pune base in Hinjewadi Phase I, we curate gift-ready assortments for corporate teams, VIP client relationships, weddings, festivals, and family celebrations across India.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3 text-xs font-semibold text-reef-charcoal transition hover:bg-reef-burgundy hover:text-white"
            >
              Discover Our Range
            </Link>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-reef-cream shadow-md sm:min-h-[360px]">
          <Image
            src={Images.nutsSetTable}
            alt="Reet Foods Production & Packaging"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Core Values */}
      <section>
        <SectionHeading
          eyebrow="What Guides Us"
          title="The Core Principles Behind Every Gift"
          description="We take pride in rigorous quality inspection, aesthetic presentation, and reliable delivery."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="rounded-xl border border-reef-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1">
              <span className="inline-flex rounded-lg bg-reef-cream p-3 text-reef-burgundy">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/75">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing & Standards */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-reef-gold/20 bg-reef-charcoal p-8 text-white shadow-md">
          <div className="flex items-center gap-3 text-reef-gold">
            <FiMapPin className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-widest">Pune Facility</span>
          </div>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl">
            Prepared Locally. Planned Around You.
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-white/75 sm:text-sm">
            Our Pune studio coordinates curation, quality grading, box customization, and dispatch from Shop F14, Streets of Europe Mall, Hinjewadi Phase I. We manage everything under one roof.
          </p>
          <div className="mt-6 rounded-lg border-l-2 border-reef-gold bg-white/5 p-4 text-xs text-reef-gold font-medium">
            Dedicated account concierge for product selection, branding details, and delivery follow-through.
          </div>
        </div>

        <div className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-reef-burgundy">Quality Assurance</span>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-charcoal sm:text-3xl">
            A Thoughtful Check at Every Stage.
          </h2>
          <ul className="mt-6 space-y-3 text-xs text-reef-charcoal/80">
            {qualityStandards.map((std, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-reef-burgundy" />
                <span>{std}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Flow */}
      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Concierge Promise"
          title="Clear Guidance from Brief to Doorstep"
          description="How we work with individuals and organizations to deliver seamless gifts."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([num, stepTitle, detail]) => (
            <div key={num} className="rounded-xl border border-reef-gold/15 bg-reef-cream/40 p-5">
              <span className="text-sm font-bold text-reef-burgundy">{num}</span>
              <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">{stepTitle}</h3>
              <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/70">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
