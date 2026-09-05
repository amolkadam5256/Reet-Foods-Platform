import { constructMetadata } from "@/components/seo/Metadata";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PageHero } from "@/components/common/PageHero";
import { CTA } from "@/components/common/CTA";
import { CorporateHighlights } from "@/components/corporate/CorporateHighlights";
import { CorporateIndustries } from "@/components/corporate/CorporateIndustries";
import { CorporateBranding } from "@/components/corporate/CorporateBranding";
import { CorporateProcess } from "@/components/corporate/CorporateProcess";
import { CorporateFAQ, corporateFaqs } from "@/components/corporate/CorporateFAQ";
import { Images } from "@/assets/images";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = constructMetadata({
  title:
    "Corporate Gifting Pune | Executive Custom Logo Hampers & Dry Fruit Boxes",
  description:
    "Enterprise corporate gifting solutions in Pune. Custom metallic logo branding, GST invoicing, tiered volume pricing, and pan-India multi-address dispatch.",
  canonical: "/corporate-gifting",
});

export default function CorporateGiftingPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Corporate Gifting", url: "/corporate-gifting" },
        ]}
      />
      <FAQSchema faqs={corporateFaqs} />

      <PageHero
        eyebrow="Enterprise Gifting Program"
        title="Gifts That Make Your Brand Thoughtfully Remembered."
        description="From annual client appreciation and Diwali galas to employee onboarding and executive rewards, Reet Foods & Gifting makes corporate gifting effortless."
        breadcrumbs={[{ label: "Corporate Gifting" }]}
        image={Images.sweetiesDesk}
        imageAlt="Corporate Gifting Solutions Pune"
        primaryCta={{
          label: "Request Corporate Catalog",
          href: "/contact#quote",
        }}
        secondaryCta={{
          label: "WhatsApp Corporate Desk",
          href: generateWhatsAppUrl({ type: "corporate", data: { requirement: "I need corporate gifting solutions." } }),
        }}
        sideBadge="Enterprise Preferred"
      />

      <CorporateHighlights />
      <CorporateIndustries />
      <CorporateBranding />
      <CorporateProcess />
      <CorporateFAQ />

      <CTA
        title="Ready to Request a Corporate Gift Proposal?"
        description="Share your brand guidelines and target budget. Our Pune team will provide prompt quotation and requirement support."
        primaryButtonText="Request Corporate Proposal"
        primaryButtonHref="/contact#quote"
      />
    </div>
  );
}
