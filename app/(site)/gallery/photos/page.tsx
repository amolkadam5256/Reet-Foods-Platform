"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart, FiX } from "react-icons/fi";
import { productCategories } from "@/data/products";
import { reetFoodImages } from "@/assets/reetFoodImages";
import { galleryImages } from "@/assets/images";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";

const [driedFruitsCounter, sweetiesDesk, nutsSetTable, topViewDriedFruits, topViewPistachios, woodenBoxNuts] = reetFoodImages;

type GalleryPhoto = { src: StaticImageData; alt: string; title?: string; type?: string; description?: string };

const featuredPhotos: GalleryPhoto[] = [
  { src: woodenBoxNuts, alt: "Assorted nuts and dry fruits luxury platter", title: "Assorted nuts and dry fruits luxury platter", type: "Reet Foods collection", description: "Premium gifting photography from Reet Foods & Gifting." },
  { src: topViewDriedFruits, alt: "Chocolate gift box with pralines", title: "Chocolate gift box with pralines", type: "Reet Foods collection", description: "Premium gifting photography from Reet Foods & Gifting." },
  { src: sweetiesDesk, alt: "Curated red and gold gift hamper", title: "Curated red and gold gift hamper", type: "Reet Foods collection", description: "Premium gifting photography from Reet Foods & Gifting." },
  { src: driedFruitsCounter, alt: "Cold-pressed juice bottles", title: "Cold-pressed juice bottles", type: "Reet Foods collection", description: "Premium gifting photography from Reet Foods & Gifting." },
  { src: topViewPistachios, alt: "Gourmet chocolates close-up", title: "Gourmet chocolates close-up", type: "Reet Foods collection", description: "Premium gifting photography from Reet Foods & Gifting." },
  { src: nutsSetTable, alt: "Assorted nuts in premium bowls", title: "Assorted nuts in premium bowls", type: "Reet Foods collection", description: "Premium gifting photography from Reet Foods & Gifting." },
];

const productPhotos: GalleryPhoto[] = productCategories.flatMap((category) =>
  category.items.filter((item) => item.image).map((item) => ({
    src: item.image!,
    alt: item.name,
    title: item.name,
    type: category.name,
    description: item.detail,
  })),
);

const photos: GalleryPhoto[] = [
  ...productPhotos,
  ...featuredPhotos,
  ...galleryImages.map((src: StaticImageData | { default: StaticImageData } | string, index: number) => ({
    src: (typeof src === "object" && src && "default" in src ? src.default : src) as StaticImageData,
    alt: `Reet Foods premium gifting collection photo ${index + 1}`,
    title: `Reet Foods Collection ${index + 1}`,
    type: "Gifting inspiration",
    description: "Premium food, gifting and packaging inspiration from Reet Foods.",
  })),
];

export default function PhotoGalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  const close = () => setActiveIndex(null);
  const showPrevious = () => setActiveIndex((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
  const showNext = () => setActiveIndex((index) => index === null ? null : (index + 1) % photos.length);

  const toggleLike = (index: number) => setLiked((current) => {
    const next = new Set(current);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    return next;
  });

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 space-y-8 bg-[#fbf7f1] min-h-screen">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-reef-burgundy">Visual Collection</p>
        <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl text-reef-charcoal sm:text-5xl">Photo Gallery</h1>
      </div>
      
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            key={`${photo.alt}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-md border border-reef-gold/15 bg-white transition duration-300 hover:border-reef-burgundy hover:shadow-[0_12px_40px_rgba(18,12,8,0.08)] text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-reef-gold/40"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-reef-gold">{photo.type ?? "Collection"}</p>
                <p className="mt-1 text-xs font-medium text-white line-clamp-1">{photo.title ?? photo.alt}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activePhoto && activeIndex !== null ? (
        <GalleryLightbox
          activePhoto={activePhoto}
          activeIndex={activeIndex}
          totalPhotos={photos.length}
          liked={liked}
          close={close}
          showPrevious={showPrevious}
          showNext={showNext}
          toggleLike={toggleLike}
        />
      ) : null}
    </div>
  );
}
