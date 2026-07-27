import type { StaticImageData } from "next/image";
import driedFruitsCounter from "../assets/dried-fruits-nuts-counter.jpg";
import sweetiesDesk from "../assets/front-view-desk-with-sweeties-dried-fruits-marmalades-sweets-wooden-desk-sweet-confectionery-color-composition.jpg";
import topViewDriedFruits from "../assets/top-view-dried-fruits-different-nuts-dark-surface.jpg";
import woodenBoxNuts from "../assets/various-nuts-wooden-box.jpg";

export type Category = {
  title: string;
  copy: string;
  tag: string;
  href: string;
  img: StaticImageData;
  cta: string;
};

export const categories: Category[] = [
  {
    title: "Premium Dry Fruits",
    copy: "Nitrogen-packed premium origin nuts and figs for gifting and daily health.",
    tag: "Hand-Selected Quality",
    href: "/products/premium-dry-fruits",
    img: woodenBoxNuts,
    cta: "Explore Collection",
  },
  {
    title: "Artisanal Chocolates",
    copy: "Hand-poured truffles and luxury Belgian pralines in custom magnetic boxes.",
    tag: "Premium Confectionery",
    href: "/products/artisanal-chocolates",
    img: topViewDriedFruits,
    cta: "Explore Collection",
  },
  {
    title: "Celebration Hampers",
    copy: "Elegantly curated luxury gift hampers for weddings and festive celebrations.",
    tag: "Festive & Wedding",
    href: "/products/celebration-hampers",
    img: sweetiesDesk,
    cta: "Explore Collection",
  },
  {
    title: "Cold-Pressed Juices",
    copy: "Fresh seasonal wellness juices with no preservatives. Perfect for welcome hampers.",
    tag: "Fresh & Natural",
    href: "/products/cold-pressed-juices",
    img: driedFruitsCounter,
    cta: "Explore Collection",
  },
];
