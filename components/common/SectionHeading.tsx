import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-reef-charcoal sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-reef-charcoal/75 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
