import { GalleryClient } from "./GalleryClient";
import { videos } from "@/data/gallery";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata = {
  title: "Gallery | Reet Foods Pune",
  description: "Browse Reet Foods photo and video gallery featuring premium dry fruits, chocolate boxes, juices and luxury hampers.",
};

const faqs = [
  {
    question: "Do these photos represent the actual premium dry fruits we will receive?",
    answer: "Yes, all photos in our gallery showcase the actual premium dry fruits, luxury hampers, and custom gift boxes curated by Reet Foods & Giftings."
  },
  {
    question: "Can we request a custom gift box design similar to the ones in the gallery?",
    answer: "Absolutely. If you see a luxury corporate hamper or Diwali gift box design you like, we can replicate it and customize it with your corporate branding."
  },
  {
    question: "Where are these gift boxes and hampers packed?",
    answer: "All our premium dry fruits and chocolate gift boxes are packed at our FSSAI-certified facility in Vishwashanti Colony, Pune."
  },
  {
    question: "Do you offer the same wooden chests shown in the gallery for bulk orders?",
    answer: "Yes, the premium wooden chests and laser-engraved boxes shown in our gallery are available for bulk corporate gifting and wedding return gifts."
  },
  {
    question: "Are the cold-pressed juices shown available for PAN India delivery?",
    answer: "Currently, our cold-pressed wellness juices are available for local Pune delivery only, while all dry fruits and chocolates are delivered PAN India."
  },
  {
    question: "Can I download these photos for my corporate gifting presentation?",
    answer: "Yes, you can click on any image to view it in high resolution and use the download button to share it with your HR or procurement team."
  },
  {
    question: "What is the quality of the packaging materials used?",
    answer: "We use premium quality rigid boxes, imported tin containers, and handcrafted wooden chests, ensuring your corporate gifts Pune leave a lasting impression."
  },
  {
    question: "Do you offer the ribbon wrapping and floral decor seen in the gallery?",
    answer: "Yes, custom ribbon wrapping, floral accents, and personalized note cards are complimentary services provided with our luxury corporate hampers."
  },
  {
    question: "Can we visit your showroom to see these hampers in person?",
    answer: "Yes, you can visit our showroom at Streets of Europe Mall, Hinjewadi Phase I, Pune to view our entire collection of premium dry fruit boxes."
  },
  {
    question: "How can I order a specific hamper from the gallery?",
    answer: "Simply note the name of the hamper or take a screenshot and share it with our corporate gifting team via WhatsApp at +91 9890609611."
  }
];

export default function GalleryPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <GalleryClient videos={videos} />
      
      <div className="bg-[#fbf7f1] pb-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
            <SectionHeading
              eyebrow="Learn More"
              title="Gallery & Products FAQ"
              description="Common questions about our premium dry fruit boxes and luxury hampers."
            />
            <div className="mt-8 space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-reef-gold/15 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-reef-charcoal/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
