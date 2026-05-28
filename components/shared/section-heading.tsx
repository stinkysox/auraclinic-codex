import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={tone === "dark" ? "mb-4 text-xs uppercase tracking-[0.32em] text-champagne" : "mb-4 text-xs uppercase tracking-[0.32em] text-gold"}>{eyebrow}</p>
      <h2 className={tone === "dark" ? "editorial-title text-5xl text-porcelain md:text-7xl" : "editorial-title text-5xl text-charcoal md:text-7xl"}>{title}</h2>
      {text && <p className={tone === "dark" ? "mt-6 text-lg leading-8 text-porcelain/68" : "mt-6 text-lg leading-8 text-charcoal/66"}>{text}</p>}
    </Reveal>
  );
}
