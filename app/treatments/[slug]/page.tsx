import { Button } from "@/components/ui/button";
import { clinicData } from "@/data/clinicData";
import { galleryData } from "@/data/galleryData";
import { treatmentsData } from "@/data/treatmentsData";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatmentsData.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatmentsData.find((item) => item.slug === slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} in Udaipur`,
    description: treatment.excerpt,
    keywords: treatment.keywords
  };
}

export default async function TreatmentDetailPage({ params }: Params) {
  const { slug } = await params;
  const treatment = treatmentsData.find((item) => item.slug === slug);
  if (!treatment) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-grain pb-16 pt-36 md:pt-44">
        <div className="container-aura grid gap-12 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.32em] text-gold">{treatment.category}</p>
            <h1 className="editorial-title text-6xl md:text-8xl">{treatment.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/66">{treatment.excerpt}</p>
            <div className="mt-9 flex gap-3"><Button href="/appointment">Book Consultation</Button><Button href={clinicData.whatsapp} variant="ghost">WhatsApp</Button></div>
          </div>
          <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] shadow-aura">
            <Image src={treatment.image} alt={treatment.title} fill className="object-cover" priority />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-aura grid gap-12 lg:grid-cols-[220px_1fr_340px]">
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-3 text-sm text-charcoal/62">
              {["Overview", "Causes", "Symptoms", "Process", "Recovery", "FAQs"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="block hover:text-charcoal">{item}</a>)}
            </div>
          </aside>
          <article className="space-y-14">
            <section id="overview"><h2 className="font-serif text-4xl">Overview</h2><p className="mt-4 text-lg leading-8 text-charcoal/66">{treatment.overview}</p></section>
            {[
              ["causes", "Causes", treatment.causes],
              ["symptoms", "Symptoms", treatment.symptoms],
              ["process", "Treatment process", treatment.process]
            ].map(([id, title, items]) => (
              <section key={id as string} id={id as string}>
                <h2 className="font-serif text-4xl">{title as string}</h2>
                <div className="mt-5 grid gap-3">
                  {(items as string[]).map((item) => <p key={item} className="rounded-2xl border border-charcoal/10 bg-porcelain p-5 text-charcoal/66">{item}</p>)}
                </div>
              </section>
            ))}
            <section id="recovery"><h2 className="font-serif text-4xl">Recovery</h2><p className="mt-4 text-lg leading-8 text-charcoal/66">{treatment.recovery}</p></section>
            <section><h2 className="font-serif text-4xl">Before / After Gallery</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{galleryData.slice(0, 2).map((item) => <div key={item.id} className="relative h-72 overflow-hidden rounded-[2rem]"><Image src={item.after} alt={item.title} fill className="object-cover" /></div>)}</div></section>
            <section id="faqs"><h2 className="font-serif text-4xl">FAQs</h2><div className="mt-6 space-y-4">{treatment.faqs.map((faq) => <details key={faq.question} className="rounded-2xl bg-porcelain p-5 shadow-aura"><summary className="cursor-pointer font-medium">{faq.question}</summary><p className="mt-3 text-charcoal/64">{faq.answer}</p></details>)}</div></section>
          </article>
          <aside>
            <div className="sticky top-28 rounded-[2rem] bg-charcoal p-6 text-porcelain shadow-aura">
              <p className="font-serif text-3xl">Doctor recommendation</p>
              <p className="mt-4 text-sm leading-6 text-porcelain/66">A consultation helps confirm whether {treatment.title.toLowerCase()} is medical, cosmetic, or mixed, and what sequence is safest.</p>
              <Button href="/appointment" variant="dark" className="mt-6 w-full">Reserve Visit</Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
