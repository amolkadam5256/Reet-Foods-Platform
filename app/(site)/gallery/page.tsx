import { GalleryClient } from "./GalleryClient";
import { videos } from "@/data/gallery";

export const metadata = {
  title: "Gallery | Reet Foods Pune",
  description: "Browse Reet Foods photo and video gallery featuring premium dry fruits, chocolate boxes, juices and luxury hampers.",
};

export default function GalleryPage() {
  return <GalleryClient videos={videos} />;
}
