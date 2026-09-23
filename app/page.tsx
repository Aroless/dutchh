"use client";

import React from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  

  return (
    <div className="home-editorial min-h-screen bg-[#f5f1e8] text-[#1c1b19] pb-20 relative">
      
      

      
      {/* 3. HERO SECTION */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-[#a77b16] font-bold text-[11px] mb-7 tracking-[0.2em] uppercase">
              <span className="w-7 h-px bg-[#a77b16]"></span>
              MARKALAR İÇİN YENİ İHTİMALLER ÜRETİYORUZ
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[0.98] mb-8 text-[#1c1b19]">
              E-TİCARETİNİZE FARKLI <br />
              PERSPEKTİFLERDEN BAKIYORUZ.
            </h1>

            <p className="font-medium text-[#6e6a61] text-sm md:text-base max-w-2xl border-l border-[#c79a2b] pl-5 leading-7">
              Geleneksel pazarlama engellerini ve yüksek riskleri aşın. E-ticaret ekosisteminde dinamik stratejilerle markanızı şeffaf ve ölçülebilir şekilde büyütüyoruz.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="border-t border-[#1c1b19] pt-5">
              <div className="text-xs font-bold border-b border-[#d8d1c4] pb-3 mb-4 uppercase text-[#a77b16] tracking-wider">
                ✦ DUTCH ANGLE BÜYÜME MİMARİSİ
              </div>
              <ul className="space-y-4 font-semibold text-xs text-[#4f4b44]">
                <li className="flex items-center gap-3">
                  <span className="text-[#a77b16] font-serif text-lg">01</span>
                  Şeffaf Operasyon Süreçleri
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#a77b16] font-serif text-lg">02</span>
                  Canlı Satış & ROAS Analiz Paneli
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#a77b16] font-serif text-lg">03</span>
                  Veri Odaklı Dijital Pazarlama
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#a77b16] font-serif text-lg">04</span>
                  Hızlı Kurulum & Aksiyon
                </li>
              </ul>
            </div>
          </div>

        </div>
      </header>

      {/* 4. HİZMETLER ÖZET BÖLÜMÜ */}
      <section className="max-w-6xl mx-auto px-6 py-6">
              <div className="home-section bg-[#fbfaf6] border-t border-[#1c1b19] p-8 md:p-10">
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">
              ÇÖZÜMLERİMİZ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="home-item border-t border-[#d8d1c4] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[#a77b16] font-serif text-2xl block mb-3">01</span>
                <p className="text-[#3d3a35] font-semibold text-sm leading-relaxed">
                  Sıfırdan e-ticaret kurulumu ve mağaza yönetimi
                </p>
              </div>
            </div>

            <div className="home-item border-t border-[#d8d1c4] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[#a77b16] font-serif text-2xl block mb-3">02</span>
                <p className="text-[#3d3a35] font-semibold text-sm leading-relaxed">
                  Güncel ve optimal dijital pazarlama yöntemleriyle maksimum görünürlük
                </p>
              </div>
            </div>

            <div className="home-item border-t border-[#d8d1c4] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[#a77b16] font-serif text-2xl block mb-3">03</span>
                <div className="space-y-2 text-[#3d3a35] font-semibold text-sm leading-relaxed">
                  <p>Sıfırdan web sitesi kurulumu ve tasarımı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAĞAZA AUDIT */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="border-t border-[#1c1b19] bg-[#20211f] p-8 text-[#f5f1e8] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d7ad4a]">
                Mağaza analizi
              </span>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight tracking-tight md:text-5xl">
                Mağazanız neden satmıyor? İki iş gününde ücretsiz söyleyelim.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#b7b2a8]">
                Sitenizin adresini bırakın. Mağazanızı elle inceleyip satış kaybettiren en önemli üç noktayı tek sayfalık bir notta size gönderelim. Not sizin kalır; isterseniz kendiniz uygularsınız.
              </p>
            </div>

            <div>
              <ul className="space-y-3 border-t border-[#5a5953] pt-5 text-sm text-[#d8d1c4]">
                <li>— Ölçümünüz doğru mu, reklam bütçeniz nereye gidiyor</li>
                <li>— Ürün sayfalarınız rakiplerinize göre nerede duruyor</li>
                <li>— Ödeme akışında müşteriyi kaçıran adım hangisi</li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/basvuru" className="bg-[#d7ad4a] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#20211f] transition-colors hover:bg-[#f0d58e]">
                  Ücretsiz ön tarama iste
                </Link>
                <Link href="/audit" className="border border-[#d7ad4a] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#f5f1e8] transition-colors hover:bg-[#d7ad4a] hover:text-[#20211f]">
                  Detaylı denetimi incele →
                </Link>
              </div>
              <p className="mt-4 text-xs leading-5 text-[#817d74]">
                Ön tarama tek sayfadır, üç bulgu içerir ve hiçbir hesabınıza erişim istemez — site adresi yeterli. Mağazanın tamamını hesaplarınızın içine girerek inceleyen detaylı denetim ayrı bir hizmettir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. E-TİCARET PİYASA HACMİ VE VERİLERİ */}
      <section id="market-data" className="max-w-6xl mx-auto px-6 py-6">
            <div className="home-section bg-[#fbfaf6] border-t border-[#1c1b19] p-8 md:p-10">
          <div className="mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">
              Piyasa Analizi & Hacim
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-3 uppercase tracking-tight">
              Global E-Ticaret Hacmi ve Pazar Volatilitesi
            </h2>
            <p className="text-slate-600 text-xs md:text-sm font-medium mt-2 max-w-3xl leading-relaxed">
              Güncel küresel ticaret verilerine göre, e-ticaret pazarı geleneksel perakendeye kıyasla çok daha yüksek bir ivmeyle büyümekte ve makroekonomik dalgalanmalara karşı daha esnek bir yapı sunmaktadır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="home-stat border-t border-[#d8d1c4] p-5">
              <span className="text-xs font-bold text-[#a77b16] uppercase tracking-wider">Küresel E-Ticaret Hacmi</span>
              <div className="font-serif text-3xl text-[#1c1b19] mt-2 mb-1">$6.3+ Trilyon</div>
              <p className="text-[11px] text-slate-600 font-medium">Dünya genelinde toplam perakende satışlarının %20&apos;sinden fazlasını dijital kanallar oluşturuyor.</p>
            </div>

            <div className="home-stat border-t border-[#d8d1c4] p-5">
              <span className="text-xs font-bold text-[#a77b16] uppercase tracking-wider">Yıllık Büyüme Oranı (CAGR)</span>
              <div className="font-serif text-3xl text-[#1c1b19] mt-2 mb-1">%8.9+ Büyüme</div>
              <p className="text-[11px] text-slate-600 font-medium">Geleneksel mağazacılık büyüme oranının yaklaşık 3 katı hızla pazar payını artırıyor.</p>
            </div>

            <div className="home-stat border-t border-[#d8d1c4] p-5">
              <span className="text-xs font-bold text-[#a77b16] uppercase tracking-wider">Volatilite Risk Yönetimi</span>
              <div className="font-serif text-3xl text-[#1c1b19] mt-2 mb-1">Düşük Sabit Maliyet</div>
              <p className="text-[11px] text-slate-600 font-medium">Fiziksel dükkan kiraları ve işletme risklerine karşı dijitalde esnek bütçelerle yüksek direnç sağlanır.</p>
            </div>
          </div>

          <div className="border-t border-amber-100 pt-8">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">
              Neden Şimdi E-Ticaret Ekosisteminde Yer Almalısınız?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm font-medium text-slate-700 leading-relaxed">
              <div className="space-y-3">
                <p>
                  <strong className="text-slate-900 font-bold block mb-1">1. Mekandan Bağımsız Sınırsız Müşteri Ağı:</strong>
                  Fiziksel bir mağaza sadece bulunduğu caddedeki insanlara hitap ederken, doğru kurgulanmış bir e-ticaret altyapısı ve reklam stratejisi ile ülkenin veya dünyanın her köşesindeki müşterilere 7/24 satış yapabilirsiniz.
                </p>
                <p>
                  <strong className="text-slate-900 font-bold block mb-1">2. Şeffaf ve Ölçülebilir Harcamalar:</strong>
                  Geleneksel reklamlarda harcadığınız paranın tam olarak kaç kişiye ulaştığını veya satışa dönüştüğünü ölçmek zordur. E-ticarette ise yatırdığınız her 1 TL&apos;nin karşılığında ne kadar getiri (ROAS) sağladığınızı canlı olarak görürsünüz.
                </p>
              </div>
              <div className="space-y-3">
                <p>
                  <strong className="text-slate-900 font-bold block mb-1">3. Otomasyon ve Düşük Operasyon Yükü:</strong>
                  Stok yönetiminden ödeme alma süreçlerine kadar tüm aşamalar dijital otomasyonlarla yürütülür. Bu da daha az personelle daha büyük iş hacimlerini yönetmenizi sağlar.
                </p>
                <p>
                  <strong className="text-slate-900 font-bold block mb-1">4. Pazar Volatilitesine Karşı Esneklik:</strong>
                  Piyasa koşulları veya tüketici alışkanlıkları değiştiğinde dijitaldeki ürün konseptinizi veya hedef kitlenizi dakikalar içinde güncelleyerek riskinizi en aza indirebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GROWTH STRATEJİ DANIŞMANLIĞI BÖLÜMÜ */}
      <section id="growth" className="max-w-6xl mx-auto px-6 py-6">
        <div className="home-growth bg-[#20211f] border-t border-[#1c1b19] text-white p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mb-8 relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d7ad4a]">
              GROWTH STRATEJİLERİ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 tracking-tight text-white">
              Büyüme tesadüf değildir. Sırası vardır.
            </h2>
            <p className="text-slate-400 text-xs md:text-sm font-medium mt-2 max-w-3xl leading-relaxed">
              Reklam vermek büyümek değildir. Önce neyin bozuk olduğunu buluyor, sonra çalışan sistemi doğru sırayla ölçekliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="home-growth-item border-t border-[#5a5953] p-6">
              <div className="text-[#d7ad4a] font-serif text-xl mb-2">01. Kuruluş</div>
              <p className="text-slate-300 text-xs leading-relaxed font-medium">Henüz neyin işe yaradığı belli değil; ilk satışlar ve müşteri davranışları doğru zemini gösterir.</p>
            </div>

            <div className="home-growth-item border-t border-[#5a5953] p-6">
              <div className="text-[#d7ad4a] font-serif text-xl mb-2">02. Tekrarlanabilirlik</div>
              <p className="text-slate-300 text-xs leading-relaxed font-medium">Satış geliyor ama hangi kanalın ve ürünün kazandırdığı net değil; ölçüm ve birim ekonomi burada başlar.</p>
            </div>

            <div className="home-growth-item border-t border-[#5a5953] p-6">
              <div className="text-[#d7ad4a] font-serif text-xl mb-2">03. Ölçekleme</div>
              <p className="text-slate-300 text-xs leading-relaxed font-medium">Ne yaptığınız belli; şimdi bütçeyi, kreatifi ve operasyonu verim düşmeden büyütmek gerekiyor.</p>
            </div>

            <div className="home-growth-item border-t border-[#5a5953] p-6">
              <div className="text-[#d7ad4a] font-serif text-xl mb-2">04. Verimlilik</div>
              <p className="text-slate-300 text-xs leading-relaxed font-medium">Büyüdünüz; artık geri gelen müşteriler, marka aramaları ve kârlı büyüme öncelikli.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FORM DOLDURMA ALANI */}
      <section id="form-section" className="max-w-6xl mx-auto px-6 py-6">
        <ContactForm />
      </section>

    </div>
  );
}