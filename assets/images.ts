import type { StaticImageData } from "next/image";
import { reetFoodImages } from "./reetFoodImages";

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
};
export { reetFoodImages };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const galleryImages = reetFoodImages as any[];
