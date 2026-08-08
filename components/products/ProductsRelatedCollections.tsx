import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Images } from "@/assets/images";

interface ProductsRelatedCollectionsProps {
  animVisible: boolean;
}

const relatedCollections = [
  {
    title: "Corporate Gifting Solutions",
    desc: "Tailored bulk gifting programmes for teams, clients, and corporate events with custom branding.",
    href: "/corporate-gifting",
    badge: "Corporate",
    image: Images.topViewDeskNuts,
  },
  {
    title: "Festive Celebration Hampers",
    desc: "Curated red and gold hampers with cards, ribbons and custom brand storytelling for every occasion.",
    href: "/products/categories/hampers",
    badge: "Festive",
    image: Images.topViewDiffNuts,
  },
  {
    title: "Gifting Guides & Inspiration",
    desc: "Expert tips on selecting the perfect gift for weddings, corporate events, and festivals.",
    href: "/blog",
    badge: "Blog",
    image: Images.driedFruitsCounter,
  },
];

export function ProductsRelatedCollections({
  animVisible,
}: ProductsRelatedCollectionsProps) {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-label="Related collections"
    >
      <div className="mb-10 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
          Explore More
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
          Related Collections
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
          Discover complementary gifting solutions and inspiration for your
          next event.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {relatedCollections.map((item, idx) => (
          <Link
            key={item.title}
            href={item.href}
            className={`group block border border-reef-gold/20 bg-white transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_16px_48px_rgba(18,12,8,0.12)] ${animVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            <div className="relative h-52 overflow-hidden bg-[#f8f5f0]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute left-3 top-3 bg-[#7a0019] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                {item.badge}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal transition-colors duration-200 group-hover:text-[#7a0019]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-reef-charcoal/70">
                {item.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a0019] transition-colors duration-200 group-hover:text-[#d4af37]">
                Explore <FiArrowRight className="text-xs" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
