import { blogsData } from "@/data/blogsData";
import { treatmentsData } from "@/data/treatmentsData";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://auraskinhairclinic.com";
  const staticRoutes = ["", "/about", "/doctor", "/treatments", "/gallery", "/blog", "/appointment", "/contact", "/faq", "/privacy", "/terms", "/disclaimer"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...treatmentsData.map((item) => ({ url: `${base}/treatments/${item.slug}`, lastModified: new Date() })),
    ...blogsData.map((item) => ({ url: `${base}/blog/${item.slug}`, lastModified: new Date(item.publishedAt) }))
  ];
}
