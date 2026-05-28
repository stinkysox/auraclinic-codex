import { imagesData } from "@/data/imagesData";

export const blogCategoryOptions = [
  { label: "Acne", slug: "acne", description: "Breakouts, acne marks, scars, oily skin, and long-term prevention." },
  { label: "Hair Loss", slug: "hair-loss", description: "Hair fall, thinning, PRP, scalp health, and hair density guidance." },
  { label: "Anti Aging", slug: "anti-aging", description: "Aging, skin tightening, Botox, fillers, and facial rejuvenation." },
  { label: "Laser Treatments", slug: "laser-treatments", description: "Laser hair removal, resurfacing, scars, pigmentation, and safety." },
  { label: "Skin Care Tips", slug: "skin-care-tips", description: "Daily routines, product choices, sunscreen, and barrier care." },
  { label: "Seasonal Skin Care", slug: "seasonal-skin-care", description: "Summer, monsoon, winter, humidity, sun, and Indian weather care." },
  { label: "Hair Transplant", slug: "hair-transplant", description: "Transplant planning, recovery, donor care, and natural hairline design." },
  { label: "Pediatric Dermatology", slug: "pediatric-dermatology", description: "Child skin care, rashes, birthmarks, itching, and parent guidance." }
] as const;

export type BlogCategory = (typeof blogCategoryOptions)[number]["label"];

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  publishedAt: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

export const blogCategories = blogCategoryOptions.map((category) => category.label);

const sections = (topic: string) => [
  {
    heading: "Why it matters",
    body: `${topic} is easier to treat when it is understood early. A dermatologist can separate cosmetic changes from medical triggers and create a plan that protects long-term skin and hair health.`
  },
  {
    heading: "What to look for",
    body: "Watch for persistence, recurrence, discomfort, sudden change, or visible impact on confidence. These are useful signals that a clinical consultation may help."
  },
  {
    heading: "How AURA approaches it",
    body: "AURA uses a consultation-first model: diagnosis, expectation-setting, treatment selection, aftercare, and review. The aim is progress that feels calm, safe, and believable."
  }
];

export const blogTemplate: BlogPost = {
  slug: "new-blog-slug",
  title: "New Blog Title",
  category: "Skin Care Tips",
  excerpt: "One sentence that explains why this article is useful.",
  image: "/images/blog/new-blog.jpg",
  author: "Dr. Nidheesh Agarwal",
  readTime: "5 min read",
  publishedAt: "2026-05-28",
  sections: [
    { heading: "Why it matters", body: "Write the first article section here." },
    { heading: "What to look for", body: "Write the second article section here." },
    { heading: "When to see a dermatologist", body: "Write the third article section here." }
  ],
  faqs: [{ question: "Common patient question?", answer: "Helpful answer for SEO and patient trust." }]
};

export const blogsData: BlogPost[] = [
  {
    slug: "early-signs-of-hair-loss",
    title: "10 Early Signs Of Hair Loss You Shouldn't Ignore",
    category: "Hair Loss",
    excerpt: "A calm guide to spotting pattern changes before hair loss becomes advanced.",
    image: imagesData.blogs.hairLossSigns,
    author: "Dr. Nidheesh Agarwal",
    readTime: "6 min read",
    publishedAt: "2026-01-12",
    sections: sections("Hair loss"),
    faqs: [{ question: "Is daily hair shedding normal?", answer: "Some shedding is normal, but persistent excess shedding or visible thinning needs evaluation." }]
  },
  {
    slug: "best-treatments-for-acne-scars",
    title: "Best Treatments For Acne Scars",
    category: "Acne",
    excerpt: "Understanding scars, texture, and why combination treatment often works best.",
    image: imagesData.blogs.acneScars,
    author: "AURA Editorial",
    readTime: "7 min read",
    publishedAt: "2026-01-18",
    sections: sections("Acne scars"),
    faqs: [{ question: "Can old acne scars improve?", answer: "Yes, many scars improve with a staged plan, though complete removal is not always realistic." }]
  },
  {
    slug: "prp-vs-hair-transplant",
    title: "PRP vs Hair Transplant",
    category: "Hair Transplant",
    excerpt: "A practical comparison between regenerative support and surgical restoration.",
    image: imagesData.blogs.prpVsTransplant,
    author: "Dr. Nidheesh Agarwal",
    readTime: "8 min read",
    publishedAt: "2026-02-03",
    sections: sections("Hair restoration"),
    faqs: [{ question: "Can PRP replace transplant?", answer: "PRP may support existing follicles, while transplant restores areas where follicles are no longer active." }]
  },
  {
    slug: "protect-skin-during-indian-summers",
    title: "How To Protect Skin During Indian Summers",
    category: "Seasonal Skin Care",
    excerpt: "Heat, humidity, sweat, and sun care advice for Indian weather.",
    image: imagesData.blogs.indianSummers,
    author: "AURA Editorial",
    readTime: "5 min read",
    publishedAt: "2026-02-20",
    sections: sections("Summer skin"),
    faqs: [{ question: "Is sunscreen needed indoors?", answer: "If you are near windows or exposed to visible light triggers, sunscreen can still be useful." }]
  },
  {
    slug: "what-causes-pigmentation",
    title: "What Causes Pigmentation?",
    category: "Skin Care Tips",
    excerpt: "Sun, hormones, inflammation, and product misuse can all influence uneven tone.",
    image: imagesData.blogs.pigmentationCauses,
    author: "Dr. Nidheesh Agarwal",
    readTime: "6 min read",
    publishedAt: "2026-03-05",
    sections: sections("Pigmentation"),
    faqs: [{ question: "Can pigmentation return?", answer: "Yes. Maintenance, sun protection, and trigger control are central to long-term results." }]
  },
  {
    slug: "chemical-peels-explained",
    title: "Chemical Peels Explained",
    category: "Laser Treatments",
    excerpt: "What peels do, who they suit, and how downtime is planned.",
    image: imagesData.blogs.chemicalPeels,
    author: "AURA Editorial",
    readTime: "5 min read",
    publishedAt: "2026-03-16",
    sections: sections("Chemical peels"),
    faqs: [{ question: "Do peels suit sensitive skin?", answer: "Some do, but selection should be medical and cautious." }]
  },
  {
    slug: "daily-skin-care-routine-oily-skin",
    title: "Daily Skin Care Routine For Oily Skin",
    category: "Skin Care Tips",
    excerpt: "A simple, dermatologist-minded routine that avoids over-stripping.",
    image: imagesData.blogs.oilySkin,
    author: "AURA Editorial",
    readTime: "4 min read",
    publishedAt: "2026-04-01",
    sections: sections("Oily skin"),
    faqs: [{ question: "Should oily skin skip moisturizer?", answer: "No. Lightweight moisturizers help protect the barrier." }]
  },
  {
    slug: "stress-affects-hair-fall",
    title: "How Stress Affects Hair Fall",
    category: "Hair Loss",
    excerpt: "Stress-related shedding, timelines, and when to seek help.",
    image: imagesData.blogs.stressHairFall,
    author: "Dr. Nidheesh Agarwal",
    readTime: "6 min read",
    publishedAt: "2026-04-18",
    sections: sections("Stress hair fall"),
    faqs: [{ question: "Can stress hair fall reverse?", answer: "Often it can improve once triggers are addressed, but diagnosis is important." }]
  }
];
