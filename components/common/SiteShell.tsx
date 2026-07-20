import Link from "next/link";
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
  children,
}: SiteShellProps) {
  return (
    <div className="relative bg-[#fbf7f1]">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(212,175,55,0.12),rgba(255,255,255,0))]" />
      <div className="relative mx-auto max-w-[1440px] px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        {breadcrumbs?.length ? (
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-reef-charcoal/55">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.label} className="inline-flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-reef-burgundy">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 ? <span>/</span> : null}
              </span>
            ))}
          </div>
        ) : null}

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.38fr]">
          <section className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_rgba(29,22,17,0.07)] sm:p-8">
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
                className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                Request a quote
                <FiArrowRight />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-reef-gold/30 bg-white px-5 py-3 text-sm font-semibold text-reef-charcoal transition hover:border-reef-gold hover:text-reef-burgundy"
              >
                Browse collections
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-reef-gold/15 bg-reef-cream px-4 py-4">
                <p className="text-2xl font-semibold text-reef-charcoal">24h</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-reef-charcoal/55">
                  Enquiry response
                </p>
              </div>
              <div className="rounded-2xl border border-reef-gold/15 bg-reef-cream px-4 py-4">
                <p className="text-2xl font-semibold text-reef-charcoal">Bulk</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-reef-charcoal/55">
                  Custom orders
                </p>
              </div>
              <div className="rounded-2xl border border-reef-gold/15 bg-reef-cream px-4 py-4">
                <p className="text-2xl font-semibold text-reef-charcoal">Pan-India</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-reef-charcoal/55">
                  Shipping support
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-reef-gold/15 pt-6 text-sm text-reef-charcoal/75">
              <span className="inline-flex items-center gap-2 rounded-full bg-reef-cream px-3 py-2">
                <FiPhone className="text-reef-burgundy" />
                +91 99999 99999
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-reef-cream px-3 py-2">
                <FiMapPin className="text-reef-burgundy" />
                Pune, Maharashtra
              </span>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-[28px] border border-white/70 bg-[#111111] p-6 text-white shadow-[0_18px_60px_rgba(29,22,17,0.15)]">
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
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-reef-gold/40 hover:bg-white/10"
                    >
                      <span>{link.label}</span>
                      <FiArrowRight />
                    </Link>
                  ))
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/78">
                    We can tailor the packaging, assortment, and delivery plan to the order size.
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-[28px] border border-reef-gold/15 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-reef-burgundy">
                Quick links
              </p>
              <div className="mt-4 space-y-2">
                {sideLinks.length ? (
                  sideLinks.map((link) => (
                    <Link
                      key={`${link.href}-quick`}
                      href={link.href}
                      className="block rounded-2xl border border-reef-gold/10 px-4 py-3 text-sm text-reef-charcoal transition hover:border-reef-gold hover:text-reef-burgundy"
                    >
                      {link.label}
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-reef-charcoal/70">
                    Explore product collections and request a tailored quotation.
                  </p>
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
