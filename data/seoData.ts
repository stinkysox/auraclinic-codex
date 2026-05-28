import { clinicData } from "@/data/clinicData";

export const seoData = {
  siteUrl: "https://auraskinhairclinic.com",
  siteName: clinicData.name,
  defaultTitle: "AURA Skin & Hair Clinic | Dermatologist in Udaipur",
  titleTemplate: "%s | AURA Skin & Hair Clinic",
  defaultDescription:
    "Premium dermatology, cosmetic skin care, PRP, hair transplant, acne, pigmentation and pediatric dermatology clinic in Sardarpura, Udaipur by Dr. Nidheesh Agarwal.",
  localKeywords: [
    "dermatologist in Udaipur",
    "best skin clinic in Udaipur",
    "hair transplant surgeon Udaipur",
    "acne treatment Udaipur",
    "pigmentation treatment Udaipur",
    "PRP hair treatment Udaipur",
    "cosmetologist in Udaipur",
    "pediatric dermatologist Udaipur",
    "laser hair removal Udaipur",
    "skin specialist Sardarpura"
  ],
  treatmentKeywords: [
    "clinical dermatology",
    "cosmetic dermatology",
    "hair fall treatment",
    "hair transplant",
    "chemical peel",
    "botox",
    "fillers",
    "wart removal",
    "skin allergy treatment",
    "eczema treatment",
    "psoriasis treatment",
    "vitiligo treatment"
  ],
  openGraphImage: "/og-image.jpg",
  businessSchema: {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinicData.name,
    description:
      "Premium dermatology, cosmetology and hair restoration clinic in Udaipur led by Dr. Nidheesh Agarwal.",
    medicalSpecialty: ["Dermatology", "Cosmetology", "Hair Transplant Surgery"],
    telephone: clinicData.phone,
    email: clinicData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicData.address,
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN"
    },
    areaServed: ["Udaipur", "Sardarpura", "Rajasthan"],
    priceRange: "$$",
    physician: {
      "@type": "Physician",
      name: clinicData.doctor,
      medicalSpecialty: "Dermatology"
    }
  }
};
