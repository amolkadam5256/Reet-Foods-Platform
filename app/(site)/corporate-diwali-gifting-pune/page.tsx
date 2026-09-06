import { constructMetadata } from "@/components/seo/Metadata";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhyReetFoods } from "@/components/home/WhyReetFoods";
import { GiftingCategories } from "@/components/home/GiftingCategories";
import { HampersBudgetBands } from "@/components/home/HampersBudgetBands";
import { CustomizationSection } from "@/components/home/CustomizationSection";
import { BulkOrderSection } from "@/components/home/BulkOrderSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PreviousDesigns } from "@/components/home/PreviousDesigns";
import { CorporateQuotationForm } from "@/components/home/CorporateQuotationForm";
import { PuneLocalShopSection } from "@/components/common/PuneLocalShopSection";
import { Images } from "@/assets/images";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiTruck,
  FiFileText,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getCampaignYear } from "@/lib/site";

export function generateMetadata() {
  const year = getCampaignYear();
  return constructMetadata({
    title: `Corporate Diwali Gifts Pune ${year} | Customized Corporate Hampers | Reet Foods`,
    description: `Leading Corporate Diwali Gifting company in Pune for ${year}. Custom dry fruit hampers, artisanal chocolates & executive gift sets starting from ₹400. Hinjewadi, Chakan, Talegaon & PCMC delivery. WhatsApp 9225130732.`,
    canonical: "/corporate-diwali-gifting-pune",
    keywords: [
      `Corporate Diwali Gifts Pune ${year}`,
      "Corporate Gift Hampers Pune",
      "Employee Diwali Gifts Pune",
      "Corporate Gifts Chakan",
      "Corporate Gifts Talegaon",
      "Corporate Gifts Hinjewadi",
      "Diwali gift supplier Pune",
      "custom logo corporate hampers Pune",
      "bulk dry fruit boxes Pune",
    ],
  });
}

const puneFaqs = [
  {
    question: "What is the starting price for Corporate Diwali Hampers in Pune?",
    answer:
      "Our Corporate Diwali Hampers start from ₹400 onwards for employee bulk orders, with mid-tier options from ₹700–₹1,500 and premium executive luxury caskets ranging from ₹2,000 to ₹3,000+.",
  },
  {
    question: "Can we get custom company logo branding on Diwali hampers in Pune?",
    answer:
      "Yes, we provide metallic gold and silver foil logo stamping, branded sleeves, custom ribbons, and personalized founder greeting cards from our Hinjewadi, Pune facility.",
  },
  {
    question: "Do you deliver corporate Diwali gifts to Chakan, Talegaon, and Hinjewadi?",
    answer:
      "Yes, we provide dedicated delivery across all Pune industrial and IT hubs including Hinjewadi Phase 1, 2, 3, Chakan MIDC, Talegaon, Bhosari, Magarpatta, Kharadi, and Baner.",
  },
  {
    question: "Do you provide GST invoices for corporate orders?",
    answer:
      "All corporate gift orders come with official GST B2B tax invoices (GSTIN: 27FHIPK0363N1ZX) for your accounting records.",
  },
  {
    question: "What is the typical turnaround time for bulk Diwali orders in Pune?",
    answer:
      "We recommend finalizing orders 7–14 days before your required dispatch date. For urgent requirements, our Pune fulfillment center can accommodate express 48–72 hour dispatches for in-stock collections.",
  },
];

const puneHubs = [
  {
    area: "Hinjewadi (Phase 1, 2, 3)",
    desc: "Tech parks, IT corporations, and software enterprise campuses.",
    tag: "Same-Day Local Hub",
  },
  {
    area: "Chakan & Talegaon MIDC",
    desc: "Automotive, engineering, manufacturing & industrial plants.",
    tag: "Bulk Pallet Dispatch",
  },
  {
    area: "Kharadi & Magarpatta City",
    desc: "Financial services, GCCs, IT hubs & corporate towers.",
    tag: "Direct Office Delivery",
  },
  {
    area: "Baner, Balewadi & Wakad",
    desc: "Corporate headquarters, startups, consultancy & agency offices.",
    tag: "Express Courier Hub",
  },
  {
    area: "Bhosari & PCMC Industrial Belt",
    desc: "Manufacturing conglomerates, engineering firms & vendors.",
    tag: "Volume Van Delivery",
  },
  {
    area: "Koregaon Park & Bund Garden",
    desc: "Executive suites, law firms, banking & VIP client suites.",
    tag: "Premium Corporate Service",
  },
];

