// Sitenin tam adresi: sitemap, robots ve metadata (canonical, Open Graph) için kullanılır.
// Öncelik: NEXT_PUBLIC_SITE_URL > Vercel'in otomatik verdiği production alan adı > localhost
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
export const siteName = "Dutch Angle";

// Sayfa kendi openGraph alanını tanımlarsa layout'takini tamamen ezer; bu yüzden ortak alanlar burada
export const openGraphDefaults = {
  type: "website",
  locale: "tr_TR",
  siteName,
} as const;
