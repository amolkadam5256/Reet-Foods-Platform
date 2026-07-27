import { videos } from "../../../../data/gallery";

export default function VideoGalleryPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 space-y-8 bg-[#fbf7f1] min-h-screen">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-reef-burgundy">Video stories</p>
        <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl text-reef-charcoal sm:text-5xl">Video Gallery</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {videos.map((video) => (
          <a
            key={video.title}
            href={video.link}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border border-reef-gold/15 bg-white p-6 transition duration-300 hover:border-reef-gold hover:shadow-[0_14px_28px_rgba(29,22,17,0.07)]"
          >
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-reef-charcoal">
                {video.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-reef-burgundy">Watch on YouTube</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-reef-cream text-reef-burgundy flex items-center justify-center font-semibold shadow-sm transition duration-300 group-hover:bg-reef-burgundy group-hover:text-white group-hover:scale-105">
              ▶
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

