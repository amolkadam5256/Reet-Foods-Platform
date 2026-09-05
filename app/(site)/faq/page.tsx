import { SiteShell } from "@/components/common/SiteShell";
import { Images } from "@/assets/images";

import { FAQSchema } from "@/components/seo/FAQSchema";

const faqs = [
  {
    question: "What types of products does Reet Foods & Giftings offer?",
    answer: "We offer premium dry fruits, artisanal chocolates, luxury corporate hampers, cold-pressed juices, and customized gift boxes for weddings and festivals."
  },
  {
    question: "Do you specialize in corporate gifting in Pune?",
    answer: "Yes, we specialize in corporate gifting in Pune, offering customizable B2B gift hampers, employee joining kits, and VIP client rewards."
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "Our minimum order quantity for corporate gifting and custom boxes starts at 25 units, though we can accommodate smaller executive orders on request."
  },
  {
    question: "Can I get my company logo printed on the gift boxes?",
    answer: "Absolutely. We offer premium custom logo branding including gold/silver foil stamping and laser engraving on all corporate gift boxes."
  },
  {
    question: "Do you deliver corporate gifts PAN India?",
    answer: "Yes, we provide tracked PAN India delivery options for corporate gifting orders, straight to office hubs or employee homes. Special handling is confirmed by product and destination."
  },
  {
    question: "Are your dry fruits of premium quality?",
    answer: "Yes, we source the finest graded almonds, cashews, pistachios, and walnuts. All dry fruits are sealed in food-grade packaging for maximum freshness and flavor."

  },
  {
    question: "Do you offer wedding return gifts in bulk?",
    answer: "Yes, we curate exquisite wedding return gifts, trousseau packing, and luxury room hampers for destination weddings with bulk discounts available."
  },
  {
    question: "Are your food products FSSAI licensed?",
    answer: "Yes, Reet Foods & Giftings operates with FSSAI licensing. Our team follows hygiene checks and food-grade packing practices before dispatch."
  },
  {
    question: "What are your most popular Diwali gifts for corporates?",
    answer: "Our most popular Diwali gifts for corporates include luxury dry fruit hampers, designer sweet boxes, and custom branded hampers with traditional diyas."
  },
  {
    question: "Can we request a sample hamper before placing a bulk order?",
    answer: "Yes, we encourage B2B clients to evaluate our quality. Sample boxes can be dispatched to your corporate office within 24 hours."
  },
  {
    question: "How long does it take to process a bulk gifting order?",
    answer: "Standard bulk orders are processed within 5-7 days. For heavily customized logo branded hampers, we request 10-14 days lead time."
  },
  {
    question: "Do you offer eco-friendly packaging?",
    answer: "Yes, we provide sustainable packaging options like reusable tin boxes, wooden chests, and biodegradable cardboard sleeves."
  },
  {
    question: "What are the payment options for bulk corporate orders?",
    answer: "We accept NEFT, RTGS, UPI, and Corporate Credit Cards. Official B2B GST tax invoices are provided for your corporate accounting."
  },
  {
    question: "Do you cater to festive events other than Diwali?",
    answer: "Yes, we design custom hampers for Christmas, New Year, Holi, Eid, Raksha Bandhan, and Women's Day celebrations for corporate teams."
  },
  {
    question: "Where can we visit your showroom in Pune?",
    answer: "Our gifting studio and showroom is located at Shop F14, Ground Floor, Streets of Europe Mall, Hinjewadi Phase I, Pune, Maharashtra."
  }
];

export const metadata = {
  title: "FAQ | Reet Foods",
  description: "Common customer questions about orders, customization, delivery and OEM services.",
};

export default function FaqPage() {
  return (
    <SiteShell
      eyebrow="Support"
      title="Frequently asked questions for buyers, planners, and gifting teams."
      description="A quick reference for custom boxes, delivery, branding, and order support."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      sidePanelTitle="Need something specific?"
      sidePanelBody="If your question is about a custom order, we’re usually faster if you share the order size and timeline."
      sideLinks={[{ label: "Contact us", href: "/contact#quote" }, { label: "Browse products", href: "/products" }]}
      image={Images.closeUpNuts}
      imageAlt="Close-up of premium mixed nuts"
    >
      <FAQSchema faqs={faqs} />
      <div className="space-y-3">
        {faqs.map((item) => (
          <details key={item.question} className="border border-reef-gold/15 bg-white p-5 group">
            <summary className="cursor-pointer list-none text-sm font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal group-open:text-reef-burgundy transition">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-reef-charcoal/72">{item.answer}</p>
          </details>
        ))}
      </div>
    </SiteShell>
  );
}
