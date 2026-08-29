import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { FiArrowRight, FiMapPin, FiPhone } from "react-icons/fi";

type SiteShellProps = {
  title: string;
  eyebrow?: string;
  description: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  sidePanelTitle?: string;
  sidePanelBody?: string;
  sideLinks?: Array<{ label: string; href: string }>;
  image?: StaticImageData;
  imageAlt?: string;
  flat?: boolean;
  children: ReactNode;
};

export function SiteShell({
  title,
  eyebrow,
  description,
  breadcrumbs,
  sidePanelTitle = "Need help choosing?",
  sidePanelBody = "Reach out for gifting guidance, custom packaging, and bulk order support.",
  sideLinks = [],
  image,
  imageAlt = "Reet Foods premium gifting collection",
  children,
}: SiteShellProps) {
  return (
    <div className="relative bg-[#fbf7f1]">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(212,175,55,0.12),rgba(255,255,255,0))]" />
      <div className="relative mx-auto max-w-[1440px] px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="grid items-start gap-6 xl:grid-cols-[1.2fr_0.38fr]">
          <section className="border border-reef-gold/20 bg-white/90 p-6 shadow-sm sm:p-8">
            {breadcrumbs?.length ? (
              <nav
                aria-label="Breadcrumb"
                className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-reef-charcoal/50"
              >
                {breadcrumbs.map((item, index) => (
                  <span key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {item.href ? (
                      <Link href={item.href} className="hover:text-reef-burgundy">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-reef-burgundy">{item.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 ? <span>/</span> : null}
                  </span>
                ))}
              </nav>
            ) : null}
            {eyebrow ? (
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-reef-burgundy">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-4xl font-[family-name:var(--font-playfair)] text-4xl leading-tight text-reef-charcoal sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-reef-charcoal/75 sm:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-reef-gold px-5 py-3 text-sm font-semibold text-reef-charcoal transition hover:bg-reef-burgundy hover:text-white"
              >
                Request a quote
                <FiArrowRight />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-reef-gold/30 bg-white px-5 py-3 text-sm font-semibold text-reef-charcoal transition hover:border-reef-gold hover:text-reef-burgundy"
              >
                Browse collections
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border border-reef-gold/15 bg-reef-cream px-4 py-4">
                <p className="text-2xl font-semibold text-reef-charcoal">24h</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-reef-charcoal/55">
                  Enquiry response
                </p>
              </div>
              <div className="border border-reef-gold/15 bg-reef-cream px-4 py-4">
                <p className="text-2xl font-semibold text-reef-charcoal">Bulk</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-reef-charcoal/55">
                  Custom orders
                </p>
              </div>
              <div className="border border-reef-gold/15 bg-reef-cream px-4 py-4">
                <p className="text-2xl font-semibold text-reef-charcoal">Pan-India</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-reef-charcoal/55">
                  Shipping support
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-reef-gold/15 pt-6 text-sm text-reef-charcoal/75">
              <a href="tel:+919890609611" className="inline-flex items-center gap-2 border border-reef-gold/20 bg-reef-cream px-3 py-2 transition hover:text-reef-burgundy">
                <FiPhone className="text-reef-burgundy" />
                +91 9890609611 / +91 8007518088
              </a>
              <span className="inline-flex items-center gap-2 border border-reef-gold/20 bg-reef-cream px-3 py-2">
                <FiMapPin className="text-reef-burgundy" />
                Shop F14, Streets of Europe Mall, Hinjewadi Phase I, Pune
              </span>
            </div>
          </section>

          <aside className="space-y-4">
            {image ? (
              <div className="relative h-56 overflow-hidden border border-reef-gold/20 shadow-sm">
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 1280px) 100vw, 28vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            ) : null}
            <div className="border border-reef-gold/20 bg-[#111111] p-6 text-white shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-reef-gold">
                {sidePanelTitle}
              </p>
              <p className="mt-4 text-sm leading-6 text-white/78">{sidePanelBody}</p>
              <div className="mt-6 space-y-3">
                {sideLinks.length ? (
                  sideLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-reef-gold/40 hover:bg-white/10"
                    >
                      <span>{link.label}</span>
                      <FiArrowRight />
                    </Link>
                  ))
                ) : (
                  <div className="border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/78">
                    We can tailor the packaging, assortment, and delivery plan to the order size.
                  </div>
                )}
              </div>
            </div>

          </aside>
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
