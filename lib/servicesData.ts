export interface ServiceDetail {
  slug: string;
  categorySlug: string;
  categoryTitle: string;
  title: string;
  description: string;
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
      "Sıfırdan milyon dolarlık cirolara uzanan yolda markanızı dijital dünyaya kusursuz şekilde taşıyoruz. Shopify, WooCommerce veya özel altyapılarla; ödeme sistemleri (Iyzico, Stripe vb.), kargo entegrasyonları ve mobil uyumlu, yüksek dönüşüm oranına (CRO) sahip mağazalar kuruyoruz.",
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
      "E-ticaret sitenizin günlük operasyonel yükünü omuzlarınızdan alıyoruz. Ürün yönetiminden stok takibine, sipariş süreçlerinden müşteri deneyimine kadar tüm mağaza operasyonlarını profesyonelce yönetiyoruz.",
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
      "Trendyol, Hepsiburada, Amazon, Etsy ve eBay gibi dev pazaryerlerinde varlığınızı güçlendiriyor, satışlarınızı ivmelendiriyoruz. Mağaza kurulumu, SEO odaklı ürün listelemeleri ve pazaryeri içi reklam yönetimini uçtan uca üstleniyoruz.",
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
      "Google’ın arama, alışveriş (Shopping) ve Performance Max ağlarında potansiyel müşterileriniz tam arama yaparken karşınıza çıkıyoruz. ROAS odaklı bütçe yönetimiyle reklam harcamalarınızı kârlılığa dönüştürüyoruz.",
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
      "Facebook ve Instagram'ın devasa kullanıcı havuzunda, markanız için en kârlı kitleleri hedefliyoruz. Yüksek dönüşüm getiren kreatifler ve güçlü metinlerle sürdürülebilir müşteri edinme maliyetleri sağlıyoruz.",
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
      "Genç ve dinamik tüketici kitlesinin buluşma noktası TikTok’ta, markanızı viral potansiyeli yüksek, özgün video içerikleriyle öne çıkarıyoruz. Doğrudan satış odaklı dönüşümler elde ediyoruz.",
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
      "Google’da organik aramalarda zirveye yerleşerek reklam maliyetine katlanmadan sürekli ve sürdürülebilir trafik elde edin. Teknik SEO ve yüksek kaliteli içerik optimizasyonları ile sitenizi Google'ın favorisi yapıyoruz.",
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
  "icerik-pazarlamasi": {
    slug: "icerik-pazarlamasi",
    categorySlug: "dijital-pazarlama",
    categoryTitle: "DİJİTAL PAZARLAMA",
    title: "İçerik Pazarlaması",
    description:
      "Müşterilerinizin güvenini kazanmak, sadakat yaratmak ve arama motorlarında otorite olmak için stratejik içerikler üretiyoruz. Blog yazıları, e-kitaplar ve marka hikayenizle satışları olumlu yönde yönlendiriyoruz.",
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

  // MEDYA & TASARIM
  "sosyal-medya-yonetimi": {
    slug: "sosyal-medya-yonetimi",
    categorySlug: "medya-tasarim",
    categoryTitle: "MEDYA & TASARIM",
    title: "Sosyal Medya Yönetimi",
    description:
      "Sosyal medya hesaplarınızı sadece paylaşım yapılan mecralar olmaktan çıkarıp aktif birer satış ve topluluk kanalına dönüştürüyoruz. Özgün tasarımlar, etkileyici metinler ve trend içerik planlamaları sunuyoruz.",
    highlights: [
      "Estetik & Prestijli Görsel Tasarım Dili",
      "Satış & Topluluk Odaklı İletişim",
      "Aylık Trend & Reels İçerik Planlaması",
      "Aktif Moderasyon & Takipçi Etkileşimi",
    ],
    scope: [
      { title: "Görsel Kimlik & Grid Tasarımı", desc: "Markanızın duruşuna uygun, ilk bakışta güven veren profiller tasarlıyoruz." },
      { title: "Reels & Video Kurguları", desc: "Algoritmanın öne çıkardığı dinamik Reels ve video içerikleri üretiyoruz." },
      { title: "İçerik Takvimi & Metin Yazarlığı", desc: "Her ay düzenli olarak onayınıza sunulan stratejik paylaşımlar hazırlıyoruz." },
      { title: "Topluluk Yönetimi", desc: "Gelen mesaj ve yorumlara markanızın diliyle hızlı yanıt vererek bağı güçlendiriyoruz." },
    ],
  },
  "ui-ux": {
    slug: "ui-ux",
    categorySlug: "medya-tasarim",
    categoryTitle: "MEDYA & TASARIM",
    title: "UI & UX Tasarımı",
    description:
      "Kullanıcı deneyimi (UX) ve arayüz tasarımı (UI) ile ziyaretçilerinizi sadık müşterilere dönüştüren dijital deneyimler tasarlıyoruz. Web sitenizin kullanılabilirliğini optimize ediyoruz.",
    highlights: [
      "CRO (Dönüşüm) Odaklı Kullanıcı Deneyimi",
      "Sürtünmesiz Sepet & Ödeme Adımları",
      "Modern, Piksel Kusursuzluğunda UI Tasarımı",
      "Figma Prototipleme & Mobil Öncelikli Mimariler",
    ],
    scope: [
      { title: "Kullanıcı Araştırması & Tel Çerçeve (Wireframe)", desc: "Kullanıcıların sitedeki gezinme alışkanlıklarını analiz edip iskelet yapıyı kuruyoruz." },
      { title: "Arayüz Tasarımı (UI)", desc: "Marka kimliğinize uygun, modern ve göz yormayan piksel mükemmelliğinde tasarımlar hazırlıyoruz." },
      { title: "UX Testleri & Sürtünme Analizi", desc: "Satın alma adımlarındaki takılmaları tespit edip akışı en basite indiriyoruz." },
      { title: "Yazılım Teslim Formatı (Hand-off)", desc: "Yazılımcıların birebir uygulayabileceği Figma dökümantasyonu sunuyoruz." },
    ],
  },
  "bireysel-kurumsal-web-tasarim": {
    slug: "bireysel-kurumsal-web-tasarim",
    categorySlug: "medya-tasarim",
    categoryTitle: "MEDYA & TASARIM",
    title: "Bireysel ve Kurumsal Web Tasarım",
    description:
      "Bireysel imajınızı veya kurumsal kimliğinizi dijital dünyada en prestijli şekilde yansıtacak modern, hız optimizasyonlu ve mobil uyumlu web siteleri tasarlıyoruz. Güven veren özel çözümler sunuyoruz.",
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
      "Fikrinizi veya mevcut işletmenizi internete taşıyacak en doğru web altyapısını kuruyoruz. Güvenli, hızlı, SEO uyumlu ve ölçeklenebilir web sitenizle dijital dünyadaki kalıcı üssünüzü oluşturuyoruz.",
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
};