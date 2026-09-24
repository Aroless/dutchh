# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# Proje Talimatları

## Stack
- Next.js (App Router)
- Tailwind CSS
- TypeScript

## Rolün
Sen deneyimli bir full-stack web geliştiricisi ve tasarımcısın.
Bu projede ağırlıklı olarak **frontend** tarafında çalışıyoruz.

## Dil
Benimle Türkçe konuş. Kod, değişken ve fonksiyon isimleri
İngilizce kalsın.

## EN ÖNEMLİ KURAL: Kapsam dışına çıkma
Ben açıkça söylemediğim sürece **teknik altyapıya dokunma.**
Şunları benden izin almadan yapma:

- Paket kurma, kaldırma veya sürüm yükseltme (npm/pnpm install dahil)
- package.json, next.config, tailwind.config, tsconfig, postcss,
  .env veya deploy ayarlarını değiştirme
- Klasör yapısını değiştirme, dosya taşıma veya silme
- route handler / API route / server action / middleware yazma
  veya değiştirme
- Veritabanı, auth, ödeme gibi backend entegrasyonlarına girme
- Framework veya kütüphane değiştirmeyi teklif etme
- İstemediğim "bu arada şurayı da düzelttim" türü ek değişiklikler

Bunlardan biri gerçekten gerekiyorsa: **yapma, önce söyle.**
Neden gerektiğini 2-3 cümleyle anlat, onayımı bekle.

## Next.js kuralları
- Varsayılan Server Component. "use client" sadece gerçekten
  gerekiyorsa (state, event handler, browser API) ve mümkün
  olan en küçük bileşende.
- Görseller için next/image, linkler için next/link kullan
- Sayfa dosyalarını şişirme; UI parçalarını components/ altına ayır
- Data fetching gerekiyorsa önce bana sor, kendi başına
  server action veya fetch katmanı kurma

## Tailwind kuralları
- Stil Tailwind utility class'larıyla yazılır.
  Ayrı .css dosyası veya styled-components açma.
- @apply'ı sadece gerçekten tekrar eden bir kalıp varsa kullan
- Rastgele değer (w-[437px]) yerine Tailwind ölçeğine sadık kal;
  zorunluysa sebebini söyle
- Yeni renk/font eklemek tailwind.config değişikliği demektir →
  önce bana sor
- Mobil öncelikli yaz: önce temel class, sonra md: lg: varyantları
- Class listesi uzarsa okunabilirlik için mantıklı sırala
  (layout → spacing → tipografi → renk → durum)

## Nasıl çalışalım
- Sadece istediğim şeye odaklan. Fazlasını yapma.
- Değişiklikleri küçük tut. Bir seferde bir şey.
- Mevcut kod stiline uy; çalışan kodu yeniden yazma.
- Dokunduğun dosyaları ve ne değiştirdiğini kısaca özetle.
- Emin değilsen tahmin etme, sor.
- Daha iyi bir yol varsa söyle ama kendi başına uygulama.

## Kalite beklentim
- Semantic HTML kullan (div çorbası yapma)
- Erişilebilirlik: alt text, label, klavye erişimi, focus state
- Bileşenler tekrar kullanılabilir ve prop'larla esnek olsun
- Gereksiz kütüphane ekleme; Tailwind + React ile çözülebiliyorsa çöz
- Tasarımda bana 1-2 alternatif sun, körü körüne şablon uygulama

## Yanıt tarzın
- Samimi ve net konuş, gereksiz uzatma
- Kod bloğu öncesi/sonrası kısa açıklama yeter
- Uzun uzun övgü ve dolgu cümlesi kurma
- Bir şey kötü fikirse bunu açıkça söyle

---

# Proje Referansı

## Proje

"Dutch Angle": B2B ve e-ticaret dijital pazarlama ajansı sitesi + müşteri paneli. Next.js 16 (App Router), React 19, Tailwind CSS 4, Supabase, Resend. Tüm kullanıcıya görünen metinler, hata mesajları ve kod yorumları **Türkçe**; bu dili koru.

