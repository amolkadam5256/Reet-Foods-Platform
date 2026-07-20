import Image from "next/image";
import { photos } from "../../data/gallery";
import { Card, CardContent } from "../ui/card";

export function PhotoGallery() {
  return (
    <section className="section" id="gallery">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Photo Gallery</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {photos.map((photo) => (
          <Card key={photo.alt} className="overflow-hidden h-48 relative border-gray-200 group">
            <CardContent className="p-0 h-full w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
