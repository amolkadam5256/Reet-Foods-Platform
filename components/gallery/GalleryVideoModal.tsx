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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Playing ${video.title}`}
    >
      <button
        type="button"
        onClick={close}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-reef-burgundy hover:text-white"
        aria-label="Close video player"
      >
        <FiX className="h-5 w-5" />
      </button>
      <div className="relative w-full max-w-4xl aspect-video bg-black shadow-2xl overflow-hidden rounded-md border border-white/10">
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