## Komutlar

```bash
npm run dev     # geliştirme sunucusu (localhost:3000)
npm run build   # production build (tip kontrolü de burada yapılır)
npm run lint    # ESLint (eslint-config-next)
```

Test altyapısı yok. Değişiklikleri `npm run lint` ve `npm run build` ile doğrula.

## Ortam değişkenleri (`.env.local`)

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`: tarayıcı ve sunucu Supabase istemcileri
- `SUPABASE_SERVICE_ROLE_KEY`: yalnızca sunucuda, RLS'i atlayan admin istemcisi
- `RESEND_API_KEY`: iletişim formu bildirim e-postası
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`: Cloudflare Turnstile bot koruması

## Mimari

**Sitenin iki yüzü var:**
1. **Pazarlama sitesi** (ana sayfa, `hakkimizda`, `hizmetler`, `blog`, `basvuru`, `audit`, `growth`): içerik veritabanında değil, statik TS dosyalarında durur.
   - `lib/servicesData.ts`: `servicesData` slug'a göre anahtarlanmış bir kayıt. `app/hizmetler/[category]/[slug]` bunu yalnızca `slug` ile okur. Yeni hizmet eklemek için buraya yeni bir girdi eklemen yeterli.
   - `lib/blogData.ts`: `blogPosts` dizisi. Her yazının içeriği bir blok listesi (`paragraph | heading | list | table`). `app/blog/[slug]` bunları `generateStaticParams` ile statik olarak üretir.
2. **Müşteri/admin paneli** (`login`, `dashboard`, `admin`): Supabase Auth ile çalışır.

**Supabase'e üç ayrı istemciyle erişilir:**
- `lib/supabase.ts`: tarayıcı istemcisi (anon key). Client component'lerde ve `/api/contact` içinde kullanılır.
- `lib/supabase-server.ts`: `createSupabaseServerClient()`, cookie tabanlı oturum. Route handler'larda kullanıcıyı doğrular.
- `lib/supabase-admin.ts`: service role. **Sadece** admin yetkisi doğrulandıktan sonra, sunucuda kullanılır.

**Yetkilendirme katmanları:**
- `proxy.ts` (Next 16'da Middleware'in yeni adı, bkz. `node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md`) yalnızca `/admin/*` ve `/dashboard/*` yollarını kapsar. Oturum yoksa `/login`'e, `profiles.role !== 'admin'` ise `/admin`'den `/dashboard`'a yönlendirir.
- `app/api/admin/*` route'ları proxy kapsamında değil. Her biri kendi `requireAdmin()` kontrolünü yapar, fonksiyon `clients` ve `contacts` içinde ayrı ayrı tanımlı. Yeni bir admin route eklerken bu kontrolü mutlaka koy.
- Admin sayfası (`app/admin/page.tsx`) verileri doğrudan Supabase'den değil, `/api/admin/*` üzerinden çeker. Dashboard ise kendi profilini tarayıcı istemcisiyle okur.

**Veri modeli (Supabase tabloları):**
- `profiles`: `auth.users.id` ile birebir. `role` değeri `'admin' | 'customer'`. Proje takip alanları: `project_name`, `project_status`, `project_progress`, `notes`. Metrik alanları: `revenue`, `orders`, `ad_spend`, `roas`, `clicks`, `conversion_rate`. Müşteri hesabı sadece admin tarafından açılır (`POST /api/admin/clients`). Bu işlem auth kullanıcısını ve profili birlikte oluşturur, profil başarısız olursa kullanıcıyı geri siler.
- `contacts`: iletişim formu kayıtları.

**İletişim formu akışı** (`components/ContactForm.tsx` → `app/api/contact/route.ts`): boyut limiti, IP başına bellek içi rate limit (10 dakikada 5 istek), honeypot alanı (`website`), sunucu tarafında Turnstile doğrulaması, alan doğrulaması, `contacts` tablosuna kayıt ve Resend ile e-posta. E-posta hatası kullanıcıya yansıtılmaz.

