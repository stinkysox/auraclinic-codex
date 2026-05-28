import { PageHero } from "@/components/shared/page-hero";
import { TreatmentExplorer } from "@/components/treatments/treatment-explorer";

export default function TreatmentsPage() {
  return (
    <>
      <PageHero eyebrow="Treatments" title="A complete skin and hair treatment explorer." text="Search clinical dermatology, cosmetic procedures, hair restoration, pediatric care, and minor skin surgeries." />
      <TreatmentExplorer />
    </>
  );
}
