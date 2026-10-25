# Dutch Angle

B2B ve e-ticaret markalarına dijital pazarlama hizmeti veren Dutch Angle'ın web sitesi ve müşteri paneli.

- **Pazarlama sitesi:** ana sayfa, hizmet detay sayfaları, blog, büyüme (growth), mağaza denetimi (audit), başvuru formu
- **Müşteri paneli** (`/dashboard`): müşterinin proje durumu ve reklam metrikleri
- **Admin paneli** (`/admin`): iletişim talepleri, müşteri hesabı açma ve metrik güncelleme

## Teknolojiler

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Supabase (veritabanı + giriş) · Resend (e-posta) · Cloudflare Turnstile (bot koruması)

## Kurulum

```bash
npm install
npm run dev        # http://localhost:3000
```

Proje kökünde bir `.env.local` dosyası olmalı:

| Değişken | Ne işe yarar |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase proje adresi |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase herkese açık anahtar (tarayıcı) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase yetkili anahtar (yalnızca sunucu, asla tarayıcıya gitmez) |
| `RESEND_API_KEY` | İletişim formu bildirim e-postaları |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile site anahtarı (form) |
| `TURNSTILE_SECRET_KEY` | Turnstile gizli anahtar (sunucu doğrulaması) |
| `NEXT_PUBLIC_SITE_URL` | *İsteğe bağlı.* Sitenin tam adresi (`https://...`). Sitemap, robots ve paylaşım önizlemelerinde kullanılır. Vercel'de verilmezse production alan adı otomatik alınır. |

## Komutlar

```bash
npm run dev     # geliştirme sunucusu
npm run build   # production build (tip kontrolü dahil)
npm run start   # build alınmış siteyi çalıştırır
npm run lint    # ESLint
```

## Klasör yapısı

```
app/            Sayfalar ve API route'ları (App Router)
  api/contact   İletişim formu: doğrulama, Supabase kaydı, e-posta
  api/admin     Admin paneli API'leri (admin yetkisi kontrol edilir)
components/     Ortak arayüz bileşenleri (Navbar, Footer, ContactForm ...)
lib/            İçerik verileri (hizmetler, blog), Supabase istemcileri, site ayarları
proxy.ts        /admin ve /dashboard için giriş kontrolü
public/         Görseller ve ikonlar
```

## İçerik güncelleme

- **Hizmetler:** `lib/servicesData.ts` içine yeni bir kayıt eklemek yeterli. Sayfa, sitemap ve arama motoru başlıkları otomatik oluşur.
- **Blog yazıları:** `lib/blogData.ts` içindeki `blogPosts` listesine eklenir.
- **Renkler:** `app/globals.css` içindeki palet (`bg-paper`, `text-ink`, `text-gold` ...). Yeni renkleri buraya ekleyin.

## Yayına alma

Site Vercel'de çalışacak şekilde hazırlandı. Depo Vercel'e bağlıysa `main` dalına yapılan her push otomatik deploy tetikler. Ortam değişkenlerinin Vercel proje ayarlarında da tanımlı olması gerekir.
