"use client";

import { useState } from "react";
import Link from "next/link";

const navServicesData = [
  {
    title: "E-Ticaret",
    categorySlug: "e-ticaret",
    items: [
      { name: "E-Ticaret Kurulumu", tag: "TEK SEFERLİK", slug: "e-ticaret-kurulumu" },
      { name: "E-Ticaret Yönetimi", tag: "", slug: "e-ticaret-yonetimi" },
      { name: "Pazaryeri Mağaza Yönetimi", tag: "", slug: "pazaryeri-magaza-yonetimi" },
    ],
  },
  {
    title: "Dijital Pazarlama",
    categorySlug: "dijital-pazarlama",
    items: [
      { name: "Google Ads", tag: "", slug: "google-ads" },
      { name: "Meta Ads", tag: "FACEBOOK | INSTAGRAM", slug: "meta-ads" },
      { name: "TikTok Ads", tag: "", slug: "tiktok-ads" },
      { name: "SEO", tag: "", slug: "seo" },
      { name: "İçerik Pazarlaması", tag: "", slug: "icerik-pazarlamasi" },
    ],
  },
  {
    title: "Medya & Tasarım",
    categorySlug: "medya-tasarim",
    items: [
      { name: "Sosyal Medya Yönetimi", tag: "", slug: "sosyal-medya-yonetimi" },
      { name: "UI & UX", tag: "", slug: "ui-ux" },
      { name: "Bireysel ve Kurumsal Web Tasarım", tag: "", slug: "bireysel-kurumsal-web-tasarim" },
      { name: "Web Sitesi Kurulumu", tag: "SIFIRDAN", slug: "web-sitesi-kurulumu" },
    ],
  },
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="border-b border-gray-800/80 bg-gray-950/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 1. LOGO: Hangi sayfada olursan ol Ana Sayfaya götürür */}
        <Link href="/" className="text-2xl font-black text-white tracking-widest hover:opacity-80 transition-opacity">
          LEJİT<span className="text-yellow-500">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-gray-300">
          
          {/* 2. HİZMETLER: Hover ile açılır, tıklandığında ilgili hizmete gider */}
          <div
            className="relative py-6"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors py-2">
              HİZMETLER <span className="text-[10px] opacity-60">▼</span>
            </button>

            {isServicesOpen && (
              <div className="absolute top-full -left-12 w-[680px] bg-gray-900/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-gray-800 grid grid-cols-3 gap-6 z-50">
                {navServicesData.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-[11px] font-bold text-yellow-500 border-b border-gray-800 pb-1 tracking-wider uppercase">
                      {cat.title}
                    </h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            href={`/hizmetler/${cat.categorySlug}/${item.slug}`}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex flex-col items-start hover:opacity-80 transition-opacity"
                          >
                            <span className="text-xs font-medium text-gray-200 group-hover:text-yellow-400 transition-colors">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className="text-[9px] font-bold bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded mt-0.5">
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

          {/* 3. HAKKIMIZDA: Hangi sayfada olursan ol Ana Sayfadaki Hakkımızda alanına kaydırır */}
          <Link 
  href="/hakkimizda" 
  prefetch={false}
  className="hover:text-yellow-500 transition-colors py-2"
>
  HAKKIMIZDA
</Link>

          {/* 4. GİRİŞ: Giriş / Panel sayfasına götürür */}
          <Link 
  href="/login" 
  prefetch={false} 
  className="hover:text-yellow-500 transition-colors flex items-center gap-1 py-2"
>
  GİRİŞ 🔑
</Link>
        </nav>

        {/* 5. İLK ADIM BUTONU: Hangi sayfada olursan ol Ana Sayfadaki İletişim alanına götürür */}
        <Link
          href="/#iletisim"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-lg shadow-yellow-500/10"
        >
          İLK ADIM
        </Link>

      </div>
    </header>
  );
}