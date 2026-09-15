import Link from "next/link";

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-900 pb-20">
      
      {/* HERO BÖLÜMÜ */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-300/60 uppercase tracking-wider">
            DUTCH ANGLE HİKAYESİ & MİSYONU
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-center text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto uppercase">
          DİJİTAL BÜYÜME YOLCULUĞUNUZDA <br />
          <span className="bg-amber-300 px-2 rounded-md">ŞEFFAF VE GÜÇLÜ</span> ORTAĞINIZ.
        </h1>
        <p className="text-center text-slate-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          [Buraya genel hakkımızda tanıtım yazısı gelecek. Markanızın kuruluş amacı, uzmanlık alanları ve dijital pazarlamadaki yaklaşımından bahsedebilirsiniz.]
        </p>
      </section>

      {/* VİZYON / MİSYON / DEĞERLER KARTLARI */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white border border-amber-200/80 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-6">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Misyonumuz</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Buraya misyon metni gelecek. Müşterilerinize sunduğunuz değer ve e-ticaret/reklam süreçlerindeki hedefleriniz.]
            </p>
          </div>

          <div className="bg-white border border-amber-200/80 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-6">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Vizyonumuz</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Buraya vizyon metni gelecek. Gelecekte konumlanmak istediğiniz nokta ve dijital ekosisteme katkınız.]
            </p>
          </div>

          <div className="bg-white border border-amber-200/80 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-6">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Yaklaşımımız</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Buraya çalışma prensipleriniz gelecek. Şeffaflık, veri odaklılık ve canlı performans takibi vurgusu.]
            </p>
          </div>

        </div>
      </section>

      {/* DETAYLI İÇERİK BÖLÜMÜ */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white border border-amber-200/80 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Biz Kimiz?</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            [Buraya detaylı hikaye metni eklenecek. Ekip yapısı, tecrübe, yönetilen reklam bütçeleri veya B2B / E-Ticaret odaklı stratejiler hakkında detaylar girebilirsiniz.]
          </p>
          
          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">
              Bizimle çalışmaya hazır mısınız?
            </span>
            <Link
              href="/basvuru"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-full transition-colors text-sm"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}