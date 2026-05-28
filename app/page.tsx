import { Hero } from "@/components/home/hero";
import { BlogPreview, ClinicExperience, DoctorPreview, FeaturedTreatments, FinalCta, Testimonials, Transformations, WhyChooseUs } from "@/components/home/home-sections";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedTreatments />
      <Transformations />
      <DoctorPreview />
      <Testimonials />
      <ClinicExperience />
      <BlogPreview />
      <FinalCta />
    </>
  );
}
