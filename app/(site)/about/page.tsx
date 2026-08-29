import { constructMetadata } from "@/components/seo/Metadata";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQList } from "@/components/common/FAQList";
import { CTA } from "@/components/common/CTA";
import { AboutStatsBar } from "@/components/about/AboutStatsBar";
import { AboutBrandStory } from "@/components/about/AboutBrandStory";
import { AboutCoreValues } from "@/components/about/AboutCoreValues";
import { AboutManufacturing } from "@/components/about/AboutManufacturing";
import { AboutProcessFlow } from "@/components/about/AboutProcessFlow";
import { Images } from "@/assets/images";

export const metadata = constructMetadata({
  title: "About Reet Foods & Gifting Pune | Our Story, Mission & Quality",
  description:
    "Learn about Reet Foods & Gifting, Pune's trusted boutique partner for gourmet dry fruits, artisanal chocolates, and luxury corporate hampers.",
  canonical: "/about",
});

const faqs = [
  {
    question: "Where is Reet Foods & Giftings located in Pune?",
    answer:
      "Our main store and corporate office is located at Shop F14, Streets of Europe Mall, Hinjewadi Phase I, Pune. Our FSSAI-certified factory is in Vishwashanti Colony, Pune.",
  },
  {
    question: "Is Reet Foods & Giftings an FSSAI certified company?",
    answer:
      "Yes, Reet Foods & Giftings operates under strict FSSAI guidelines (Licence No. 21526079003816) ensuring the highest hygiene standards for all our premium dry fruits and chocolates.",
  },
  {
    question: "What makes your premium dry fruits different?",
    answer:
      "Our premium dry fruits are sourced directly from top growers, meticulously graded for size and flavor, and nitrogen-packed to retain freshness, ensuring the best quality for corporate gifting in Pune.",
  },
  {
    question: "Do you offer GST billing for corporate clients?",
    answer:
      "Absolutely. We are fully registered (GSTIN: 27FHIPK0363N1ZX) and provide complete B2B GST billing for all corporate gift boxes and luxury hampers.",
  },
  {
    question: "How long has Reet Foods & Giftings been in the gifting industry?",
    answer:
      "We have years of experience curating luxury hampers and corporate gifts in Pune, serving over 350 enterprise clients and delivering more than 50,000 gift boxes.",
  },
  {
    question: "Do you have an in-house packaging and customization team?",
    answer:
      "Yes, all custom branding, logo printing, and hamper curation are handled by our dedicated in-house team at our Pune facility, ensuring flawless presentation.",
  },
  {
    question: "Can we visit your Hinjewadi store to see sample gift boxes?",
    answer:
      "Yes! We welcome corporate clients and wedding planners to visit our Hinjewadi Phase I showroom to explore our premium dry fruits and luxury hamper samples.",
  },
  {
    question: "What is your mission as a corporate gifting brand?",
    answer:
      "Our mission is to simplify luxury gifting by offering impeccably curated dry fruit boxes and hampers with reliable PAN India delivery and seamless B2B service.",
  },
  {
    question: "Do you offer eco-friendly packaging options?",
    answer:
      "Yes, we offer a range of sustainable and eco-friendly packaging options for our corporate gifts Pune, including reusable wooden boxes, tin containers, and recyclable cardboard.",
  },
  {
    question: "How do you ensure the freshness of your products during delivery?",
    answer:
      "We use freshness-focused packing for dry fruits and season-aware handling guidance for chocolates, partnering with reliable logistics for PAN India delivery.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <OrganizationSchema />
      <FAQSchema faqs={faqs} />
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
        breadcrumbs={[{ label: "About Reet Foods" }]}
        image={Images.woodenBoxNuts}
        imageAlt="Reet Foods Gifting Curation"
        primaryCta={{ label: "Explore Collections", href: "/products" }}
        secondaryCta={{ label: "Contact Pune Studio", href: "/contact" }}
        sideBadge="Established in Pune"
      />

      <AboutStatsBar />
      <AboutBrandStory />
      <AboutCoreValues />
      <AboutManufacturing />
      <AboutProcessFlow />

      {/* FAQ */}
      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Learn More"
          title="Frequently Asked Questions About Us"
          description="Common questions about our company, quality standards, and operations."
        />
        <FAQList faqs={faqs} />
      </section>

      <CTA />
    </div>
  );
}
