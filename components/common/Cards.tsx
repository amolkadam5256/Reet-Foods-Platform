import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Badge } from "./Badge";

export interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price?: string | number;
  image: string | StaticImageData;
  slug: string;
  description?: string;
  badge?: string;
  moq?: string;
  highlights?: string[];
}

export function ProductCard({
  name,
  category,
  price,
  image,
  slug,
  description,
  badge,
  moq,
}: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-reef-gold/25 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-reef-cream">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute left-3 top-3">
            <Badge variant="gold">{badge}</Badge>
          </div>
        )}
        {moq && (
          <div className="absolute right-3 top-3 rounded-full bg-reef-charcoal/80 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            MOQ: {moq}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-reef-burgundy">
          {category}
        </span>

        <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal group-hover:text-reef-burgundy">
          <Link href={`/products/${slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold">
            {name}
          </Link>
        </h3>

        {description && (
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-reef-charcoal/70">
            {description}
          </p>
        )}

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between border-t border-reef-gold/15 pt-3">
            <>{/* Price removed per request */}</>

            <Link
              href={`/products/${slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-reef-burgundy transition-colors hover:text-reef-charcoal"
            >
              <span>Details</span>
              <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export function FeatureCard({ icon, title, description, badge }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-reef-gold/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {badge && (
        <div className="mb-3">
          <Badge variant="gold">{badge}</Badge>
        </div>
      )}
      {icon && <div className="mb-4 inline-flex rounded-lg bg-reef-cream p-3 text-reef-burgundy">{icon}</div>}
      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/75">{description}</p>
    </div>
  );
}
