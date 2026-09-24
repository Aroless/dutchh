"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navServicesData = [
  {
    title: "E-Ticaret",
    items: [
      { name: "E-Ticaret Kurulumu", tag: "TEK SEFERLİK", href: "/hizmetler/e-ticaret/e-ticaret-kurulumu" },
      { name: "E-Ticaret Yönetimi", tag: "", href: "/hizmetler/e-ticaret/e-ticaret-yonetimi" },
      { name: "Pazaryeri Mağaza Yönetimi", tag: "", href: "/hizmetler/e-ticaret/pazaryeri-magaza-yonetimi" },
    ],
  },
  {
    title: "Dijital Pazarlama",
    items: [
      { name: "Google Ads", tag: "", href: "/hizmetler/dijital-pazarlama/google-ads" },
      { name: "Meta Ads", tag: "FACEBOOK | INSTAGRAM", href: "/hizmetler/dijital-pazarlama/meta-ads" },
      { name: "TikTok Ads", tag: "", href: "/hizmetler/dijital-pazarlama/tiktok-ads" },
      { name: "SEO", tag: "", href: "/hizmetler/dijital-pazarlama/seo" },
    ],
  },
  {
    title: "Medya & Tasarım",
    items: [
      { name: "Bireysel ve Kurumsal Web Tasarım", tag: "", href: "/hizmetler/medya-tasarim/bireysel-kurumsal-web-tasarim" },
      { name: "Web Sitesi Kurulumu", tag: "SIFIRDAN", href: "/hizmetler/medya-tasarim/web-sitesi-kurulumu" },
      { name: "İçerik Pazarlaması", tag: "", href: "/hizmetler/medya-tasarim/icerik-pazarlamasi" },
    ],
  },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsServicesOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    // h-20: Navbar yüksekliği | items-center: Dikeyde ortalama
    <nav className="border-b border-[#d8d1c4] bg-[#f5f1e8]/95 backdrop-blur-md sticky top-0 z-40 px-6 h-[76px] flex items-center overflow-visible">
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center gap-3">
        
        {/* LOGO VE YAZI (items-center ile dikeyde tam ortalandı) */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 group -ml-1 md:-ml-4 min-w-0">
          <div className="relative h-16 w-16 md:h-20 md:w-20 shrink-0 overflow-hidden">
            <Image
              src="/logo-icon.png"
              alt="Dutch Angle Logo"
              width={160}
              height={160}
              className="absolute left-1/2 top-[-25px] h-auto w-[256px] max-w-none -translate-x-1/2 object-contain transition-transform group-hover:scale-105 md:top-[-31px] md:w-[320px]"
              loading="eager"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-sm md:text-base tracking-tight text-[#1c1b19]">
              Dutch <span className="text-[#a77b16]">Angle</span>
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.24em] text-[#817b70] uppercase">
              DİJİTAL GROWTH
            </span>
          </div>
        </Link>

        {/* ORTA MENÜ */}
        <div className="hidden md:flex items-center gap-7 text-[11px] font-medium tracking-[0.08em] text-[#4f4b44]">
          <div
            className="relative py-2"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={isServicesOpen}
              aria-controls="desktop-services-menu"
              onClick={() => setIsServicesOpen((open) => !open)}
              className="flex items-center gap-1.5 hover:text-[#a77b16] transition-colors cursor-pointer"
            >
              Hizmetler <span className="text-[10px] opacity-60">▼</span>
            </button>

            {isServicesOpen && (
              <div id="desktop-services-menu" className="absolute top-full -left-12 w-[680px] bg-[#fbfaf6] border border-[#d8d1c4] p-7 grid grid-cols-3 gap-7 z-50">
                {navServicesData.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-[11px] font-bold text-[#a77b16] border-b border-[#d8d1c4] pb-2 uppercase tracking-wider">
                      {cat.title}
                    </h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex flex-col items-start hover:opacity-80 transition-opacity"
                          >
                            <span className="text-xs font-medium text-[#3d3a35] group-hover:text-[#a77b16] transition-colors">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className="text-[9px] font-bold bg-[#eee2bd] text-[#806016] px-1.5 py-0.5 rounded mt-0.5">
                                {item.tag}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/hakkimizda" className="hover:text-[#a77b16] transition-colors">
            Hakkımızda
          </Link>

          <Link href="/blog" className="hover:text-[#a77b16] transition-colors">
            Blog
          </Link>

          <Link href="/growth" className="hover:text-[#a77b16] transition-colors">
            Growth
          </Link>

          <Link href="/audit" className="hover:text-[#a77b16] transition-colors">
            Mağaza Analizi
          </Link>

        </div>

        {/* SAĞ BUTON */}
        <Link
          href="/basvuru"
          className="hidden sm:inline-flex border border-[#1c1b19] bg-[#1c1b19] hover:bg-[#a77b16] hover:border-[#a77b16] text-[#fbfaf6] font-bold text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-none transition-all cursor-pointer"
        >
          İlk Adım
        </Link>

        <button
          type="button"
          aria-expanded={isServicesOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsServicesOpen((open) => !open)}
          className="md:hidden min-h-11 border border-[#c8c0b1] bg-transparent px-3 py-2 text-xs font-bold text-[#1c1b19] rounded-none"
        >
          MENÜ {isServicesOpen ? "▲" : "▼"}
        </button>
      </div>

      {isServicesOpen && (
        <div id="mobile-navigation" className="md:hidden absolute left-0 right-0 top-full max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain border-b border-[#d8d1c4] bg-[#fbfaf6] p-5">
          <div className="grid gap-4 text-xs font-bold uppercase tracking-wide">
            <Link href="/hakkimizda" onClick={() => setIsServicesOpen(false)} className="flex min-h-11 items-center text-slate-700 hover:text-amber-600">
              Hakkımızda
            </Link>
            <Link href="/blog" onClick={() => setIsServicesOpen(false)} className="flex min-h-11 items-center text-slate-700 hover:text-amber-600">
              Blog
            </Link>
            <Link href="/growth" onClick={() => setIsServicesOpen(false)} className="flex min-h-11 items-center text-slate-700 hover:text-amber-600">
              Growth
            </Link>
            <Link href="/audit" onClick={() => setIsServicesOpen(false)} className="flex min-h-11 items-center text-slate-700 hover:text-amber-600">
              Mağaza Analizi
            </Link>
            <Link href="/basvuru" onClick={() => setIsServicesOpen(false)} className="flex min-h-11 items-center text-slate-700 hover:text-amber-600">
              İlk Adım
            </Link>
            <div className="border-t border-amber-100 pt-4">
              <span className="text-[10px] text-amber-600">Hizmetler</span>
              <div className="grid gap-3 mt-3">
                {navServicesData.flatMap((category) => category.items).map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsServicesOpen(false)} className="flex min-h-11 items-center text-slate-700 hover:text-amber-600">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}