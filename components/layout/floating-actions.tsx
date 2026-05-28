import { clinicData } from "@/data/clinicData";
import { Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={clinicData.whatsapp} className="grid size-12 place-items-center rounded-full bg-[#1f7a55] text-white shadow-aura" aria-label="Chat on WhatsApp">
        <MessageCircle size={19} />
      </a>
      <Link href="/appointment" className="grid size-12 place-items-center rounded-full bg-charcoal text-porcelain shadow-aura" aria-label="Book appointment">
        <Calendar size={18} />
      </Link>
    </div>
  );
}
