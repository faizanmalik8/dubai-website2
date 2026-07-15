import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPTV Dubai | Premium IPTV Subscription Service",
  description: "Get the best IPTV subscription in Dubai. Enjoy 32,000+ live channels, 20k+ movies and series in 4K/8K quality with 99.9% uptime and 24/7 support.",
  keywords: "IPTV Dubai, best IPTV provider, IPTV subscription, buy IPTV, IPTV 4K, live channels",
  alternates: {
    canonical: "https://www.iptvdubai.com",
  },
  openGraph: {
    title: "IPTV Dubai | Premium IPTV Subscription Service",
    description: "Get the best IPTV subscription in Dubai. 32,000+ live channels, 20k+ movies and series in 4K/8K quality.",
    url: "https://www.iptvdubai.com",
    siteName: "IPTV Dubai",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "IPTV Dubai Hero Image",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Dubai | Premium IPTV Subscription Service",
    description: "Enjoy 32,000+ live channels, 20k+ movies and series in 4K/8K quality.",
    images: ["/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTV Dubai",
    "url": "https://www.iptvdubai.com",
    "logo": "https://www.iptvdubai.com/logo.webp",
    "description": "Premium IPTV subscription service providing 4K/8K streaming for live channels, movies, and TV shows.",
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
