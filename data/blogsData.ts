export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  publishedAt: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

const blogImage = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1500&q=82`;

export const blogCategories = [
  "Acne",
  "Hair Loss",
  "Anti Aging",
  "Laser Treatments",
  "Skin Care Tips",
  "Seasonal Skin Care",
  "Hair Transplant",
  "Pediatric Dermatology"
];

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

export const blogsData: BlogPost[] = [
  {
    slug: "early-signs-of-hair-loss",
    title: "10 Early Signs Of Hair Loss You Shouldn't Ignore",
    category: "Hair Loss",
    excerpt: "A calm guide to spotting pattern changes before hair loss becomes advanced.",
    image: blogImage("photo-1522335789203-aabd1fc54bc9"),
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
    image: blogImage("photo-1596755389378-c31d21fd1273"),
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
    image: blogImage("photo-1516975080664-ed2fc6a32937"),
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
    image: blogImage("photo-1507525428034-b723cf961d3e"),
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
    image: blogImage("photo-1601612628452-9e99ced43524"),
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
    image: blogImage("photo-1620916566398-39f1143ab7be"),
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
    image: blogImage("photo-1556228720-195a672e8a03"),
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
    image: blogImage("photo-1515377905703-c4788e51af15"),
    author: "Dr. Nidheesh Agarwal",
    readTime: "6 min read",
    publishedAt: "2026-04-18",
    sections: sections("Stress hair fall"),
    faqs: [{ question: "Can stress hair fall reverse?", answer: "Often it can improve once triggers are addressed, but diagnosis is important." }]
  }
];
