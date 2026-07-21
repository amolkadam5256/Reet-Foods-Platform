import Image from "next/image";
import driedFruitsCounter from "@/assets/dried-fruits-nuts-counter.jpg";
import sweetiesDesk from "@/assets/front-view-desk-with-sweeties-dried-fruits-marmalades-sweets-wooden-desk-sweet-confectionery-color-composition.jpg";
import nutsSetTable from "@/assets/nuts-set-table.jpg";
import topViewDriedFruits from "@/assets/top-view-dried-fruits-different-nuts-dark-surface.jpg";
import topViewPistachios from "@/assets/top-view-pistachios-with-hazelnuts-walnuts-wooden-stand-green-surface.jpg";
import woodenBoxNuts from "@/assets/various-nuts-wooden-box.jpg";

const photos = [
  {
    src: woodenBoxNuts,
    alt: "Dry fruits spread",
  },
  {
    src: topViewDriedFruits,
    alt: "Chocolate box",
  },
  {
    src: sweetiesDesk,
    alt: "Gift hamper",
  },
  {
    src: driedFruitsCounter,
    alt: "Juice bottles",
  },
  {
    src: topViewPistachios,
    alt: "Gourmet chocolates",
  },
  {
    src: nutsSetTable,
    alt: "Assorted nuts",
  },
];

const videos = [
  { title: "Corporate hamper unboxing", link: "/gallery/videos" },
  { title: "Chocolate tempering line", link: "/gallery/videos" },
  { title: "Juice bottling BTS", link: "/gallery/videos" },
];

export const metadata = {
  title: "Gallery | Reet Foods Pune",
  description:
    "Browse Reet Foods photo and video gallery featuring premium dry fruits, chocolate boxes, juices and luxury hampers.",
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      <div className="flex items-center gap-3">
        <div className="accent-bar" />
        <h1 className="text-3xl font-serif text-reef-charcoal">Gallery</h1>
      </div>

      <section>
         <h2 className="text-xl font-serif text-reef-charcoal mb-4">Photos</h2>
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
      </section>

      <section>
         <h2 className="text-xl font-serif text-reef-charcoal mb-4">Videos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.title}
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className="card p-5 flex items-center justify-between hover:border-reef-gold/60 transition"
            >
              <div>
               <p className="text-lg font-serif text-reef-charcoal">{video.title}</p>
                 <p className="text-sm text-reef-charcoal/70">YouTube</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-reef-gold text-reef-ink flex items-center justify-center font-semibold">
                ▶
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
