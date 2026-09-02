import Link from "next/link";
import { FiMessageSquare } from "react-icons/fi";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

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
  primaryButtonText = "Request Quote on WhatsApp",
  primaryButtonHref = generateWhatsAppUrl({
    type: "generic",
    data: {
      requirement: "I would like to inquire about custom gifting.",
      source: "reusable_cta",
    },
  }),
  secondaryButtonText = "Contact on WhatsApp",
  secondaryButtonHref = generateWhatsAppUrl({
    type: "generic",
    data: {
      requirement: "I would like to talk to Reet Foods about gifting options.",
      source: "reusable_cta_secondary",
    },
  }),
}: CTAProps) {
  const primaryIsExternal = primaryButtonHref.startsWith("http");

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
            target={primaryIsExternal ? "_blank" : undefined}
            rel={primaryIsExternal ? "noreferrer" : undefined}
            className="inline-flex min-h-12 min-w-[220px] items-center justify-center rounded-full bg-reef-gold px-8 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-[#1c1c1c] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-reef-charcoal hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            {primaryButtonText || "Request a Custom Quote"}
          </Link>

          <a
            href={secondaryButtonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-reef-gold/60 bg-[#2b2520] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-reef-gold hover:bg-reef-gold hover:text-[#1c1c1c] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <FiMessageSquare className="h-4 w-4 text-[#d4af37] transition-colors duration-200 group-hover/cta:text-[#1c1c1c]" />
            <span>{secondaryButtonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
