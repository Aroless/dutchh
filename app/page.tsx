"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "E-Ticaret Kurulumu",
    note: "",
  });

  const servicesData = [
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
        { name: "Tiktok Ads", tag: "", href: "/hizmetler/dijital-pazarlama/tiktok-ads" },
        { name: "SEO", tag: "", href: "/hizmetler/dijital-pazarlama/seo" },
        { name: "İçerik Pazarlaması", tag: "", href: "/hizmetler/dijital-pazarlama/icerik-pazarlamasi" },
      ],
    },
    {
      title: "Medya & Tasarım",
      items: [
        { name: "Sosyal Medya Yönetimi", tag: "", href: "/hizmetler/medya-tasarim/sosyal-medya-yonetimi" },
        { name: "UI & UX", tag: "", href: "/hizmetler/medya-tasarim/ui-ux" },
        { name: "Bireysel ve Kurumsal Web Tasarım", tag: "", href: "/hizmetler/medya-tasarim/bireysel-kurumsal-web-tasarim" },
        { name: "Web Sitesi Kurulumu", tag: "SIFIRDAN", href: "/hizmetler/medya-tasarim/web-sitesi-kurulumu" },
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setShowSuccessModal(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "E-Ticaret Kurulumu",
          note: "",
        });
      } else {
        alert(`Bir sorun oluştu: ${result.error || "Lütfen tekrar deneyin."}`);
      }
    } catch (error) {
      alert("Bağlantı hatası oluştu, lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/60 via-slate-50 to-orange-50/50 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900 pb-20 relative">
      
      {/* 1. ÜST BANT */}
      <div className="bg-slate-900 text-amber-200/90 py-2 px-4 overflow-hidden font-medium text-xs tracking-wide flex border-b border-amber-500/20">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          <span>✦ DİJİTAL BÜYÜME VE E-TİCARET AJANSI</span>
          <span className="text-amber-400">⚡ AYLIK ESNEK ABONELİK MODELLERİ</span>
          <span>✦ MANUEL BÜROKRASİ YOK, SEÇ VE BAŞLA</span>
          <span className="text-amber-400">⚡ 7/24 CANLI PERFORMANS PANELİ</span>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <nav className="border-b border-amber-200/60 bg-white/70 backdrop-blur-md sticky top-0 z-40 px-6 py-3.5 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-0.5"
          >
            LEJİT<span className="text-amber-500">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
            <div
              className="relative py-2"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-amber-600 transition-colors cursor-pointer text-slate-700">
                HİZMETLER <span className="text-[10px] opacity-60">▼</span>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full -left-12 w-[680px] bg-white/95 backdrop-blur-md border border-amber-200/80 rounded-2xl p-6 shadow-xl grid grid-cols-3 gap-6 z-50">
                  {servicesData.map((cat, idx) => (
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

            <Link href="/login" className="hover:text-amber-600 transition-colors text-slate-700">
              Giriş 🔑
            </Link>
          </div>

          <a
            href="#form-section"
            className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs uppercase px-4 py-2 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            İlk Adım
          </a>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 font-bold text-[11px] px-3.5 py-1.5 rounded-full mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              B2B & E-TİCARET DİJİTAL MOTORU
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-tight mb-6 text-slate-900">
              REKLAM VE E-TİCARETİ <br />
              <span className="bg-amber-300/80 text-slate-900 px-3 rounded-lg inline-block my-1">
                PREMİUM SEVİYEYE
              </span> <br />
              TAŞIYORUZ.
            </h1>

            <p className="font-medium text-slate-700 text-sm md:text-base max-w-2xl bg-white/70 border border-amber-200/80 rounded-2xl p-5 shadow-sm leading-relaxed">
              Geleneksel pazarlama engellerini ve yüksek riskleri aşın. E-ticaret ekosisteminde dinamik stratejilerle markanızı şeffaf ve ölçülebilir şekilde büyütüyoruz.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200/80 rounded-2xl p-6 shadow-sm">
              <div className="text-xs font-bold border-b border-amber-100 pb-3 mb-4 uppercase text-amber-700 tracking-wider">
                ✦ LEJİT BÜYÜME MİMARİSİ
              </div>
              <ul className="space-y-3.5 font-semibold text-xs uppercase text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 font-bold text-[11px] w-6 h-6 rounded-lg flex items-center justify-center">01</span>
                  Şeffaf Operasyon Süreçleri
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 font-bold text-[11px] w-6 h-6 rounded-lg flex items-center justify-center">02</span>
                  Canlı Satış & ROAS Analiz Paneli
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 font-bold text-[11px] w-6 h-6 rounded-lg flex items-center justify-center">03</span>
                  Veri Odaklı Dijital Pazarlama
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 font-bold text-[11px] w-6 h-6 rounded-lg flex items-center justify-center">04</span>
                  Hızlı Kurulum & Aksiyon
                </li>
              </ul>
            </div>
          </div>

        </div>
      </header>

      {/* 4. HİZMETLER ÖZET BÖLÜMÜ */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-white/90 border border-amber-200/80 rounded-3xl p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
              ÇÖZÜMLERİMİZ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50/60 border border-amber-200/70 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-amber-600 font-black text-lg block mb-2">01.</span>
                <p className="text-slate-800 font-bold text-sm leading-relaxed">
                  Sıfırdan e-ticaret kurulumu ve mağaza yönetimi
                </p>
              </div>
            </div>

            <div className="bg-amber-50/60 border border-amber-200/70 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-amber-600 font-black text-lg block mb-2">02.</span>
                <p className="text-slate-800 font-bold text-sm leading-relaxed">
                  Güncel ve optimal dijital pazarlama yöntemleriyle maksimum görünürlük
                </p>
              </div>
            </div>

            <div className="bg-amber-50/60 border border-amber-200/70 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-amber-600 font-black text-lg block mb-2">03.</span>
                <div className="space-y-2 text-slate-800 font-bold text-sm leading-relaxed">
                  <p>Sosyal medya yönetimi</p>
                  <p className="pt-2 border-t border-amber-200/60">Sıfırdan web sitesi kurulumu ve tasarımı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. E-TİCARET PİYASA HACMİ VE VERİLERİ */}
      <section id="market-data" className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-white/90 border border-amber-200/80 rounded-3xl p-8 shadow-sm">
          <div className="mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/70 p-5 rounded-2xl">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Küresel E-Ticaret Hacmi</span>
              <div className="text-3xl font-black text-slate-900 mt-2 mb-1">$6.3+ Trilyon</div>
              <p className="text-[11px] text-slate-600 font-medium">Dünya genelinde toplam perakende satışlarının %20'sinden fazlasını dijital kanallar oluşturuyor.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/70 p-5 rounded-2xl">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Yıllık Büyüme Oranı (CAGR)</span>
              <div className="text-3xl font-black text-slate-900 mt-2 mb-1">%8.9+ Büyüme</div>
              <p className="text-[11px] text-slate-600 font-medium">Geleneksel mağazacılık büyüme oranının yaklaşık 3 katı hızla pazar payını artırıyor.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/70 p-5 rounded-2xl">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Volatilite Risk Yönetimi</span>
              <div className="text-3xl font-black text-slate-900 mt-2 mb-1">Düşük Sabit Maliyet</div>
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
                  Geleneksel reklamlarda harcadığınız paranın tam olarak kaç kişiye ulaştığını veya satışa dönüştüğünü ölçmek zordur. E-ticarette ise yatırdığınız her 1 TL'nin karşılığında ne kadar getiri (ROAS) sağladığınızı canlı olarak görürsünüz.
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

      {/* 6. FORM DOLDURMA ALANI (DÜZELTİLEN BÖLÜM) */}
      <section id="form-section" className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-white/90 border border-amber-200/80 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
                Birlikte Çalışalım
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-3 uppercase tracking-tight">
                Projenizi Başlatın
              </h2>
            </div>
            
            <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
              İhtiyacınız olan hizmeti seçin ve formu doldurun. Uzman ekibimiz markanız için en uygun büyüme stratejisini hazırlayıp sizinle iletişime geçsin.
            </p>

            <div className="pt-2 space-y-3 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-amber-500">✓</span> Ücretsiz Ön Danışmanlık ve Analiz
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">✓</span> 24 Saat İçinde Dönüş Garantisi
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">✓</span> Şeffaf Süreç ve Sürekli Destek
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="bg-amber-50/50 border border-amber-200/80 p-6 rounded-2xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Ad Soyad</label>
                  <input
                    type="text"
                    required
                    placeholder="Ahmet Yılmaz"
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">E-Posta</label>
                  <input
                    type="email"
                    required
                    placeholder="ahmet@sirketiniz.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Telefon</label>
                  <input
                    type="tel"
                    required
                    placeholder="0555 555 55 55"
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500 transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">İlgilendiğiniz Hizmet</label>
                  <select
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500 transition-colors"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="E-Ticaret Kurulumu">E-Ticaret Kurulumu</option>
                    <option value="E-Ticaret Yönetimi">E-Ticaret Yönetimi</option>
                    <option value="Google & Meta Reklamları">Google & Meta Reklamları</option>
                    <option value="SEO & İçerik Pazarlaması">SEO & İçerik Pazarlaması</option>
                    <option value="Bireysel / Kurumsal Web Tasarım">Bireysel / Kurumsal Web Tasarım</option>
                    <option value="Sıfırdan Web Sitesi Kurulumu">Sıfırdan Web Sitesi Kurulumu</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Notunuz / Proje Detayları</label>
                <textarea
                  rows={3}
                  placeholder="Projeniz veya hedefleriniz hakkında kısa bilgi verin..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-amber-300 font-bold text-xs uppercase py-3.5 rounded-xl shadow-md transition-all cursor-pointer tracking-wider flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-amber-300 border-t-transparent rounded-full animate-spin"></span>
                    GÖNDERİLİYOR...
                  </>
                ) : (
                  "BAŞVURUYU GÖNDER ➔"
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 mt-12">
        <div className="bg-white/80 border border-amber-200/80 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-xl font-black text-slate-900">LEJİT<span className="text-amber-500">.</span></div>
            <p className="text-xs font-medium text-slate-600 mt-1">
              B2B Dijital Büyüme ve E-Ticaret Ajansı.
            </p>
          </div>
          <div>
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              © 2026 LEJİT DIGITAL AGENCY. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </footer>

      {/* 8. ÖZEL BAŞARILI BİLDİRİM MODALI */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-amber-200/90 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-4 relative overflow-hidden">
            
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-300/30 rounded-full blur-2xl pointer-events-none"></div>

            <div className="w-14 h-14 bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-md border border-amber-300/50">
              ✦
            </div>

            <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight">
              Talebiniz Alındı!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Bilgileriniz başarıyla ekibimize ulaştı. Projenizi inceleyip 24 saat içerisinde sizinle iletişime geçeceğiz.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs uppercase py-3.5 rounded-xl transition-all cursor-pointer tracking-wider shadow-sm mt-2"
            >
              Tamamdır ➔
            </button>
          </div>
        </div>
      )}

    </div>
  );
}