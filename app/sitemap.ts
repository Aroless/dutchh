import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";
import { servicesData } from "@/lib/servicesData";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/growth`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/audit`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/basvuru`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = Object.values(servicesData).map((service) => ({
    url: `${siteUrl}/hizmetler/${service.categorySlug}/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
