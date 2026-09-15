import React from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Başvuru Yap | DUTCH ANGLE Dijital Büyüme",
  description: "Büyüme stratejilerinizi planlamak için hemen başvurunuzu iletin.",
};

export default function BasvuruPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/60 via-slate-50 to-orange-50/50 text-slate-800 font-sans py-12 px-6 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full">
        
        {/* GERİ DÖN NAVİGASYON */}
        <div className="mb-8 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-amber-600 transition-colors bg-white/80 border border-amber-200/80 px-4 py-2 rounded-xl shadow-sm"
          >
            ← ANASAYFAYA DÖN
          </Link>

          <Link href="/" className="text-xl font-black tracking-tight text-slate-900">
            DUTCH ANGLE<span className="text-amber-500">.</span>
          </Link>
        </div>

        {/* MÜSTAKİL FORM BİLEŞENİ */}
        <ContactForm />

      </div>
    </div>
  );
}