import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar'ını buraya import ediyoruz
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dutch Angle | B2B & E-Ticaret Dijital Pazarlama",
  description: "Reklam ve e-ticaret süreçlerinizi şeffaf ve veri odaklı yönetin.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        
        {/* 1. ÜST BANT (Her sayfada sabit kalması için buraya ekliyoruz) */}
        <div className="border-b border-[#d8d1c4] bg-[#f5f1e8] px-4 py-2.5 overflow-hidden text-[10px] font-bold uppercase tracking-[0.22em] text-[#6e6a61]">
          <div className="animate-marquee whitespace-nowrap flex gap-14">
            <span>✦ E-TİCARETİNİZİ BÜYÜTÜN</span>
            <span className="text-[#a77b16]">/ ÖLÇÜLEBİLİR DİJİTAL PAZARLAMA</span>
            <span>✦ VERİ ODAKLI BÜYÜME STRATEJİLERİ</span>
            <span className="text-[#a77b16]">/ DAHA FAZLA SATIŞ, DAHA AZ KARMAŞA</span>
          </div>
        </div>

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