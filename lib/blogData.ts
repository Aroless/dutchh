export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  blocks: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "operasyonel-verimlilik-ve-musteri-sadakati",
    category: "E-Ticaret Yönetimi",
    title: "Operasyonel Verimlilik ve Müşteri Sadakati (Retention): Neden Sadece Yeni Müşteri Bulmak Yetmez?",
    excerpt: "CAC enflasyonu çağında sürdürülebilir büyüme; yeni müşteri bulmaktan çok, mevcut müşteriyi elde tutan operasyon ve CRM mimarisiyle kurulur.",
    readTime: "8 dk okuma",
    blocks: [
      { type: "heading", text: "Giriş: CAC Enflasyonu ve İlk Sipariş Kârlılığının Ölümü" },
      { type: "paragraph", text: "Günümüz e-ticaret ekosisteminde yalnızca yeni müşteri kazanımına (Acquisition) odaklanan büyüme modelleri matematiksel olarak sürdürülemez hale gelmiştir. Artan dijital reklam rekabeti, ilk siparişte kârlılığı zorlaştırırken markaları satın alma frekansı yüksek sadık müşteri kohortları yaratmaya zorlamaktadır. Bir e-ticaret operasyonunun sürdürülebilirliği; reklam platformlarına dökülen bütçelerle değil, veri odaklı Müşteri Yaşam Boyu Değeri (LTV) optimizasyonu ve operasyonel kusursuzluk ile ölçülür." },
      { type: "heading", text: "1. LTV:CAC Rasyosu: E-Ticaretin Altın Oranı" },
      { type: "paragraph", text: "Finansal sürdürülebilirliğin temelinde LTV:CAC (Müşteri Yaşam Boyu Değeri / Müşteri Kazanım Maliyeti) rasyosu yatar. Sağlıklı bir büyüme için bu oranın minimum 3:1 seviyesinde olması gerekir. Örneğin müşteri edinmek için 100 TL harcanıyorsa, müşteri markada kaldığı süre boyunca en az 300 TL net kâr bırakmalıdır." },
      { type: "table", headers: ["Müşteri Türü", "CAC", "Dönüşüm Oranı", "LTV Katkısı", "Sepet Terk"], rows: [["Yeni Müşteri", "Çok yüksek", "%1 - %3", "Düşük (Tek sipariş)", "%70 - %80"], ["Mevcut Müşteri", "Çok düşük", "%60 - %70", "Yüksek (Çoklu sipariş)", "%10 - %20"]] },
      { type: "paragraph", text: "Yalnızca yeni müşteri bulmaya odaklanmak, suyu alttan sızdıran bir kovayı sürekli üstten doldurmaya benzer. Sızıntıyı durdurmanın, yani churn oranını düşürmenin yolu güçlü bir retention mimarisinden geçer." },
      { type: "heading", text: "2. CRM ve Otomasyon Mimarisi: Veriyi Gelire Dönüştürmek" },
      { type: "paragraph", text: "Tek seferlik müşteriyi sadık bir marka elçisine dönüştürmenin en uygun maliyetli yolu, sıfırıncı (0-party) ve birinci parti (1-party) veriyi işleyen pazarlama otomasyonlarıdır. Klaviyo, Omnisend veya ActiveCampaign gibi CRM altyapıları müşteri davranışlarını takip ederek kişiselleştirilmiş tetikleyiciler çalıştırır." },
      { type: "list", items: ["Satın Alma Sonrası Akışı: Ürün kullanım rehberleri, bakım bilgileri ve 15 gün sonra tetiklenen cross-sell teklifleri.", "Geri Kazanım Akışı: RFM analiziyle riskteki müşterilere kademeli %10, %15 ve %20 indirimler sunulması.", "Yeniden Tedarik Akışı: Kozmetik, FMCG ve takviye ürünlerinde bitiş tarihine göre otomatik SMS veya e-posta hatırlatmaları."] },
      { type: "heading", text: "3. Operasyonel Verimlilik: Unboxing ve Teslimat Hızı" },
      { type: "paragraph", text: "Müşteri sadakati yalnızca dijital bir metrik değildir; ürünün fiziksel dünya ile temas ettiği fulfillment anlarında da inşa edilir. API tabanlı kargo takip entegrasyonlarıyla proaktif SMS veya WhatsApp bildirimleri destek yükünü azaltır. Kişiselleştirilmiş teşekkür notları, numuneler ve QR kodlu dinamik indirimler ise unboxing deneyimini güçlendirerek tekrar satın alma ve UGC potansiyeli yaratır." },
    ],
  },
  {
    slug: "sifirdan-e-ticaret-sitesinde-gorunmez-hatalar",
    category: "E-Ticaret Altyapısı",
    title: "Sıfırdan E-Ticaret Sitesi Kurarken Yapılan Görünmez Hatalar ve Geleceğin Altyapı Standartları",
    excerpt: "Görsel tasarım tek başına yetmez. Performans, ödeme, lojistik ve ölçeklenebilirlik kararları dönüşümün gerçek temelini oluşturur.",
    readTime: "7 dk okuma",
    blocks: [
      { type: "heading", text: "Giriş: Görünür Tasarımın Arkasındaki Teknik İflas" },
      { type: "paragraph", text: "Bir e-ticaret projesinin başarısını yalnızca ön yüzdeki estetik tasarıma bağlamak, yoğun trafikte kilitlenen sunucular, yavaş ürün görselleri ve karmaşık ödeme adımları nedeniyle pazarlama bütçesini boşa çıkarabilir. Performans, lojistik ve ödeme katmanlarındaki görünmez hatalar dönüşüm hiyerarşisinin temelini oluşturur." },
      { type: "heading", text: "1. Performans ve Hız Darboğazları: Core Web Vitals İhmali" },
      { type: "paragraph", text: "Core Web Vitals metrikleri bir e-ticaret sitesinin kullanıcı deneyimini ve gelir tablosunu doğrudan etkiler. WebP ve AVIF yerine ham JPEG/PNG kullanmak, yüksek TTFB ve async/defer kullanılmadan yüklenen üçüncü taraf scriptler en sık görülen hız sorunlarıdır." },
      { type: "table", headers: ["Mobil yükleme süresi", "Beklenen etki"], rows: [["1 saniye", "Baz dönüşüm oranı"], ["3 saniye", "Bounce rate yaklaşık %32 artar"], ["5+ saniye", "Bounce rate yaklaşık %90 artar"]] },
      { type: "heading", text: "2. Altyapı Mimarisi: Monolitik mi, Headless mı?" },
      { type: "paragraph", text: "Geleneksel monolitik sistemlerde ön yüz ve arka yüz birbirine sıkı bağlıdır. Headless ve API-first mimariler ise mobil deneyim, entegrasyon ve yüksek trafik tarafında daha esnek bir ölçeklenme sunar." },
      { type: "table", headers: ["Altyapı parametresi", "Geleneksel monolitik", "Headless / API-first"], rows: [["Ön yüz ve arka yüz", "Sıkı bağlı", "Bağımsız"], ["Mobil performans", "Responsive tema", "PWA ile hızlı deneyim"], ["Entegrasyonlar", "Sınırlı eklentiler", "Webhook ve API senkronizasyonu"], ["Yüksek trafik", "Çökme riski yüksek", "Serverless ve CDN ölçeklenmesi"], ["Ödeme", "Kart / havale", "BNPL, cüzdan ve çoklu POS"]] },
      { type: "heading", text: "3. Ödeme ve Lojistik Katmanında Sürtünme" },
      { type: "paragraph", text: "Satın alma kararı ile ödemenin tamamlanması arasındaki adım sayısı arttıkça sepet terk oranı yükselir. One-click checkout, misafir kullanıcı seçeneği, gerçek zamanlı stok senkronizasyonu, adres doğrulama ve dinamik kargo API'leri bu sürtünmeyi azaltır." },
    ],
  },
  {
    slug: "geleneksel-reklamlar-neden-tukeniyor",
    category: "Dijital Pazarlama",
    title: "Geleneksel Reklamlar Neden Tükeniyor? 2026'da Dijital Pazarlamada Sürdürülebilir Büyümenin Sırrı",
    excerpt: "Reklam bütçesini artırmak artık tek başına büyüme sağlamıyor. UGC, yapay zeka kampanyaları ve sürekli kreatif testleri yeni standardı belirliyor.",
    readTime: "6 dk okuma",
    blocks: [
      { type: "heading", text: "Giriş: Statik Reklam Modellerinin İflası ve CAC Krizi" },
      { type: "paragraph", text: "Klasik banner reklamları, yapay kampanya görselleri ve aşırı kurumsal iletişim dili günümüz tüketicisinde reklam körlüğü yaratıyor. CPC, CPM ve CAC yükselirken yalnızca bütçe artışına dayalı büyüme stratejileri sürdürülemez hale geliyor." },
      { type: "heading", text: "1. Kreatif Paradigmasının Değişimi: UGC ve Mikro-Influencer" },
      { type: "paragraph", text: "Tüketiciler ürünün yalnızca teknik özelliklerini değil, gerçek hayattaki kullanımını ve diğer kullanıcıların deneyimini görmek istiyor. UGC ve mikro-influencer içerikleri organik akışa daha doğal biçimde entegre olur; izleme süresini artırarak reklam açık artırma maliyetlerini düşürebilir." },
      { type: "heading", text: "2. Veri Odaklı Yapay Zeka Kampanyaları" },
      { type: "paragraph", text: "Google Performance Max ve Meta Advantage+ kampanyaları binlerce veri noktasını analiz ederek doğru kişiye doğru içeriği göstermeye çalışır. Modern hesap mimarisinin üç prensibi geniş hedefleme, kreatif çeşitliliği ve doğru birinci parti dönüşüm sinyalleridir." },
      { type: "list", items: ["Geniş hedefleme: Algoritmanın öğrenme evresini dar hedeflemelerle kısıtlamayın.", "Kreatif çeşitliliği: Metin, görsel ve video varyasyonlarını düzenli olarak artırın.", "Sinyal beslemesi: CRM ve gelişmiş dönüşüm izlemeyle algoritmaya doğru veri gönderin."] },
      { type: "heading", text: "3. İçerik Fabrikası: Sürekli Kreatif Test Motoru" },
      { type: "paragraph", text: "Başarılı markalar ayda bir kampanya üretmek yerine kesintisiz bir kreatif üretim hattı kurar. Aynı videonun ilk üç saniyesini farklı hook senaryolarıyla test etmek, thumb-stop oranını ölçmek ve reklam yorgunluğunda yeni UGC içerikleri devreye almak sürdürülebilir performansın parçasıdır." },
    ],
  },
  {
    slug: "2026-e-ticaret-trendleri-ve-tuketici-davranislari",
    category: "E-Ticaret Trendleri",
    title: "2026 E-Ticaret Trendleri ve Tüketici Davranışları: Yapay Zeka Çağında Markalar Nasıl Hayatta Kalacak?",
    excerpt: "2026'da rekabet ürün çeşitliliğinden çok deneyim, hız, yapay zeka destekli keşif ve sürtünmesiz satın alma yolculuğu üzerinden şekilleniyor.",
    readTime: "9 dk okuma",
    blocks: [
      { type: "heading", text: "Giriş: Klasik E-Ticaret Mimarisi Neden Tıkandı?" },
      { type: "paragraph", text: "E-ticaret statik katalog dönemini geride bıraktı. Küresel pazar büyürken rekabetin ana ekseni ürün çeşitliliğinden deneyim ve hıza kayıyor. Mobil trafik, düşük dönüşüm oranları ve yüksek sepet terk oranları geleneksel altyapıların tüketici reflekslerine yanıt veremediğini gösteriyor." },
      { type: "heading", text: "1. SEO'dan GEO'ya: Arama Alışkanlıklarında Eksen Kayması" },
      { type: "paragraph", text: "Üretken yapay zeka sistemleri ürün keşfinin ilk adımı haline geliyor. GEO, içeriklerin yalnızca anahtar kelime eşleşmesiyle değil, konu otoritesi ve anlamsal bütünlük üzerinden anlaşılmasını hedefler." },
      { type: "list", items: ["Entity tabanlı içerik mimarisi ve topic cluster yapısı kurun.", "Ürün, stok ve yorum verilerini JSON-LD ile yapılandırın.", "Site içi aramayı anlamsal ve vektör tabanlı arama yönünde geliştirin."] },
      { type: "heading", text: "2. Sosyal Ticaret ve Mobil Dönüşüm Uçurumu" },
      { type: "paragraph", text: "Instagram ve TikTok artık yalnızca reklam mecrası değil, doğrudan satış kanalıdır. Mobil checkout'ta tek tıkla ödeme, misafir kullanıcı ve düşük LCP süresi temel standartlar haline geliyor." },
      { type: "table", headers: ["Metrik", "Masaüstü", "Mobil", "Hedef"], rows: [["Ortalama dönüşüm oranı", "%3,7", "%1,9", "> %3,5 mobil"], ["Sepeti terk etme", "%66,4", "%80,0", "< %60"], ["Trafik payı", "%25", "%75", "Omnichannel"]] },
      { type: "heading", text: "3. Yapay Zeka Destekli Kişiselleştirme" },
      { type: "paragraph", text: "Kullanıcının geçmiş satın alma verisi kadar, mevcut oturumdaki tıklama hızı, kaydırma derinliği ve incelediği varyasyonlar da önemlidir. Dinamik ana sayfa düzenleri, kişiselleştirilmiş teklifler ve anlamsal öneri motorları dönüşüm yolculuğunu kısaltır." },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
