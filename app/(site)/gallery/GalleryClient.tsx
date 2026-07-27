"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiDownload, FiHeart, FiPlay, FiX } from "react-icons/fi";

type GalleryImage = StaticImageData | { default: StaticImageData };
type GalleryPhoto = { src: GalleryImage; alt: string; title?: string; type?: string; description?: string };
type GalleryVideo = { title: string; link: string };

function resolveImage(source: GalleryImage): StaticImageData {
  return "default" in source ? source.default : source;
}

export function GalleryClient({ photos, videos }: { photos: GalleryPhoto[]; videos: GalleryVideo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<GalleryVideo | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(15);
  
  const filters = ["All", ...Array.from(new Set(photos.map((photo) => photo.type ?? "Collection")))];
  const filteredPhotos = activeFilter === "All" ? photos : photos.filter((photo) => (photo.type ?? "Collection") === activeFilter);
  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const activePhoto = activeIndex === null ? null : visiblePhotos[activeIndex];

  const close = () => setActiveIndex(null);
  const showPrevious = () => setActiveIndex((index) => index === null ? null : (index - 1 + visiblePhotos.length) % visiblePhotos.length);
  const showNext = () => setActiveIndex((index) => index === null ? null : (index + 1) % visiblePhotos.length);
  
  const toggleLike = (index: number) => setLiked((current) => {
    const next = new Set(current);
    next.has(index) ? next.delete(index) : next.add(index);
    return next;
  });

  useEffect(() => {
    if (activeIndex === null && activeVideo === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        setActiveVideo(null);
      }
      if (event.key === "ArrowLeft" && activeIndex !== null) showPrevious();
      if (event.key === "ArrowRight" && activeIndex !== null) showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, activeVideo]);

  return (
    <main className="bg-[#fbf7f1] py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <header className="relative overflow-hidden bg-gradient-to-br from-[#201316] via-[#160b0d] to-[#0e0506] text-white p-8 sm:p-12 lg:p-16 border border-reef-gold/25 shadow-[0_24px_50px_rgba(28,12,8,0.18)] mb-12 rounded-2xl">
          {/* Creative mesh gradients & particles glow */}
          <div className="absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute left-1/3 -bottom-16 h-64 w-64 rounded-full bg-[#7a0019]/35 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-32 w-32 rounded-full bg-[#2d7a3a]/10 blur-3xl" />
          
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block bg-[#7a0019] text-[#d4af37] border border-[#d4af37]/35 text-[9px] font-extrabold uppercase tracking-[0.24em] px-3.5 py-1.5 rounded-full shadow-sm mb-5">
                ESTD. 2015 · Pune
              </span>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Reet Foods <br />
                <span className="text-[#d4af37]">Moments</span>
              </h1>
              <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-white/80">
                Explore our curated gifting, premium ingredients, and behind-the-scenes production moments. Select any photo to view it in full screen.
              </p>
              
              {/* Trust & Count Strip */}
              <div className="mt-8 flex flex-wrap gap-5 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#d4af37]">99+ Photos</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-white/45">High Resolution</p>
                </div>
                <div className="w-px h-8 bg-white/15 self-center hidden sm:block" />
                <div>
                  <p className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#d4af37]">03 Stories</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-white/45">Process Videos</p>
                </div>
                <div className="w-px h-8 bg-white/15 self-center hidden sm:block" />
                <div>
                  <p className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#d4af37]">100% Premium</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-white/45">FSSAI Certified</p>
                </div>
              </div>
            </div>
            
            {/* Visual Polaroid / Museum Frame Collage */}
            <div className="hidden lg:flex items-center justify-center relative h-72 w-full select-none">
              {/* Image 1 - Left slanted */}
              <div className="absolute left-6 w-36 h-48 rounded-xl overflow-hidden border border-reef-gold/30 shadow-2xl -rotate-6 transform transition duration-500 hover:rotate-0 hover:scale-110 hover:z-30 z-10 bg-[#12080a] cursor-pointer">
                <Image
                  src={resolveImage(photos[0].src)}
                  alt={photos[0].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[8px] text-white/95 text-center font-medium line-clamp-1 border border-white/10">
                  {photos[0].title}
                </div>
              </div>
              
              {/* Image 2 - Center elevated */}
              <div className="absolute w-40 h-52 rounded-xl overflow-hidden border-2 border-reef-gold shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 transform transition duration-500 hover:scale-110 bg-[#12080a] cursor-pointer">
                <Image
                  src={resolveImage(photos[1].src)}
                  alt={photos[1].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-2 right-2 bg-black/80 backdrop-blur-sm px-2.5 py-1.5 rounded text-[9px] text-[#d4af37] text-center font-bold tracking-wider border border-[#d4af37]/25">
                  {photos[1].title}
                </div>
              </div>
              
              {/* Image 3 - Right slanted */}
              <div className="absolute right-6 w-36 h-48 rounded-xl overflow-hidden border border-reef-gold/30 shadow-2xl rotate-6 transform transition duration-500 hover:rotate-0 hover:scale-110 hover:z-30 z-10 bg-[#12080a] cursor-pointer">
                <Image
                  src={resolveImage(photos[2].src)}
                  alt={photos[2].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[8px] text-white/95 text-center font-medium line-clamp-1 border border-white/10">
                  {photos[2].title}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">Photo collection</p>
              <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal">A closer look at Reet Foods</h2>
            </div>
            <p className="text-sm text-reef-charcoal/55">Showing {visiblePhotos.length} of {filteredPhotos.length} photos</p>
          </div>
          
          <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter gallery photos">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => { setActiveFilter(filter); setActiveIndex(null); setVisibleCount(15); }}
                className={`rounded-full border px-5 py-2 text-xs font-semibold transition duration-200 ${
                  activeFilter === filter
                    ? "border-reef-burgundy bg-reef-burgundy text-white shadow-sm"
                    : "border-reef-gold/20 bg-white text-reef-charcoal hover:border-reef-gold hover:text-reef-burgundy"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {visiblePhotos.map((photo, index) => (
              <button
                key={`${photo.alt}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-md bg-reef-cream text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-reef-gold/40"
              >
                <Image
                  src={resolveImage(photo.src)}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[#1c1c1c]/0 transition duration-350 group-hover:bg-[#1c1c1c]/40" />
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 via-black/45 to-transparent p-4 pt-10 text-white transition duration-300 group-hover:translate-y-0">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-reef-gold">{photo.type ?? "Collection"}</span>
                  <span className="mt-1 block text-xs font-medium line-clamp-1">{photo.title ?? photo.alt}</span>
                </span>
              </button>
            ))}
          </div>

          {visibleCount < filteredPhotos.length && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 15)}
                className="inline-flex items-center gap-2 border-2 border-reef-gold/30 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-reef-charcoal transition duration-250 hover:border-reef-gold hover:bg-reef-cream hover:text-reef-burgundy shadow-sm rounded-full"
              >
                See More Photos
              </button>
            </div>
          )}
        </section>

        <section className="mt-16 border-t border-reef-gold/15 pt-12">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">Video stories</p>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal">Watch the process</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {videos.map((video) => (
              <button
                key={video.title}
                type="button"
                onClick={() => setActiveVideo(video)}
                className="group flex items-center justify-between border border-reef-gold/15 bg-white p-6 transition duration-300 text-left hover:border-reef-gold hover:shadow-[0_14px_28px_rgba(29,22,17,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold/40"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-reef-charcoal">{video.title}</h3>
                  <p className="mt-2 text-xs font-medium text-reef-burgundy flex items-center gap-1">
                    <span>Watch Video</span>
                    <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
                  </p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-reef-cream text-reef-burgundy transition duration-300 group-hover:bg-reef-burgundy group-hover:text-white group-hover:scale-105">
                  <FiPlay className="ml-0.5 text-sm" />
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {activePhoto && activeIndex !== null ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 animate-fade-in" role="dialog" aria-modal="true" aria-label={`Viewing ${activePhoto.alt}`}>
          <button type="button" onClick={close} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-reef-charcoal" aria-label="Close full screen image"><FiX className="h-5 w-5" /></button>
          <button type="button" onClick={showPrevious} className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-3 text-white transition hover:text-reef-gold sm:left-6" aria-label="Previous image"><FiChevronLeft className="h-9 w-9" /></button>
          <figure className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center">
            <div className="relative h-[72vh] w-full">
              <Image src={resolveImage(activePhoto.src)} alt={activePhoto.alt} fill sizes="100vw" className="object-contain" priority />
            </div>
            <figcaption className="mt-4 flex w-full max-w-4xl flex-wrap items-end justify-between gap-3 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-reef-gold">{activePhoto.type ?? "Reet Foods collection"}</p>
                <p className="mt-1 text-sm font-medium sm:text-base">{activePhoto.title ?? activePhoto.alt} <span className="ml-2 text-white/50">{activeIndex + 1} / {filteredPhotos.length}</span></p>
                {activePhoto.description ? <p className="mt-1.5 max-w-xl text-xs leading-5 text-white/65">{activePhoto.description}</p> : null}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleLike(activeIndex)}
                  className={`flex select-none items-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                    liked.has(activeIndex)
                      ? "border-reef-burgundy bg-reef-burgundy text-white"
                      : "border-white/25 text-white hover:bg-white/10"
                  }`}
                >
                  <FiHeart className={liked.has(activeIndex) ? "fill-current text-white" : ""} /> Like
                </button>
                <a href={resolveImage(activePhoto.src).src} download className="flex items-center gap-2 rounded-md bg-reef-gold px-4 py-2 text-xs font-bold text-reef-charcoal transition hover:bg-white"><FiDownload /> Download</a>
              </div>
            </figcaption>
          </figure>
          <button type="button" onClick={showNext} className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-3 text-white transition hover:text-reef-gold sm:right-6" aria-label="Next image"><FiChevronRight className="h-9 w-9" /></button>
        </div>
      ) : null}

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing ${activeVideo.title}`}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-reef-charcoal"
            aria-label="Close video player"
          >
            <FiX className="h-5 w-5" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video bg-black shadow-2xl overflow-hidden rounded-md border border-white/10">
            <iframe
              src={`${activeVideo.link}?autoplay=1`}
              title={activeVideo.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}

