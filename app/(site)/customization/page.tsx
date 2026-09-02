import { constructMetadata } from "@/components/seo/Metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PageHero } from "@/components/common/PageHero";
import { CustomizationSection } from "@/components/home/CustomizationSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CorporateQuotationForm } from "@/components/home/CorporateQuotationForm";
import { Images } from "@/assets/images";
import { getCampaignYear } from "@/lib/site";

export function generateMetadata() {
  const year = getCampaignYear();
  return constructMetadata({
    title: `Corporate Hamper Customization & Branding Pune | Reet Foods ${year}`,
    description: `Custom company logo branding, metallic foil stamping, personalized gift sleeves, and bespoke product curation for Corporate Diwali ${year} in Pune.`,
    canonical: "/customization",
    keywords: [
      "corporate gift box customization Pune",
      "custom logo branding hampers Pune",
      "personalized Diwali gift packaging",
      "corporate gift foil stamping Hinjewadi",
    ],
  });
}

export default function CustomizationPage() {
  const year = getCampaignYear();

  return (
    <div className="space-y-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Customization & Branding", url: "/customization" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <PageHero
          eyebrow="Corporate Branding & Packaging"
          title="Your Company. Your Budget. Your Brand."
          description={`Elevate your Diwali ${year} gifting with metallic gold foil stamping, custom-printed greeting cards, and bespoke product selections tailored to your corporate identity.`}
          breadcrumbs={[{ label: "Customization" }]}
          image={Images.sweetiesDesk}
          imageAlt="Custom Corporate Gifting Pune"
          primaryCta={{
            label: "Discuss Custom Hamper",
            href: "#corporate-quotation",
          }}
          secondaryCta={{
            label: "WhatsApp Customization Desk",
            href: "https://wa.me/919225130732?text=Hi%20Reet%20Foods%2C%20I%20am%20interested%20in%20custom%20branding%20and%20packaging%20for%20our%20corporate%20hampers.",
          }}
          sideBadge="100% Brand Tailored"
        />
      </div>

      <CustomizationSection />
      <HowItWorks />
      <CorporateQuotationForm />
    </div>
  );
}
