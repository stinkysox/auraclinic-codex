import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
      <h2 className="editorial-title text-5xl text-charcoal md:text-7xl">{title}</h2>
      {text && <p className="mt-6 text-lg leading-8 text-charcoal/66">{text}</p>}
    </Reveal>
  );
}
