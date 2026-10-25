import Link from "next/link";

export const metadata = {
  title: "E-Ticaret Performans Denetimi | Dutch Angle",
  description: "Mağazanızın en çok satış kaybettiren noktalarını ölçüm, ekran görüntüsü ve önceliklendirilmiş aksiyonlarla ortaya çıkarın.",
};

const auditAreas = [
  {
    title: "Ölçümleme ve veri sağlığı",
    text: "Panelinizdeki ciro ile Analytics ve reklam hesabındaki ciroyu yan yana koyuyoruz. Aradaki fark %10'u geçiyorsa son aylarda aldığınız bütün kararlar yanlış veriye dayanıyor demektir.",
  },
  {
    title: "Mağaza hızı ve ürün sayfaları",
    text: "Mobil ve masaüstü açılma süreleri, mobil uyumluluk, bozuk bağlantılar ve en çok satan üç ürününüzün sayfası: başlık, görsel, açıklama, yorum ve stok görünürlüğü.",
  },
  {
    title: "Ödeme ve kargo akışı",
    text: "Sepetten ödemeye kaç adım, üyeliksiz alışveriş var mı, kargo ücreti ilk nerede görünüyor, mobil ödemede ne kırılıyor.",
  },
  {
    title: "Reklam hesapları (Google ve Meta)",
    text: "Kampanya yapısı, boşa giden aramalar, marka aramalarına giden bütçe payı ve dönüşüm takibinin doğruluğu. Meta tarafında pixel ile dönüşüm API'sinin aynı satışı iki kez sayıp saymadığı, kitle çakışmaları ve katalog bağlantısı. Merchant Center'da reddedilen her ürünün ret sebebi ve çözümü.",
  },
  {
    title: "Rakip karşılaştırması",
    text: "Sizin belirlediğiniz aramada iki rakiple yan yana: reklam metni, fiyat, kargo, teslimat, ürün sayfası derinliği. Ekran görüntüsüyle.",
  },
];

const deliverables = [
  "Denetim raporu (PDF) — beş alan için puanlama, ölçüm çıktıları, ekran görüntüleri ve en çok para kaybettiren 6–8 somut bulgu",
  "Başlangıç ölçümleri tablosu — dönüşüm oranı, ortalama sepet, ciro ve reklam getirisinin bugünkü hali; üç ay sonra karşılaştırmak için",
  "Önceliklendirilmiş yapılacaklar listesi — her madde tahmini etki, zorluk, süre, kimin yapacağı ve nasıl doğrulanacağıyla",
  "45 dakikalık sunum görüşmesi ve teslim sonrası 14 gün soru hakkı",
];

