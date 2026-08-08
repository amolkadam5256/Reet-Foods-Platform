import Image, { type StaticImageData } from "next/image";
import { FiChevronLeft, FiChevronRight, FiDownload, FiHeart, FiX } from "react-icons/fi";

type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
  title?: string;
  type?: string;
  description?: string;
};

export function GalleryLightbox({
  activePhoto,
  activeIndex,
  totalPhotos,
  liked,
  close,
  showPrevious,
  showNext,
  toggleLike,
}: {
  activePhoto: GalleryPhoto;
  activeIndex: number;
  totalPhotos: number;
  liked: Set<number>;
  close: () => void;
  showPrevious: () => void;
  showNext: () => void;
  toggleLike: (idx: number) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${activePhoto.alt}`}
    >
      <button
        type="button"
        onClick={close}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-reef-burgundy hover:text-white"
        aria-label="Close full screen image"
      >
        <FiX className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={showPrevious}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-3 text-white transition hover:text-reef-gold sm:left-6"
        aria-label="Previous image"
      >
        <FiChevronLeft className="h-9 w-9" />
      </button>
      <figure className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center">
        <div className="relative h-[72vh] w-full">
          <Image
            src={activePhoto.src}
            alt={activePhoto.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="mt-4 flex w-full max-w-4xl flex-wrap items-end justify-between gap-3 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-reef-gold">
              {activePhoto.type ?? "Reet Foods collection"}
            </p>
            <p className="mt-1 text-sm font-medium sm:text-base">
              {activePhoto.title ?? activePhoto.alt}{" "}
              <span className="ml-2 text-white/50">
                {activeIndex + 1} / {totalPhotos}
              </span>
            </p>
            {activePhoto.description ? (
              <p className="mt-1.5 max-w-xl text-xs leading-5 text-white/65">
                {activePhoto.description}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleLike(activeIndex)}
              className={`flex select-none items-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                liked.has(activeIndex)
                  ? "border-reef-burgundy bg-reef-burgundy text-white"
                  : "border-white/25 text-white hover:bg-reef-burgundy/80"
              }`}
            >
              <FiHeart
                className={liked.has(activeIndex) ? "fill-current text-white" : ""}
              />{" "}
              Like
            </button>
            <a
              href={activePhoto.src.src}
              download
              className="flex items-center gap-2 rounded-md bg-reef-gold px-4 py-2 text-xs font-bold text-reef-charcoal transition hover:bg-white"
            >
              <FiDownload /> Download
            </a>
          </div>
        </figcaption>
      </figure>
      <button
        type="button"
        onClick={showNext}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-3 text-white transition hover:text-reef-gold sm:right-6"
        aria-label="Next image"
      >
        <FiChevronRight className="h-9 w-9" />
      </button>
    </div>
  );
}
