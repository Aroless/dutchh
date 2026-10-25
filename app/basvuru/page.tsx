import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Başvuru Yap | Dutch Angle",
  description: "Büyüme stratejilerinizi planlamak için hemen başvurunuzu iletin.",
};

export default function BasvuruPage() {
  return (
    <div className="min-h-screen bg-paper px-6 py-20 text-ink">
      <div className="mx-auto max-w-6xl">

        {/* GERİ DÖN NAVİGASYON */}
        <Link href="/" className="inline-flex text-xs font-bold uppercase tracking-[0.16em] text-muted-ink transition-colors hover:text-gold">
          ← Ana sayfaya dön
        </Link>

        {/* MÜSTAKİL FORM BİLEŞENİ */}
        <div className="mt-12">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
