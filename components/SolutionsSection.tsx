import Reveal from "@/components/Reveal";

export interface Solution {
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    title: "Sıfırdan e-ticaret kurulumu ve mağaza yönetimi",
    description:
      "Küresel e-ticaret pazarında sepeti terk etme oranları %70'in üzerinde seyrederken, sadece göze hitap eden bir site kurmak potansiyel geliri masada bırakmak anlamına gelir. Biz; ziyaretçilerinizi müşteriye dönüştürmeye kilitlenmiş, stok yönetiminden hızlı ödeme (checkout) kurgularına kadar baştan uca optimize edilmiş kârlı bir altyapı inşa ediyoruz. Kusursuz bir alışveriş deneyimiyle sepetteki sızıntıları tamamen kapatıyor, e-ticaret mağazanızı ilk günden itibaren sağlam ve satışa hazır bir yapıya kavuşturuyoruz.",
  },
  {
    title: "Güncel ve optimal dijital pazarlama yöntemleriyle maksimum görünürlük",
    description:
      "Yeni müşteri edinme maliyetlerinin (CAC) her geçen yıl daha da yükseldiği bir ortamda, bütçenizi içgüdülere dayanarak rastgele kampanyalara harcamak işletmeniz için büyük bir risktir. Bu noktada tahmine değil, salt veriye dayanan performans pazarlaması (Performance Marketing) stratejilerimizle devreye girerek reklam yatırım getirinizi (ROAS) en üst seviyeye taşıyoruz. Amacımız sadece sitenize trafik çekmek değil; doğru mesajı, doğru kitleyle buluşturarak markanıza doğrudan ve ölçülebilir bir nakit akışı sağlamaktır.",
  },
  {
    title: "Sıfırdan web sitesi kurulumu ve tasarımı",
    description:
      "Tüketicilerin bir markaya dair ilk izlenimlerinin %94'ünün yalnızca saniyeler içinde web tasarımına bakarak oluştuğu bir gerçektir; bu yüzden siteniz sizin 7/24 çalışan en ikna edici satış personeliniz olmalıdır. Birbirinin kopyası hantal şablonlar kullanmak yerine, kaliteli bir Kullanıcı Deneyimi (UX) kurgusuyla dönüşüm oranlarını %400'e kadar artırabilen ve sayfa yüklenme hızından ödün vermeyen özel mimariler tasarlıyoruz. Mobil cihazlarda kusursuz çalışan ve markanızın DNA'sını yansıtan bu tasarımlarla, ziyaretçiye anında güven veriyor ve onları yorulmadan hedef tamamlama aşamasına taşıyoruz.",
  },
];

function SolutionItem({ solution, index }: { solution: Solution; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    // Giriş animasyonu li'de, hover transform'u iç div'de: framer'ın satır içi transform'u hover class'larını ezmesin
    <Reveal as="li" delay={index * 0.1}>
      <div className="group border border-ink bg-paper-light p-1.5 transition-transform duration-300 hover:-translate-y-1 hover:-rotate-[0.5deg] motion-reduce:transition-none">
        <article className="grid h-full grid-cols-1 gap-6 border border-line p-6 transition-colors duration-300 group-hover:border-accent md:p-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
              <span className="font-serif text-4xl text-gold md:text-5xl">{number}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-ink">Çözüm</span>
            </div>
            <h3 className="font-serif text-xl leading-snug tracking-tight text-ink md:text-2xl">
              {solution.title}
            </h3>
            <span aria-hidden="true" className="mt-5 block h-0.5 w-10 bg-accent transition-all duration-300 group-hover:w-20"></span>
          </div>
          <p className="text-sm leading-7 text-muted-ink lg:col-span-7 lg:border-l lg:border-line lg:pl-12">
            {solution.description}
          </p>
        </article>
      </div>
    </Reveal>
  );
}

export default function SolutionsSection() {
  return (
    <section aria-labelledby="solutions-heading" className="mx-auto max-w-6xl px-6 py-6">
      <div className="border-t border-ink p-8 md:p-10">
        <header className="mb-10 flex flex-col gap-4 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              ÇÖZÜMLERİMİZ
            </span>
            <h2 id="solutions-heading" className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl">
              Satış getiren dijital altyapıyı uçtan uca kuruyoruz.
            </h2>
          </div>
          <span className="font-serif text-sm text-muted-ink">
            {String(solutions.length).padStart(2, "0")} temel çözüm
          </span>
        </header>

        <ol className="flex flex-col gap-6">
          {solutions.map((solution, index) => (
            <SolutionItem key={solution.title} solution={solution} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