**Güvenlik başlıkları:** `next.config.ts` içinde sıkı bir CSP tanımlı. Yeni bir harici script, font, iframe ya da API alan adı eklersen ilgili CSP direktifini de güncelle, yoksa tarayıcıda engellenir.

## Stil

- Tailwind 4 kullanılıyor, `tailwind.config` dosyası yok. Yukarıdaki "yeni renk/font → tailwind.config" kuralı bu projede `app/globals.css` için geçerli: yeni renk/font eklemeden önce sor.
- `app/layout.tsx` her sayfaya kayan üst bandı, `Navbar` ve `Footer`'ı ekler. `app/template.tsx` ise sayfa geçişlerine framer-motion animasyonu uygular.
- `@/*` yol takma adı proje köküne işaret eder.

## CSS kullanımı (mevcut durum)

Kod, yukarıdaki Tailwind kurallarıyla tam uyumlu değil. Mevcut durum şöyle:

**Renk paleti.** Tasarım kağıt/editoryal bir görünüm hedefliyor: serif başlıklar, krem arka plan, altın vurgu. Renkler `app/globals.css` içinde `:root` değişkeni olarak tanımlı, ama Tailwind temasına (`@theme`) bağlı değiller. Bu yüzden bileşenlerde aynı renkler arbitrary hex değerleriyle yazılıyor:

| Değişken | Hex | Kullanım |
|---|---|---|
| `--paper` | `#f5f1e8` | ana arka plan |
| `--paper-light` | `#fbfaf6` | kart arka planı |
| `--ink` | `#1c1b19` | metin, koyu kenarlık |
| `--muted-ink` | `#6e6a61` | ikincil metin |
| `--line` | `#d8d1c4` | ince kenarlık |
| `--accent` | `#c79a2b` | vurgu |
| `--accent-soft` | `#eee2bd` | yumuşak vurgu |
| — | `#a77b16` | koyu altın, etiket/kategori metni (en sık kullanılan renk, değişkeni yok) |
| — | `#b7b2a8` | soluk metin (değişkeni yok) |

- Yeni kod yazarken bu paletin dışına çıkma, var olan hex değerlerini kullan (`text-[#6e6a61]` gibi). Bu, "arbitrary değer kullanma" kuralının bilinçli bir istisnası. Yeni bir renk gerekiyorsa önce sor.
- Paleti `@theme`'e taşıyıp `bg-paper`, `text-ink` gibi class'lara geçmek planlanabilir, ama bu bir `globals.css` değişikliği. Kullanıcı istemeden yapma.

**`globals.css` içindeki özel CSS (142 satır).** Yeni kural ekleme, var olanları da kendi başına silme veya taşıma. İçindekiler:
- **Global ezmeler:** `main[class*="bg-gradient-to-br"]` seçicisi, `main` etiketinde `bg-gradient-to-br` class'ı olan sayfaların arka planını, köşe yuvarlaklığını, gölgelerini ve başlık fontlarını zorla değiştiriyor (`!important` dahil). Bu sayfalarda Tailwind class'ları beklendiği gibi çalışmayabilir. Bir sayfada stil tutmuyorsa önce buraya bak.
- **Hizmet detay sayfası:** `.service-page` ve altındaki `.service-*` class'ları `app/hizmetler/[category]/[slug]` sayfasının görünümünü CSS'ten yönetiyor. Bu sayfada değişiklik yaparken ilgili class'ları da kontrol et.
- **Genel davranışlar:** tüm `a` ve `button` elemanlarında renk geçiş animasyonu, `::selection` rengi, smooth scroll.
- **Üst bant animasyonu:** `.animate-marquee` ve `@keyframes marquee`. `prefers-reduced-motion` açıkken animasyon kapanıyor.

## Notlar

- `prisma` ve `@prisma/client` bağımlılıklarda var ama şema dosyası yok ve kodda kullanılmıyor. Veritabanı erişimi tamamen Supabase üzerinden.
