import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "E-Ticaret Kurulumu", href: "/hizmetler/e-ticaret/e-ticaret-kurulumu" },
  { label: "E-Ticaret Yönetimi", href: "/hizmetler/e-ticaret/e-ticaret-yonetimi" },
  { label: "Pazaryeri Yönetimi", href: "/hizmetler/e-ticaret/pazaryeri-magaza-yonetimi" },
  { label: "Google Ads", href: "/hizmetler/dijital-pazarlama/google-ads" },
  { label: "Meta Ads", href: "/hizmetler/dijital-pazarlama/meta-ads" },
  { label: "SEO", href: "/hizmetler/dijital-pazarlama/seo" },
  { label: "Web Tasarım", href: "/hizmetler/medya-tasarim/bireysel-kurumsal-web-tasarim" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-night text-paper">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden">
              <Image
                src="/logo-icon.png"
                alt="Dutch Angle Logo"
                width={160}
                height={160}
                className="absolute left-1/2 top-[-22px] h-auto w-[224px] max-w-none -translate-x-1/2 object-contain"
              />
            </span>
            <span className="font-serif text-3xl tracking-tight text-paper-light">
              Dutch Angle<span className="text-gold-light">.</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-faded">
            B2B dijital büyüme ve e-ticaret süreçlerinizi ölçülebilir stratejilerle büyütüyoruz.
          </p>
        </div>

        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">Hizmetler</h2>
          <nav aria-label="Hizmetler" className="mt-5 grid gap-3 text-sm">
            {serviceLinks.map((service) => (
              <Link key={service.href} href={service.href} className="text-faded transition-colors hover:text-paper">
                {service.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">Kurumsal</h2>
          <nav aria-label="Kurumsal" className="mt-5 grid gap-3 text-sm">
            <Link href="/hakkimizda" className="text-faded transition-colors hover:text-paper">Hakkımızda</Link>
            <Link href="/blog" className="text-faded transition-colors hover:text-paper">Blog</Link>
            <Link href="/growth" className="text-faded transition-colors hover:text-paper">Growth</Link>
            <Link href="/audit" className="text-faded transition-colors hover:text-paper">Mağaza Analizi</Link>
            <Link href="/#form-section" className="text-faded transition-colors hover:text-paper">İletişim</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">İletişim</h2>
          <div className="mt-4 grid gap-2 text-sm">
            <a href="mailto:hello@dutchangle.co" className="text-faded transition-colors hover:text-paper">
              hello@dutchangle.co
            </a>
            <p className="text-[#817d74]">Büyüme için birlikte çalışalım.</p>
          </div>
          <div className="mt-5 flex gap-2" aria-label="Sosyal medya">
            <a
              href="https://www.instagram.com/dutchangle_tr/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-none border border-night-line text-xs font-bold text-faded transition-colors hover:border-gold-light hover:text-gold-light"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <span className="flex h-10 w-10 items-center justify-center rounded-none border border-night-line text-faded" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.6h.05c.48-.9 1.67-1.85 3.43-1.85 3.67 0 4.35 2.42 4.35 5.57v6.18h-3.55v-5.48c0-1.31-.02-2.99-1.82-2.99-1.82 0-2.1 1.42-2.1 2.89v5.58H9.2V9Z" />
              </svg>
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-none border border-night-line text-faded" aria-label="Facebook">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                <path d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.3-.12-2.47-.12-2.45 0-4.13 1.5-4.13 4.25v2.17H8v3.1h2.3v8h3.4Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#3d3d38] px-6 py-5 text-center text-xs text-[#817d74]">
        © {new Date().getFullYear()} Dutch Angle. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
