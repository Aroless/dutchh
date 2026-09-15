export interface ServiceDetail {
  slug: string;
  categorySlug: string;
  categoryTitle: string;
  title: string;
  description: string;
  benefits: string;
  highlights: string[];
  scope: { title: string; desc: string }[];
  steps?: { number: string; title: string; desc: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  // E-TİCARET
  "e-ticaret-kurulumu": {
    slug: "e-ticaret-kurulumu",
    categorySlug: "e-ticaret",
    categoryTitle: "E-TİCARET",
    title: "E-Ticaret Kurulumu",
    description:
      "Sıfırdan milyon dolarlık cirolara uzanan yolda Shopify, WooCommerce veya özel altyapılarla dönüşüm oranı odaklı (CRO) mağazalar kuruyoruz. Teknik altyapı, Iyzico, Stripe gibi yerli ve küresel ödeme sistemleri ve kargo entegrasyonlarını ilk günden kusursuz kurgulayarak sepet terk oranlarını ortalama %65 seviyesine çekiyor, ilk günden satış yapmanızı sağlıyoruz. Mobil uyumlu, kullanıcı dostu ve %99.9 uptime garantili altyapılarla markanızı dijital dünyaya kazandırıyoruz.",
    benefits:
      "Teknik karmaşayla vakit kaybetmeden hızla satışa başlarsınız. Güvenli ödeme ve kusursuz mobil deneyim sayesinde ilk günden profesyonel bir marka imajı çizer, müşteri güvenini en üst seviyeye taşırsınız.",
    highlights: [
      "Mobil ve CRO Odaklı Mağaza Mimarisi",
      "Iyzico, Stripe & Kargo Entegrasyonları",
      "Özel Altyapı veya Shopify / WooCommerce",
      "Satışa Hazır Anahtar Teslim Kurulum",
    ],
    scope: [
      { title: "Altyapı Seçimi & Kurulum", desc: "Markanızın hacmine en uygun e-ticaret altyapısını belirliyor ve teknik kurulumları yapıyoruz." },
      { title: "Ödeme & Kargo Bağlantıları", desc: "Sanal pos, ödeme sistemleri ve kargo firmalarıyla entegrasyonları tamamlıyoruz." },
      { title: "UX/UI & CRO Tasarımı", desc: "Kullanıcıların kolayca satın alma yapabileceği yüksek dönüşümlü arayüzler tasarlıyoruz." },
      { title: "Ürün & Kategori Yapılandırması", desc: "Katalog mimarisini ve SEO uyumlu ürün sayfalarını eksiksiz kurguluyoruz." },
    ],
  },
  "e-ticaret-yonetimi": {
    slug: "e-ticaret-yonetimi",
    categorySlug: "e-ticaret",
    categoryTitle: "E-TİCARET",
    title: "E-Ticaret Yönetimi",
    description:
      "Günlük e-ticaret operasyonlarınızı veriye dayalı metriklerle yöneterek karlılığınızı maksimize ediyoruz. Stok yönetiminden sipariş takibine, iade süreçlerinden müşteri deneyimine kadar tüm süreçleri optimize ederken, ortalama sipariş değerini (AOV) %25 ila %40 oranında artırmak için akıllı çapraz satış (cross-sell) ve sepet aşaması upsell kurguları devreye alıyoruz. Operasyonel yükten tamamen kurtulup MER (Pazarlama Verimliliği Oranı) odaklı büyümenizi izliyorsunuz.",
    benefits:
      "Zaman ve insan kaynağı maliyetlerinden tasarruf edersiniz. Sipariş ve stok hataları sıfıra inerken, sepetteki her bir müşteriden elde ettiğiniz ortalama gelir artar ve operasyonel verimliliğiniz kalıcı olarak yükselir.",
    highlights: [
      "AOV (Ortalama Sipariş Değeri) Artırımı",
      "Sepet Terk Oranı Optimizasyonu",
      "Uçtan Uca Mağaza & Stok Operasyonu",
      "Veriye Dayalı Satış Analitiği",
    ],
    scope: [
      { title: "Operasyonel Mağaza Yönetimi", desc: "Ürün ekleme, stok takibi ve kampanya kurgularını günlük olarak yürütüyoruz." },
      { title: "Cross-Sell & Up-Sell Kurguları", desc: "Sepet ortalamasını yükseltecek çapraz satış stratejilerini uyguluyoruz." },
      { title: "Sepet Terk Analitiği", desc: "Sepeti terk eden kullanıcıları geri kazanmaya yönelik otomasyonlar kuruyoruz." },
      { title: "Sürekli CRO İyileştirmeleri", desc: "Kullanıcı davranışlarına göre site içi dönüşüm yollarını optimize ediyoruz." },
    ],
  },
  "pazaryeri-magaza-yonetimi": {
    slug: "pazaryeri-magaza-yonetimi",
    categorySlug: "e-ticaret",
    categoryTitle: "E-TİCARET",
    title: "Pazaryeri Mağaza Yönetimi",
    description:
      "Trendyol, Hepsiburada, Amazon, Etsy ve eBay gibi dev pazaryerlerinde mağazanızı en üst sıralara taşıyoruz. SEO uyumlu ürün listelemeleri, Buybox kazanma stratejileri ve pazaryeri içi (PPC) reklam optimizasyonlarıyla görünürlüğünüzü artırıyor; reklam harcamalarının getirisi (ROAS) oranını 4.5x ve üzerine çıkarıyoruz. Stok ve fiyat rekabetini sizin lehinize çevirerek pazar payınızı hızla büyütüyoruz.",
    benefits:
      "Milyonlarca aktif alıcının bulunduğu dev pazaryerlerinde ekibimiz sayesinde zahmetsizce var olursunuz. Yüksek komisyon ve rekabet baskısı altında kaybolmadan, karlı bir şekilde en çok satanlar listesine tırmanırsınız.",
    highlights: [
      "Buybox & Rekabetçi Fiyatlandırma Stratejileri",
      "Trendyol, Hepsiburada, Amazon & Etsy Yönetimi",
      "Pazaryeri İçi PPC Reklam Yönetimi",
      "SEO Odaklı Ürün Listeleme & Kataloglama",
    ],
    scope: [
      { title: "Mağaza Açılışı & Kurulum", desc: "Tüm pazaryerlerinde mağazalarınızı açıyor ve evrak/entegrasyon süreçlerini yönetiyoruz." },
      { title: "Buybox Stratejileri", desc: "Algoritmalara uygun rekabetçi fiyatlama ve stok taktikleriyle Buybox'ı kazanmanızı sağlıyoruz." },
      { title: "Pazaryeri İçi Reklamlar", desc: "Sponsorlu ürün ve mağaza içi reklam bütçelerinizi maksimum satışa dönüştürüyoruz." },
      { title: "SEO Uyumlu Ürün Detayları", desc: "Arama hacmi yüksek kelimelerle ürün başlık ve açıklamalarını optimize ediyoruz." },
    ],
  },

  // DİJİTAL PAZARLAMA
  "google-ads": {
    slug: "google-ads",
    categorySlug: "dijital-pazarlama",
    categoryTitle: "DİJİTAL PAZARLAMA",
    title: "Google Ads Yönetimi",
    description:
      "Google Arama, Alışveriş (Shopping) ve Performance Max kampanyalarıyla, satın alma niyeti en yüksek kullanıcıları doğrudan sitenize çekiyoruz. Negatif kelime optimizasyonları ve yapay zeka destekli teklif stratejileriyle tıklama başı maliyetleri (CPC) optimize ederken, elde ettiğimiz 5x ve üzeri ROAS oranları ile reklam bütçenizi en karlı şekilde yönetiyoruz.",
    benefits:
      "Tam ürününüzü arayan ve cüzdanı çıkmaya hazır kitleleri hedefleyerek boşa bütçe harcamazsınız. Harcadığınız her liranın karşılığını net bir şekilde ölçer, yatırımlarınızı doğrudan ciro artışına dönüştürürsünüz.",
    highlights: [
      "ROAS Odaklı Bütçe & Teklif Yönetimi",
      "Performance Max & Shopping Reklamları",
      "Satın Alma Niyeti Yüksek Kitle Hedefleme",
      "Negatif Kelime & Dönüşüm Optimizasyonu",
    ],
    scope: [
      { title: "Arama Ağı Reklamları", desc: "Doğrudan ürün veya hizmetinizi arayan müşterilere ilk sırada görünün." },
      { title: "Performance Max Kampanyaları", desc: "Yapay zeka destekli kampanyalarla tüm Google kanallarında dönüşüm yakalayın." },
      { title: "Yeniden Hedefleme (Remarketing)", desc: "Sitenizi ziyaret edip satın almayan kitleleri kararlı müşterilere dönüştürün." },
      { title: "Detaylı Raporlama", desc: "Hangi kelimeden ne kadar ciro elde ettiğinizi şeffaf analiz panelleriyle görün." },
    ],
  },
  "meta-ads": {
    slug: "meta-ads",
    categorySlug: "dijital-pazarlama",
    categoryTitle: "DİJİTAL PAZARLAMA",
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Facebook ve Instagram reklamlarında hedef kitlenizi demografik ve davranışsal olarak nokta atışı analiz ediyoruz. Yüksek dönüşüm getiren dinamik kreatifler (görsel/video kurguları) ve güçlü Hook/CTA metinleri kullanarak müşteri edinme maliyetinizi (CAC) %30'a varan oranlarda düşürüyoruz. Retargeting (yeniden hedefleme) ve benzer kitle (Lookalike) optimizasyonlarıyla satış hacminizi sürekli ölçeklendiriyoruz.",
    benefits:
      "Sosyal medya akışlarında markanızın fark edilmesini sağlarsınız. Doğru kitleye gösterilen etkileyici reklamlar sayesinde marka bilinirliğiniz artar ve sürekli yeni müşteriler kazanarak satış hattınızı sürekli beslersiniz.",
    highlights: [
      "Hook/CTA Odaklı Kreatif & Metin Kurguları",
      "Lookalike (Benzer) & Özel Hedef Kitleler",
      "Düşük CAC (Müşteri Edinme Maliyeti)",
      "Retargeting & Dinamik Ürün Reklamları",
    ],
    scope: [
      { title: "Kreatif & Metin Stratejisi", desc: "Kaydırmayı durduran (pattern-interrupt) görsel ve video içerik kurguları hazırlıyoruz." },
      { title: "Gelişmiş Kitle Hedefleme", desc: "A/B testleriyle markanıza en yüksek ROAS getiren kitle kombinasyonlarını buluyoruz." },
      { title: "Dinamik E-Ticaret Reklamları", desc: "Kullanıcılara daha önce inceledikleri ürünleri otomatik olarak gösteriyoruz." },
      { title: "Bütçe & Ölçekleme (Scaling)", desc: "Kârlı kampanyaları kârlılığını bozmadan yüksek bütçelere ölçekliyoruz." },
    ],
  },
  "tiktok-ads": {
    slug: "tiktok-ads",
    categorySlug: "dijital-pazarlama",
    categoryTitle: "DİJİTAL PAZARLAMA",
    title: "TikTok Ads Yönetimi",
    description:
      "Genç ve dinamik tüketici kitlesine hitap eden TikTok’ta, viral potansiyeli yüksek özgün video içerikleri ve Spark Ads kurguları üretiyoruz. Doğru hedefleme ve niş kitle optimizasyonları sayesinde marka bilinirliğinizi artırırken, düşük maliyetli tıklamalarla doğrudan dönüşüm odaklı satış hacmi yaratıyor, rakiplerinizin dijitalde bir adım önüne geçmenizi sağlıyoruz.",
    benefits:
      "Klasik reklamlara bağışıklık kazanmış yeni nesil tüketici gruplarına doğrudan ulaşırsınız. Düşük maliyetli gösterimler ve yüksek etkileşim oranları ile markanızı hızla büyüterek pazarın trend belirleyicisi olursunuz.",
    highlights: [
      "Spark Ads & TikTok Algoritma Uyumlu Kurgular",
      "Viral Potansiyelli UGC Video Reklamları",
      "Z Kuşağı & Yeni Nesil Tüketici Hedefleme",
      "Doğrudan Mağaza & Dönüşüm Reklamları",
    ],
    scope: [
      { title: "TikTok Tarzı Video Tasarımı", desc: "Platformun doğal yapısına uygun, reklam hissi vermeyen yüksek etkileşimli videolar kurguluyoruz." },
      { title: "Spark Ads & Influencer Reklamları", desc: "Organik gönderileri ve içerik üreticilerini reklam kampanyalarına dönüştürüyoruz." },
      { title: "E-Ticaret Kataloğu Entegrasyonu", desc: "TikTok içi alışveriş ve doğrudan siteye trafik çeken satış odaklı kurgular yapıyoruz." },
      { title: "Trend & Ses Analizi", desc: "Platformda yükselen akımları ve sesleri markanız için anında reklama dönüştürüyoruz." },
    ],
  },
  "seo": {
    slug: "seo",
    categorySlug: "dijital-pazarlama",
    categoryTitle: "DİJİTAL PAZARLAMA",
    title: "SEO (Arama Motoru Optimizasyonu)",
    description:
      "Google organik arama sonuçlarında ilk sayfada yer alarak reklam maliyetlerine bağımlılığınızı azaltıyoruz. Teknik SEO iyileştirmeleri, site hızı optimizasyonları ve derinlemesine anahtar kelime stratejileriyle organik trafiğinizi 6 ay içinde ortalama %120 oranında artırıyor; uzun vadeli, sürdürülebilir ve yüksek güvenilirlikli bir müşteri akışı inşa ediyoruz.",
    benefits:
      "Reklam bütçeniz bittiğinde dahi web sitenize sürekli ve ücretsiz müşteri akışı sağlamaya devam edersiniz. Sektörünüzde otorite ve güvenilir bir marka haline gelerek uzun vadeli müşteri maliyetlerinizi kalıcı olarak düşürürsünüz.",
    highlights: [
      "Sürekli & Reklamsız Organik Müşteri Akışı",
      "Teknik SEO & Hız Optimizasyonu",
      "Derinlemesine Anahtar Kelime & Rakip Analizi",
      "Otorite Artırıcı Backlink & İçerik Stratejisi",
    ],
    scope: [
      { title: "Teknik SEO Analizi", desc: "Site hızı, taranabilirlik, indeks sorunları ve mobil uyumluluğu mükemmel hale getiriyoruz." },
      { title: "Anahtar Kelime Mimarisi", desc: "Satın alma potansiyeli yüksek kelimeleri tespit edip site yapısını buna göre kurguluyoruz." },
      { title: "Site İçi (On-Page) SEO", desc: "Başlıklar, meta etiketler, URL yapıları ve görsel alt etiketlerini optimize ediyoruz." },
      { title: "Otorite & Backlink Yönetimi", desc: "Prestijli kaynaklardan organik bağlantılar alarak alan adı otoritenizi artırıyoruz." },
    ],
  },

  // MEDYA & TASARIM
  "bireysel-kurumsal-web-tasarim": {
    slug: "bireysel-kurumsal-web-tasarim",
    categorySlug: "medya-tasarim",
    categoryTitle: "MEDYA & TASARIM",
    title: "Bireysel ve Kurumsal Web Tasarım",
    description:
      "Kurumsal kimliğinizi ve prestijinizi dijital dünyaya en kusursuz şekilde yansıtan modern, hız optimizasyonlu (Google PageSpeed 90+) web siteleri tasarlıyoruz. Sektörel dinamiklerinize ve hedef kitlenizin beklentilerine tam uyum sağlayan özgün altyapılarla ilk 3 saniyede güven inşa ediyor, markanızı rakiplerimizden net bir şekilde ayırıyoruz.",
    benefits:
      "Dijital dünyadaki vitrininiz rakiplerinize kıyasla çok daha profesyonel ve güven veren bir görünüme kavuşur. Ziyaretçiler sitede daha uzun süre kalır ve kurumsal duruşunuz satışlara doğrudan olumlu yansır.",
    highlights: [
      "Prestijli & Özgün Kurumsal Tasarım Mimarisi",
      "％100 Mobil Uyumlu & Yıldırım Hızında",
      "SEO Altyapılı & Güvenlik Sertifikalı",
      "Kullanıcıyı Harekete Geçiren CTA Yapısı",
    ],
    scope: [
      { title: "Kurumsal Kimlik Analizi", desc: "Sektörünüzü ve rakiplerinizi inceleyip markanızı öne çıkaracak konsepti belirliyoruz." },
      { title: "Özel Arayüz Tasarımı", desc: "Hazır şablonlar yerine markanıza özel, modern ve prestijli sayfalar tasarlıyoruz." },
      { title: "Mobil & Hız Optimizasyonu", desc: "Tüm cihazlarda kusursuz görünen ve milisaniyeler içinde açılan altyapı kuruyoruz." },
      { title: "İçerik & SEO Entegrasyonu", desc: "Kurumsal metinlerinizi ve görsellerinizi Google standartlarına uygun yerleştiriyoruz." },
    ],
    steps: [
      { number: "01", title: "Keşif & Strateji", desc: "İhtiyaçlarınızı, hedef kitlenizi ve marka hedeflerinizi analiz ederek proje haritasını çıkarıyoruz." },
      { number: "02", title: "UX/UI Tasarım", desc: "Markanızın prestijini yansıtacak modern ve dönüşüm odaklı sayfa tasarımlarını Figma'da hazırlıyoruz." },
      { number: "03", title: "Kodlama & Test", desc: "Tasarımları en son web teknolojileriyle kodluyor, hız, güvenlik ve mobil testlerini tamamlıyoruz." },
      { number: "04", title: "Yayın & Destek", desc: "Projenizi canlıya alıyor, yönetim eğitimini veriyor ve sürekli teknik destek sağlıyoruz." },
    ],
  },
  "web-sitesi-kurulumu": {
    slug: "web-sitesi-kurulumu",
    categorySlug: "medya-tasarim",
    categoryTitle: "MEDYA & TASARIM",
    title: "Web Sitesi Kurulumu",
    description:
      "İşletmenizi internete taşıyan en sağlam ve ölçeklenebilir dijital altyapıyı kuruyoruz. SSL entegrasyonları, kusursuz mobil uyumluluk ve gelişmiş veritabanı altyapısıyla sitenizi gelecekteki büyüme ve trafik patlamalarına hazır hale getiriyor; teknik engellere takılmadan doğrudan ticarete başlamanızı sağlıyoruz.",
    benefits:
      "Altyapı sorunları, yavaş açılan sayfalar veya mobil uyumsuzluk yüzünden potansiyel müşteri kaybetmezsiniz. En baştan sağlam temeller üzerine kurulmuş, güvenli ve kesintisiz çalışan bir satış makinesine sahip olursunuz.",
    highlights: [
      "Güvenli, Hızlı & Ölçeklenebilir Web Altyapısı",
      "SSL, Domain & Hosting Kurulumları",
      "Teknik SEO & Google Arama Konsolu Entegrasyonu",
      "Anahtar Teslim Satışa & Yayına Hazır Sistem",
    ],
    scope: [
      { title: "Sunucu & Domain Yapılandırması", desc: "Yüksek hızlı sunucu, SSL sertifikası ve kurumsal e-posta kurulumlarını tamamlıyoruz." },
      { title: "CMS / Altyapı Kurulumu", desc: "İhtiyacınıza uygun içerik yönetim sistemini (CMS) kurup güvenliğini sağlıyoruz." },
      { title: "Form & İletişim Entegrasyonları", desc: "Müşteri taleplerinin doğrudan panelinize veya e-postanıza düşmesini sağlıyoruz." },
      { title: "Google & Analitik Bağlantıları", desc: "Google Analytics ve Search Console bağlantılarını eksiksiz yapıyoruz." },
    ],
    steps: [
      { number: "01", title: "Altyapı Planlama", desc: "Sitenizin ihtiyaç duyduğu sunucu, güvenlik ve veritabanı gereksinimlerini belirliyoruz." },
      { number: "02", title: "Kurulum & Yapılandırma", desc: "Teknik mimariyi kurup temel güvenlik, SSL ve hız ayarlarını eksiksiz yapıyoruz." },
      { number: "03", title: "Entegrasyonlar", desc: "Analitik araçları, iletişim formları ve gerekli eklentilerin entegrasyonunu tamamlıyoruz." },
      { number: "04", title: "Canlıya Alma", desc: "Tüm fonksiyon testlerinin ardından sitenizi kesintisiz şekilde erişime açıyoruz." },
    ],
  },
  "icerik-pazarlamasi": {
    slug: "icerik-pazarlamasi",
    categorySlug: "medya-tasarim",
    categoryTitle: "MEDYA & TASARIM",
    title: "İçerik Pazarlaması",
    description:
      "Hedef kitlenizin arama niyetine uygun blog yazıları, rehberler ve e-kitaplar kurgulayarak markanızı sektörün otoritesi haline getiriyoruz. Doğru yapılandırılmış içerik stratejisiyle kullanıcıların web sitenizde geçirdiği süreyi %45 artırıyor, organik arama hacmini genişleterek dönüşüm oranlarına (Conversion Rate) doğrudan katkı sağlıyoruz.",
    benefits:
      "Müşterilerinize ürün satmadan önce değer sunarak aranızda güven bağı kurarsınız. Tüketicilerin karar verme süreçlerinde ilk başvurduğu kaynak olur ve marka sadakatini artırırsınız.",
    highlights: [
      "Marka Güveni & Arama Motoru Otoritesi",
      "Satın Alma Kararını Etkileyen Stratejik İçerik",
      "Blog, E-Kitap & Rehber Üretimi",
      "Organik Trafik & Müşteri Bağlılığı",
    ],
    scope: [
      { title: "İçerik Stratejisi Haritası", desc: "Hedef kitlenizin sorularına cevap veren aylık içerik takvimleri oluşturuyoruz." },
      { title: "SEO Uyumlu Makale Üretimi", desc: "Arama motorlarında üst sıralara çıkan, okuyucuyu tutan zengin içerikler yazıyoruz." },
      { title: "Marka Hikayeciliği (Storytelling)", desc: "Markanızın değerlerini ve ürün faydalarını samimi bir dille aktarıyoruz." },
      { title: "Dönüşüm Odaklı İçerik Kurgusu", desc: "İçeriklerin içine yerleştirilen CTA butonlarıyla okuyucuları müşteriye dönüştürüyoruz." },
    ],
  },
};