export default function PuneCorporateDiwaliPage() {
  const year = getCampaignYear();

  return (
    <div className="space-y-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Corporate Gifting", url: "/corporate-gifting" },
          { name: `Corporate Diwali Gifts Pune ${year}`, url: "/corporate-diwali-gifting-pune" },
        ]}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={puneFaqs} />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <PageHero
          eyebrow={`Pune Corporate Campaign ${year}`}
          title={`Corporate Diwali Gifting in Pune — Customized Hampers from ₹400`}
          description={`From Hinjewadi IT companies and Chakan manufacturing giants to Koregaon Park executive suites, Reet Foods delivers thoughtful, customized Corporate Diwali Hampers with GST billing and pan-Pune delivery.`}
          breadcrumbs={[{ label: "Corporate Diwali Gifts Pune" }]}
          image={Images.sweetiesDesk}
          imageAlt={`Corporate Diwali Gifting Pune ${year}`}
          primaryCta={{
            label: "Get Pune Corporate Quotation",
            href: "#corporate-quotation",
          }}
          secondaryCta={{
            label: "WhatsApp Pune Corporate Desk",
            href: `https://wa.me/919225130732?text=${encodeURIComponent(
              `Hi Reet Foods, I am interested in Corporate Diwali ${year} Gifting for our Pune office. Please share suitable hamper options.`
            )}`,
          }}
          sideBadge="Pune Fulfilment Center"
        />
      </div>

      {/* Pune Delivery Hubs & Regional Coverage */}
      <section className="bg-white py-14 border-t border-reef-gold/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pune & PCMC Industrial / IT Coverage"
            title="Express Corporate Delivery Across All Pune Hubs"
            description="Our Hinjewadi fulfillment hub coordinates seamless door-to-door delivery across major IT parks and industrial zones in Pune."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {puneHubs.map((hub, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-reef-gold/20 bg-[#faf8f3] p-6 shadow-sm hover:border-reef-gold transition duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-full bg-reef-burgundy/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-reef-burgundy">
                    {hub.tag}
                  </span>
                  <FiTruck className="text-reef-gold h-5 w-5" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">
                  {hub.area}
                </h3>
                <p className="mt-2 text-xs text-reef-charcoal/70 leading-relaxed">
                  {hub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Campaign Flow */}
      <WhyReetFoods />
      <GiftingCategories />
      <HampersBudgetBands />
      <CustomizationSection />
      <BulkOrderSection />
      <HowItWorks />
      <PreviousDesigns />

      {/* Pune Corporate Gifting FAQ */}
      <section className="bg-white py-14 border-t border-reef-gold/15">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Procurement & HR FAQ"
            title={`Pune Corporate Diwali ${year} FAQ`}
            description="Clear answers to common questions asked by HR, admin, and procurement teams."
          />

          <div className="mt-8 space-y-4">
            {puneFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-reef-gold/15 bg-[#faf8f3] p-6 shadow-sm"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-base sm:text-lg font-bold text-reef-charcoal">
                  {faq.question}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-reef-charcoal/75 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Quotation Form */}
      <CorporateQuotationForm />

      {/* Local Shop in Hinjewadi, Pune */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <PuneLocalShopSection />
      </div>

      {/* Trust & Business Contact Card */}
      <section className="bg-[#111111] py-14 text-white border-t border-reef-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-reef-gold">
                Direct Pune Corporate Desk
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white">
                Visit Our Hinjewadi Showroom or Connect on WhatsApp
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                Connect directly with founders <strong>Shraddha Kharate & Harshad Kharate</strong> to review physical hamper samples, discuss custom box embossing, and finalize landed quotation pricing.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/919225130732?text=${encodeURIComponent(
                    `Hi Reet Foods, I am interested in Corporate Diwali ${year} Gifting for our Pune office. Please share suitable hamper options.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#1da851]"
                >
                  <FaWhatsapp className="text-base" /> WHATSAPP: 9225130732
                </a>
                <a
                  href="tel:+919225130732"
                  className="inline-flex items-center gap-2 rounded-full border border-reef-gold bg-reef-gold/10 px-6 py-3 text-xs sm:text-sm font-bold text-reef-gold hover:bg-reef-gold hover:text-[#1c1c1c]"
                >
                  <FiPhone /> CALL: +91 92251 30732
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm space-y-4 text-xs text-white/80">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-reef-gold h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Showroom & Fulfillment Center:</p>
                  <p className="mt-0.5 text-white/70 leading-relaxed">
                    Shop F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I, Pune 411057
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiFileText className="text-reef-gold h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">GST Number:</p>
                  <p className="mt-0.5 text-white/70">27FHIPK0363N1ZX (GST Invoicing Available)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="text-reef-gold h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Official Email:</p>
                  <p className="mt-0.5 text-white/70">reetfoodspune@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiClock className="text-reef-gold h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Business Hours:</p>
                  <p className="mt-0.5 text-white/70">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
