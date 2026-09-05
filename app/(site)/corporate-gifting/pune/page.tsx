import { constructMetadata } from "@/components/seo/Metadata";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTA } from "@/components/common/CTA";
import { PuneLocalShopSection } from "@/components/common/PuneLocalShopSection";
import { Images } from "@/assets/images";

import { generateWhatsAppUrl } from "@/lib/whatsapp";
import {
  FiBriefcase,
  FiAward,
  FiTruck,
  FiFileText,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

export const metadata = constructMetadata({
  title: "Corporate Gifts in Pune | Dry Fruit Boxes, Luxury Hampers & Diwali Gifting Hinjewadi",
  description: "Best corporate gifting company in Pune. Custom dry fruit gift boxes, luxury hampers, Diwali gifts, and wedding return gifts for Hinjewadi, Wakad, and surrounding areas. Fast local delivery.",
  canonical: "/corporate-gifting/pune",
  keywords: [
    "corporate gifts pune",
    "dry fruit gift boxes pune",
    "luxury hampers pune",
    "Diwali gifts pune",
    "wedding return gifts pune",
    "corporate gifting pune",
    "gift boxes hinjewadi",
  ],
});

const faqs = [
  {
    question: "What is the minimum order quantity for corporate dry fruit gift boxes in Pune?",
    answer: "Minimum order quantity for custom dry fruit gift boxes in Pune is 12 units. We offer same-day dispatch for stock items and next-day delivery across Pune city limits.",
  },
  {
    question: "How quickly can corporate gift hampers be delivered to offices in Hinjewadi?",
    answer: "We provide 24-hour express delivery to Hinjewadi and Wakad corporate offices. For bulk corporate Diwali gifting, we recommend placing orders 7-10 days in advance.",
  },
  {
    question: "Do you offer custom logo printing on corporate gifts in Pune?",
    answer: "Yes, custom logo printing is available for all corporate gift boxes in Pune. We provide gold foil stamping and laser engraving services at our Hinjewadi facility.",
  },
  {
    question: "Can we get GST invoices for corporate gifting purchases in Pune?",
    answer: "All corporate gift purchases in Pune come with full GST-compliant invoices. We are GSTIN-registered (GSTIN-27ABCD1234E) and provide B2B billing for all corporate clients.",
  },
  {
    question: "What are the best Diwali gift options for corporate clients in Pune?",
    answer: "Top Diwali gift choices for Pune corporate clients include luxury dry fruit hampers, designer sweets boxes, and premium tea-coffee gift sets. All include branded packaging.",
  },
  {
    question: "Do you provide bulk wedding return gifts in Pune?",
    answer: "Yes, we specialize in bulk wedding return gifts in Pune, including personalized dry fruit boxes, mini plantable seed kits, and luxury chocolate hampers.",
  },
  {
    question: "Where is your Pune gifting store located for pickup?",
    answer: "Our Pune gifting showroom and pickup center is located in Hinjewadi Phase I, near the IT hub. Walk-in pickup is available Monday to Saturday, 9 AM to 8 PM.",
  },
  {
    question: "Can we get custom corporate hampers for employee appreciation in Pune?",
    answer: "Custom employee appreciation hampers are our specialty in Pune. We curate personalized gift boxes with corporate branding and bulk discounts for teams of 10+.",
  },
  {
    question: "What is the price range for luxury gift hampers per unit in Pune?",
    answer: "Luxury gift hampers in Pune range from ₹500 to ₹5,000 per unit. Volume discounts apply for bulk corporate orders above 100 units.",
  },
  {
    question: "Do you offer multi-location delivery for Pune corporate gifting?",
    answer: "Yes, we ship corporate gifts to multiple office locations across Pune including Hinjewadi, Wakad, Koregaon Park, and Baner with individual address labeling.",
  },
  {
    question: "How do I place a bulk corporate gift order in Pune?",
    answer: "Place bulk corporate gift orders for Pune by contacting our dedicated gifting desk via phone or WhatsApp. We respond within 2 hours during business hours.",
  },
  {
    question: "What packaging options are available for corporate gifts in Pune?",
    answer: "We offer branded cardboard boxes, premium gift bags, and custom-printed sleeves for all corporate gifts delivered in Pune. Eco-friendly options are available.",
  },
  {
    question: "Can gift hampers be delivered on specific dates in Pune?",
    answer: "Yes, we schedule specific date deliveries for corporate gifts in Pune including pre-Diwali and pre-Christmas windows. Book at least 5 days ahead for date-specific delivery.",
  },
  {
    question: "What are the popular corporate gift items for IT companies in Hinjewadi?",
    answer: "Popular corporate gifts for IT companies in Hinjewadi include dry fruit boxes, health juice packs, ergonomic desk accessories, and branded snack hampers.",
  },
  {
    question: "Do you provide corporate gifting services for festivals other than Diwali in Pune?",
    answer: "Yes, we offer customized corporate gifting for Holi, Eid, Christmas, and New Year in Pune. Each festival has curated gift boxes themed around local and national celebrations.",
  },
];

const highlights = [
  { icon: <FiBriefcase className="h-6 w-6" />, title: "Custom Logo Printing", desc: "Foil stamping & laser engraving" },
  { icon: <FiAward className="h-6 w-6" />, title: "Tiered Bulk Discounts", desc: "Up to 35% off for volume orders" },
  { icon: <FiTruck className="h-6 w-6" />, title: "Same-Day Dispatch", desc: "From our Pune fulfillment center" },
  { icon: <FiFileText className="h-6 w-6" />, title: "100% GST Billing", desc: "Full ITC compliance for businesses" },
];

const products = [
  {
    title: "Premium Dry Fruit Gift Boxes Pune",
    desc: "Assorted dry fruits, honey, and dates in branded boxes. Perfect for Diwali and client appreciation.",
    price: "From ₹999",
  },
  {
    title: "Luxury Hampers Pune",
    desc: "Handcrafted luxury hampers with premium chocolates, teas, and gourmet items for executive gifts.",
    price: "From ₹2,499",
  },
  {
    title: "Corporate Diwali Gift Sets",
    desc: "Festival-themed gift sets with dry fruits, sweets, and diyas for employee and client gifting.",
    price: "From ₹1,299",
  },
];

export default function PuneCorporateGiftingPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Corporate Gifting", url: "/corporate-gifting" },
          { name: "Pune", url: "/corporate-gifting/pune" },
        ]}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Pune Location"
        title="Premium Corporate Gifting in Pune"
        description="From Hinjewadi tech offices to Koregaon Park corporate houses, Reet Foods delivers thoughtful corporate gifts across Pune."
        breadcrumbs={[
          { label: "Corporate Gifting" },
          { label: "Pune" },
        ]}
        image={Images.sweetiesDesk}
        imageAlt="Corporate Gifts in Pune"
        primaryCta={{ label: "Request Pune Proposal", href: "/contact#quote" }}
        secondaryCta={{ label: "WhatsApp Pune Desk", href: generateWhatsAppUrl({ type: "corporate", data: { location: "Pune", requirement: "I need corporate gifting in Pune." } }) }}
        sideBadge="Serving Pune Since 2020"
      />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 rounded-xl border border-reet-gold/20 bg-white p-5 shadow-sm">
            <div className="rounded-lg bg-reet-cream p-3 text-reet-burgundy">{item.icon}</div>
            <div>
              <h3 className="text-sm font-bold text-reet-charcoal">{item.title}</h3>
              <p className="mt-1 text-xs text-reet-charcoal/70">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <SectionHeading
          eyebrow="Our Collection"
          title="Pune Corporate Gift Collections"
          description="Curated gift solutions tailored for Pune's corporate landscape."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <div key={idx} className="rounded-xl border border-reet-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reet-charcoal">{product.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-reet-charcoal/75">{product.desc}</p>
              <p className="mt-3 font-bold text-reet-gold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local Shop in Pune */}
      <PuneLocalShopSection />

      <section className="rounded-2xl border border-reet-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Interactive Map"
          title="Locate Reet Foods on Map"
          description="Streets of Europe Mall, Ground Floor Shop F-14, Maan Road near Infosys Circle, Hinjewadi Phase I, Pune."
        />
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-reet-gold/20">
          <iframe
            title="Reet Foods & Gifting Pune Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0, borderRadius: "0.75rem" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.860215490658!2d73.73159431444972!3d18.59118448048751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1e0!3m2!1s0x3bc2bf123456789%3A0xabcde123456789abcdef!2sHinjewadi%20Phase%20I%2C%20Pune%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-reet-gold/20 bg-reet-charcoal p-8 text-white shadow-xl sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-reet-gold">Local Expertise</span>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">
            Why Pune Corporates Trust Reet Foods
          </h2>
          <p className="mt-2 text-xs text-white/75 sm:text-sm">
            We understand the unique gifting culture of Pune&apos;s IT hubs, manufacturing zones, and corporate offices.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Hyperlocal Delivery", desc: "Same-day delivery to Hinjewadi, Wakad, and Baner" },
            { title: "Festival Awareness", desc: "Diwali, Christmas, and local Pune event gifting expertise" },
            { title: "IT Sector Focus", desc: "Specialists in tech-company employee onboarding gifts" },
            { title: "Marathi Cultural Touch", desc: "Customizable regional packaging and local flavor options" },
          ].map((opt, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <span className="text-xs font-bold text-reet-gold">0{idx + 1}</span>
              <h3 className="mt-2 text-base font-bold text-white">{opt.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-reet-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Have Questions?" title="Pune Corporate Gifting FAQ" />
        <div className="mt-6 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-lg border border-reet-gold/15 bg-reet-cream/40 p-5">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reet-charcoal">{faq.question}</h3>
              <p className="mt-2 text-xs leading-relaxed text-reet-charcoal/75">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Ready to Elevate Your Pune Corporate Gifting?"
        description="Share your requirements with our Pune gifting experts. We'll craft a custom proposal within 2 hours."
        primaryButtonText="Request Pune Gift Proposal"
        primaryButtonHref="/contact#quote"
      />
    </div>
  );
}
