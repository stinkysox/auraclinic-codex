"use client";

import { treatmentCategories, treatmentsData } from "@/data/treatmentsData";
import { clinicData } from "@/data/clinicData";
import { Button } from "@/components/ui/button";
import { Menu, Phone, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "Clinic" },
  { href: "/doctor", label: "Doctor" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto max-w-7xl rounded-full border px-4 py-3 transition-all duration-500",
          scrolled ? "border-charcoal/10 bg-porcelain/82 shadow-aura backdrop-blur-2xl" : "border-porcelain/35 bg-porcelain/30 backdrop-blur-xl"
        )}
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3" aria-label="AURA home">
            <span className="grid size-10 place-items-center rounded-full bg-charcoal text-porcelain">
              <Sparkles size={17} />
            </span>
            <span className="leading-none">
              <span className="block font-serif text-xl">AURA</span>
              <span className="block text-[10px] uppercase tracking-[0.28em] text-charcoal/60">Skin & Hair</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <div className="relative" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
              <Link href="/treatments" className="text-sm text-charcoal/76 transition hover:text-charcoal">
                Treatments
              </Link>
              {menu && (
                <div className="absolute left-1/2 top-8 w-[720px] -translate-x-1/2 rounded-[2rem] border border-porcelain/70 bg-porcelain/92 p-6 shadow-aura backdrop-blur-2xl">
                  <div className="grid grid-cols-3 gap-5">
                    {treatmentCategories.map((category) => (
                      <div key={category}>
                        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-gold">{category}</p>
                        <div className="space-y-2">
                          {treatmentsData
                            .filter((t) => t.category === category)
                            .slice(0, 3)
                            .map((treatment) => (
                              <Link key={treatment.slug} href={`/treatments/${treatment.slug}`} className="block text-sm text-charcoal/70 hover:text-charcoal">
                                {treatment.title}
                              </Link>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-charcoal/76 transition hover:text-charcoal">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a className="flex size-11 items-center justify-center rounded-full border border-charcoal/10 bg-porcelain/60" href={clinicData.phoneHref} aria-label="Call clinic">
              <Phone size={17} />
            </a>
            <Button href="/appointment">Book Consultation</Button>
          </div>

          <button className="grid size-11 place-items-center rounded-full border border-charcoal/10 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-charcoal/10 bg-porcelain p-6 shadow-aura lg:hidden">
          <div className="grid gap-4">
            <Link href="/treatments" onClick={() => setOpen(false)}>Treatments</Link>
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button href="/appointment">Book Consultation</Button>
          </div>
        </div>
      )}
    </header>
  );
}
