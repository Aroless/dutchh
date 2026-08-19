import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import Header from "@/components/Header";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const service = servicesData[slug];

  if (!service || service.categorySlug !== category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
      
      <div>
        {/* 1. ÜST DUYURU BANTI */}
        <div className="bg-yellow-500 text-black text-xs font-bold py-2 px-4 text-center tracking-wider uppercase">
          ✦ AYLIK ESNEK ABONELİK MODELLERİ &nbsp;|&nbsp; ✦ MANUEL BÜROKRASİ YOK, SEÇ VE BAŞLA &nbsp;|&nbsp; ✦ 7/24 CANLI PERFORMANS PANELİ
        </div>

        {/* 2. DİNAMİK AÇILIR MENÜLÜ HEADER */}
        <Header />

        {/* 3. HERO BÖLÜMÜ */}
        <section className="relative pt-16 pb-20 border-b border-gray-800/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                • {service.categoryTitle}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {service.title.toUpperCase()}
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
                {service.description}
              </p>
              <div className="pt-4">
                <Link
                  href="/#iletisim"
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-sm px-8 py-4 rounded-xl transition-all shadow-xl shadow-yellow-500/20"
                >
                  HEMEN BAŞLAYIN →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-900/90 border border-gray-800 rounded-3xl p-8 shadow-2xl relative">
                <div className="text-xs font-bold text-yellow-500 tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span>✦</span> LEJİT BÜYÜME MİMARİSİ
                </div>
                <div className="space-y-4">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3 rounded-xl bg-gray-950/50 border border-gray-800/50">
                      <span className="text-yellow-500 font-bold text-sm">0{idx + 1}</span>
                      <span className="text-sm font-semibold text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. HİZMET KAPSAMI */}
        <section className="py-20 border-b border-gray-800/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 text-center md:text-left">
              <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase block mb-2">ÇÖZÜMLERİMİZ</span>
              <h2 className="text-3xl font-black text-white">HİZMET KAPSAMI & DETAYLAR</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.scope.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/60 border border-gray-800/80 hover:border-yellow-500/50 rounded-2xl p-6 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ÇALIŞMA SÜRECİ */}
        {service.steps && (
          <section className="py-20 border-b border-gray-800/60 bg-gray-950">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12 text-center md:text-left">
                <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase block mb-2">ADIM ADIM</span>
                <h2 className="text-3xl font-black text-white">ÇALIŞMA SÜRECİMİZ</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.steps.map((step, idx) => (
                  <div key={idx} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 relative">
                    <span className="text-4xl font-black text-yellow-500/20 block mb-2">{step.number}</span>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-800/80 py-8 bg-gray-950 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} LEJİT. Tüm hakları saklıdır.</div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">Ana Sayfa</Link>
            <Link href="/#iletisim" className="hover:text-gray-300 transition-colors">İletişim</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}