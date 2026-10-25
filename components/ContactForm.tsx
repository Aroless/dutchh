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

const services = [
  "E-Ticaret Kurulumu",
  "E-Ticaret Yönetimi",
  "Pazaryeri Mağaza Yönetimi",
  "Google & Meta Reklamları",
  "TikTok Ads & SEO",
  "Bireysel / Kurumsal Web Tasarım",
  "Sıfırdan Web Sitesi Kurulumu",
  "İçerik Pazarlaması",
  "Growth & Büyüme Danışmanlığı",
];

const labelClass = "mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#4f4b44]";
const inputClass =
  "min-h-11 w-full rounded-none border border-line bg-paper-light px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-faded hover:border-muted-ink focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

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

    // Script daha önce eklendiyse (örn. Strict Mode'da efektin ikinci çalışması) tekrar ekleme
    let script = document.getElementById("cloudflare-turnstile-script") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "cloudflare-turnstile-script";
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", renderTurnstile);

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
      <div className="grid grid-cols-1 gap-10 border-t border-ink bg-paper-light p-8 md:grid-cols-12 md:gap-12 md:p-10">
        <div className="space-y-5 md:col-span-5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              Birlikte Çalışalım
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink md:text-5xl">
              Projenizi Başlatın
            </h2>
          </div>

          <p className="max-w-md text-sm font-medium leading-7 text-muted-ink">
            İhtiyacınız olan hizmeti seçin ve formu doldurun. Uzman ekibimiz markanız için en uygun büyüme stratejisini hazırlayıp sizinle iletişime geçsin.
          </p>

          <div className="space-y-3 border-t border-line pt-5 text-xs font-bold text-[#3d3a35]">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-gold">01</span> Ücretsiz Ön Danışmanlık ve Analiz
            </div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-gold">02</span> 24 Saat İçinde Dönüş Garantisi
            </div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-gold">03</span> Şeffaf Süreç ve Sürekli Destek
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:border-l md:border-line md:pl-12">
          <form onSubmit={handleSubmit} className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            <div>
              <label htmlFor="contact-name" className={labelClass}>Ad Soyad</label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                placeholder="Ahmet Yılmaz"
                className={inputClass}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>E-Posta</label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                placeholder="ahmet@sirketiniz.com"
                className={inputClass}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className={labelClass}>Telefon</label>
              <input
                id="contact-phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="0555 555 55 55"
                className={inputClass}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="contact-service" className={labelClass}>İlgilendiğiniz hizmet</label>
              <div className="relative">
                <select
                  id="contact-service"
                  name="service"
                  className={`${inputClass} cursor-pointer appearance-none pr-10`}
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                <span aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-ink">▾</span>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-note" className={labelClass}>Notunuz</label>
              <textarea
                id="contact-note"
                rows={3}
                placeholder="Projeniz veya hedefleriniz hakkında kısa bilgi verin..."
                className={`${inputClass} resize-none`}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              ></textarea>
            </div>

            {turnstileSiteKey && (
              <div className="min-h-[65px] sm:col-span-2" ref={turnstileRef} />
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-2 flex w-full sm:col-span-2 items-center justify-center gap-2 rounded-none bg-ink py-4 text-xs font-bold uppercase tracking-wider text-paper transition-all hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-accent border-t-transparent rounded-full animate-spin"></span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            className="w-full max-w-md space-y-4 border-t-2 border-ink bg-paper-light p-6 text-center sm:p-8"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">✦ Başvuru</span>

            <h3 id="success-title" className="font-serif text-3xl tracking-tight text-ink">
              Talebiniz alındı.
            </h3>

            <p className="text-sm leading-7 text-muted-ink">
              Bilgileriniz Dutch Angle ekibine ulaştı. Projenizi inceleyip 24 saat içinde sizinle iletişime geçeceğiz.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="mt-2 w-full cursor-pointer bg-ink py-3.5 text-xs font-bold uppercase tracking-wider text-paper hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Tamamdır ➔
            </button>
          </div>
        </div>
      )}
    </>
  );
}