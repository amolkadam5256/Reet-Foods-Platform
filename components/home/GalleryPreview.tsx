"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { galleryPreviewImages } from "@/data/home";

export function GalleryPreview() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="gallery-heading"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
            The Reet Experience
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
          >
            A Glimpse Into Our World
          </h2>
        </div>
        <Link
          href="/gallery"
          className="inline-flex shrink-0 items-center gap-2 border border-reef-gold/30 px-6 py-3 text-sm font-semibold text-reef-charcoal transition duration-200 hover:border-reef-gold hover:text-reef-burgundy"
        >
          View Full Gallery <FiArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {galleryPreviewImages.map((item, index) => (
          <Link
            key={item.alt}
            href="/gallery"
            aria-label={item.alt}
            className={[
              "group relative overflow-hidden bg-[#f0ede6]",
              // First image is 2×2 on larger grids
              index === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : "",
            ].join(" ")}
            style={{ aspectRatio: index === 0 ? "1 / 1" : "3 / 4" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={
                index === 0
                  ? "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  : "(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 13vw"
              }
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
              <p className="text-xs font-medium text-white tracking-wide leading-snug line-clamp-2">
                {item.alt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
