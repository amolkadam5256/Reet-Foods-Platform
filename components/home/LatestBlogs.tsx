"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { blogPosts } from "@/data/home";

const categoryStyles: Record<string, string> = {
  "Corporate Gifting": "text-reef-burgundy bg-reef-burgundy/5 border-reef-burgundy/15",
  "Health & Wellness": "text-[#2d7a3a] bg-[#2d7a3a]/5 border-[#2d7a3a]/15",
  "Wedding Gifting": "text-reef-gold bg-reef-gold/5 border-reef-gold/15",
};

const readingTimes: Record<string, string> = {
  "Corporate Gifting": "5 min read",
  "Health & Wellness": "4 min read",
  "Wedding Gifting": "6 min read",
};

export function LatestBlogs() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="blog-heading"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
            Insights & Stories
          </p>
          <h2
            id="blog-heading"
            className="mt-3 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
          >
            Insights & Inspiration
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
            Gifting guides, dry fruit health benefits, and the latest trends in
            luxury corporate gifting.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex shrink-0 items-center gap-2 border border-reef-gold/30 px-6 py-3 text-sm font-semibold text-reef-charcoal transition duration-200 hover:border-reef-gold hover:text-reef-burgundy"
        >
          Read All Articles <FiArrowRight />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.title}
            href={post.href}
            className="group overflow-hidden border border-reef-gold/15 bg-white transition duration-300 hover:border-reef-gold/40 hover:shadow-[0_12px_40px_rgba(18,12,8,0.08)]"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={post.img}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <span
                  className={`border px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-[0.15em] ${
                    categoryStyles[post.category] ?? "text-reef-burgundy bg-reef-burgundy/5 border-reef-burgundy/15"
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-[11px] text-reef-charcoal/45">{post.date}</span>
                <span className="ml-auto text-[10px] font-medium text-reef-charcoal/40">
                  {readingTimes[post.category] ?? "4 min read"}
                </span>
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-[18px] leading-[1.35] text-reef-charcoal group-hover:text-reef-burgundy transition-colors duration-200">
                {post.title}
              </h3>
              <p className="mt-3 text-[13px] leading-5 text-reef-charcoal/60 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-reef-burgundy transition-all duration-300 group-hover:gap-3 group-hover:text-reef-gold">
                <span>Read More</span>
                <FiArrowRight className="text-sm" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

