import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Panel ve API sayfaları arama sonuçlarında çıkmasın
      disallow: ["/admin", "/dashboard", "/login", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
