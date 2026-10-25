import Link from "next/link";

export const metadata = {
  title: "Sayfa Bulunamadı | Dutch Angle",
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="border-t border-ink pt-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
          Hata 404
        </span>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-ink md:text-6xl">
          Aradığınız sayfayı bulamadık.
        </h1>
        <p className="mt-6 max-w-xl border-l border-accent pl-5 text-sm leading-7 text-muted-ink md:text-base">
          Adres değişmiş ya da sayfa kaldırılmış olabilir. Ana sayfadan devam edebilir veya hizmetlerimize göz atabilirsiniz.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="bg-ink px-6 py-4 text-xs font-bold uppercase tracking-wider text-paper-light transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Ana sayfaya dön
          </Link>
          <Link
            href="/basvuru"
            className="border border-ink px-6 py-4 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Bize ulaşın →
          </Link>
        </div>
      </div>
    </section>
  );
}
