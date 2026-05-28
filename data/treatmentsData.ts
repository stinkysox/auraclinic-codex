export type TreatmentCategory =
  | "Clinical Dermatology"
  | "Hair Treatments"
  | "Hair Transplant"
  | "Cosmetic Dermatology"
  | "Skin Surgeries"
  | "Pediatric Dermatology";

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

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=82`;

export const treatmentCategories: TreatmentCategory[] = [
  "Clinical Dermatology",
  "Cosmetic Dermatology",
  "Hair Treatments",
  "Hair Transplant",
  "Pediatric Dermatology",
  "Skin Surgeries"
];

export const treatmentsData: Treatment[] = [
  {
    slug: "acne",
    title: "Pimples / Acne",
    category: "Clinical Dermatology",
    excerpt: "Diagnosis-led acne care for active breakouts, marks, texture, and prevention.",
    image: img("photo-1596755389378-c31d21fd1273"),
    keywords: ["acne treatment Udaipur", "pimple dermatologist", "acne scars"],
    ...detail("Acne", "breakouts and acne marks")
  },
  {
    slug: "fungal-infections-ringworm",
    title: "Fungal Infections / Ringworm",
    category: "Clinical Dermatology",
    excerpt: "Targeted treatment for ringworm, itching, recurrence, and family spread prevention.",
    image: img("photo-1570172619644-dfd03ed5d881"),
    keywords: ["fungal infection treatment", "ringworm doctor Udaipur"],
    ...detail("Fungal Infection", "skin infection")
  },
  {
    slug: "vitiligo",
    title: "Vitiligo / Leucoderma",
    category: "Clinical Dermatology",
    excerpt: "Sensitive, evidence-aware care for white patches and pigment restoration planning.",
    image: img("photo-1584362917165-526a968579e8"),
    keywords: ["vitiligo treatment Udaipur", "leucoderma"],
    ...detail("Vitiligo", "pigment change")
  },
  {
    slug: "pigmentation-treatment",
    title: "Pigmentation Treatment",
    category: "Cosmetic Dermatology",
    excerpt: "Layered protocols for melasma, dark spots, sun damage, and uneven tone.",
    image: img("photo-1601612628452-9e99ced43524"),
    keywords: ["pigmentation treatment Udaipur", "dark spots"],
    ...detail("Pigmentation", "uneven tone")
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    category: "Cosmetic Dermatology",
    excerpt: "Medical-grade peels for clarity, glow, acne marks, and texture refinement.",
    image: img("photo-1620916566398-39f1143ab7be"),
    keywords: ["chemical peel Udaipur", "skin glow treatment"],
    ...detail("Chemical Peel", "skin renewal")
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    category: "Cosmetic Dermatology",
    excerpt: "Comfort-led laser hair reduction planned around skin tone and hair pattern.",
    image: img("photo-1571942676516-bcab84649e44"),
    keywords: ["laser hair removal Udaipur"],
    ...detail("Laser Hair Removal", "unwanted hair")
  },
  {
    slug: "botox",
    title: "Botox",
    category: "Cosmetic Dermatology",
    excerpt: "Subtle expression-softening treatments designed for natural-looking refinement.",
    image: img("photo-1556228720-195a672e8a03"),
    keywords: ["botox Udaipur", "anti aging dermatologist"],
    ...detail("Botox", "dynamic lines")
  },
  {
    slug: "fillers",
    title: "Fillers",
    category: "Cosmetic Dermatology",
    excerpt: "Elegant volume balancing, contour support, and facial rejuvenation planning.",
    image: img("photo-1607008829749-c0f284a4981f"),
    keywords: ["dermal fillers Udaipur"],
    ...detail("Fillers", "facial volume")
  },
  {
    slug: "prp-hair-treatment",
    title: "PRP / Platelet Rich Plasma",
    category: "Hair Treatments",
    excerpt: "Regenerative scalp therapy for selected patterns of hair thinning and shedding.",
    image: img("photo-1522335789203-aabd1fc54bc9"),
    keywords: ["PRP hair treatment Udaipur", "hair fall treatment"],
    ...detail("PRP Hair Treatment", "hair thinning")
  },
  {
    slug: "male-baldness",
    title: "Male Baldness",
    category: "Hair Treatments",
    excerpt: "Medical and procedural pathways for male pattern hair loss.",
    image: img("photo-1621605815971-fbc98d665033"),
    keywords: ["male baldness treatment", "hair loss Udaipur"],
    ...detail("Male Baldness", "male pattern hair loss")
  },
  {
    slug: "female-hair-fall",
    title: "Female Hair Fall",
    category: "Hair Treatments",
    excerpt: "Root-cause investigation and gentle plans for shedding, thinning, and density loss.",
    image: img("photo-1515377905703-c4788e51af15"),
    keywords: ["female hair fall treatment Udaipur"],
    ...detail("Female Hair Fall", "hair fall")
  },
  {
    slug: "hair-transplant",
    title: "Hair Transplant",
    category: "Hair Transplant",
    excerpt: "Natural hairline design and transplant planning for scalp restoration.",
    image: img("photo-1516975080664-ed2fc6a32937"),
    keywords: ["hair transplant Udaipur", "hair transplant surgeon"],
    ...detail("Hair Transplant", "hair restoration")
  },
  {
    slug: "beard-transplant",
    title: "Beard Transplant",
    category: "Hair Transplant",
    excerpt: "Density and shape correction for beard, moustache, and facial hair goals.",
    image: img("photo-1521590832167-7bcbfaa6381f"),
    keywords: ["beard transplant Udaipur"],
    ...detail("Beard Transplant", "facial hair density")
  },
  {
    slug: "wart-removal",
    title: "Wart Removal",
    category: "Skin Surgeries",
    excerpt: "Precise wart removal with attention to comfort, healing, and recurrence advice.",
    image: img("photo-1519494026892-80bbd2d6fd0d"),
    keywords: ["wart removal Udaipur"],
    ...detail("Wart Removal", "skin growth")
  },
  {
    slug: "skin-tag-removal",
    title: "Skin Tag Removal",
    category: "Skin Surgeries",
    excerpt: "Clean removal of skin tags and small benign lesions after clinical assessment.",
    image: img("photo-1581595220892-b0739db3ba8c"),
    keywords: ["skin tag removal Udaipur"],
    ...detail("Skin Tag Removal", "benign lesions")
  },
  {
    slug: "pediatric-atopic-dermatitis",
    title: "Atopic Dermatitis",
    category: "Pediatric Dermatology",
    excerpt: "Child-sensitive eczema care with barrier repair, triggers, and parent guidance.",
    image: img("photo-1542736667-069246bdbc74"),
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
