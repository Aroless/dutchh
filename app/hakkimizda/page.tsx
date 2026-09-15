import Link from "next/link";

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 pb-24 text-[#1c1b19]">
      
      {/* HERO BÖLÜMÜ */}
      <section className="mx-auto max-w-6xl pt-20">
        <div className="border-t border-[#1c1b19] pt-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">
            DUTCH ANGLE HİKAYESİ & MİSYONU
          </span>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
          DİJİTAL BÜYÜME YOLCULUĞUNUZDA <br />
          <span className="text-[#a77b16]">ŞEFFAF VE GÜÇLÜ</span> ORTAĞINIZ.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-[#6e6a61] md:text-lg">
          [Buraya genel hakkımızda tanıtım yazısı gelecek. Markanızın kuruluş amacı, uzmanlık alanları ve dijital pazarlamadaki yaklaşımından bahsedebilirsiniz.]
        </p>
        </div>
      </section>

      {/* VİZYON / MİSYON / DEĞERLER KARTLARI */}
      <section className="mx-auto max-w-6xl py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          
          <div className="border-t border-[#1c1b19] pt-5">
            <div className="font-serif text-2xl text-[#a77b16]">
              01
            </div>
            <h3 className="mt-5 text-lg font-semibold">Misyonumuz</h3>
            <p className="mt-3 text-sm leading-7 text-[#6e6a61]">
              [Buraya misyon metni gelecek. Müşterilerinize sunduğunuz değer ve e-ticaret/reklam süreçlerindeki hedefleriniz.]
            </p>
          </div>

          <div className="border-t border-[#1c1b19] pt-5">
            <div className="font-serif text-2xl text-[#a77b16]">
              02
            </div>
            <h3 className="mt-5 text-lg font-semibold">Vizyonumuz</h3>
            <p className="mt-3 text-sm leading-7 text-[#6e6a61]">
              [Buraya vizyon metni gelecek. Gelecekte konumlanmak istediğiniz nokta ve dijital ekosisteme katkınız.]
            </p>
          </div>

          <div className="border-t border-[#1c1b19] pt-5">
            <div className="font-serif text-2xl text-[#a77b16]">
              03
            </div>
            <h3 className="mt-5 text-lg font-semibold">Yaklaşımımız</h3>
            <p className="mt-3 text-sm leading-7 text-[#6e6a61]">
              [Buraya çalışma prensipleriniz gelecek. Şeffaflık, veri odaklılık ve canlı performans takibi vurgusu.]
            </p>
          </div>

        </div>
      </section>

      {/* DETAYLI İÇERİK BÖLÜMÜ */}
      <section className="mx-auto max-w-6xl">
        <div className="border-t border-[#1c1b19] pt-10">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Biz Kimiz?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#6e6a61]">
            [Buraya detaylı hikaye metni eklenecek. Ekip yapısı, tecrübe, yönetilen reklam bütçeleri veya B2B / E-Ticaret odaklı stratejiler hakkında detaylar girebilirsiniz.]
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#d8d1c4] pt-5">
            <span className="text-sm font-semibold text-[#6e6a61]">
              Bizimle çalışmaya hazır mısınız?
            </span>
            <Link
              href="/basvuru"
              className="bg-[#1c1b19] px-6 py-4 text-sm font-bold text-[#fbfaf6] transition-colors hover:bg-[#a77b16]"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}