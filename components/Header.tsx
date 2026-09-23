"use client";

import React, { useState } from "react";
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

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="border-b border-amber-200/60 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO + İKON */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo-icon.png"
            alt="Dutch Angle Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-black tracking-tight text-slate-900">
            DUTCH ANGLE<span className="text-amber-500">.</span>
          </span>
        </Link>

        {/* MENÜ */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
          <div
            className="relative py-4"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-amber-600 transition-colors cursor-pointer text-slate-700">
              Hizmetler <span className="text-[10px] opacity-60">▼</span>
            </button>

            {isServicesOpen && (
              <div className="absolute top-full -left-12 w-[680px] bg-white/95 backdrop-blur-md border border-amber-200/80 rounded-2xl p-6 shadow-xl grid grid-cols-3 gap-6 z-50">
                {navServicesData.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-[11px] font-bold text-amber-600 border-b border-amber-100 pb-2 uppercase tracking-wider">
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
                            <span className="text-xs font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className="text-[9px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded mt-0.5">
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

          <Link href="/hakkimizda" className="hover:text-amber-600 transition-colors text-slate-700">
            Hakkımızda
          </Link>

        </nav>

        <Link
          href="/basvuru"
          className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs uppercase px-4 py-2 rounded-xl shadow-sm transition-all"
        >
          İlk Adım
        </Link>
      </div>
    </header>
  );
}