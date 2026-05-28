"use client";

import { treatmentCategories, treatmentsData } from "@/data/treatmentsData";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export function TreatmentExplorer() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const treatments = useMemo(
    () => treatmentsData.filter((item) => (category === "All" || item.category === category) && item.title.toLowerCase().includes(query.toLowerCase())),
    [category, query]
  );
  return (
    <section className="py-20">
      <div className="container-aura">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {["All", ...treatmentCategories].map((item) => (
              <button key={item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm ${category === item ? "border-charcoal bg-charcoal text-porcelain" : "border-charcoal/10 bg-porcelain"}`}>
                {item}
              </button>
            ))}
          </div>
          <label className="flex min-h-12 items-center gap-3 rounded-full border border-charcoal/10 bg-porcelain px-4">
            <Search size={17} />
            <input className="bg-transparent outline-none" placeholder="Search treatments" value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <Link key={treatment.slug} href={`/treatments/${treatment.slug}`} className="group overflow-hidden rounded-[2rem] bg-porcelain shadow-aura">
              <div className="relative h-72 overflow-hidden">
                <Image src={treatment.image} alt={treatment.title} fill className="image-lift object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-gold">{treatment.category}</p>
                <h2 className="mt-3 font-serif text-3xl">{treatment.title}</h2>
                <p className="mt-3 text-charcoal/62">{treatment.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
