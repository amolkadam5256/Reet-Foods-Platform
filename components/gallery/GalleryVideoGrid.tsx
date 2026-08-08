import { FiPlay } from "react-icons/fi";

type GalleryVideo = { title: string; link: string };

export function GalleryVideoGrid({
  videos,
  setActiveVideo,
}: {
  videos: GalleryVideo[];
  setActiveVideo: (v: GalleryVideo) => void;
}) {
  return (
    <section className="mt-16 border-t border-reef-gold/15 pt-12">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">
          Video stories
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal">
          Watch the process
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {videos.map((video) => (
          <button
            key={video.title}
            type="button"
            onClick={() => setActiveVideo(video)}
            className="group flex items-center justify-between border border-reef-gold/15 bg-white p-6 transition duration-300 text-left hover:border-reef-burgundy hover:shadow-[0_14px_28px_rgba(29,22,17,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold/40"
          >
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-reef-charcoal">
                {video.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-reef-burgundy flex items-center gap-1">
                <span>Watch Video</span>
                <span className="transition-transform duration-250 group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-reef-cream text-reef-burgundy transition duration-300 group-hover:bg-reef-burgundy group-hover:text-white group-hover:scale-105">
              <FiPlay className="ml-0.5 text-sm" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
