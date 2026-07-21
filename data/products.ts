import type { StaticImageData } from "next/image";
import { Images } from "../assets/images";

export type ProductItem = { name: string; detail: string; badge?: string; image?: StaticImageData };
export type ProductCategory = {
  slug: string;
  name: string;
  intro: string;
  image: StaticImageData;
  highlights: string[];
  items: ProductItem[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "dry-fruits",
    name: "Dry Fruits & Nuts",
    intro:
      "Premium origin almonds, pistachios, cashews, figs and raisins curated for gifting and daily nourishment.",
    image: Images.closeUpNuts,
    highlights: [
      "Iranian & Afghan sourcing",
      "Nitrogen-packed freshness",
      "Festive-ready tins",
    ],
    items: [
      { name: "Filled Dry Fruit Gift Box", detail: "Luxurious assorted dry fruits in a premium gifting box.", badge: "Best Seller", image: Images.topViewDeskNuts },
      { name: "Dry Fruit Gift Box", detail: "Classic assortment of roasted almonds, pistachios and cashews.", image: Images.topViewDiffNuts },
      { name: "Metal Dry Fruit Box", detail: "Decorative metallic box, perfect for festive corporate gifting.", image: Images.topViewPistachios },
      { name: "Dry Fruit Box", detail: "Standard high-quality rigid box with distinct partitions.", image: Images.woodenBoxNuts },
      { name: "Premium Dry Fruits", detail: "Loose packaging for everyday consumption and health.", image: Images.nutsSetTable },
    ],
  },
  {
    slug: "chocolate-gift-box",
    name: "Chocolate Gift Boxes",
    intro:
      "Hand-poured Belgian chocolates and pralines in luxurious packaging with custom branding.",
    image: Images.sweetiesDesk,
    highlights: ["Temperature-controlled packing", "Custom logo foil", "Vegan options"],
    items: [
      { name: "Corporate Chocolate Gift Box", detail: "Customizable box with your company's logo printed on wrapper.", badge: "Corporate", image: Images.driedFruitsCounter },
      { name: "Chocolate Gift Box", detail: "Assorted pralines and truffles in an elegant magnetic box.", image: Images.topViewDriedFruits },
      { name: "Premium Chocolate Box", detail: "A curated 12-piece selection of artisanal dark and milk chocolates.", image: Images.sweetiesDesk },
      { name: "Artisanal Chocolates", detail: "Loose or small-batch bespoke chocolates.", image: Images.closeUpNuts },
    ],
  },
  {
    slug: "chocolates",
    name: "Chocolates & Sweets",
    intro:
      "Rich confectionery, truffles and gourmet sweets crafted for premium gifting and corporate hampers.",
    image: Images.sweetiesDesk,
    highlights: ["Temperature-controlled packing", "Custom logo foil", "Vegan options"],
    items: [
      { name: "Assorted Truffle Box", detail: "Classic dark, milk and white truffles in a magnetic gift box.", image: Images.topViewDriedFruits },
      { name: "Belgian Pralines", detail: "Hand-selected praline assortment with nut centres.", image: Images.closeUpNuts },
      { name: "Gourmet Sweets Hamper", detail: "Curated sweets selection for festive and wedding gifting.", image: Images.driedFruitsCounter },
    ],
  },
  {
    slug: "juice",
    name: "Cold-Pressed Juices",
    intro:
      "Fresh, no-concentrate juices in elegant glass bottles. Perfect for welcome hampers and events.",
    image: Images.topViewDriedFruits,
    highlights: ["No refined sugar", "Fresh daily batches", "Returnable glass bottles"],
    items: [
      { name: "Classic Juices", detail: "Valencia Orange, Pomegranate Ruby", image: Images.topViewDiffNuts },
      { name: "Premium Juice Hampers", detail: "Pack of 6 assorted wellness juices.", image: Images.nutsSetTable },
      { name: "Almond Saffron Milk", detail: "With Kashmiri saffron & dates", image: Images.topViewPistachios },
    ],
  },
  {
    slug: "dry-fruit-box",
    name: "Celebration Hampers",
    intro:
      "Curated red and gold hampers with cards, ribbons and custom brand storytelling for every occasion.",
    image: Images.woodenBoxNuts,
    highlights: ["Concierge delivery", "Handwritten cards", "Tiered pricing for volume"],
    items: [
      { name: "Grande Corporate", detail: "Dry fruit quartet, praline box, floral card", image: Images.nutsSetTable },
      { name: "Festive Duo", detail: "Almond tin + pistachio tin with ribbon", image: Images.woodenBoxNuts },
      { name: "Wedding Signature", detail: "Chocolate bark, nuts, artisanal tea, note", image: Images.topViewPistachios },
    ],
  },
];
