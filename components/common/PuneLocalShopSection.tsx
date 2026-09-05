import Image from "next/image";
import { FiMapPin, FiClock, FiPhone, FiCheckCircle, FiCompass } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import storeFrontImg from "@/assets/shop/reet-foods-storefront-pune.png";
import mallLocationImg from "@/assets/shop/streets-of-europe-hinjewadi.png";

interface PuneLocalShopSectionProps {
  className?: string;
  variant?: "light" | "dark";
}

export function PuneLocalShopSection({
  className = "",
  variant = "light",
}: PuneLocalShopSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`rounded-2xl border ${
        isDark
          ? "border-reef-gold/20 bg-[#141414] text-white"
          : "border-reef-gold/20 bg-white text-reef-charcoal shadow-sm"
      } p-6 sm:p-8 lg:p-10 ${className}`}
      aria-labelledby="pune-shop-heading"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-reef-gold/15 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-reef-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-reef-gold">
            <FiMapPin className="h-3.5 w-3.5" /> Pune Physical Store &amp; Showroom
          </span>
          <h2
            id="pune-shop-heading"
            className={`mt-2.5 font-[family-name:var(--font-playfair)] text-2xl font-bold sm:text-3xl ${
              isDark ? "text-white" : "text-reef-charcoal"
            }`}
          >
            Visit Our Local Shop in Hinjewadi, Pune
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 border border-green-500/20">
            ● Walk-ins &amp; Pickups Welcome
          </span>
        </div>
      </div>

      <p
        className={`mt-4 text-sm leading-relaxed ${
          isDark ? "text-white/75" : "text-reef-charcoal/80"
        } sm:text-base`}
      >
        Whether you are planning corporate festive hampers, searching for premium dry fruits, artisanal chocolates, or looking to inspect sample gift boxes in person, visit our retail store at Streets of Europe Mall in Hinjewadi Phase 1, Pune.
      </p>

      {/* Two Photos Grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* Photo 1: Retail Storefront */}
        <div className="group relative overflow-hidden rounded-xl border border-reef-gold/20 bg-black/5">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
            <Image
              src={storeFrontImg}
              alt="Reet Foods retail shop storefront in Streets of Europe Mall Hinjewadi Pune"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <span className="inline-block rounded bg-reef-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-reef-charcoal">
                Retail Storefront
              </span>
              <h3 className="mt-1.5 text-base font-bold text-white">
                Reet Foods Shop — Hinjewadi
              </h3>
              <p className="mt-1 text-xs text-white/80">
                Dry Fruits • Gourmet Chocolates • Healthy Nuts • Cold Beverages
              </p>
            </div>
          </div>
        </div>

        {/* Photo 2: Mall Location Landmark */}
        <div className="group relative overflow-hidden rounded-xl border border-reef-gold/20 bg-black/5">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
            <Image
              src={mallLocationImg}
              alt="Streets of Europe Mall, Ground Floor Shop F-14 Maan Road Hinjewadi Phase 1 Pune"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <span className="inline-block rounded bg-[#7a0019] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Mall Location &amp; Landmark
              </span>
              <h3 className="mt-1.5 text-base font-bold text-white">
                Streets of Europe Mall — Shop F-14
              </h3>
              <p className="mt-1 text-xs text-white/80">
                Ground Floor, Maan Road, Near Infosys Circle, Hinjewadi Phase 1
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Details & Highlights */}
      <div
        className={`mt-6 grid gap-4 rounded-xl border p-5 sm:grid-cols-2 lg:grid-cols-3 ${
          isDark
            ? "border-white/10 bg-white/5"
            : "border-reef-gold/15 bg-[#faf8f3]"
        }`}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-reef-gold">
            <FiMapPin className="h-4 w-4 shrink-0 text-reef-burgundy" /> Store Address
          </div>
          <p
            className={`text-xs leading-relaxed ${
              isDark ? "text-white/85" : "text-reef-charcoal/85"
            } font-medium`}
          >
            Shop No. F-14, Ground Floor, Streets of Europe Mall, Maan Road, near Infosys Circle, Hinjewadi Phase 1, Pune - 411057
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-reef-gold">
            <FiClock className="h-4 w-4 shrink-0 text-reef-burgundy" /> Business Hours
          </div>
          <p
            className={`text-xs leading-relaxed ${
              isDark ? "text-white/85" : "text-reef-charcoal/85"
            }`}
          >
            Monday – Saturday: <strong>9:30 AM – 8:00 PM</strong>
            <br />
            Sunday: Corporate consultations by prior appointment
          </p>
        </div>

        <div className="space-y-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-reef-gold">
            <FiCheckCircle className="h-4 w-4 shrink-0 text-reef-burgundy" /> In-Store Services
          </div>
          <p
            className={`text-xs leading-relaxed ${
              isDark ? "text-white/85" : "text-reef-charcoal/85"
            }`}
          >
            Physical Hamper Samples • Custom Branding Review • Retail Dry Fruit Purchases • Direct Pickups
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="https://wa.me/919225130732?text=Hi%20Reet%20Foods%2C%20I%20would%20like%20to%20visit%20your%20Hinjewadi%2C%20Pune%20shop%20to%20check%20gift%20hampers."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#20bd5a]"
        >
          <FaWhatsapp className="text-base" /> Chat on WhatsApp: 9225130732
        </a>
        <a
          href="tel:+919225130732"
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold transition ${
            isDark
              ? "border-reef-gold text-reef-gold hover:bg-reef-gold hover:text-reef-charcoal"
              : "border-reef-burgundy text-reef-burgundy hover:bg-reef-burgundy hover:text-white"
          }`}
        >
          <FiPhone /> Call Store: +91 92251 30732
        </a>
        <a
          href="https://maps.google.com/?q=Streets+of+Europe+Mall+Hinjewadi+Phase+1+Pune"
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold transition ${
            isDark
              ? "border-white/20 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
              : "border-reef-gold/30 bg-white text-reef-charcoal hover:border-reef-gold hover:bg-reef-gold/10"
          }`}
        >
          <FiCompass /> View on Google Maps
        </a>
      </div>
    </section>
  );
}
