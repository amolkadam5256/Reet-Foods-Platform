import Image, { type StaticImageData } from "next/image";

type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
  title?: string;
  type?: string;
  description?: string;
};

export function GalleryPhotoGrid({
  visiblePhotos,
  filteredPhotosCount,
  filters,
  activeFilter,
  setActiveFilter,
  setActiveIndex,
  visibleCount,
  setVisibleCount,
}: {
  visiblePhotos: GalleryPhoto[];
  filteredPhotosCount: number;
  filters: string[];
  activeFilter: string;
  setActiveFilter: (f: string) => void;
  setActiveIndex: (i: number | null) => void;
  visibleCount: number;
  setVisibleCount: (fn: (prev: number) => number) => void;
}) {
  return (
    <section className="mt-10">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">
            Photo collection
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal">
            A closer look at Reet Foods
          </h2>
        </div>
        <p className="text-sm text-reef-charcoal/55">
          Showing {visiblePhotos.length} of {filteredPhotosCount} photos
        </p>
      </div>

      <div
        className="mb-8 flex flex-wrap gap-2"
        aria-label="Filter gallery photos"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => {
              setActiveFilter(filter);
              setActiveIndex(null);
              setVisibleCount(() => 15);
            }}
            aria-pressed={activeFilter === filter}
            className={`rounded-full border px-5 py-2 text-xs font-semibold transition duration-200 ${
              activeFilter === filter
                ? "border-reef-burgundy bg-reef-burgundy text-white shadow-sm"
                : "border-reef-gold/20 bg-white text-reef-charcoal hover:border-reef-burgundy hover:text-reef-burgundy hover:bg-reef-burgundy/5"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {visiblePhotos.map((photo, index) => (
          <button
            key={`${photo.alt}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-md bg-reef-cream text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-reef-gold/40"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[#1c1c1c]/0 transition duration-350 group-hover:bg-[#1c1c1c]/40" />
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 via-black/45 to-transparent p-4 pt-10 text-white transition duration-300 group-hover:translate-y-0">
              <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-reef-gold">
                {photo.type ?? "Collection"}
              </span>
              <span className="mt-1 block text-xs font-medium line-clamp-1">
                {photo.title ?? photo.alt}
              </span>
            </span>
          </button>
        ))}
      </div>

      {visibleCount < filteredPhotosCount && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 15)}
            className="inline-flex items-center gap-2 border-2 border-reef-gold/30 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-reef-charcoal transition duration-250 hover:border-reef-burgundy hover:bg-reef-burgundy hover:text-white shadow-sm rounded-full"
          >
            See More Photos
          </button>
        </div>
      )}
    </section>
  );
}
