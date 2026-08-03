import { constructMetadata } from "@/components/seo/Metadata";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTA } from "@/components/common/CTA";
import { Images } from "@/assets/images";
import {
  FiBriefcase,
  FiAward,
  FiUsers,
  FiCheckCircle,
  FiPackage,
  FiTruck,
  FiFileText,
  FiShield,
  FiLayers,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Corporate Gifting Pune | Executive Custom Logo Hampers & Dry Fruit Boxes",
  description: "Enterprise corporate gifting solutions in Pune. Custom metallic logo branding, GST invoicing, tiered volume pricing, and pan-India multi-address dispatch.",
  canonical: "/corporate-gifting",
});

const industries = [
  { title: "IT & Tech Firms", desc: "Welcome kits, hackathon rewards, and annual festival boxes for Hinjewadi & Magarpatta tech parks." },
  { title: "Financial & Consulting", desc: "Premium velvet chests and luxury dry fruit assortments for VIP client relationship management." },
  { title: "Real Estate & Automobile", desc: "Possession day hampers and vehicle delivery luxury boxes for high-value buyer delight." },
  { title: "Pharma & Healthcare", desc: "Hygienic, zero-sugar healthy nut boxes and wellness juice kits for doctor appreciation." },
];

const brandingOptions = [
  { title: "Gold & Silver Foil Stamping", desc: "High-shine metallic foil of your brand logo on magnetic hardtop lids." },
  { title: "Laser Engraved Wooden Lid", desc: "Crisp permanent logo engraving on handcrafted teak and pine wooden chests." },
  { title: "Custom Sleeve & Ribbon Wrap", desc: "Full-color printed outer box sleeves matching your corporate brand color palette." },
  { title: "Personalized Message Insert", desc: "Warmly crafted greeting cards signed by your CEO or leadership team." },
];

const faqs = [
  {
    question: "What is the minimum order quantity for custom corporate logo printing?",
    answer: "Custom logo printing on gift box sleeves or lids starts at just 15 units. We provide complimentary digital visual mock-ups before production.",
  },
  {
    question: "How do you handle multi-location employee and client shipping?",
    answer: "Simply provide an Excel sheet of recipient addresses. We manage individual door-to-door courier dispatch across 19,000+ pin codes in India with tracking updates.",
  },
  {
    question: "Can we get sample boxes before finalizing a bulk order?",
    answer: "Yes, sample boxes can be dispatched to your Pune office or corporate location within 24 hours for evaluation.",
  },
];

export default function CorporateGiftingPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Corporate Gifting", url: "/corporate-gifting" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Enterprise Gifting Program"
        title="Gifts That Make Your Brand Thoughtfully Remembered."
        description="From annual client appreciation and Diwali galas to employee onboarding and executive rewards, Reet Foods & Gifting makes corporate gifting effortless."
        breadcrumbs={[
          { label: "Corporate Gifting" },
        ]}
        image={Images.sweetiesDesk}
        imageAlt="Corporate Gifting Solutions Pune"
        primaryCta={{ label: "Request Corporate Catalog", href: "/contact#quote" }}
        secondaryCta={{ label: "WhatsApp Corporate Desk", href: "https://wa.me/919876543210" }}
        sideBadge="Enterprise Preferred"
      />

      {/* Highlights Bar */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FiBriefcase className="h-6 w-6" />, title: "Custom Logo Printing", desc: "Laser engraving & gold foil" },
          { icon: <FiAward className="h-6 w-6" />, title: "Tiered Bulk Discounts", desc: "Volume slabs for 25 to 5000+ units" },
          { icon: <FiTruck className="h-6 w-6" />, title: "Multi-Address Dispatch", desc: "Individual door-to-door shipping" },
          { icon: <FiFileText className="h-6 w-6" />, title: "100% GST Invoicing", desc: "Full input tax credit compliance" },
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

      {/* Industries We Serve */}
      <section>
        <SectionHeading
          eyebrow="Sector Solutions"
          title="Tailored Corporate Gifting Across Industries"
          description="We customize product assortments and box designs to match specific corporate use-cases."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, idx) => (
            <div key={idx} className="rounded-xl border border-reef-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">{ind.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/75">{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Branding & Personalization Options */}
      <section className="rounded-2xl border border-reef-gold/20 bg-reef-charcoal p-8 text-white shadow-xl sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-reef-gold">Brand Identity Integration</span>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">
            Custom Logo Branding Options
          </h2>
          <p className="mt-2 text-xs text-white/75 sm:text-sm">
            We seamlessly embed your corporate logo, corporate colors, and custom greeting messages on every gift box.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brandingOptions.map((opt, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <span className="text-xs font-bold text-reef-gold">0{idx + 1}</span>
              <h3 className="mt-2 text-base font-bold text-white">{opt.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Workflow"
          title="Simple 4-Step Corporate Ordering Process"
          description="How we turn your gifting vision into delivered perfection."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["1. Brief & Requirements", "Share target quantity, budget, and desired dispatch date."],
            ["2. Digital Mock-up", "We share 3D renderings of your branded gift box for approval."],
            ["3. Production & Packing", "Hygienic packing and nitrogen sealing at our Pune facility."],
            ["4. Dispatch & Tracking", "Express shipment to office hubs or individual employee homes."],
          ].map(([title, desc], idx) => (
            <div key={idx} className="rounded-xl border border-reef-gold/15 bg-reef-cream/40 p-5">
              <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Have Questions?" title="Corporate Gifting FAQ" />
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
        title="Ready to Request a Corporate Gift Proposal?"
        description="Share your brand guidelines and target budget. Our Pune executive concierge will send a customized proposal within 2 hours."
        primaryButtonText="Request Corporate Proposal"
        primaryButtonHref="/contact#quote"
      />
    </div>
  );
}
