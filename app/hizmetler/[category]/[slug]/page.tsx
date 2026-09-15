import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";

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
    <div className="service-page min-h-screen flex flex-col justify-between">
      
      <div>
        {/* Not: Üst bant ve Navbar artık app/layout.tsx'ten otomatik geliyor, o yüzden buradan sildik! */}

        {/* 3. HERO BÖLÜMÜ */}
        <section className="service-hero relative pt-20 pb-24 border-b overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="service-category inline-block text-xs font-bold tracking-[0.18em] uppercase">
                • {service.categoryTitle}
              </div>
              <h1 className="text-4xl md:text-6xl tracking-tight leading-tight">
                {service.title.toUpperCase()}
              </h1>
              <p className="text-base md:text-lg leading-8 max-w-2xl">
                {service.description}
              </p>
              <div className="service-benefit max-w-2xl border-l-2 px-5 py-4">
                <span className="service-label text-xs font-bold uppercase tracking-widest">
                  Kazanımlarınız
                </span>
                <p className="mt-2 text-sm leading-relaxed">
                  {service.benefits}
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/#form-section"
                  className="service-cta inline-flex items-center justify-center font-extrabold text-sm px-8 py-4 transition-all"
                >
                  HEMEN BAŞLAYIN →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="service-architecture border p-8 relative">
                <div className="service-label text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span>✦</span> LEJİT BÜYÜME MİMARİSİ
                </div>
                <div className="space-y-4">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="service-item flex items-start gap-4 p-3 border">
                      <span className="service-number font-bold text-sm">0{idx + 1}</span>
                      <span className="text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. HİZMET KAPSAMI */}
        <section className="service-scope py-20 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 text-center md:text-left">
              <span className="service-label text-xs font-bold tracking-widest uppercase block mb-2">ÇÖZÜMLERİMİZ</span>
              <h2 className="text-3xl">HİZMET KAPSAMI & DETAYLAR</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.scope.map((item, idx) => (
                <div
                  key={idx}
                  className="service-item border p-6 transition-all group"
                >
                  <div className="service-number w-10 h-10 border flex items-center justify-center mb-4 transition-all">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ÇALIŞMA SÜRECİ */}
        {service.steps && (
          <section className="service-process py-20 border-b">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12 text-center md:text-left">
                <span className="service-label text-xs font-bold tracking-widest uppercase block mb-2">ADIM ADIM</span>
                <h2 className="text-3xl">ÇALIŞMA SÜRECİMİZ</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.steps.map((step, idx) => (
                  <div key={idx} className="service-step border p-6 relative">
                    <span className="service-number text-4xl font-black block mb-2">{step.number}</span>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

    </div>
  );
}