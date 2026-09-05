import type { StaticImageData } from "next/image";
import { reetFoodImages } from "./reetFoodImages";
import storeFrontImg from "./shop/reet-foods-storefront-pune.png";
import mallLocationImg from "./shop/streets-of-europe-hinjewadi.png";

const [
  closeUpNuts,
  driedFruitsCounter,
  sweetiesDesk,
  nutsSetTable,
  topViewDeskNuts,
  topViewDiffNuts,
  topViewDriedFruits,
  topViewPistachios,
  woodenBoxNuts,
] = reetFoodImages;

export const Images: Record<string, StaticImageData> = {
  closeUpNuts,
  driedFruitsCounter,
  sweetiesDesk,
  nutsSetTable,
  topViewDeskNuts,
  topViewDiffNuts,
  topViewDriedFruits,
  topViewPistachios,
  woodenBoxNuts,
  storeFront: storeFrontImg,
  mallLocation: mallLocationImg,
};
export { reetFoodImages, storeFrontImg, mallLocationImg };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const galleryImages = reetFoodImages as any[];

