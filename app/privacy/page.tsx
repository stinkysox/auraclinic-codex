import { PageHero } from "@/components/shared/page-hero";

export default function PrivacyPage() {
  return <Legal title="Privacy Policy" text="AURA protects patient information, appointment details, and contact data with confidentiality and care. Information submitted through the website is used only for clinic communication, appointment coordination, and patient support." />;
}

function Legal({ title, text }: { title: string; text: string }) {
  return <><PageHero eyebrow="Legal" title={title} text={text} /><section className="py-20"><div className="container-aura max-w-3xl text-lg leading-9 text-charcoal/66"><p>{text}</p><p className="mt-6">This placeholder page should be reviewed by legal and medical compliance professionals before public launch.</p></div></section></>;
}
