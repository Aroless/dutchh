"use client";

import React, { useEffect, useRef, useState } from "react";

type TurnstileWidget = {
  render: (element: HTMLElement, options: {
    sitekey: string;
    callback: (token: string) => void;
    "expired-callback": () => void;
    "error-callback": () => void;
  }) => string;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileWidget;
  }
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "E-Ticaret Kurulumu",
    note: "",
    website: "",
  });

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current) return;

    const renderTurnstile = () => {
      if (!window.turnstile || !turnstileRef.current || turnstileWidgetId.current) return;

      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: turnstileSiteKey,
        callback: setTurnstileToken,
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    if (window.turnstile) {
      renderTurnstile();
      return;
    }

    const script = document.createElement("script");
    script.id = "cloudflare-turnstile-script";
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderTurnstile);
    document.head.appendChild(script);

    return () => script.removeEventListener("load", renderTurnstile);
  }, [turnstileSiteKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (turnstileSiteKey && !turnstileToken) {
      alert("Lütfen güvenlik doğrulamasını tamamlayın.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
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
          website: "",
        });
        setTurnstileToken("");
        if (turnstileWidgetId.current && window.turnstile) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
      } else {
        alert(`Bir sorun oluştu: ${result.error || "Lütfen tekrar deneyin."}`);
      }
    } catch {
      alert("Bağlantı hatası oluştu, lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-10 border-t border-[#1c1b19] bg-[#fbfaf6] p-8 md:grid-cols-12 md:gap-12 md:p-10">
        <div className="space-y-5 md:col-span-5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">
              Birlikte Çalışalım
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-[#1c1b19] md:text-5xl">
              Projenizi Başlatın
            </h2>
          </div>

          <p className="max-w-md text-sm font-medium leading-7 text-[#6e6a61]">
            İhtiyacınız olan hizmeti seçin ve formu doldurun. Uzman ekibimiz markanız için en uygun büyüme stratejisini hazırlayıp sizinle iletişime geçsin.
          </p>

          <div className="space-y-3 border-t border-[#d8d1c4] pt-5 text-xs font-bold text-[#3d3a35]">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-[#a77b16]">01</span> Ücretsiz Ön Danışmanlık ve Analiz
            </div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-[#a77b16]">02</span> 24 Saat İçinde Dönüş Garantisi
            </div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-[#a77b16]">03</span> Şeffaf Süreç ve Sürekli Destek
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-5 border-t border-[#d8d1c4] pt-6">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#4f4b44]">Ad Soyad</label>
                <input
                  type="text"
                  required
                  placeholder="Ahmet Yılmaz"
                  className="min-h-11 w-full rounded-none border border-[#d8d1c4] bg-[#f5f1e8] px-3.5 py-2.5 text-xs text-[#1c1b19] transition-colors focus:border-[#a77b16] focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#4f4b44]">E-Posta</label>
                <input
                  type="email"
                  required
                  placeholder="ahmet@sirketiniz.com"
                  className="min-h-11 w-full rounded-none border border-[#d8d1c4] bg-[#f5f1e8] px-3.5 py-2.5 text-xs text-[#1c1b19] transition-colors focus:border-[#a77b16] focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#4f4b44]">Telefon</label>
                <input
                  type="tel"
                  required
                  placeholder="0555 555 55 55"
                  className="min-h-11 w-full rounded-none border border-[#d8d1c4] bg-[#f5f1e8] px-3.5 py-2.5 text-xs text-[#1c1b19] transition-colors focus:border-[#a77b16] focus:outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#4f4b44]">İlgilendiğiniz Hizmet</label>
                <select
                  className="min-h-11 w-full rounded-none border border-[#d8d1c4] bg-[#f5f1e8] px-3.5 py-2.5 text-xs text-[#1c1b19] transition-colors focus:border-[#a77b16] focus:outline-none"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="E-Ticaret Kurulumu">E-Ticaret Kurulumu</option>
                  <option value="E-Ticaret Yönetimi">E-Ticaret Yönetimi</option>
                  <option value="Pazaryeri Mağaza Yönetimi">Pazaryeri Mağaza Yönetimi</option>
                  <option value="Google & Meta Reklamları">Google & Meta Reklamları</option>
                  <option value="TikTok Ads & SEO">TikTok Ads & SEO</option>
                  <option value="Bireysel / Kurumsal Web Tasarım">Bireysel / Kurumsal Web Tasarım</option>
                  <option value="Sıfırdan Web Sitesi Kurulumu">Sıfırdan Web Sitesi Kurulumu</option>
                  <option value="İçerik Pazarlaması">İçerik Pazarlaması</option>
                  <option value="Growth & Büyüme Danışmanlığı">Growth & Büyüme Danışmanlığı</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#4f4b44]">Notunuz / Proje Detayları</label>
              <textarea
                rows={3}
                placeholder="Projeniz veya hedefleriniz hakkında kısa bilgi verin..."
                className="w-full resize-none rounded-none border border-[#d8d1c4] bg-[#f5f1e8] px-3.5 py-2.5 text-xs text-[#1c1b19] transition-colors focus:border-[#a77b16] focus:outline-none"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              ></textarea>
            </div>

            {turnstileSiteKey && (
              <div className="min-h-[65px]" ref={turnstileRef} />
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-none bg-[#1c1b19] py-3.5 text-xs font-bold uppercase tracking-wider text-[#f5f1e8] transition-all hover:bg-[#a77b16] hover:text-[#1c1b19] disabled:opacity-60"
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

      {/* BAŞARILI BİLDİRİM MODALI */}
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
              Bilgileriniz başarıyla **DUTCH ANGLE** ekibine ulaştı. Projenizi inceleyip 24 saat içerisinde sizinle iletişime geçeceğiz.
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
    </>
  );
}