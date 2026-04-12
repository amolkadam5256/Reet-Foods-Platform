import { videos } from "../../../../data/gallery";

export default function VideoGalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-6">
      <h1 className="text-3xl font-serif text-reef-burgundy">Video Gallery</h1>
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
              <p className="text-lg font-serif text-reef-charcoal">
                {video.title}
              </p>
              <p className="text-sm text-reef-charcoal/70">Watch on YouTube</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-reef-gold text-reef-charcoal flex items-center justify-center font-semibold shadow-lg">
              ▶
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
