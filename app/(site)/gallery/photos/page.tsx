import Image from "next/image";
import { photos } from "../../../../data/gallery";

export default function PhotoGalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-6">
      <h1 className="text-3xl font-serif text-reef-burgundy">Photo Gallery</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.alt} className="card overflow-hidden h-48 relative">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
