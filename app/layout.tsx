import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar'ını buraya import ediyoruz
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";
import { openGraphDefaults, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dutch Angle | B2B & E-Ticaret Dijital Pazarlama",
  description: "Reklam ve e-ticaret süreçlerinizi şeffaf ve veri odaklı yönetin.",
  openGraph: openGraphDefaults,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {/* 0. AÇILIŞ ANİMASYONU (yalnızca tam sayfa yüklemesinde oynar) */}
        <IntroSplash />

        {/* 2. NAVBAR */}
        <Navbar />

        {/* 3. İÇERİK */}
        <main className="flex-grow">{children}</main>

        {/* 4. FOOTER */}
        <Footer />
        
      </body>
    </html>
  );
}