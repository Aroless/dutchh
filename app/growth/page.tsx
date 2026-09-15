import Link from "next/link";

export const metadata = {
  title: "Büyüme Yönetimi | Dutch Angle",
  description: "Mağazanızın reklam, ölçüm ve dönüşüm tarafını tek bir büyüme sistemiyle yönetin.",
};

const stages = [
  {
    number: "01",
    title: "Kuruluş — ilk satışlar",
    question: "İnsanlar bunu gerçekten istiyor mu?",
    text: "Aylık sipariş sayısı henüz düşük, satışlar düzensiz geliyor. Cevabı reklam bütçesi değil, ilk elli müşterinin davranışı verir.",
    mistake: "Ürün henüz tutmamışken reklam bütçesini artırmak.",
  },
  {
    number: "02",
    title: "Tekrarlanabilirlik — satışın tesadüf olmadığı an",
    question: "Bunu yeniden yapabilir miyim?",
    text: "Sipariş geliyor ama nereden geldiği net değil. Hangi kanalın, ürünün ve kitlenin gerçekten kazandırdığını ölçüm ve birim ekonomi gösterir.",
    mistake: "Ölçüm bozukken karar almak.",
  },
  {
    number: "03",
    title: "Ölçekleme — bütçeyi büyütmek",
    question: "Bütçeyi büyütünce verim düşmeden dayanır mı?",
    text: "Neyin işe yaradığı biliniyor; mesele hacmi artırmak. Darboğaz reklamın arkasında, kreatif üretiminde, stokta veya operasyonda olabilir.",
    mistake: "Operasyonu hazırlamadan gaza basmak.",
  },
  {
    number: "04",
    title: "Verimlilik ve marka — kârlı büyümek",
    question: "Her yeni müşteriyi satın almaya devam etmek zorunda mıyım?",
    text: "Hacim var, şimdi mesele kârlılık. Geri gelen müşteri oranı, e-posta ve mesaj kanalları ve marka aramaları devreye girer.",
    mistake: "Bütün bütçeyi yeni müşteri almaya harcayıp eldeki müşteriyi unutmak.",
  },
];

const monthlyWork = [
  ["Ölçüm ve raporlama", "Analytics, reklam hesapları ve mağaza paneli arasındaki tutarlılığı kuruyoruz. Rapor, kaç tıklama aldığınızı değil, harcanan her bin liranın ne getirdiğini gösterir."],
  ["Reklam yönetimi", "Google ve Meta tarafında kampanya kurulumu, bütçe dağılımı, kitle ve arama terimi temizliği, ürün feed'inin sağlıklı kalması. Haftalık müdahale, aylık yön kararı."],
  ["Kreatif ve içerik", "Reklam görselleri ve metinleri, kampanya varyasyonları ve ürün sayfası içerikleri. Kreatif yorgunluğunu düzenli üretimle yönetiyoruz."],
  ["Dönüşüm iyileştirme", "Ürün sayfası, sepet ve ödeme akışı üzerinde sıralı düzeltmeler. Her ay bir ya da iki değişiklik, sonucu ölçülerek."],
  ["Aylık yön toplantısı", "Geçen ay ne yaptık, ne işe yaradı, gelecek ay neye odaklanıyoruz. Gündemi önceden gönderilmiş 45 dakikalık görüşme."],
];

