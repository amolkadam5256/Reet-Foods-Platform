import { constructMetadata } from "@/components/seo/Metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PageHero } from "@/components/common/PageHero";
import { BulkOrderSection } from "@/components/home/BulkOrderSection";
import { HampersBudgetBands } from "@/components/home/HampersBudgetBands";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CorporateQuotationForm } from "@/components/home/CorporateQuotationForm";
import { Images } from "@/assets/images";
import { getCampaignYear } from "@/lib/site";

export function generateMetadata() {
  const year = getCampaignYear();
  return constructMetadata({
    title: `Bulk Corporate Diwali Gifts Pune ${year} | Bulk Orders | Reet Foods`,
    description: `Order Bulk Corporate Diwali Hampers in Pune for ${year}. Quantity-based pricing, official GST invoicing, company logo customization, and multi-office delivery in Hinjewadi, Pune & PAN India.`,
    canonical: "/bulk-orders",
    keywords: [
      `bulk corporate Diwali gifts Pune ${year}`,
      "bulk dry fruit boxes Pune",
      "employee bulk gifting Hinjewadi",
      "volume corporate hampers Pune",
      "B2B Diwali gift supplier Pune",
    ],
  });
}

export default function BulkOrdersPage() {
  const year = getCampaignYear();

  return (
    <div className="space-y-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Bulk Orders", url: "/bulk-orders" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <PageHero
          eyebrow="Corporate Volume Desk"
          title={`Bulk Corporate Diwali Gifts in Pune (${year})`}
          description={`Seamless bulk fulfillment with quantity-based pricing, custom metallic logo branding, FSSAI-licensed quality, and official B2B GST billing from our Hinjewadi, Pune center.`}
          breadcrumbs={[{ label: "Bulk Corporate Orders" }]}
          image={Images.sweetiesDesk}
          imageAlt={`Bulk Corporate Diwali Gifting Pune ${year}`}
          primaryCta={{
            label: "Request Bulk Quote",
            href: "#bulk-orders",
          }}
          secondaryCta={{
            label: "WhatsApp Bulk Desk",
            href: "https://wa.me/919225130732?text=Hi%20Reet%20Foods%2C%20I%20am%20planning%20a%20bulk%20order%20for%20Corporate%20Diwali%20Gifting.%20Please%20share%20bulk%20proposals.",
          }}
          sideBadge="Quantity Pricing"
        />
      </div>

      <BulkOrderSection />
      <HampersBudgetBands />
      <HowItWorks />
      <CorporateQuotationForm />
    </div>
  );
}
