import { seoData } from "@/data/seoData";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoData.siteName,
    short_name: "AURA Clinic",
    description: seoData.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf6ef",
    theme_color: "#211c18",
    categories: ["health", "medical", "beauty"],
    lang: "en-IN"
  };
}
