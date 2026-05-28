import { imagesData } from "@/data/imagesData";

export const treatmentCategoryOptions = [
  {
    label: "Clinical Dermatology",
    slug: "clinical-dermatology",
    description: "Medical diagnosis and treatment for skin, nail, allergy, infection, and inflammatory concerns."
  },
  {
    label: "Cosmetic Dermatology",
    slug: "cosmetic-dermatology",
    description: "Refined aesthetic treatments for glow, texture, pigmentation, aging, and facial balance."
  },
  {
    label: "Hair Treatments",
    slug: "hair-treatments",
    description: "Dermatologist-led care for hair fall, thinning, dandruff, alopecia, and scalp health."
  },
  {
    label: "Hair Transplant",
    slug: "hair-transplant",
    description: "Surgical restoration for scalp, beard, moustache, eyebrow, and scar correction goals."
  },
  {
    label: "Pediatric Dermatology",
    slug: "pediatric-dermatology",
    description: "Gentle skin care for children, rashes, white spots, birthmarks, and infections."
  },
  {
    label: "Skin Surgeries",
    slug: "skin-surgeries",
    description: "Minor dermatologic procedures including wart, tag, corn, scar, and vitiligo surgeries."
  }
] as const;

export type TreatmentCategory = (typeof treatmentCategoryOptions)[number]["label"];

export type Treatment = {
  slug: string;
  title: string;
  category: TreatmentCategory;
  excerpt: string;
  image: string;
  keywords: string[];
  overview: string;
  causes: string[];
  symptoms: string[];
  process: string[];
  recovery: string;
  faqs: { question: string; answer: string }[];
};

const detail = (title: string, focus: string): Omit<Treatment, "slug" | "title" | "category" | "excerpt" | "image" | "keywords"> => ({
  overview: `${title} care at AURA begins with a careful diagnosis, skin or scalp mapping where needed, and a plan that respects your lifestyle, comfort, and long-term confidence.`,
  causes: [
    `Genetic, hormonal, environmental, or inflammatory triggers can influence ${focus}.`,
    "Indian weather, sun exposure, humidity, stress, and product habits may add to the concern.",
    "Some cases need medical investigation before cosmetic correction is considered."
  ],
  symptoms: [
    "Visible change in skin, hair, nails, or scalp texture",
    "Recurring irritation, marks, thinning, redness, or sensitivity",
    "Reduced confidence or discomfort in daily life"
  ],
  process: [
    "Detailed consultation and clinical photography where appropriate",
    "Diagnosis-led treatment selection with clear expectations",
    "Comfort-first procedure or prescription protocol",
    "Review visits to refine results and protect skin health"
  ],
  recovery: "Most plans are designed around minimal disruption. Procedure recovery, aftercare, sun protection, and follow-up timing are explained before treatment begins.",
  faqs: [
    {
      question: `Is ${title.toLowerCase()} treatment safe?`,
      answer: "Safety depends on diagnosis, suitability, and technique. AURA recommends treatment only after clinical evaluation."
    },
    {
      question: "How many sessions will I need?",
      answer: "Session count varies by severity, skin type, scalp condition, and desired outcome. Your plan is customized after consultation."
    },
    {
      question: "Can I return to work after treatment?",
      answer: "Many treatments allow a quick return to routine, while surgical and resurfacing procedures need planned recovery time."
    }
  ]
});

export const treatmentCategories = treatmentCategoryOptions.map((category) => category.label);

export const treatmentTemplate: Treatment = {
  slug: "new-treatment-slug",
  title: "New Treatment Name",
  category: "Clinical Dermatology",
  excerpt: "One sentence describing the treatment and why someone should book.",
  image: "/images/treatments/new-treatment.jpg",
  keywords: ["new treatment Udaipur", "skin clinic Udaipur"],
  overview: "Write a clear overview of what this treatment does and who it helps.",
  causes: ["Cause or trigger one", "Cause or trigger two", "Cause or trigger three"],
  symptoms: ["Symptom or concern one", "Symptom or concern two", "Symptom or concern three"],
  process: ["Consultation", "Diagnosis", "Treatment", "Follow-up"],
  recovery: "Explain downtime, aftercare, and follow-up in simple language.",
  faqs: [
    { question: "Is this treatment safe?", answer: "Answer in simple, medically responsible language." },
    { question: "How many sessions are needed?", answer: "Explain that it depends on diagnosis and severity." }
  ]
};

