import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    alt: "Dry fruits spread",
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    alt: "Chocolate box",
  },
  {
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
    alt: "Gift hamper",
  },
  {
    src: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=900&q=80",
    alt: "Juice bottles",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    alt: "Gourmet chocolates",
  },
  {
    src: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=80",
    alt: "Assorted nuts",
  },
];

const videos = [
  { title: "Corporate hamper unboxing", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { title: "Chocolate tempering line", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { title: "Juice bottling BTS", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
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
        <h1 className="text-3xl font-serif text-reef-cream">Gallery</h1>
      </div>

      <section>
        <h2 className="text-xl font-serif text-reef-cream mb-4">Photos</h2>
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
        <h2 className="text-xl font-serif text-reef-cream mb-4">Videos</h2>
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
                <p className="text-lg font-serif text-reef-cream">{video.title}</p>
                <p className="text-sm text-reef-cream/70">YouTube</p>
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
