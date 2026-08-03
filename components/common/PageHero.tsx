import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  image?: string | StaticImageData;
  imageAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sideBadge?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
  imageAlt = "Reet Foods & Gifting",
  primaryCta,
  secondaryCta,
  sideBadge,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-reef-gold/15 bg-gradient-to-br from-reef-cream/60 via-white to-reef-cream/30 p-6 shadow-sm sm:p-10 lg:p-12">
      {breadcrumbs && <Breadcrumb items={breadcrumbs} />}

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-reef-burgundy">
              {eyebrow}
            </p>
          )}

          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-reef-charcoal sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-reef-charcoal/80 sm:text-base sm:leading-7">
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3.5 text-sm font-semibold text-reef-charcoal shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-reef-burgundy hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-reef-gold/40"
                >
                  <span>{primaryCta.label}</span>
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-reef-gold/40 bg-white/80 px-6 py-3.5 text-sm font-medium text-reef-charcoal shadow-sm transition-all duration-300 hover:border-reef-burgundy hover:text-reef-burgundy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-reef-gold/30"
                >
                  <span>{secondaryCta.label}</span>
                </Link>
              )}
            </div>
          )}
        </div>

        {image && (
          <div className="relative min-h-[260px] overflow-hidden rounded-xl bg-reef-cream shadow-md sm:min-h-[320px] lg:min-h-[360px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {sideBadge && (
              <div className="absolute right-4 top-4 rounded-full border border-reef-gold/30 bg-reef-charcoal/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-reef-gold shadow-lg backdrop-blur-sm">
                {sideBadge}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