const previewAreas = [
  ["Hız", "Mobil ve masaüstü açılma sürelerinizi ölçüp sonuçları olduğu gibi paylaşıyoruz."],
  ["Satın alma yolu", "Mobilden bir ürünü sepete atıp ödeme adımına kadar gidiyoruz. Kaç adım sürüyor, üye olmadan alışveriş yapılabiliyor mu, kargo ücreti ilk nerede görünüyor."],
  ["Ürün sayfaları", "Üç ürününüzü inceliyoruz; bir tanesi için mevcut başlığınızla önerdiğimiz başlığı yan yana koyuyoruz."],
  ["Rakip karşılaştırması", "Belirlediğiniz aramada Google'da nerede durduğunuzu iki rakiple birlikte, ekran görüntüsüyle gösteriyoruz."],
  ["Ölçüm etiketleri", "Analytics ve reklam etiketleriniz kurulu mu, mükerrer çalışıyor mu kontrol ediyoruz."],
  ["Zorunlu sayfalar", "ETBİS, mesafeli satış sözleşmesi, cayma hakkı, KVKK ve çerez onayı yerinde mi bakıyoruz."],
];

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-20 text-ink">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-flex text-xs font-bold uppercase tracking-[0.16em] text-muted-ink transition-colors hover:text-gold">
          ← Ana sayfaya dön
        </Link>

        <header className="mt-12 border-t border-ink pt-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">E-ticaret performans denetimi</span>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Siteniz ziyaretçi alıyor ama satış gelmiyorsa, bunun bir sebebi var. Gelin birlikte bulalım.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-ink md:text-lg">
            Mağazanıza ve reklam hesabınıza dışarıdan, dikkatli bir gözle bakıyoruz ve paranın nereden kaçtığını gösteriyoruz. Her detayı didiklemiyoruz, size en çok satış kaybettiren yerlere odaklanıyoruz. Tahminle konuşmuyoruz; ne gördüysek ekran görüntüsüyle gösteriyor, ne yapmanız gerektiğini de sade bir listeyle anlatıyoruz.
          </p>
          <Link href="/basvuru" className="mt-8 inline-flex bg-ink px-6 py-4 text-xs font-bold uppercase tracking-wider text-paper-light transition-colors hover:bg-gold">
            Denetim talep et →
          </Link>
        </header>

        <section className="mt-24 grid gap-12 border-t border-ink pt-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Kimin için?</span>
            <h2 className="mt-3 font-serif text-4xl tracking-tight">Veriniz varsa, net bir fotoğraf çekebiliriz.</h2>
          </div>
          <p className="text-base leading-8 text-muted-ink">
            Aylık en az 100 sipariş alan ya da Google reklamlarına aylık 30.000 TL+ harcayan mağazalar için. Trafiğiniz varken dönüşüm oranınız %1&apos;in altındaysa, reklam maliyetiniz artarken getiriniz düşüyorsa ya da ajans değiştirmeden önce bağımsız bir fotoğraf istiyorsanız doğru yerdesiniz.
            <br /><br />
            Henüz veri biriktirmemiş yeni mağazalar için denetim yerine doğrudan kurulum tarafına bakmanızı öneririz.
          </p>
        </section>

        <section className="mt-24 border-t border-ink pt-10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Denetim kapsamı</span>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">Neyi inceliyoruz?</h2>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
            {auditAreas.map((area, index) => (
              <article key={area.title} className="border-t border-line pt-5">
                <span className="font-serif text-2xl text-gold">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-ink">{area.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 border-l border-accent pl-5 text-sm leading-7 text-muted-ink">
            Ayrıca zorunlu sayfa ve bilgilendirmeleri (ETBİS, mesafeli satış sözleşmesi, cayma hakkı, KVKK, çerez onayı) tespit düzeyinde kontrol ediyoruz. Hukuki görüş vermiyoruz; eksik olanı gösteriyoruz.
            <br /><br />
            <strong className="font-semibold text-ink">Kapsam dışı:</strong> Teknik SEO (site haritası, indeksleme, schema işaretlemesi, iç linkleme), kataloğun tamamının ürün ürün taranması, TikTok reklam hesabı, e-posta pazarlaması, influencer çalışmaları. Bu denetim her şeye değil, en çok para kaybettiren yerlere bakar.
          </p>
        </section>

        <section className="mt-24 grid gap-12 border-t border-ink pt-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Teslimat</span>
            <h2 className="mt-3 font-serif text-4xl tracking-tight">Elinize ne geçiyor?</h2>
          </div>
          <div>
            <ul className="space-y-5">
              {deliverables.map((item, index) => (
                <li key={item} className="border-t border-line pt-4 text-sm leading-7 text-muted-ink">
                  <span className="mr-3 font-serif text-xl text-gold">0{index + 1}</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-7 text-muted-ink">Rapor sizindir. Bizimle çalışmasanız da kendi ekibiniz ya da başka bir ajans doğrudan uygulayabilir.</p>
          </div>
        </section>

        <section className="mt-24 border-t border-ink bg-night p-8 text-paper md:p-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">Süreç</span>
          <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">Nasıl ilerliyoruz?</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-faded">
            Teslim süresi 3 iş günü. Denetim sonrası bizimle yönetim hizmetine başlarsanız denetim ücretinin tamamını ilk ay faturanızdan düşüyoruz. Raporu teslim aldıktan sonraki 7 gün içinde işinize yaramadığını düşünürseniz ücreti iade ediyoruz; rapor yine sizde kalır.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-faded">
            Şifre vermeniz gerekmiyor — Google hesaplarına kullanıcı olarak ekleniyoruz, mağaza paneline salt okunur giriyoruz. Süreç bitince erişimleri kaldırabilirsiniz.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/basvuru" className="bg-gold-light px-5 py-3 text-xs font-bold uppercase tracking-wider text-night transition-colors hover:bg-[#f0d58e]">Denetim talep et</Link>
          </div>
        </section>

        <section className="mt-24 border-t border-ink pt-10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Ücretsiz ön tarama</span>
            <p className="mt-3 text-sm leading-7 text-muted-ink">Mağazanızı dışarıdan, bir müşterinin gördüğü gibi inceliyoruz — site adresi yeterli.</p>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2">
            {previewAreas.map(([title, text], index) => (
              <article key={title} className="border-t border-line pt-5">
                <span className="font-serif text-2xl text-gold">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-ink">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-8 border-t border-ink pt-8 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl">Elinize ne geçiyor?</h3>
              <p className="mt-3 text-sm leading-7 text-muted-ink">Tek sayfalık bir not, iki iş günü içinde e-postayla. En çok satış kaybettiren üç nokta, her biri sebebiyle birlikte. İsterseniz 15 dakikalık bir görüşmede birlikte üzerinden geçeriz.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl">Neleri kapsamıyor?</h3>
              <p className="mt-3 text-sm leading-7 text-muted-ink">Hesap erişimi gerektiren her şey. Reklam hesabınızın içi, Analytics verinizin doğruluğu, Merchant Center&apos;da reddedilen ürünlerin sebepleri, önceliklendirilmiş yapılacaklar listesi ve başlangıç ölçümleri tablosu detaylı denetime dahildir.</p>
            </div>
          </div>
          <div className="mt-8 border-l border-accent pl-5 text-sm leading-7 text-muted-ink">
            Türkiye&apos;de satış yapan e-ticaret siteleri için. Firma başına bir kez. Haftada sınırlı sayıda talep alıyoruz, sıraya göre ilerliyoruz.
          </div>
          <Link href="/basvuru" className="mt-8 inline-flex bg-ink px-6 py-4 text-xs font-bold uppercase tracking-wider text-paper-light transition-colors hover:bg-gold">Ön tarama iste →</Link>
        </section>

        <section className="py-24 text-center">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Reklama her ay harcadığınız bütçenin ne kadarı boşa gidiyor?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-ink">Bir denetim, üç ay boyunca yanlış yöne kürek çekmekten ucuzdur.</p>
          <Link href="/basvuru" className="mt-7 inline-flex bg-ink px-6 py-4 text-xs font-bold uppercase tracking-wider text-paper-light transition-colors hover:bg-gold">Denetim talep et →</Link>
        </section>
      </div>
    </main>
  );
}
