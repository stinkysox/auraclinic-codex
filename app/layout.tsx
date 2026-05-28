import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { SiteShell } from "@/components/motion/site-shell";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  metadataBase: new URL(seoData.siteUrl),
  title: {
    default: seoData.defaultTitle,
    template: seoData.titleTemplate
  },
  description: seoData.defaultDescription,
  keywords: [...seoData.localKeywords, ...seoData.treatmentKeywords],
  openGraph: {
    title: "AURA Skin & Hair Clinic",
    description: "Modern dermatology with a human touch in Udaipur.",
    url: seoData.siteUrl,
    siteName: seoData.siteName,
    locale: "en_IN",
    type: "website"
  },
  alternates: {
    canonical: seoData.siteUrl
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = seoData.businessSchema;

  return (
    <html lang="en-IN">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Navbar />
        <SiteShell>{children}</SiteShell>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
