"use client";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { blogsData } from "@/data/blogsData";
import { clinicData } from "@/data/clinicData";
import { doctorsData } from "@/data/doctorsData";
import { galleryData } from "@/data/galleryData";
import { imagesData } from "@/data/imagesData";
import { testimonialsData } from "@/data/testimonialsData";
import { treatmentsData } from "@/data/treatmentsData";
import { ArrowRight, BadgeCheck, Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-aura">
        <SectionHeading
          eyebrow="Why AURA"
          title="Clinical clarity, held with warmth."
          text="Every detail is designed to reduce uncertainty: careful diagnosis, honest options, modern technology, and a treatment plan that feels personal."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="sticky top-28 overflow-hidden rounded-[2.5rem] shadow-aura">
              <Image
                src={imagesData.clinic.consultationRoom}
                alt="Premium clinical room"
                width={900}
                height={1100}
                className="h-[620px] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="space-y-8 lg:col-span-3">
            {clinicData.values.map((value, index) => (
              <Reveal key={value} delay={index * 0.05}>
                <div className="group grid gap-6 border-t border-charcoal/10 py-8 md:grid-cols-[120px_1fr]">
                  <p className="font-serif text-5xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-serif text-4xl text-charcoal">
                      {value}
                    </h3>
                    <p className="mt-4 max-w-2xl text-charcoal/62">
                      AURA’s approach is measured and transparent, pairing
                      medical reasoning with a premium, calm clinic experience.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedTreatments() {
  const featured = treatmentsData.filter((t) =>
    [
      "acne",
      "prp-hair-treatment",
      "hair-transplant",
      "botox",
      "pigmentation-treatment",
      "laser-hair-removal",
    ].includes(t.slug),
  );
  return (
    <section className="overflow-hidden bg-charcoal py-24 text-porcelain md:py-32">
      <div className="container-aura">
        <SectionHeading
          eyebrow="Featured treatments"
          title="Precision for skin, hair, and confidence."
          text="Explore high-demand treatments crafted around diagnosis, suitability, and elegant outcomes."
          tone="dark"
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((treatment, index) => (
            <Reveal key={treatment.slug} delay={index * 0.05}>
              <Link
                href={`/treatments/${treatment.slug}`}
                className="group block overflow-hidden rounded-[2rem] border border-porcelain/10 bg-porcelain/5"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="image-lift object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-champagne">
                    {treatment.category}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">
                    {treatment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-porcelain/62">
                    {treatment.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Transformations() {
  const [filter, setFilter] = useState("All");
  const filters = [
    "All",
    "Acne",
    "Hair loss",
    "Pigmentation",
    "Hair transplant",
    "Anti-aging",
  ];
  const items =
    filter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);
  return (
    <section className="py-24 md:py-32">
      <div className="container-aura">
        <SectionHeading
          eyebrow="Before and after"
          title="Transformation, without the noise."
          text="Placeholder galleries are structured for real clinical photography, consent workflows, and future case notes."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${filter === item ? "border-charcoal bg-charcoal text-porcelain" : "border-charcoal/12 bg-porcelain/70 text-charcoal/70"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
          {items.map((item) => (
            <Reveal key={item.id} className="mb-5 break-inside-avoid">
              <div className="group overflow-hidden rounded-[2rem] bg-porcelain shadow-aura">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.after}
                    alt={item.title}
                    fill
                    className="image-lift object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-porcelain/80 px-3 py-1 text-xs backdrop-blur">
                    After
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DoctorPreview() {
  const doctor = doctorsData[0];
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="container-aura grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-aura">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={900}
                height={1100}
                className="h-[680px] w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-8 right-6 max-w-xs rounded-[2rem] p-6 shadow-aura">
              <Quote className="mb-3 text-gold" size={24} />
              <p className="font-serif text-2xl leading-8">{doctor.quote}</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">
            Meet the doctor
          </p>
          <h2 className="editorial-title text-6xl md:text-8xl">
            {doctor.name}
          </h2>
          <p className="mt-6 text-xl text-charcoal/66">{doctor.title}</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/66">
            {doctor.bio}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {doctor.specializations.slice(0, 4).map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-full border border-charcoal/10 bg-porcelain/60 px-4 py-3"
              >
                <BadgeCheck size={17} className="text-gold" /> {item}
              </div>
            ))}
          </div>
          <Button href="/doctor" className="mt-10">
            View Profile
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-aura">
        <SectionHeading
          eyebrow="Patient voices"
          title="Quiet confidence, spoken simply."
          align="center"
        />
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonialsData.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <div
                className={`rounded-[2rem] border border-charcoal/10 bg-porcelain p-7 shadow-aura ${index === 1 ? "md:mt-12" : ""}`}
              >
                <p className="flex gap-1 text-gold">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </p>
                <p className="mt-6 text-lg leading-8 text-charcoal/72">
                  “{item.quote}”
                </p>
                <p className="mt-6 font-medium">{item.name}</p>
                <p className="text-sm text-charcoal/50">{item.concern}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClinicExperience() {
  const images = imagesData.clinic.experience;
  return (
    <section className="overflow-hidden bg-porcelain py-24 md:py-32">
      <div className="container-aura">
        <SectionHeading
          eyebrow="Clinic experience"
          title="Designed for calm, privacy, and precision."
        />
      </div>
      <div className="mt-14 w-full overflow-x-auto px-4 pb-6 md:px-10">
        <div className="flex gap-5">
          {images.map((image, index) => (
            <div
              key={image}
              className="relative h-[520px] flex-shrink-0 overflow-hidden rounded-[2.5rem] shadow-aura"
              style={{ width: "min(78vw, calc(100vw - 32px - 40px))" }}
            >
              <Image
                src={image}
                alt={`AURA clinic experience ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-aura">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Journal"
            title="Skin literacy, made elegant."
          />
          <Button href="/blog" variant="ghost">
            Read Journal
          </Button>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blogsData.slice(0, 3).map((blog, index) => (
            <Reveal key={blog.slug} delay={index * 0.06}>
              <Link href={`/blog/${blog.slug}`} className="group block">
                <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-aura">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="image-lift object-cover"
                  />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.24em] text-gold">
                  {blog.category} · {blog.readTime}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">
                  {blog.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-charcoal px-6 py-20 text-center text-porcelain shadow-aura md:px-16 md:py-28">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, #c98f75, transparent 26%), radial-gradient(circle at 70% 70%, #b7925b, transparent 30%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-champagne">
            Begin your skin journey
          </p>
          <h2 className="editorial-title text-5xl md:text-8xl">
            Let’s make the next step feel clear.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-porcelain/68">
            Book a consultation with Dr. Nidheesh Agarwal and receive a
            thoughtful plan for your skin, hair, or aesthetic concern.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/appointment" variant="dark">
              Book Consultation <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
