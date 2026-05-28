import { imagesData } from "@/data/imagesData";

export const doctorsData = [
  {
    slug: "dr-nidheesh-agarwal",
    name: "Dr. Nidheesh Agarwal",
    title: "Dermatologist, Cosmetologist and Hair Transplant Surgeon",
    image: imagesData.doctor.drNidheeshAgarwal,
    quote:
      "The best dermatology feels precise, honest, and deeply personal. Skin is medical, emotional, and social at the same time.",
    bio:
      "Dr. Nidheesh Agarwal leads AURA Skin & Hair Clinic with a diagnosis-first approach to clinical dermatology, cosmetic procedures, and hair restoration. His work blends medical clarity with a restrained aesthetic eye.",
    qualifications: ["MBBS", "MD Dermatology", "Advanced training in cosmetology", "Hair transplant surgery training"],
    certifications: ["Clinical dermatology updates", "Aesthetic medicine workshops", "Hair restoration programs"],
    conferences: ["National dermatology forums", "Cosmetic dermatology masterclasses", "Hair restoration meetings"],
    awards: ["Patient trust recognition", "Clinical excellence participation"],
    timeline: [
      { year: "2014", title: "Dermatology foundation", text: "Focused training in skin, hair, nail, and mucosal conditions." },
      { year: "2018", title: "Aesthetic expansion", text: "Advanced procedural dermatology, lasers, peels, injectables, and scars." },
      { year: "2022", title: "Hair restoration focus", text: "Refined planning for medical hair loss and transplant pathways." },
      { year: "Today", title: "AURA philosophy", text: "Ethical, modern, patient-first care in Udaipur." }
    ],
    specializations: ["Acne and scars", "Pigmentation", "Hair fall", "Hair transplant", "Lasers", "Pediatric dermatology"]
  }
];
