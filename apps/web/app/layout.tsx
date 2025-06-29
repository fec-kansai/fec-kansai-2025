import { Barlow, Noto_Sans_JP } from "next/font/google";

import "@workspace/ui/globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Suspense } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fontBarlow = Barlow({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const fontNotoSansJp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "フロントエンドカンファレンス関西2025",
  description:
    "出会いが共鳴し、次の誰かを動かす。2025年11月30日（日）大阪にて日本最大級のフロントエンドカンファレンス関西が開催！",
  keywords: [
    "フロントエンドカンファレンス関西2025",
    "フロントエンドカンファレンス",
    "JavaScript",
    "React",
    "Vue",
    "TypeScript",
    "CSS",
    "HTML",
    "Android",
    "iOS",
  ],
  openGraph: {
    images: [
      {
        url: `${BASE_URL}/ogp-image.png`,
        width: 1200,
        height: 630,
        alt: "フロントエンドカンファレンス関西2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "フロントエンドカンファレンス関西2025",
    description:
      "出会いが共鳴し、次の誰かを動かす。2025年11月30日（日）大阪にて日本最大級のフロントエンドカンファレンス関西が開催！",
    images: [
      {
        url: `${BASE_URL}/ogp-image.png`,
        width: 1200,
        height: 630,
        alt: "フロントエンドカンファレンス関西2025",
      },
    ],
    creator: "@fec_kansai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body
        className={`${fontBarlow.variable} ${fontNotoSansJp.variable} font-sans antialiased bg-black`}
      >
        <Providers>
          <div className="relative">
            <div
              className="absolute inset-0 bg-[url('/bg.png')] bg-fixed z-0 opacity-50"
              style={{ backgroundSize: "100%", backgroundPosition: "25% 35%" }}
            />
            <div className="relative min-h-svh flex flex-col z-0">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
