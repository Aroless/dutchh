import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SolutionsSection from "@/components/SolutionsSection";

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
            
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl tracking-tight leading-[0.98] mb-8 text-[#1c1b19]">
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

      {/* 4. ÇÖZÜMLERİMİZ */}
      <SolutionsSection />

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

      {/* 7. FORM DOLDURMA ALANI */}
      <section id="form-section" className="max-w-6xl mx-auto px-6 py-6">
        <ContactForm />
      </section>

    </div>
  );
}