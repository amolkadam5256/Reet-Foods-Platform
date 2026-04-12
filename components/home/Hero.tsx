import Image from "next/image";
import Link from "next/link";
import { heroGallery } from "../../data/home";

export function Hero() {
  return (
    <section className="section pt-15 lg:pt-10">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="badge">
            Premium Dry Fruits, Chocolates & Luxury Gift Hampers
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-reef-burgundy leading-tight">
            Premium Dry Fruits & Luxury Gifting, Curated in Pune
          </h1>
          <p className="text-lg text-reef-charcoal/80">
            Reet Foods crafts luxurious gift boxes, gourmet dry fruits, and
            cold-pressed juices with meticulous sourcing and elegant presentation
            for corporate, festive, and wedding gifting.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 bg-reef-gold text-reef-charcoal px-5 py-3 rounded-full text-sm font-semibold shadow-lg shadow-reef-burgundy/15 hover:-translate-y-0.5 transition"
            >
              Get Best Quote →
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
              className="inline-flex items-center gap-2 border border-reef-gold/60 text-reef-burgundy px-5 py-3 rounded-full text-sm font-semibold hover:bg-reef-gold/10 transition"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="glass p-4 inline-flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-reef-burgundy/10 border border-reef-burgundy/30 flex items-center justify-center text-reef-burgundy font-semibold">
              24h
            </span>
            <p className="text-sm text-reef-charcoal/80">
              Quote turnaround within 24 hours for Pune & Maharashtra orders.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            {heroGallery.map((src, idx) => (
              <div
                key={src}
                className={`relative h-32 sm:h-40 rounded-2xl overflow-hidden ${
                  idx === 1 ? "translate-y-6" : ""
                }`}
              >
                <Image
                  src={src}
                  alt="Luxury gifting collage"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute -inset-6 bg-reef-gold/10 blur-3xl opacity-50 -z-10" />
        </div>
      </div>
    </section>
  );
}
