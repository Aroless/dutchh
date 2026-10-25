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

const steps = [
  "Ücretsiz Ön Danışmanlık ve Analiz",
  "24 Saat İçinde Dönüş Garantisi",
  "Şeffaf Süreç ve Sürekli Destek",
];

const labelClass = "block text-[11px] font-bold uppercase tracking-wider text-[#4f4b44]";
// Alt çizgili alan; odakta altındaki altın çizgi (FieldLine) soldan sağa dolar
const inputClass =
  "peer w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink transition-colors placeholder:text-faded hover:border-muted-ink focus:outline-none";

function FieldLine() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 peer-focus:w-full motion-reduce:transition-none"
    />
  );
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
        setShowSuccess(true);
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
    <div className="mx-auto max-w-5xl border border-ink bg-paper-light p-1.5">
      <div className="grid grid-cols-1 border border-line md:grid-cols-12">

        {/* SOL: koyu bilgi paneli */}
        <aside className="flex flex-col gap-6 bg-night p-6 text-paper md:col-span-5 md:p-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">
              Birlikte Çalışalım
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              Projenizi Başlatın
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-faded">
              İhtiyacınız olan hizmeti seçin ve formu doldurun. Uzman ekibimiz markanız için en uygun büyüme stratejisini hazırlayıp sizinle iletişime geçsin.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">Sonra ne olur?</h3>
            <ol className="mt-4 space-y-4 border-l border-night-line pl-6">
              {steps.map((step, index) => (
                <li key={step} className="relative text-sm font-semibold">
                  <span aria-hidden="true" className="absolute top-1.5 -left-[29px] size-2 rounded-full bg-gold-light"></span>
                  <span className="mr-3 font-serif text-lg text-gold-light">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-auto border-t border-night-line pt-6 text-sm">
            <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-faded">Doğrudan ulaşın</span>
            <div className="mt-2 flex flex-col items-start gap-2">
              <a
                href="mailto:hello@dutchangle.co"
                className="text-paper transition-colors hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
              >
                hello@dutchangle.co
              </a>
              <a
                href="https://www.instagram.com/dutchangle_tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper transition-colors hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
              >
                Instagram&apos;da @dutchangle_tr <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </aside>

        {/* SAĞ: form veya başarı kartı */}
        <div className="p-6 md:col-span-7 md:p-8">
          {showSuccess && (
            <div role="status" className="flex h-full flex-col justify-center gap-5 py-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">✦ Başvuru alındı</span>
              <h3 className="font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl">
                Teşekkürler, talebiniz bize ulaştı.
              </h3>
              <p className="max-w-md text-sm leading-7 text-muted-ink">
                Projenizi inceleyip 24 saat içinde sizinle iletişime geçeceğiz.
              </p>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="mt-2 self-start border border-ink px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Yeni başvuru oluştur
              </button>
            </div>
          )}

          {/* Başarıdan sonra form gizlenir ama DOM'da kalır: Turnstile widget'ı yeniden kurulmak zorunda kalmasın */}
          <form onSubmit={handleSubmit} hidden={showSuccess} className="relative grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
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

            <fieldset className="sm:col-span-2">
              <legend className={`${labelClass} mb-3`}>İlgilendiğiniz hizmet</legend>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <label key={service} className="cursor-pointer">
                    <input
                      type="radio"
                      name="service"
                      value={service}
                      checked={formData.service === service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="peer sr-only"
                    />
                    <span className="inline-block border border-line bg-paper px-2.5 py-1.5 text-xs font-semibold text-[#4f4b44] transition-colors hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="contact-name" className={labelClass}>Ad Soyad</label>
              <div className="relative">
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
                <FieldLine />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>E-Posta</label>
              <div className="relative">
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
                <FieldLine />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-phone" className={labelClass}>Telefon</label>
              <div className="relative">
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
                <FieldLine />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-note" className={labelClass}>Notunuz</label>
              <div className="relative">
                <textarea
                  id="contact-note"
                  rows={2}
                  placeholder="Projeniz veya hedefleriniz hakkında kısa bilgi verin..."
                  className={`${inputClass} block resize-none`}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                ></textarea>
                <FieldLine />
              </div>
            </div>

            {turnstileSiteKey && (
              <div className="min-h-[65px] sm:col-span-2" ref={turnstileRef} />
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-3 rounded-none bg-ink py-3.5 text-xs font-bold uppercase tracking-wider text-paper transition-colors hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60 sm:col-span-2"
            >
              {isSubmitting ? (
                <>
                  <span className="size-3.5 animate-spin rounded-full border-2 border-accent border-t-transparent"></span>
                  Gönderiliyor...
                </>
              ) : (
                <>
                  Başvuruyu Gönder
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
