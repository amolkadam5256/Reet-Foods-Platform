import type { StaticImageData } from "next/image";
import { reetFoodImages } from "../assets/reetFoodImages";
import { galleryImages, storeFrontImg, mallLocationImg } from "../assets/images";
import { productCategories } from "./products";

const [driedFruitsCounter, sweetiesDesk, nutsSetTable, topViewDriedFruits, topViewPistachios, woodenBoxNuts] = reetFoodImages;

export const shopPhotos = [
  {
    src: storeFrontImg,
    alt: "Reet Foods local shop storefront in Streets of Europe Mall Hinjewadi Pune",
    title: "Reet Foods Retail Shop - Hinjewadi, Pune",
    type: "Local Shop in Pune",
    description: "Our physical retail store and corporate gifting showroom at Shop F-14, Ground Floor, Streets of Europe Mall, Hinjewadi Phase 1, Pune.",
  },
  {
    src: mallLocationImg,
    alt: "Streets of Europe Mall, Hinjewadi Phase 1 - Reet Foods Pune Location",
    title: "Streets of Europe Mall - Shop F-14 Landmark",
    type: "Local Shop in Pune",
    description: "Streets of Europe Mall, Ground Floor Shop No F-14, Maan Road near Infosys Circle, Hinjewadi Phase 1, Pune.",
  },
];

export const featuredPhotos = [
  ...shopPhotos,
  {
    src: woodenBoxNuts,
    alt: "Assorted nuts and dry fruits luxury platter",
    title: "Assorted nuts and dry fruits luxury platter",
    type: "Reet Foods collection",
    description: "Premium gifting photography from Reet Foods & Gifting.",
  },
  {
    src: topViewDriedFruits,
    alt: "Chocolate gift box with pralines",
    title: "Chocolate gift box with pralines",
    type: "Reet Foods collection",
    description: "Premium gifting photography from Reet Foods & Gifting.",
  },
  {
    src: sweetiesDesk,
    alt: "Curated red and gold gift hamper",
    title: "Curated red and gold gift hamper",
    type: "Reet Foods collection",
    description: "Premium gifting photography from Reet Foods & Gifting.",
  },
  {
    src: driedFruitsCounter,
    alt: "Cold-pressed juice bottles",
    title: "Cold-pressed juice bottles",
    type: "Reet Foods collection",
    description: "Premium gifting photography from Reet Foods & Gifting.",
  },
  {
    src: topViewPistachios,
    alt: "Gourmet chocolates close-up",
    title: "Gourmet chocolates close-up",
    type: "Reet Foods collection",
    description: "Premium gifting photography from Reet Foods & Gifting.",
  },
  {
    src: nutsSetTable,
    alt: "Assorted nuts in premium bowls",
    title: "Assorted nuts in premium bowls",
    type: "Reet Foods collection",
    description: "Premium gifting photography from Reet Foods & Gifting.",
  },
];

const productPhotos = productCategories.flatMap((category) =>
  category.items.filter((item) => item.image).map((item) => ({
    src: item.image!,
    alt: item.name,
    title: item.name,
    type: category.name,
    description: item.detail,
  })),
);

export const photos = [
  ...featuredPhotos,
  ...productPhotos,
  ...galleryImages.map((src: StaticImageData | { default: StaticImageData } | string, index: number) => ({
    src: (typeof src === "object" && src && "default" in src ? src.default : src) as StaticImageData,
    alt: `Reet Foods premium gifting collection photo ${index + 1}`,
    title: `Reet Foods Collection ${index + 1}`,
    type: "Gifting inspiration",
    description: "Premium food, gifting and packaging inspiration from Reet Foods.",
  })),
];

export const videos = [
  {
    title: "Reet Foods Luxury Corporate Hamper Showcase",
    link: "https://www.youtube.com/embed/qq9QHUmzlIw",
    watchUrl: "https://youtube.com/shorts/qq9QHUmzlIw?feature=share",
    id: "qq9QHUmzlIw",
    isShort: true,
  },
  {
    title: "Corporate Diwali Hamper Walkthrough",
    link: "https://www.youtube.com/embed/qq9QHUmzlIw",
    watchUrl: "https://youtube.com/shorts/qq9QHUmzlIw?feature=share",
    id: "qq9QHUmzlIw",
    isShort: true,
  },
  {
    title: "Artisanal Dry Fruits & Chocolate Packaging Line",
    link: "https://www.youtube.com/embed/qq9QHUmzlIw",
    watchUrl: "https://youtube.com/shorts/qq9QHUmzlIw?feature=share",
    id: "qq9QHUmzlIw",
    isShort: true,
  },
];
