import { PageHero } from "@/components/shared/page-hero";
import { blogsData } from "@/data/blogsData";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="SEO journal" title="Dermatology education for Indian skin and hair." text="Search-optimized articles for acne, hair loss, anti-aging, lasers, pediatric care, and seasonal skin guidance." />
      <section className="py-20">
        <div className="container-aura grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((blog, index) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`} className={index === 0 ? "group md:col-span-2 lg:col-span-2" : "group"}>
              <div className={`relative overflow-hidden rounded-[2rem] shadow-aura ${index === 0 ? "h-[520px]" : "h-80"}`}>
                <Image src={blog.image} alt={blog.title} fill className="image-lift object-cover" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.22em] text-gold">{blog.category} · {blog.readTime}</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight">{blog.title}</h2>
              <p className="mt-3 text-charcoal/62">{blog.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
