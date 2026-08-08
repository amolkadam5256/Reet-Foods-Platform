import Image from "next/image";
import Link from "next/link";
import { Images } from "@/assets/images";

export function AboutBrandStory() {
  return (
    <section className="grid gap-8 rounded-2xl border border-reef-gold/15 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">
          Our Journey
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
          Good gifts should feel personal, not complicated.
        </h2>
        <div className="mt-4 space-y-4 text-xs leading-relaxed text-reef-charcoal/80 sm:text-sm">
          <p>
            Reet Foods &amp; Gifting was created for people and organizations who
            want to give well — without spending weeks managing suppliers, quality
            assurance, packaging, and delivery tracking.
          </p>
          <p>
            From our Pune base in Hinjewadi Phase I, we curate gift-ready
            assortments for corporate teams, VIP client relationships, weddings,
            festivals, and family celebrations across India.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3 text-xs font-semibold text-reef-charcoal transition hover:bg-reef-burgundy hover:text-white"
          >
            Discover Our Range
          </Link>
        </div>
      </div>

      <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-reef-cream shadow-md sm:min-h-[360px]">
        <Image
          src={Images.nutsSetTable}
          alt="Reet Foods Production & Packaging"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
