export const faqCategoryOptions = [
  "Acne",
  "Hair Loss",
  "Cosmetic Procedures",
  "Hair Transplant",
  "Pediatric Care"
] as const;

export type FaqCategory = (typeof faqCategoryOptions)[number];

export type FaqGroup = {
  category: FaqCategory;
  items: { question: string; answer: string }[];
};

export const faqTemplate: FaqGroup = {
  category: "Acne",
  items: [{ question: "New question?", answer: "New answer." }]
};

export const faqData: FaqGroup[] = [
  {
    category: "Acne",
    items: [
      { question: "Can acne be treated permanently?", answer: "Acne can be controlled very effectively, but long-term stability depends on triggers, skin type, hormones, and maintenance." },
      { question: "Will acne scar treatment hurt?", answer: "Most procedures are made comfortable with numbing and careful technique. Downtime varies by scar depth and method." }
    ]
  },
  {
    category: "Hair Loss",
    items: [
      { question: "When should I see a dermatologist for hair fall?", answer: "If shedding continues beyond a few weeks, density changes, or patches appear, a clinical evaluation is recommended." },
      { question: "Is PRP suitable for everyone?", answer: "PRP is useful for selected cases. Suitability depends on diagnosis, scalp condition, and hair follicle activity." }
    ]
  },
  {
    category: "Cosmetic Procedures",
    items: [
      { question: "Will cosmetic treatments look obvious?", answer: "AURA plans subtle, balanced outcomes. The aim is healthier confidence, not an artificial look." },
      { question: "Do peels make skin thin?", answer: "Medical peels are selected by depth and skin type. When done correctly, they support renewal rather than thinning the skin." }
    ]
  },
  {
    category: "Hair Transplant",
    items: [
      { question: "How natural can a hair transplant look?", answer: "Naturalness depends on hairline design, graft angle, donor planning, and surgical execution." },
      { question: "How long does recovery take?", answer: "Most people resume routine work quickly, but visible healing and hair growth follow a staged timeline." }
    ]
  },
  {
    category: "Pediatric Care",
    items: [
      { question: "Can children use steroid creams?", answer: "Some conditions need short, supervised courses. A dermatologist will choose potency and duration carefully." },
      { question: "Are birthmarks always concerning?", answer: "Many are harmless, but changing, large, or symptomatic marks should be evaluated." }
    ]
  }
];
