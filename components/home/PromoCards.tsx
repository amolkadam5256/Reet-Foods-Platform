import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { reetFoodImages } from "@/assets/reetFoodImages";

const [, sweetiesDesk, , topViewDriedFruits, , woodenBoxNuts] = reetFoodImages;

type PromoCard = {
  tagline: string;
  title: string;
  image: StaticImageData;
  href: string;
  cta: string;
};

const promotionalCards: PromoCard[] = [
  {
    tagline: "Hand-Selected Origin Nuts",
    title: "Premium Dry Fruits",
    image: woodenBoxNuts,
    href: "/products/premium-dry-fruits",
    cta: "Shop Dry Fruits",
  },
  {
    tagline: "Gift-Ready Dry Fruit Boxes",
    title: "Dry Fruit Gift Boxes",
    image: topViewDriedFruits,
    href: "/products/categories/dry-fruit-box",
    cta: "Explore Gift Boxes",
  },
  {
    tagline: "Seamless Bulk Gifting",
    title: "Corporate Hampers",
    image: sweetiesDesk,
    href: "/contact#quote",
    cta: "Plan Bulk Order",
  },
];

export function PromoCards() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8"
      aria-label="Featured gifting offers"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {promotionalCards.map((card, index) => (
          <Link
            key={card.title}
            href={card.href}
            aria-label={`Shop ${card.title}`}
            className="group relative h-[200px] overflow-hidden border border-reef-gold/20 bg-white sm:h-[220px]"
          >
            <div className="absolute inset-y-0 left-0 z-10 flex w-[56%] flex-col justify-center bg-white px-5 sm:px-8">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-reef-charcoal/50">
                {card.tagline}
              </p>
              <h2 className="mt-2.5 font-[family-name:var(--font-playfair)] text-2xl leading-[1.15] text-reef-charcoal sm:text-[26px]">
                {card.title}
              </h2>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-reef-burgundy transition-all duration-300 group-hover:gap-3 group-hover:text-reef-gold">
                <span>{card.cta}</span>
                <FiArrowRight className="text-sm" />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 w-[44%] overflow-hidden">
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={[
                  "object-cover object-center transition duration-700 ease-out group-hover:scale-105",
                  index === 1
                    ? "animate-[reef-image-drift_12s_ease-in-out_infinite_alternate]"
                    : "",
                ].join(" ")}
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-[56%] z-20 w-px bg-reef-gold/30 transition duration-500 group-hover:bg-reef-gold"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
