import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Faq, type QA } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ | Slab & Grain Flooring Tucson",
  description: "Common questions about flooring installation, materials, pricing, and coverage across Tucson and the Foothills.",
};

const groups: { title: string; items: QA[] }[] = [
  {
    title: "Installation",
    items: [
      { q: "How long does a flooring install take?", a: "Most single rooms are done in 1-2 days. A full-home install typically takes 3-5 days depending on material type, subfloor prep needed, and total square footage." },
      { q: "Do you move furniture?", a: "Yes. We move all furniture out and back in as part of every install. Fragile or specialty items (pianos, safes) may need prior arrangement." },
      { q: "Do you remove old flooring?", a: "Yes. Old flooring removal, haul-away, and subfloor prep are included in every quote. No surprise demo fees." },
      { q: "Can I walk on new floors right away?", a: "LVP and tile are typically walk-ready the same day. Hardwood and epoxy may require 24-48 hours of cure time — we'll let you know the exact timeline." },
    ],
  },
  {
    title: "Materials & design",
    items: [
      { q: "What flooring is best for Tucson?", a: "Tucson's dry climate and slab-on-grade construction make LVP, tile, and polished concrete popular choices. Engineered hardwood works well too with proper acclimation. We'll help you pick the best fit." },
      { q: "Can I supply my own material?", a: "Absolutely. We install homeowner-supplied material at the same quality standard. We can also source materials at contractor pricing if you'd prefer." },
      { q: "Do you do custom patterns?", a: "Yes — herringbone, chevron, basketweave, diagonal layouts, borders, and medallions. Custom patterns add labor time but we price them transparently." },
    ],
  },
  {
    title: "Pricing & process",
    items: [
      { q: "Is the estimate free?", a: "Yes. We measure your space, discuss options, and deliver a detailed line-by-line quote — free, no obligation." },
      { q: "What's included in the quote?", a: "Material (if we source it), labor, old floor removal, subfloor prep, transitions, trim, furniture moving, and cleanup. Everything is itemized." },
      { q: "Do you offer financing?", a: "Yes. We offer financing options for larger projects. Ask us for details during your estimate." },
    ],
  },
  {
    title: "Coverage",
    items: [
      { q: "What areas do you serve?", a: "Tucson, Catalina Foothills, Oro Valley, Marana, Dove Mountain, Vail, Sahuarita, and Green Valley. If you're nearby, call — we likely cover your area." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Good questions"
          title="Everything you might"
          highlight="want to ask."
          subtitle="Straight answers on materials, installation, pricing, and coverage. Still curious? We're a call away."
          seed={23}
        />

        <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <div className="space-y-14">
            {groups.map((g, gi) => (
              <Reveal key={g.title} delay={gi * 60}>
                <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-4">{g.title}</h2>
                <Faq items={g.items} />
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection
          heading={<>Didn&apos;t find your<br />answer?</>}
          body="Tell us about your project and we'll give you a real answer — and a free estimate — within one business day."
        />
      </main>
      <Footer />
    </>
  );
}
