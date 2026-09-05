import { GalleryClient } from "./GalleryClient";
import { videos } from "@/data/gallery";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQList } from "@/components/common/FAQList";

export const metadata = {
  title: "Gallery | Reet Foods Pune",
  description:
    "Browse Reet Foods photo and video gallery featuring premium dry fruits, chocolate boxes, juices and luxury hampers.",
};

const faqs = [
  {
    question:
      "Do these photos represent the actual premium dry fruits we will receive?",
    answer:
      "The gallery showcases representative hamper, box and product designs available through our gifting collection. Specific designs, contents and packaging are subject to current availability and can be customized according to your requirement.",
  },
  {
    question:
      "Can we request a custom gift box design similar to the ones in the gallery?",
    answer:
      "Absolutely. If you see a luxury corporate hamper or Diwali gift box design you like, we can replicate it and customize it with your corporate branding.",
  },
  {
    question: "Where are these gift boxes and hampers packed?",
    answer:
      "Our premium dry fruits and chocolate gift boxes are packed with food-grade packaging and quality checks in Pune.",
  },
  {
    question:
      "Do you offer the same wooden chests shown in the gallery for bulk orders?",
    answer:
      "Selected wooden chests and premium boxes shown in our gallery may be available for bulk corporate gifting, subject to current vendor availability. Our team can also suggest similar alternatives based on your budget and requirement.",
  },
  {
    question:
      "Are the cold-pressed juices shown available for PAN India delivery?",
    answer:
      "Currently, our cold-pressed wellness juices are available for local Pune delivery only, while all dry fruits and chocolates are delivered PAN India.",
  },
  {
    question:
      "Can I download these photos for my corporate gifting presentation?",
    answer:
      "Yes, you can click on any image to view it in high resolution and use the download button to share it with your HR or procurement team.",
  },
  {
    question: "What is the quality of the packaging materials used?",
    answer:
      "We use premium quality rigid boxes, imported tin containers, and handcrafted wooden chests, ensuring your corporate gifts Pune leave a lasting impression.",
  },
  {
    question:
      "Do you offer the ribbon wrapping and floral decor seen in the gallery?",
    answer:
      "Yes, custom ribbon wrapping, floral accents, and personalized note cards are complimentary services provided with our luxury corporate hampers.",
  },
  {
    question: "Can we visit your showroom to see these hampers in person?",
    answer:
      "Yes, you can visit our showroom at Streets of Europe Mall, Hinjewadi Phase I, Pune to view our entire collection of premium dry fruit boxes.",
  },
  {
    question: "How can I order a specific hamper from the gallery?",
    answer:
      "Simply note the name of the hamper or take a screenshot and share it with our corporate gifting team via WhatsApp at +91 9225130732.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <GalleryClient videos={videos} />

      {/* Gallery Representative Designs Disclaimer per brief */}
      <div className="bg-[#fffbf4] border-t border-reef-gold/20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-xl border border-reef-gold/30 bg-reef-cream/60 p-5">
            <p className="text-[11px] font-bold uppercase tracking-widest text-reef-burgundy mb-2">
              Gallery Disclaimer
            </p>
            <p className="text-xs leading-relaxed text-reef-charcoal/80">
              The gallery showcases representative hamper, box and product
              designs available through our gifting collection. Specific
              designs, contents and packaging are subject to current
              availability and can be customized according to your requirement.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/75">
              <strong>Wooden chests &amp; premium boxes:</strong> Selected
              wooden chests and premium boxes shown may be available for bulk
              corporate gifting, subject to current vendor availability. Our
              team can suggest similar alternatives based on your budget and
              requirement.
            </p>
            <p className="mt-3 text-xs font-medium text-reef-charcoal/90">
              Simply note the name of the hamper or take a screenshot and share
              it with our corporate gifting team via WhatsApp at{" "}
              <a
                href="https://wa.me/919225130732?text=Hi%20Reet%20Foods%2C%20I%20saw%20a%20design%20in%20your%20gallery%20I%20am%20interested%20in."
                className="font-bold text-reef-burgundy underline"
                target="_blank"
                rel="noreferrer"
              >
                +91 9225130732
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#fbf7f1] pb-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
            <SectionHeading
              eyebrow="Learn More"
              title="Gallery & Products FAQ"
              description="Common questions about our premium dry fruit boxes and luxury hampers."
            />
            <FAQList faqs={faqs} />
          </section>
        </div>
      </div>
    </>
  );
}
