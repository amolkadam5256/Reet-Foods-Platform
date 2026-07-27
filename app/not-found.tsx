import Image from "next/image";
import Link from "next/link";
import { Images } from "@/assets/images";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fbf7f1] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[32px] border border-reef-gold/15 bg-white shadow-[0_18px_60px_rgba(29,22,17,0.1)] md:grid-cols-2">
        <div className="relative min-h-72"><Image src={Images.woodenBoxNuts} alt="Assorted premium dry fruits" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
        <div className="flex flex-col justify-center p-8 sm:p-12"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-reef-burgundy">Error 404</p><h1 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl text-reef-charcoal">This gift box is not on the shelf.</h1><p className="mt-4 leading-7 text-reef-charcoal/72">The page you requested may have moved, or the link may be incorrect. Let’s get you back to something delicious.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/" className="rounded-full bg-reef-gold px-5 py-3 text-sm font-semibold text-white">Go to home</Link><Link href="/products" className="rounded-full border border-reef-gold/30 px-5 py-3 text-sm font-semibold text-reef-charcoal">Browse products</Link></div></div>
      </div>
    </main>
  );
}
