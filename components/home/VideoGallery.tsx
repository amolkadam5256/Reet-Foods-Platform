import { videos } from "../../data/gallery";

export function VideoGallery() {
  return (
    <section className="section">
      <div className="flex items-center gap-3 mb-6">
        <div className="accent-bar" />
        <h2 className="text-2xl font-serif text-reef-burgundy">Video Gallery</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {videos.map((vid) => (
          <a
            key={vid.title}
            href={vid.link}
            target="_blank"
            rel="noreferrer"
            className="card p-5 flex items-center justify-between hover:border-reef-gold/60 transition"
          >
            <div>
              <p className="text-lg font-serif text-reef-charcoal">{vid.title}</p>
              <p className="text-sm text-reef-charcoal/70">Watch on YouTube</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-reef-gold text-reef-charcoal flex items-center justify-center font-semibold shadow-lg">
              ▶
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
