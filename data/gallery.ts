import type { StaticImageData } from "next/image";
import { reetFoodImages } from "../assets/reetFoodImages";
import { galleryImages } from "../assets/images";
import { productCategories } from "./products";

const [driedFruitsCounter, sweetiesDesk, nutsSetTable, topViewDriedFruits, topViewPistachios, woodenBoxNuts] = reetFoodImages;

const featuredPhotos = [
  {
    src: woodenBoxNuts,
    alt: "Assorted nuts and dry fruits luxury platter",
  },
  {
    src: topViewDriedFruits,
    alt: "Chocolate gift box with pralines",
  },
  {
    src: sweetiesDesk,
    alt: "Curated red and gold gift hamper",
  },
  {
    src: driedFruitsCounter,
    alt: "Cold-pressed juice bottles",
  },
  {
    src: topViewPistachios,
    alt: "Gourmet chocolates close-up",
  },
  {
    src: nutsSetTable,
    alt: "Assorted nuts in premium bowls",
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
  ...productPhotos,
  ...featuredPhotos.map((photo) => ({
    ...photo,
    title: photo.alt,
    type: "Reet Foods collection",
    description: "Premium gifting photography from Reet Foods & Gifting.",
  })),
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
