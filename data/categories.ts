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
};

export const categories: Category[] = [
  {
    title: "Dry Fruits",
    copy: "Iranian pistachios, almonds, cashews, figs, premium blends.",
    tag: "Festive best-seller",
    href: "/products/dry-fruits",
    img: woodenBoxNuts,
  },
  {
    title: "Chocolate Gift Boxes",
    copy: "Belgian chocolates, pralines and luxury handmade assortments.",
    tag: "Corporate favourite",
    href: "/products/chocolate-gift-box",
    img: topViewDriedFruits,
  },
  {
    title: "Cold-Pressed Juices",
    copy: "Fresh seasonal juices, no preservatives, wellness-focused.",
    tag: "Fresh & cold",
    href: "/products/juice",
    img: driedFruitsCounter,
  },
  {
    title: "Celebration Hampers",
    copy: "Custom wedding & corporate hampers with branding options.",
    tag: "Wedding & festive",
    href: "/products/dry-fruit-box",
    img: sweetiesDesk,
  },
];
