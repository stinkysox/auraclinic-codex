import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { doctorsData } from "@/data/doctorsData";
import Image from "next/image";

export default function DoctorPage() {
  const doctor = doctorsData[0];
  return (
    <>
      <PageHero eyebrow="Doctor profile" title={doctor.name} text={doctor.title} />
      <section className="py-24">
        <div className="container-aura grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <Image src={doctor.image} alt={doctor.name} width={900} height={1100} className="h-[720px] rounded-[2.5rem] object-cover shadow-aura" />
          </Reveal>
          <Reveal>
            <p className="text-xl leading-9 text-charcoal/68">{doctor.bio}</p>
            <blockquote className="my-10 border-l-2 border-gold pl-6 font-serif text-4xl leading-tight">“{doctor.quote}”</blockquote>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                ["Qualifications", doctor.qualifications],
                ["Certifications", doctor.certifications],
                ["Conferences", doctor.conferences],
                ["Awards", doctor.awards]
              ].map(([title, items]) => (
                <div key={title as string} className="rounded-[2rem] border border-charcoal/10 bg-porcelain/70 p-6">
                  <h2 className="font-serif text-3xl">{title as string}</h2>
                  <ul className="mt-4 space-y-2 text-charcoal/62">
                    {(items as string[]).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-mist py-24">
        <div className="container-aura">
          <p className="mb-10 text-xs uppercase tracking-[0.32em] text-gold">Experience timeline</p>
          <div className="grid gap-6 md:grid-cols-4">
            {doctor.timeline.map((item) => (
              <Reveal key={item.year}>
                <div className="h-full rounded-[2rem] bg-porcelain p-6 shadow-aura">
                  <p className="font-serif text-4xl text-gold">{item.year}</p>
                  <h2 className="mt-5 font-serif text-2xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-charcoal/62">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
