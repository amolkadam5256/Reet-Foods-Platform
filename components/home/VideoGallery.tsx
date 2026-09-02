import { videos } from "../../data/gallery";
import { Card, CardContent } from "../ui/card";
import { FaYoutube } from "react-icons/fa6";

export function VideoGallery() {
  return (
    <section className="section">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-reef-burgundy">Visual Reels</p>
          <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-gray-900">
            Reet Foods Video Showcase
          </h2>
        </div>
        <a
          href="https://www.youtube.com/@ReetFoodsGiftings"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700"
        >
          <FaYoutube className="text-base" />
          <span>YouTube Channel</span>
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {videos.map((vid) => (
          <a
            key={vid.title}
            href={vid.watchUrl || vid.link}
            target="_blank"
            rel="noreferrer"
            className="block group"
          >
            <Card className="hover:shadow-md transition-shadow border-reef-gold/20">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-reef-burgundy transition">
                    {vid.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <FaYoutube className="text-red-600" /> Watch on YouTube Shorts
                  </p>
                </div>
                <div className="h-10 w-10 shrink-0 rounded-full bg-reef-burgundy text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
