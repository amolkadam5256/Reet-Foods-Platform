import { FiX } from "react-icons/fi";

type GalleryVideo = { title: string; link: string };

export function GalleryVideoModal({
  video,
  close,
}: {
  video: GalleryVideo;
  close: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Playing ${video.title}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/50 to-transparent px-4 py-4 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
          {video.title}
        </p>
        <button
          type="button"
          onClick={close}
          className="flex items-center gap-2 rounded-full bg-[#7a0019] px-4 py-2 text-xs font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#d4af37] hover:text-reef-charcoal focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close video player"
        >
          <span className="font-semibold uppercase tracking-wider">Close</span>
          <FiX className="h-4 w-4" />
        </button>
      </div>

      <div className="relative z-20 w-full max-w-4xl aspect-video bg-black shadow-2xl overflow-hidden rounded-md border border-white/10 mt-12">
        <iframe
          src={`${video.link}?autoplay=1`}
          title={video.title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
