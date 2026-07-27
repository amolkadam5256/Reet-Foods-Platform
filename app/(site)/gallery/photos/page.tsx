import Image from "next/image";
import { photos } from "../../../../data/gallery";

function resolveImage(source: any) {
  return source && typeof source === "object" && "default" in source ? source.default : source;
}

export default function PhotoGalleryPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 space-y-8 bg-[#fbf7f1] min-h-screen">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-reef-burgundy">Visual Collection</p>
        <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl text-reef-charcoal sm:text-5xl">Photo Gallery</h1>
      </div>
      
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <div
            key={`${photo.alt}-${index}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-md border border-reef-gold/15 bg-white transition duration-300 hover:border-reef-gold/40 hover:shadow-[0_12px_40px_rgba(18,12,8,0.08)]"
          >
            <Image
              src={resolveImage(photo.src)}
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
          </div>
        ))}
      </div>
    </div>
  );
}

