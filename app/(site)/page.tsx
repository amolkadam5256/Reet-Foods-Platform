import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ContactStrip } from "@/components/home/ContactStrip";
import { PromoCards } from "@/components/home/PromoCards";
import { CategoryCards } from "@/components/home/CategoryCards";
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

export default function Home() {
  return (
    <div className="bg-[#fbf7f1]">
      <HeroSection />
      <TrustBar />
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
              description:
                "Pune's premier manufacturer of premium dry fruits, artisanal chocolates, and bespoke corporate gifting hampers. FSSAI certified, ISO quality standards, PAN India delivery.",
              priceRange: "₹₹–₹₹₹",
              servesCuisine: "Gifting, Dry Fruits, Artisanal Chocolates",
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
              telephone: ["+91-9890609611", "+91-8007518088"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9890609611",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                  contactOption: "TollFree",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-8007518088",
                  contactType: "sales",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi", "mr"],
                },
              ],
              sameAs: [
                "https://wa.me/919890609611",
                "https://facebook.com/reetfoods",
                "https://instagram.com/reetfoods",
                "https://linkedin.com/company/reetfoods",
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
