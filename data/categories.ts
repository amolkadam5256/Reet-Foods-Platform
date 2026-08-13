import type { StaticImageData } from "next/image";
import { reetFoodImages } from "../assets/reetFoodImages";

const [driedFruitsCounter, sweetiesDesk, topViewDriedFruits, woodenBoxNuts] = reetFoodImages;

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
    copy: "Premium dry fruits selected for retail, festive and corporate gifting.",
    tag: "Quality Dry Fruits",
    href: "/products/categories/dry-fruits",
    img: woodenBoxNuts,
    cta: "Explore Collection",
  },
  {
    title: "Dry Fruit Gift Boxes",
    copy: "Gift-ready dry fruit boxes customised to your quantity, occasion and budget.",
    tag: "Gift Ready",
    href: "/products/categories/dry-fruit-box",
    img: topViewDriedFruits,
    cta: "Explore Collection",
  },
  {
    title: "Festive Hampers",
    copy: "Custom gift hampers for Diwali, client gifts, employee kits and celebrations.",
    tag: "Festive Gifting",
    href: "/products/categories/hampers",
    img: sweetiesDesk,
    cta: "Explore Collection",
  },
  {
    title: "Custom Corporate Gifts",
    copy: "Corporate gift solutions with logo branding, custom message cards and flexible packaging.",
    tag: "Corporate Gifting",
    href: "/corporate-gifting",
    img: driedFruitsCounter,
    cta: "Explore Collection",
  },
];
