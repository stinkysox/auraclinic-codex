import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { clinicData } from "@/data/clinicData";
import { treatmentsData } from "@/data/treatmentsData";

export default function AppointmentPage() {
  return (
    <>
      <PageHero eyebrow="Appointment" title="Reserve a calmer consultation." text="A conversion-focused booking flow for dermatology, cosmetic care, and hair restoration consultations." />
      <section className="py-20">
        <div className="container-aura grid gap-10 lg:grid-cols-[1fr_.75fr]">
          <form className="rounded-[2.5rem] bg-porcelain p-6 shadow-aura md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              {["Full name", "Phone number", "Email"].map((label) => <label key={label} className="grid gap-2 text-sm">{label}<input className="min-h-12 rounded-2xl border border-charcoal/10 bg-ivory px-4 outline-none focus:border-gold" /></label>)}
              <label className="grid gap-2 text-sm">Treatment<select className="min-h-12 rounded-2xl border border-charcoal/10 bg-ivory px-4 outline-none focus:border-gold">{treatmentsData.map((t) => <option key={t.slug}>{t.title}</option>)}</select></label>
              <label className="grid gap-2 text-sm">Doctor<select className="min-h-12 rounded-2xl border border-charcoal/10 bg-ivory px-4 outline-none focus:border-gold"><option>Dr. Nidheesh Agarwal</option></select></label>
              <label className="grid gap-2 text-sm">Preferred slot<select className="min-h-12 rounded-2xl border border-charcoal/10 bg-ivory px-4 outline-none focus:border-gold"><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
              <label className="grid gap-2 text-sm md:col-span-2">Concern<textarea className="min-h-32 rounded-2xl border border-charcoal/10 bg-ivory p-4 outline-none focus:border-gold" /></label>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button type="submit">Request Appointment</Button><Button href={clinicData.whatsapp} variant="ghost">Continue on WhatsApp</Button></div>
          </form>
          <aside className="rounded-[2.5rem] bg-charcoal p-8 text-porcelain shadow-aura">
            <h2 className="font-serif text-5xl">What your visit includes</h2>
            <div className="mt-8 space-y-5 text-porcelain/68">{["Detailed diagnosis", "Treatment suitability guidance", "Clear pricing and downtime discussion", "Aftercare and follow-up plan"].map((item) => <p key={item} className="border-t border-porcelain/10 pt-4">{item}</p>)}</div>
          </aside>
        </div>
      </section>
    </>
  );
}
