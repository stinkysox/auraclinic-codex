import { imagesData } from "@/data/imagesData";

export const galleryCategoryOptions = [
  { label: "Acne", slug: "acne" },
  { label: "Hair loss", slug: "hair-loss" },
  { label: "Pigmentation", slug: "pigmentation" },
  { label: "Hair transplant", slug: "hair-transplant" },
  { label: "Anti-aging", slug: "anti-aging" },
  { label: "Clinic interiors", slug: "clinic-interiors" },
  { label: "Procedures", slug: "procedures" }
] as const;

export type GalleryCategory = (typeof galleryCategoryOptions)[number]["label"];

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  before: string;
  after: string;
};

export const galleryTemplate: GalleryItem = {
  id: "new-gallery-item",
  category: "Acne",
  title: "New transformation title",
  before: "/images/gallery/new-before.jpg",
  after: "/images/gallery/new-after.jpg"
};

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    category: "Acne",
    title: "Texture refinement journey",
    before: imagesData.gallery.acneBefore,
    after: imagesData.gallery.acneAfter
  },
  {
    id: "g2",
    category: "Hair loss",
    title: "Density support plan",
    before: imagesData.gallery.hairBefore,
    after: imagesData.gallery.hairAfter
  },
  {
    id: "g3",
    category: "Pigmentation",
    title: "Tone clarity protocol",
    before: imagesData.gallery.pigmentationBefore,
    after: imagesData.gallery.pigmentationAfter
  },
  {
    id: "g4",
    category: "Clinic interiors",
    title: "Consultation suite",
    before: imagesData.gallery.clinicBefore,
    after: imagesData.gallery.clinicAfter
  },
  {
    id: "g5",
    category: "Anti-aging",
    title: "Soft rejuvenation",
    before: imagesData.gallery.antiAgingBefore,
    after: imagesData.gallery.antiAgingAfter
  }
];
