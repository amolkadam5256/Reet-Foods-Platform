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
    default: "Reet Foods | Premium Dry Fruits, Chocolates & Corporate Gifting",
    template: "%s | Reet Foods Pune",
  },
  description:
    "Premium dry fruits, chocolate gift boxes, festive hampers, corporate gifting, wholesale supply, OEM, and private label food solutions from Pune.",
  keywords: [
    "Reet Foods",
    "premium dry fruits",
    "premium chocolates",
    "corporate gifting",
    "festive hampers",
    "wholesale gifting",
    "private label food",
  ],
  openGraph: {
    title: "Reet Foods | Premium Dry Fruits, Chocolates & Corporate Gifting",
    description:
      "Luxury dry fruits, chocolates, and curated gift hampers crafted in Pune for corporate, festive, wedding, and bulk gifting.",
    url: "https://reetfoods.in",
    siteName: "Reet Foods",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reet Foods | Premium Dry Fruits, Chocolates & Corporate Gifting",
    description:
      "Premium gifting, bulk orders, wholesale supply, and private label food solutions from Pune.",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased bg-white text-black`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-black"
      >
        {children}
      </body>
    </html>
  );
}
