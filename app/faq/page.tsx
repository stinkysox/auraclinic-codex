import { PageHero } from "@/components/shared/page-hero";
import { faqData } from "@/data/faqData";

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Clear answers before your consultation." text="Organized guidance for acne, hair loss, cosmetic procedures, hair transplant, and pediatric skin care." />
      <section className="py-20"><div className="container-aura space-y-10">{faqData.map((group) => <div key={group.category}><h2 className="font-serif text-4xl">{group.category}</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{group.items.map((faq) => <details key={faq.question} className="rounded-2xl bg-porcelain p-5 shadow-aura"><summary>{faq.question}</summary><p className="mt-3 text-charcoal/64">{faq.answer}</p></details>)}</div></div>)}</div></section>
    </>
  );
}
