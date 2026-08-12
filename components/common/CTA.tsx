import Link from "next/link";
import { FiMessageSquare } from "react-icons/fi";

export interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CTA({
  title = "Ready to elevate your gifting experience?",
  description = "Connect with our Pune concierge team for custom packaging, bulk discounts, and personalized branding options.",
  primaryButtonText = "Request a Custom Quote",
  primaryButtonHref = "/contact#quote",
  secondaryButtonText = "WhatsApp Us Direct",
  secondaryButtonHref = "https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20would%20like%20to%20inquire%20about%20custom%20gifting",
}: CTAProps) {
  return (
    <section className="my-12 overflow-hidden border border-reef-gold/30 bg-gradient-to-r from-reef-charcoal via-[#1a1412] to-reef-charcoal p-8 text-white shadow-xl sm:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block border border-reef-gold/30 bg-reef-gold/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-reef-gold">
          Concierge Assistance
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryButtonHref}
            style={{
              backgroundColor: "#d4af37",
              borderColor: "#d4af37",
              color: "#1c1c1c",
            }}
            className="inline-flex min-h-12 min-w-[220px] items-center justify-center border px-7 py-3.5 text-center text-sm font-bold transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            {primaryButtonText || "Request a Custom Quote"}
          </Link>

          <a
            href={secondaryButtonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#d4af37]/70 bg-[#2b2520] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37] hover:bg-[#3a3028] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <FiMessageSquare className="h-4 w-4 text-[#d4af37]" />
            <span>{secondaryButtonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
