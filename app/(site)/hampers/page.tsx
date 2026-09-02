import { constructMetadata } from "@/components/seo/Metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PageHero } from "@/components/common/PageHero";
import { HampersBudgetBands } from "@/components/home/HampersBudgetBands";
import { CustomizationSection } from "@/components/home/CustomizationSection";
import { CorporateQuotationForm } from "@/components/home/CorporateQuotationForm";
import { Images } from "@/assets/images";
import { getCampaignYear } from "@/lib/site";

export function generateMetadata() {
  const year = getCampaignYear();
  return constructMetadata({
    title: `Corporate Diwali Hampers Pune ${year} | Budget & VIP Gift Boxes | Reet Foods`,
    description: `Explore Corporate Diwali Hampers for ${year} in Pune starting from ₹400 onwards. Custom branded dry fruit boxes, luxury chocolate hampers, and executive gift hampers with GST billing.`,
    canonical: "/hampers",
    keywords: [
      `corporate Diwali hampers pune ${year}`,
      "Diwali gift hampers Pune",
      "dry fruit hampers Pune",
      "corporate gift boxes Hinjewadi",
      "employee Diwali gifts Pune",
      "custom Diwali gift sets",
    ],
  });
}

export default function HampersPage() {
  const year = getCampaignYear();

  return (
    <div className="space-y-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Diwali Hampers", url: "/hampers" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <PageHero
          eyebrow={`Diwali ${year} Collections`}
          title={`Corporate Diwali Hampers for Every Budget & Requirement`}
          description={`From budget-friendly employee gifts starting at ₹400 to luxury handcrafted executive caskets up to ₹3,000+, explore curated festive hampers crafted in Pune.`}
          breadcrumbs={[{ label: "Hampers" }]}
          image={Images.sweetiesDesk}
          imageAlt={`Corporate Diwali Hampers Pune ${year}`}
          primaryCta={{
            label: "Get Corporate Quotation",
            href: "#corporate-quotation",
          }}
          secondaryCta={{
            label: "WhatsApp Corporate Desk",
            href: "https://wa.me/919225130732?text=Hi%20Reet%20Foods%2C%20I%20am%20interested%20in%20Corporate%20Diwali%20Hampers.%20Please%20share%20options.",
          }}
          sideBadge="Custom Branding Included"
        />
      </div>

      <HampersBudgetBands />
      <CustomizationSection />
      <CorporateQuotationForm />
    </div>
  );
}
