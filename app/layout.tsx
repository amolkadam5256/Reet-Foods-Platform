import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reetfoods.in"),
  title: {
    default: "Reet Foods | Premium Gifting & Gourmet, Pune",
    template: "%s | Reet Foods Pune",
  },
  description:
    "Reet Foods, Pune — premium dry fruits, chocolate gift boxes, artisanal juices, and curated corporate gifting. Get the best quote for bulk and festive orders.",
  keywords: [
    "Reet Foods",
    "Pune gourmet",
    "premium dry fruits",
    "corporate gifting",
    "chocolate gift box",
    "Pune food supplier",
  ],
  openGraph: {
    title: "Reet Foods | Premium Gifting & Gourmet, Pune",
    description:
      "Luxury dry fruits, chocolates, juices and curated gift hampers crafted in Pune. Talk to Reet Foods for bulk and festive orders.",
    url: "https://reetfoods.in",
    siteName: "Reet Foods",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased bg-reef-cream text-reef-charcoal`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
