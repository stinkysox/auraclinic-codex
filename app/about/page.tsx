import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { imagesData } from "@/data/imagesData";
import Image from "next/image";

const timeline = [
  ["Philosophy", "AURA begins with listening: to symptoms, goals, fear, lifestyle, and the invisible emotional weight of skin and hair concerns."],
  ["Diagnosis", "Every plan is anchored in clinical reasoning before procedures, products, or devices enter the conversation."],
  ["Safety", "Sterility, consent, medical documentation, and follow-up are treated as premium experience essentials."],
  ["Continuity", "Patients are guided through maintenance, seasonal changes, and realistic timelines."]
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="The clinic" title="AURA is built around calm trust." text="A premium dermatology and hair clinic in Udaipur where clinical precision meets warm, human care." />
      <section className="py-24">
        <div className="container-aura grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <Image src={imagesData.clinic.interior} alt="AURA clinic interior" width={900} height={1100} className="h-[680px] rounded-[2.5rem] object-cover shadow-aura" />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Story" title="Modern medicine, with softer edges." text="The clinic experience is deliberately quiet: refined materials, private conversations, considered treatment rooms, and a tone that keeps patients informed without overwhelm." />
            <div className="mt-12 space-y-8">
              {timeline.map(([title, text]) => (
                <Reveal key={title}>
                  <div className="border-t border-charcoal/10 pt-6">
                    <h2 className="font-serif text-3xl">{title}</h2>
                    <p className="mt-3 text-charcoal/64">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
