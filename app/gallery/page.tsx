import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageHero } from "@/components/shared/page-hero";

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="A cinematic archive of transformations and spaces." text="Before-after comparisons, interiors, procedures, and patient journeys, ready for real case photography." />
      <GalleryGrid />
    </>
  );
}