export default function GrowthPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-20 text-[#1c1b19]">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-flex text-xs font-bold uppercase tracking-[0.16em] text-[#6e6a61] transition-colors hover:text-[#a77b16]">← Ana sayfaya dön</Link>

        <header className="mt-12 border-t border-[#1c1b19] pt-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">Büyüme yönetimi</span>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">Büyüme tesadüf değildir. Sırası vardır.</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#6e6a61] md:text-lg">Mağazanızın reklamını, ölçümünü ve dönüşüm tarafını tek elden yönetiyoruz. Amacımız daha fazla tıklama almak değil, aynı bütçeden daha fazla sipariş çıkarmak.</p>
          <Link href="/basvuru" className="mt-8 inline-flex bg-[#1c1b19] px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#fbfaf6] transition-colors hover:bg-[#a77b16]">Görüşme ayarla →</Link>
        </header>

        <section className="mt-24 grid gap-12 border-t border-[#1c1b19] pt-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">Büyüme neden tesadüf değil?</span>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">Ölç, engeli bul, kaldır, ölçekle.</h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-[#6e6a61] md:text-base">
            <p>Çoğu mağaza büyümeyi tek bir şeye indirger: daha fazla reklam. Oysa reklam yalnızca mevcut sistemin performansını büyütür. Ürün sayfanız ikna etmiyorsa, ödeme akışınız müşteriyi kaçırıyorsa ya da ölçümünüz yanlış rakam gösteriyorsa, bütçeyi ikiye katladığınızda kaybınız da ikiye katlanır.</p>
            <p>Bizim yaptığımız iş bir döngüdür. Önce ölçeriz: hangi rakam gerçekten doğru, nereden ne kadar para geliyor. Sonra engeli buluruz: bu ay en çok satış kaybettiren tek nokta hangisi. Ardından kaldırırız ve işe yaradığı kanıtlanan şeyi ölçekleriz.</p>
            <p>Her ay dramatik bir şey olmayabilir. Bazen tek kazanım, ödeme formundan bir alanın kaldırılmasıdır. Ama on iki ay üst üste doğru sırayla yapıldığında aradaki fark büyük olur.</p>
          </div>
        </section>

        <section className="mt-24 border-t border-[#1c1b19] pt-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">Büyümenin dört aşaması</span>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight md:text-5xl">Mağazanızın hangi aşamada olduğunu bilmek, hangi işi yapacağınızı belirler.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {stages.map((stage) => (
              <article key={stage.number} className="border-t border-[#1c1b19] bg-[#fbfaf6] p-7">
                <span className="font-serif text-2xl text-[#a77b16]">{stage.number}</span>
                <h3 className="mt-5 text-xl font-semibold">{stage.title}</h3>
                <p className="mt-4 font-serif text-lg italic text-[#a77b16]">“{stage.question}”</p>
                <p className="mt-3 text-sm leading-7 text-[#6e6a61]">{stage.text}</p>
                <p className="mt-4 border-l border-[#c79a2b] pl-4 text-xs leading-6 text-[#6e6a61]"><strong className="font-semibold text-[#1c1b19]">En sık yapılan hata:</strong> {stage.mistake}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-[#6e6a61]">Çoğu mağaza iki numarada takılır ve kendini üç numarada sanır. Mağaza analizi tam olarak bunu netleştirmek için var.</p>
        </section>

        <section className="mt-24 border-t border-[#1c1b19] pt-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">Aylık çalışma</span>
          <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">Her ay aynı sırayla, doğru şeye odaklanıyoruz.</h2>
          <div className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2">
            {monthlyWork.map(([title, text], index) => (
              <article key={title} className="border-t border-[#d8d1c4] pt-5">
                <span className="font-serif text-2xl text-[#a77b16]">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6e6a61]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-[#1c1b19] bg-[#20211f] p-8 text-[#f5f1e8] md:p-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d7ad4a]">Nasıl başlıyoruz?</span>
          <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">Önce mağaza analizini yapıyoruz.</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#b7b2a8]">Çalışmaya doğrudan reklam vererek başlamıyoruz. Önce hangi aşamada olduğunuzu ve ilk üç ayın neye harcanacağını netleştiriyoruz. Analiz ücreti, devam etmeniz halinde ilk ay faturanızdan düşülüyor.</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#b7b2a8]">İlk ay temizlik, ikinci ve üçüncü ay test ayıdır. Dördüncü aydan sonrası ölçeklemedir. Bu sıraya uymadan atlanan her adım, sonraki ayda iki katı maliyetle geri gelir.</p>
          <Link href="/audit" className="mt-8 inline-flex border border-[#d7ad4a] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#f5f1e8] transition-colors hover:bg-[#d7ad4a] hover:text-[#20211f]">Önce mağaza analizine bak →</Link>
        </section>

        <section className="mt-24 grid gap-12 border-t border-[#1c1b19] pt-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">Çalışma şeklimiz</span>
            <h2 className="mt-3 font-serif text-4xl tracking-tight">Kontrol sizde kalır.</h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-[#6e6a61]">
            <p>Reklam hesapları, Analytics ve alan adı sizin adınıza açılır ve sizde kalır. Ayrıldığımız gün her şeyi devralırsınız; kimseyi hesabına erişemediği için tutmuyoruz.</p>
            <p>Sözleşme ilk üç ay içindir, sonrası aylık devam eder. Üç ay, ilk ayın temizliği ile sonucun görünür hale gelmesi arasındaki en kısa dürüst süredir.</p>
            <p>Reklam bütçeniz doğrudan sizin kartınızdan gider, aradan geçmez.</p>
          </div>
        </section>

        <section className="py-24 text-center">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Hangi aşamada olduğunuzdan emin değil misiniz?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6e6a61]">Mevcut durumu görmeden kapsam konuşmak erken olur. Mağaza analizi ile başlayın.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/basvuru" className="bg-[#1c1b19] px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#fbfaf6] transition-colors hover:bg-[#a77b16]">Görüşme ayarla →</Link>
            <Link href="/audit" className="border border-[#1c1b19] px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#1c1b19] transition-colors hover:bg-[#1c1b19] hover:text-[#fbfaf6]">Önce mağaza analizine bak →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
