import { Reveal } from "@/components/motion/reveal";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-grain pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="absolute right-[10%] top-24 size-80 rounded-full bg-clay/20 blur-3xl" />
      <div className="container-aura">
        <Reveal className="max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
          <h1 className="editorial-title text-6xl md:text-8xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/66">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