export const treatmentsData: Treatment[] = [
  {
    slug: "acne",
    title: "Pimples / Acne",
    category: "Clinical Dermatology",
    excerpt: "Diagnosis-led acne care for active breakouts, marks, texture, and prevention.",
    image: imagesData.treatments.acne,
    keywords: ["acne treatment Udaipur", "pimple dermatologist", "acne scars"],
    ...detail("Acne", "breakouts and acne marks")
  },
  {
    slug: "fungal-infections-ringworm",
    title: "Fungal Infections / Ringworm",
    category: "Clinical Dermatology",
    excerpt: "Targeted treatment for ringworm, itching, recurrence, and family spread prevention.",
    image: imagesData.treatments.fungalInfections,
    keywords: ["fungal infection treatment", "ringworm doctor Udaipur"],
    ...detail("Fungal Infection", "skin infection")
  },
  {
    slug: "vitiligo",
    title: "Vitiligo / Leucoderma",
    category: "Clinical Dermatology",
    excerpt: "Sensitive, evidence-aware care for white patches and pigment restoration planning.",
    image: imagesData.treatments.vitiligo,
    keywords: ["vitiligo treatment Udaipur", "leucoderma"],
    ...detail("Vitiligo", "pigment change")
  },
  {
    slug: "pigmentation-treatment",
    title: "Pigmentation Treatment",
    category: "Cosmetic Dermatology",
    excerpt: "Layered protocols for melasma, dark spots, sun damage, and uneven tone.",
    image: imagesData.treatments.pigmentation,
    keywords: ["pigmentation treatment Udaipur", "dark spots"],
    ...detail("Pigmentation", "uneven tone")
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    category: "Cosmetic Dermatology",
    excerpt: "Medical-grade peels for clarity, glow, acne marks, and texture refinement.",
    image: imagesData.treatments.chemicalPeels,
    keywords: ["chemical peel Udaipur", "skin glow treatment"],
    ...detail("Chemical Peel", "skin renewal")
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    category: "Cosmetic Dermatology",
    excerpt: "Comfort-led laser hair reduction planned around skin tone and hair pattern.",
    image: imagesData.treatments.laserHairRemoval,
    keywords: ["laser hair removal Udaipur"],
    ...detail("Laser Hair Removal", "unwanted hair")
  },
  {
    slug: "botox",
    title: "Botox",
    category: "Cosmetic Dermatology",
    excerpt: "Subtle expression-softening treatments designed for natural-looking refinement.",
    image: imagesData.treatments.botox,
    keywords: ["botox Udaipur", "anti aging dermatologist"],
    ...detail("Botox", "dynamic lines")
  },
  {
    slug: "fillers",
    title: "Fillers",
    category: "Cosmetic Dermatology",
    excerpt: "Elegant volume balancing, contour support, and facial rejuvenation planning.",
    image: imagesData.treatments.fillers,
    keywords: ["dermal fillers Udaipur"],
    ...detail("Fillers", "facial volume")
  },
  {
    slug: "prp-hair-treatment",
    title: "PRP / Platelet Rich Plasma",
    category: "Hair Treatments",
    excerpt: "Regenerative scalp therapy for selected patterns of hair thinning and shedding.",
    image: imagesData.treatments.prpHair,
    keywords: ["PRP hair treatment Udaipur", "hair fall treatment"],
    ...detail("PRP Hair Treatment", "hair thinning")
  },
  {
    slug: "male-baldness",
    title: "Male Baldness",
    category: "Hair Treatments",
    excerpt: "Medical and procedural pathways for male pattern hair loss.",
    image: imagesData.treatments.maleBaldness,
    keywords: ["male baldness treatment", "hair loss Udaipur"],
    ...detail("Male Baldness", "male pattern hair loss")
  },
  {
    slug: "female-hair-fall",
    title: "Female Hair Fall",
    category: "Hair Treatments",
    excerpt: "Root-cause investigation and gentle plans for shedding, thinning, and density loss.",
    image: imagesData.treatments.femaleHairFall,
    keywords: ["female hair fall treatment Udaipur"],
    ...detail("Female Hair Fall", "hair fall")
  },
  {
    slug: "hair-transplant",
    title: "Hair Transplant",
    category: "Hair Transplant",
    excerpt: "Natural hairline design and transplant planning for scalp restoration.",
    image: imagesData.treatments.hairTransplant,
    keywords: ["hair transplant Udaipur", "hair transplant surgeon"],
    ...detail("Hair Transplant", "hair restoration")
  },
  {
    slug: "beard-transplant",
    title: "Beard Transplant",
    category: "Hair Transplant",
    excerpt: "Density and shape correction for beard, moustache, and facial hair goals.",
    image: imagesData.treatments.beardTransplant,
    keywords: ["beard transplant Udaipur"],
    ...detail("Beard Transplant", "facial hair density")
  },
  {
    slug: "wart-removal",
    title: "Wart Removal",
    category: "Skin Surgeries",
    excerpt: "Precise wart removal with attention to comfort, healing, and recurrence advice.",
    image: imagesData.treatments.wartRemoval,
    keywords: ["wart removal Udaipur"],
    ...detail("Wart Removal", "skin growth")
  },
  {
    slug: "skin-tag-removal",
    title: "Skin Tag Removal",
    category: "Skin Surgeries",
    excerpt: "Clean removal of skin tags and small benign lesions after clinical assessment.",
    image: imagesData.treatments.skinTagRemoval,
    keywords: ["skin tag removal Udaipur"],
    ...detail("Skin Tag Removal", "benign lesions")
  },
  {
    slug: "pediatric-atopic-dermatitis",
    title: "Atopic Dermatitis",
    category: "Pediatric Dermatology",
    excerpt: "Child-sensitive eczema care with barrier repair, triggers, and parent guidance.",
    image: imagesData.treatments.pediatricDermatitis,
    keywords: ["pediatric dermatologist Udaipur", "atopic dermatitis child"],
    ...detail("Atopic Dermatitis", "childhood eczema")
  }
];

export const allServiceNames = [
  "Skin infections",
  "Dark spots",
  "Sunburn",
  "Skin allergies",
  "Psoriasis",
  "Eczema",
  "Urticaria / Hives",
  "Excessive sweating",
  "Mouth ulcers",
  "Drug reactions",
  "Itching",
  "Nail diseases",
  "Alopecia areata",
  "Dandruff",
  "Dry & brittle hair",
  "Split ends",
  "Scalp transplant",
  "Moustache transplant",
  "Eyebrow transplant",
  "Scar correction transplant",
  "Anti-aging",
  "Microdermabrasion",
  "Facial rejuvenation",
  "Skin tightening",
  "Scar reduction",
  "Cryotherapy",
  "Corn removal",
  "Acne scar surgeries",
  "Vitiligo surgeries",
  "White spots",
  "Diaper rash",
  "Birthmarks",
  "Pediatric skin infections"
];
