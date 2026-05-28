import { clinicData } from "@/data/clinicData";
import { treatmentsData } from "@/data/treatmentsData";
import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-porcelain">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, #b7925b 0, transparent 28%), radial-gradient(circle at 80% 60%, #c98f75 0, transparent 25%)" }} />
      <div className="container-aura relative py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <p className="font-serif text-5xl">AURA</p>
            <p className="mt-5 max-w-sm text-porcelain/68">{clinicData.tagline} Premium dermatology, aesthetic skin care, and hair restoration in Udaipur.</p>
          </div>
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-champagne">Explore</p>
            {["Clinic", "Doctor", "Treatments", "Gallery", "Journal", "Contact"].map((label) => (
              <Link key={label} className="mb-3 block text-porcelain/68 hover:text-porcelain" href={label === "Clinic" ? "/about" : `/${label.toLowerCase()}`}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-champagne">Treatments</p>
            {treatmentsData.slice(0, 6).map((treatment) => (
              <Link key={treatment.slug} className="mb-3 block text-porcelain/68 hover:text-porcelain" href={`/treatments/${treatment.slug}`}>
                {treatment.title}
              </Link>
            ))}
          </div>
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-champagne">Visit</p>
            <p className="text-porcelain/70">{clinicData.address}</p>
            <div className="mt-6 space-y-3">
              <a href={clinicData.phoneHref} className="flex items-center gap-3 text-porcelain/75 hover:text-porcelain"><Phone size={16} /> {clinicData.phone}</a>
              <a href={clinicData.emailHref} className="flex items-center gap-3 text-porcelain/75 hover:text-porcelain"><Mail size={16} /> {clinicData.email}</a>
              <a href={clinicData.social.instagram} className="flex items-center gap-3 text-porcelain/75 hover:text-porcelain"><Instagram size={16} /> Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-porcelain/10 pt-8 text-sm text-porcelain/52 md:flex-row md:items-center md:justify-between">
          <p>© 2026 AURA Skin & Hair Clinic. Medical information is for awareness and does not replace consultation.</p>
          <div className="flex gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclaimer" className="inline-flex items-center gap-1">Disclaimer <ArrowUpRight size={13} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
