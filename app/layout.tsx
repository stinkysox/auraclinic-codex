import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { SiteShell } from "@/components/motion/site-shell";
import { clinicData } from "@/data/clinicData";

export const metadata: Metadata = {
  metadataBase: new URL("https://auraskinhairclinic.com"),
  title: {
    default: "AURA Skin & Hair Clinic | Dermatologist in Udaipur",
    template: "%s | AURA Skin & Hair Clinic"
  },
  description:
    "Premium dermatology, cosmetic skin care, PRP, hair transplant, acne, pigmentation and pediatric dermatology clinic in Sardarpura, Udaipur by Dr. Nidheesh Agarwal.",
  keywords: [
    "dermatologist in Udaipur",
    "skin clinic Udaipur",
    "hair transplant Udaipur",
    "acne treatment Udaipur",
    "PRP hair treatment Udaipur",
    "AURA Skin and Hair Clinic"
  ],
  openGraph: {
    title: "AURA Skin & Hair Clinic",
    description: "Modern dermatology with a human touch in Udaipur.",
    url: "https://auraskinhairclinic.com",
    siteName: "AURA Skin & Hair Clinic",
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinicData.name,
    medicalSpecialty: ["Dermatology", "Cosmetology", "Hair Transplant Surgery"],
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicData.address,
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN"
    },
    telephone: clinicData.phone,
    email: clinicData.email,
    physician: {
      "@type": "Physician",
      name: clinicData.doctor,
      medicalSpecialty: "Dermatology"
    }
  };

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
