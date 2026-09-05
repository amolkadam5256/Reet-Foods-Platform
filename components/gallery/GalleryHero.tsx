import Image, { type StaticImageData } from "next/image";

type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
  title?: string;
  type?: string;
  description?: string;
};

export function GalleryHero({
  photoCount,
  videoCount,
  featuredPhotos,
}: {
  photoCount: number;
  videoCount: number;
  featuredPhotos: GalleryPhoto[];
}) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#201316] via-[#160b0d] to-[#0e0506] text-white p-8 sm:p-12 lg:p-16 border border-reef-gold/25 shadow-[0_24px_50px_rgba(28,12,8,0.18)] mb-12 rounded-2xl">
      <div className="absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="absolute left-1/3 -bottom-16 h-64 w-64 rounded-full bg-[#7a0019]/35 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-32 w-32 rounded-full bg-[#2d7a3a]/10 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block bg-[#7a0019] text-[#d4af37] border border-[#d4af37]/35 text-[9px] font-extrabold uppercase tracking-[0.24em] px-3.5 py-1.5 rounded-full shadow-sm mb-5">
            ESTD. 2019 · Pune
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Reet Foods <br />
            <span className="text-[#d4af37]">Moments</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-white/80">
            Explore our curated gifting, premium ingredients, and
            behind-the-scenes production moments. Select any photo to view it
            in full screen.
          </p>

          <div className="mt-8 flex flex-wrap gap-5 border-t border-white/10 pt-6">
            <div>
              <p className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#d4af37]">
                {photoCount} Photos
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-white/45">
                High Resolution
              </p>
            </div>
            <div className="w-px h-8 bg-white/15 self-center hidden sm:block" />
            <div>
              <p className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#d4af37]">
                {videoCount} Stories
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-white/45">
                Process Videos
              </p>
            </div>
            <div className="w-px h-8 bg-white/15 self-center hidden sm:block" />
            <div>
              <p className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#d4af37]">
                100% Premium
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-white/45">
                FSSAI Certified
              </p>
            </div>
          </div>
        </div>

        {featuredPhotos.length >= 3 && (
          <div className="hidden lg:flex items-center justify-center relative h-72 w-full select-none">
            <div className="absolute left-6 w-36 h-48 rounded-xl overflow-hidden border border-reef-gold/30 shadow-2xl -rotate-6 transform transition duration-500 hover:rotate-0 hover:scale-110 hover:z-30 z-10 bg-[#12080a] cursor-pointer">
              <Image
                src={featuredPhotos[0].src}
                alt={featuredPhotos[0].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[8px] text-white/95 text-center font-medium line-clamp-1 border border-white/10">
                {featuredPhotos[0].title}
              </div>
            </div>

            <div className="absolute w-40 h-52 rounded-xl overflow-hidden border-2 border-reef-gold shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 transform transition duration-500 hover:scale-110 bg-[#12080a] cursor-pointer">
              <Image
                src={featuredPhotos[1].src}
                alt={featuredPhotos[1].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-2 right-2 bg-black/80 backdrop-blur-sm px-2.5 py-1.5 rounded text-[9px] text-[#d4af37] text-center font-bold tracking-wider border border-[#d4af37]/25">
                {featuredPhotos[1].title}
              </div>
            </div>

            <div className="absolute right-6 w-36 h-48 rounded-xl overflow-hidden border border-reef-gold/30 shadow-2xl rotate-6 transform transition duration-500 hover:rotate-0 hover:scale-110 hover:z-30 z-10 bg-[#12080a] cursor-pointer">
              <Image
                src={featuredPhotos[2].src}
                alt={featuredPhotos[2].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[8px] text-white/95 text-center font-medium line-clamp-1 border border-white/10">
                {featuredPhotos[2].title}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
