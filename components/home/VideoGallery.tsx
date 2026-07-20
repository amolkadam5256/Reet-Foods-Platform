import { videos } from "../../data/gallery";
import { Card, CardContent } from "../ui/card";

export function VideoGallery() {
  return (
    <section className="section">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Video Gallery</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {videos.map((vid) => (
          <a
            key={vid.title}
            href={vid.link}
            target="_blank"
            rel="noreferrer"
            className="block group"
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-gray-900">{vid.title}</p>
                  <p className="text-sm text-gray-500">Watch on YouTube</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-reef-burgundy text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
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
