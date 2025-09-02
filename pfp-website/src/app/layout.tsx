import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "株式会社PFP | システム開発・ITソリューション",
    template: "%s | 株式会社PFP"
  },
  description: "株式会社PFPは、最新の技術と豊富な経験を活かし、システム開発、データベース設計、モバイルアプリ開発、クラウドインフラ構築などの包括的なITソリューションを提供しています。",
  keywords: [
    "システム開発",
    "IT",
    "ソフトウェア開発",
    "データベース設計",
    "モバイルアプリ開発",
    "クラウドインフラ",
    "ITコンサルティング",
    "株式会社PFP",
    "東京",
    "台東区"
  ],
  authors: [{ name: "株式会社PFP" }],
  creator: "株式会社PFP",
  publisher: "株式会社PFP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pfp-company.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "株式会社PFP | システム開発・ITソリューション",
    description: "最新の技術と豊富な経験を活かし、お客様のビジネス成長をサポートするシステム開発パートナーとして、信頼される企業を目指しています。",
    url: "https://pfp-company.com",
    siteName: "株式会社PFP",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社PFP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社PFP | システム開発・ITソリューション",
    description: "最新の技術と豊富な経験を活かし、お客様のビジネス成長をサポートするシステム開発パートナーとして、信頼される企業を目指しています。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
