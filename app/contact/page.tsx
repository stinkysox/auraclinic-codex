import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { clinicData } from "@/data/clinicData";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Visit AURA in Sardarpura, Udaipur." text="Speak with the clinic team for appointments, treatment guidance, and consultation support." />
      <section className="py-20">
        <div className="container-aura grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-[2.5rem] bg-porcelain p-8 shadow-aura">
            <h2 className="font-serif text-4xl">Clinic details</h2>
            <p className="mt-6 text-charcoal/66">{clinicData.address}</p>
            <p className="mt-5"><a href={clinicData.phoneHref}>{clinicData.phone}</a></p>
            <p><a href={clinicData.emailHref}>{clinicData.email}</a></p>
            <div className="mt-8 space-y-2 text-charcoal/62">{clinicData.hours.map((item) => <p key={item}>{item}</p>)}</div>
            <div className="mt-8 flex gap-3"><Button href="/appointment">Book Visit</Button><Button href={clinicData.whatsapp} variant="ghost">WhatsApp</Button></div>
          </div>
          <iframe title="AURA clinic map" src={clinicData.mapEmbed} className="h-[520px] w-full rounded-[2.5rem] border-0 shadow-aura" loading="lazy" />
        </div>
      </section>
    </>
  );
}
