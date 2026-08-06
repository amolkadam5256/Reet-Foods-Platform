import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://reetfoodsngiftings.com"),
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
  verification: {
    google: "DPxYyQPNikU9BiIBScyDNBoP0iQVCV8_Epnfr9ktfss",
    other: {
      "msvalidate.01": "67F3216EA312D76D6A20E765AEA31CC4",
    },
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Reet Foods",
  },
  openGraph: {
    title: "Reet Foods | Premium Dry Fruits, Chocolates & Corporate Gifting",
    description:
      "Luxury dry fruits, chocolates, and curated gift hampers crafted in Pune for corporate, festive, wedding, and bulk gifting.",
    url: "https://reetfoodsngiftings.com",
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
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CNBH2V6Y6T"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CNBH2V6Y6T');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PM6DPLVF');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xy6gqwaxvu");
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-black"
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PM6DPLVF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

