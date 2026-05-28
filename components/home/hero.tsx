"use client";

import { Button } from "@/components/ui/button";
import { clinicData } from "@/data/clinicData";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import Image from "next/image";

const heroImages = [
  "https://images.unsplash.com/photo-1607008829749-c0f284a4981f?auto=format&fit=crop&w=1200&q=84",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=84"
];

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 130]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-grain pt-28">
      <motion.div className="absolute left-[8%] top-[18%] size-72 rounded-full bg-clay/20 blur-3xl" animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      <motion.div className="absolute bottom-[18%] right-[8%] size-96 rounded-full bg-gold/20 blur-3xl" animate={{ scale: [1, 1.18, 1], y: [0, -35, 0] }} transition={{ duration: 12, repeat: Infinity }} />
      <div className="container-aura grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1fr_.9fr]">
        <div className="relative z-10">
          <motion.p className="mb-6 text-xs uppercase tracking-[0.36em] text-gold" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            Premium dermatology in Udaipur
          </motion.p>
          <motion.h1
            className="editorial-title max-w-4xl text-6xl text-charcoal sm:text-7xl md:text-8xl xl:text-9xl"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            We Listen To Your Skin.
          </motion.h1>
          <motion.p className="mt-8 max-w-xl text-lg leading-8 text-charcoal/68 md:text-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
            AURA blends clinical dermatology, refined cosmetic care, and hair restoration with warmth, restraint, and clear medical judgment.
          </motion.p>
          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>
            <Button href="/appointment">Book Consultation <ArrowRight className="ml-2" size={16} /></Button>
            <Button href="/treatments" variant="ghost">Explore Treatments</Button>
          </motion.div>
          <motion.div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}>
            {clinicData.stats.map((stat) => (
              <motion.div key={stat.label} className="glass rounded-3xl p-4" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
                <p className="font-serif text-3xl text-charcoal">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-charcoal/58">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div className="relative min-h-[560px]" style={{ y }}>
          <div className="absolute right-0 top-8 h-[470px] w-[76%] overflow-hidden rounded-[2.5rem] shadow-aura">
            <Image src={heroImages[0]} alt="Luxury dermatology skin care treatment" fill priority className="object-cover" />
          </div>
          <motion.div className="absolute left-0 top-28 h-72 w-56 overflow-hidden rounded-[2rem] shadow-aura" animate={{ y: [0, -18, 0] }} transition={{ duration: 7, repeat: Infinity }}>
            <Image src={heroImages[1]} alt="Premium skin care ritual" fill className="object-cover" />
          </motion.div>
          <motion.div className="absolute bottom-8 right-12 h-56 w-72 overflow-hidden rounded-[2rem] shadow-aura" animate={{ y: [0, 18, 0] }} transition={{ duration: 8, repeat: Infinity }}>
            <Image src={heroImages[2]} alt="Modern clinic interior" fill className="object-cover" />
          </motion.div>
          <div className="glass absolute left-8 top-4 rounded-full px-5 py-3 text-sm text-charcoal shadow-aura">
            <span className="inline-flex items-center gap-2"><BadgeCheck size={16} className="text-gold" /> Ethical, diagnosis-first care</span>
          </div>
          <div className="glass absolute bottom-24 left-3 rounded-3xl p-5 shadow-aura">
            <p className="flex items-center gap-1 text-gold"><Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /></p>
            <p className="mt-2 max-w-44 text-sm text-charcoal/70">Trusted by patients seeking subtle, lasting confidence.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
