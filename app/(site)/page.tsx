import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ContactStrip } from "@/components/home/ContactStrip";
import { PromoCards } from "@/components/home/PromoCards";
import { CategoryCards } from "@/components/home/CategoryCards";
import { WhyReetFoods } from "@/components/home/WhyReetFoods";
import { GiftingCategories } from "@/components/home/GiftingCategories";
import { HampersBudgetBands } from "@/components/home/HampersBudgetBands";
import { CustomizationSection } from "@/components/home/CustomizationSection";
import { BulkOrderSection } from "@/components/home/BulkOrderSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PreviousDesigns } from "@/components/home/PreviousDesigns";
import { CorporateQuotationForm } from "@/components/home/CorporateQuotationForm";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CorporateGifting } from "@/components/home/CorporateGifting";
import { AboutBrand } from "@/components/home/AboutBrand";
import { OurProcess } from "@/components/home/OurProcess";
import { ManufacturingPreview } from "@/components/home/ManufacturingPreview";
import { IndustriesWeServe } from "@/components/home/IndustriesWeServe";
import { Testimonials } from "@/components/home/Testimonials";
import { Certifications } from "@/components/home/Certifications";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LatestBlogs } from "@/components/home/LatestBlogs";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { faqs } from "@/data/home";
import { getCampaignYear } from "@/lib/site";

export default function Home() {
  const year = getCampaignYear();

  return (
    <div className="bg-[#fbf7f1]">
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Corporate Diwali Gifting 2026 Core Flow */}
      <WhyReetFoods />
      <GiftingCategories />
      <HampersBudgetBands />
      <CustomizationSection />
      <BulkOrderSection />
      <HowItWorks />
      <PreviousDesigns />
      <CorporateQuotationForm />

      {/* 4. Supporting Brand & Product Showcase (Intact) */}
      <ContactStrip />
      <PromoCards />
      <CategoryCards />
      <WhyChooseUs />
      <FeaturedProducts />
      <CorporateGifting />
      <AboutBrand />
      <OurProcess />
      <ManufacturingPreview />
      <IndustriesWeServe />
      <Testimonials />
      <Certifications />
      <GalleryPreview />
      <LatestBlogs />
      <FAQSection />
      <FinalCTA />

      {/* SEO JSON-LD Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "FoodEstablishment"],
              name: "Reet Foods & Gifting",
              url: "https://reetfoodsngiftings.com",
              logo: "https://reetfoodsngiftings.com/logo.png",
              image: "https://reetfoodsngiftings.com/images/hero.jpg",
              description: `Pune's premier manufacturer and partner for Corporate Diwali Gifting ${year}, dry fruits, artisanal chocolates, and bespoke corporate hampers. FSSAI certified, GST registered, PAN India delivery.`,
              priceRange: "₹400–₹3,000+",
              servesCuisine: "Corporate Gifting, Dry Fruits, Artisanal Chocolates, Diwali Hampers",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shop no F14 Ground floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                postalCode: "411057",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "18.5900",
                longitude: "73.7380",
              },
              email: "reetfoodspune@gmail.com",
              telephone: ["+91-9225130732", "+91-9890609611"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9225130732",
                  contactType: "corporate sales and gifting desk",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi", "mr"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9890609611",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
              ],
              sameAs: [
                "https://wa.me/919225130732",
                "https://facebook.com/reetfoodsngiftings",
                "https://instagram.com/reetfoodsngiftings",
                "https://www.linkedin.com/company/reet-foods-pune/?viewAsMember=true",
                "https://www.youtube.com/@ReetFoodsGiftings",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]),
        }}
      />
    </div>
  );
}
