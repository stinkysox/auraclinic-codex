import { Button } from "@/components/ui/button";
import { blogsData } from "@/data/blogsData";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogsData.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((item) => item.slug === slug);
  if (!blog) return {};
  return { title: blog.title, description: blog.excerpt };
}

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const blog = blogsData.find((item) => item.slug === slug);
  if (!blog) notFound();
  const related = blogsData.filter((item) => item.slug !== blog.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blog.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        <section className="bg-grain pb-16 pt-36 md:pt-44">
          <div className="container-aura">
            <p className="mb-5 text-xs uppercase tracking-[0.32em] text-gold">{blog.category} · {blog.readTime}</p>
            <h1 className="editorial-title max-w-5xl text-6xl md:text-8xl">{blog.title}</h1>
            <p className="mt-6 text-charcoal/62">By {blog.author} · {blog.publishedAt}</p>
            <div className="relative mt-12 h-[560px] overflow-hidden rounded-[2.5rem] shadow-aura"><Image src={blog.image} alt={blog.title} fill className="object-cover" priority /></div>
          </div>
        </section>
        <section className="py-20">
          <div className="container-aura grid gap-12 lg:grid-cols-[240px_1fr]">
            <aside className="hidden lg:block"><div className="sticky top-32"><p className="mb-4 text-xs uppercase tracking-[0.24em] text-gold">Contents</p>{blog.sections.map((section) => <a className="mb-3 block text-sm text-charcoal/62 hover:text-charcoal" key={section.heading} href={`#${section.heading.toLowerCase().replaceAll(" ", "-")}`}>{section.heading}</a>)}</div></aside>
            <div className="max-w-3xl">
              {blog.sections.map((section) => (
                <section key={section.heading} id={section.heading.toLowerCase().replaceAll(" ", "-")} className="mb-12">
                  <h2 className="font-serif text-4xl">{section.heading}</h2>
                  <p className="mt-4 text-lg leading-9 text-charcoal/66">{section.body}</p>
                </section>
              ))}
              <div className="rounded-[2rem] bg-charcoal p-8 text-porcelain shadow-aura"><h2 className="font-serif text-4xl">Book a dermatologist-led consultation</h2><p className="mt-4 text-porcelain/66">Get a plan tailored to your skin, hair, lifestyle, and medical history.</p><Button href="/appointment" variant="dark" className="mt-6">Book Consultation</Button></div>
              <section className="mt-14"><h2 className="font-serif text-4xl">FAQs</h2><div className="mt-5 space-y-4">{blog.faqs.map((faq) => <details key={faq.question} className="rounded-2xl bg-porcelain p-5 shadow-aura"><summary>{faq.question}</summary><p className="mt-3 text-charcoal/64">{faq.answer}</p></details>)}</div></section>
            </div>
          </div>
        </section>
      </article>
      <section className="bg-mist py-20"><div className="container-aura"><h2 className="font-serif text-5xl">Related reads</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`}><div className="relative h-60 overflow-hidden rounded-[2rem]"><Image src={item.image} alt={item.title} fill className="object-cover" /></div><h3 className="mt-4 font-serif text-2xl">{item.title}</h3></Link>)}</div></div></section>
    </>
  );
}
