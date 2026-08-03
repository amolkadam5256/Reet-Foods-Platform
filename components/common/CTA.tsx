import Link from "next/link";
import { FiArrowRight, FiPhoneCall, FiMessageSquare } from "react-icons/fi";

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
  secondaryButtonHref = "https://wa.me/919876543210?text=Hi%20Reet%20Foods%2C%20I%20would%20like%20to%20inquire%20about%20custom%20gifting",
}: CTAProps) {
  return (
    <section className="my-12 overflow-hidden rounded-2xl border border-reef-gold/30 bg-gradient-to-r from-reef-charcoal via-[#1a1412] to-reef-charcoal p-8 text-white shadow-xl sm:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-reef-gold/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-reef-gold">
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
            className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-7 py-3.5 text-sm font-semibold text-reef-charcoal shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-reef-burgundy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-reef-gold/40"
          >
            <FiPhoneCall className="h-4 w-4" />
            <span>{primaryButtonText}</span>
            <FiArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={secondaryButtonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-reef-gold/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-reef-gold hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-reef-gold/30"
          >
            <FiMessageSquare className="h-4 w-4 text-reef-gold" />
            <span>{secondaryButtonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
