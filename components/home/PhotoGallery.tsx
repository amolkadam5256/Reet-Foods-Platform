import Image from "next/image";
import { photos } from "../../data/gallery";

export function PhotoGallery() {
  return (
    <section className="section" id="gallery">
      <div className="flex items-center gap-3 mb-6">
        <div className="accent-bar" />
        <h2 className="text-2xl font-serif text-reef-burgundy">Photo Gallery</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.alt} className="card overflow-hidden h-48 relative">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
