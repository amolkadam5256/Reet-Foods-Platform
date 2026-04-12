import { Categories } from "../../components/home/Categories";
import { ContactCTA } from "../../components/home/ContactCTA";
import { FeaturedProducts } from "../../components/home/FeaturedProducts";
import { Hero } from "../../components/home/Hero";
import { HighlightBar } from "../../components/home/HighlightBar";
import { PhotoGallery } from "../../components/home/PhotoGallery";
import { Testimonials } from "../../components/home/Testimonials";
import { VideoGallery } from "../../components/home/VideoGallery";
import { WhyChooseUs } from "../../components/home/WhyChooseUs";
import { FloatingQuoteButton } from "../../components/common/FloatingQuoteButton";
import { WhatsAppButton } from "../../components/common/WhatsAppButton";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Reet Foods",
  image:
    "https://images.unsplash.com/photo-1502741509793-1bf00d85ae73?auto=format&fit=crop&w=900&q=80",
  url: "https://reetfoods.in",
  telephone: "+91-99999-99999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: ["https://wa.me/919999999999"],
  priceRange: "₹₹₹",
  makesOffer: [
    "Premium dry fruits",
    "Chocolate gift boxes",
    "Cold-pressed juices",
    "Corporate hampers",
  ],
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <WhatsAppButton
        href="https://wa.me/919999999999?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
        label="WhatsApp Us"
      />
      <FloatingQuoteButton />

      <Hero />
      <HighlightBar />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <PhotoGallery />
      <VideoGallery />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
