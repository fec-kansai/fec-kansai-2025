import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import Header from "@/components/Header";
import { Providers } from "@/components/providers";
import type { Metadata } from "next";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        url: "/ogp-image.png",
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
        url: "/ogp-image.png",
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
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <div className="min-h-svh flex flex-col">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
