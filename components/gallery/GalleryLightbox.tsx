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
  const imgSrc = typeof activePhoto.src === "string" ? activePhoto.src : activePhoto.src.src;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${activePhoto.alt}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      {/* Top Navigation Bar with Prominent Close Button */}
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/50 to-transparent px-4 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            {activePhoto.type ?? "Reet Foods Collection"}
          </span>
          <span className="text-xs font-medium text-white/70 hidden sm:inline">
            Image {activeIndex + 1} of {totalPhotos}
          </span>
        </div>

        <button
          type="button"
          onClick={close}
          className="flex items-center gap-2 rounded-full bg-[#7a0019] px-4 py-2 text-xs font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#d4af37] hover:text-reef-charcoal focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close image lightbox"
        >
          <span className="font-semibold uppercase tracking-wider">Close</span>
          <FiX className="h-4 w-4" />
        </button>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={showPrevious}
        className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-xs transition hover:bg-[#d4af37] hover:text-reef-charcoal sm:left-6"
        aria-label="Previous image"
      >
        <FiChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
      </button>

      {/* Main Content Area */}
      <figure className="relative z-20 flex h-full w-full max-w-6xl flex-col items-center justify-center pt-16 pb-6">
        <div className="relative h-[66vh] w-full sm:h-[72vh]">
          <Image
            src={activePhoto.src}
            alt={activePhoto.alt}
            fill
            sizes="100vw"
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Bottom Caption & Action Bar */}
        <figcaption className="mt-4 flex w-full max-w-4xl flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-white">
          <div>
            <p className="text-sm font-bold sm:text-base text-white">
              {activePhoto.title ?? activePhoto.alt}{" "}
              <span className="ml-2 text-xs text-[#d4af37] font-mono">
                {activeIndex + 1} / {totalPhotos}
              </span>
            </p>
            {activePhoto.description ? (
              <p className="mt-1 max-w-xl text-xs leading-5 text-white/70 line-clamp-2">
                {activePhoto.description}
              </p>
            ) : null}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => toggleLike(activeIndex)}
              className={`flex select-none items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                liked.has(activeIndex)
                  ? "border-[#7a0019] bg-[#7a0019] text-white"
                  : "border-white/30 text-white hover:bg-[#7a0019]"
              }`}
            >
              <FiHeart
                className={liked.has(activeIndex) ? "fill-current text-white" : ""}
              />{" "}
              Like
            </button>
            <a
              href={imgSrc}
              download
              className="flex items-center gap-2 rounded-full bg-[#d4af37] px-4 py-2 text-xs font-bold text-reef-charcoal transition hover:bg-white"
            >
              <FiDownload /> Download
            </a>
            <button
              type="button"
              onClick={close}
              className="flex items-center gap-1.5 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-reef-charcoal"
            >
              <FiX className="h-4 w-4" /> Close
            </button>
          </div>
        </figcaption>
      </figure>

      {/* Next Button */}
      <button
        type="button"
        onClick={showNext}
        className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-xs transition hover:bg-[#d4af37] hover:text-reef-charcoal sm:right-6"
        aria-label="Next image"
      >
        <FiChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
      </button>
    </div>
  );
}
