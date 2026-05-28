"use client";

import { galleryCategoryOptions, galleryData } from "@/data/galleryData";
import Image from "next/image";
import { useState } from "react";

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState<(typeof galleryData)[number] | null>(null);
  const filters = ["All", ...galleryCategoryOptions.map((category) => category.label)];
  const items = filter === "All" ? galleryData : galleryData.filter((item) => item.category === filter);
  return (
    <section className="py-20">
      <div className="container-aura">
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-4 py-2 text-sm ${filter === item ? "border-charcoal bg-charcoal text-porcelain" : "border-charcoal/10 bg-porcelain"}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {items.map((item) => (
            <button key={item.id} onClick={() => setModal(item)} className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[2rem] bg-porcelain text-left shadow-aura">
              <div className="relative h-96 overflow-hidden"><Image src={item.after} alt={item.title} fill className="image-lift object-cover" /></div>
              <div className="p-5"><p className="text-xs uppercase tracking-[0.22em] text-gold">{item.category}</p><h2 className="mt-2 font-serif text-3xl">{item.title}</h2></div>
            </button>
          ))}
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-charcoal/82 p-4 backdrop-blur" onClick={() => setModal(null)}>
          <div className="grid max-w-5xl overflow-hidden rounded-[2rem] bg-porcelain md:grid-cols-2">
            <div className="relative h-[520px]"><Image src={modal.before} alt={`${modal.title} before`} fill className="object-cover" /></div>
            <div className="relative h-[520px]"><Image src={modal.after} alt={`${modal.title} after`} fill className="object-cover" /></div>
          </div>
        </div>
      )}
    </section>
  );
}
