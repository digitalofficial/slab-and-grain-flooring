import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Polished Concrete Floors Tucson AZ | Slab & Grain Flooring",
  description:
    "Professional polished concrete flooring in Tucson, AZ. Multi-step grinding, honing, and polishing of existing concrete slabs — custom stains, dyes, and high-gloss finishes.",
  keywords: [
    "polished concrete Tucson",
    "polished concrete floors Tucson AZ",
    "concrete floor polishing Tucson",
    "concrete staining Tucson",
    "polished concrete contractor Tucson Arizona",
    "concrete floor finishing Tucson",
  ],
  openGraph: {
    title: "Polished Concrete Floors Tucson AZ | Slab & Grain Flooring",
    description:
      "Transform your existing Tucson concrete slab into a sleek polished floor. Multi-step grinding, staining, and high-gloss polishing — no new flooring needed.",
    url: "https://slabandgrain.com/services/polished-concrete",
  },
};

const includes = [
  { item: "Concrete grinding", detail: "Coarse diamond tooling to remove surface layer and level" },
  { item: "Multi-step honing", detail: "Progressive grit sequence for a consistent finish" },
  { item: "High-gloss polishing", detail: "800 to 3,000 grit resin pads for mirror shine" },
  { item: "Densifier treatment", detail: "Silicate densifier for hardness and dust-proofing" },
  { item: "Acid & water-based stains", detail: "Reactive color penetrates deep into the slab" },
  { item: "Concrete dyes", detail: "Vibrant, uniform coloring with translucent depth" },
  { item: "Decorative scoring", detail: "Custom cut patterns to simulate tile or stone" },
  { item: "Guard & sealer application", detail: "Final topical guard for stain resistance and sheen" },
];

const trust = [
  {
    h: "Tucson slabs are the perfect canvas",
    p: "Most Tucson homes and commercial buildings sit on poured-in-place concrete slabs — the ideal substrate for polished concrete. No demo, no subfloor, no new materials. We transform what you already have into a stunning, durable floor.",
  },
  {
    h: "Multi-step process, no shortcuts",
    p: "Polished concrete isn't one pass with a grinder. We run a full diamond tooling sequence — coarse, medium, fine, honing, and polishing steps — plus densifier application at the right time. Cutting this process short produces a dull, uneven result.",
  },
  {
    h: "Cool underfoot in desert heat",
    p: "Polished concrete stays noticeably cooler than tile or vinyl on Tucson's hot days. It's a natural thermal mass that absorbs cool air-conditioned temperatures and stays comfortable barefoot even when outdoor temps soar.",
  },
  {
    h: "Low maintenance for desert living",
    p: "No grout to stain, no planks to scratch, no wax to strip. A properly polished and guarded concrete floor just needs damp mopping. Tucson's dusty conditions are easy to manage — a quick mop and your floor looks like new.",
  },
];

const faqs = [
  {
    q: "Can my existing slab be polished, or does it need to be poured new?",
    a: "In almost all cases, your existing slab can be polished. We assess the concrete condition, check for cracks, coatings, or contamination, and determine the starting grit. Old cracks and aggregate patches actually add character. Very damaged slabs may need patching before polishing.",
  },
  {
    q: "How shiny can polished concrete get?",
    a: "Polished concrete sheen ranges from matte (400 grit) to a near-mirror gloss (3,000 grit). The most popular finish for Tucson homes is a semi-gloss — reflective enough to look polished without being slippery. We'll show you sheen samples before we commit.",
  },
  {
    q: "Is polished concrete slippery?",
    a: "A properly polished floor with a penetrating guard has a similar slip coefficient to polished stone. We recommend a light-texture topcoat in wet areas like kitchens and bathrooms. Most residential polished concrete floors in Tucson are completely safe for everyday use.",
  },
];

export default function PolishedConcretePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Polished Concrete · Tucson, AZ"
          title="Your slab transformed"
          highlight="to a showroom floor."
          subtitle="Multi-step concrete grinding, honing, staining, and polishing — turning Tucson's existing slabs into sleek, low-maintenance floors with no demolition and no new materials."
          seed={23}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-oak mb-3">What&apos;s included</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              Every step of the polishing process.
            </h2>
            <p className="mt-4 text-ink/60 leading-relaxed">
              From initial slab assessment and diamond grinding through final densifier, staining, polishing, and guard application — a complete transformation of your existing concrete.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {includes.map((inc, i) => (
              <Reveal key={inc.item} delay={(i % 4) * 70}>
                <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
                  <div className="mb-3 text-honey text-lg">&#9670;</div>
                  <h3 className="font-display font-semibold text-[15px] text-ink">{inc.item}</h3>
                  <p className="mt-1.5 text-[13px] text-ink/55 leading-relaxed">{inc.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5">
          <div className="plankline" />
        </div>

        {/* Why Slab & Grain */}
        <section className="bg-walnut text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="max-w-2xl mb-12">
              <p className="eyebrow text-honey/90 mb-3">Why Slab &amp; Grain</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
                Tucson slabs are already half the work.
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {trust.map((t, i) => (
                <Reveal key={t.h} delay={(i % 2) * 90}>
                  <div className="glass h-full rounded-2xl p-7">
                    <div className="mb-3 text-honey text-xl">&#9670;</div>
                    <h3 className="font-display font-semibold text-lg">{t.h}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{t.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <Reveal className="mb-10">
            <p className="eyebrow text-oak mb-3">Common questions</p>
            <h2 className="font-display font-bold text-3xl tracking-tight">Polished concrete FAQ</h2>
          </Reveal>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <div className="card-hover rounded-2xl border border-ink/[0.08] bg-white p-7">
                  <h3 className="font-display font-semibold text-[16px] text-ink">{f.q}</h3>
                  <p className="mt-3 text-[15px] text-ink/60 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-lift rounded-full bg-honey px-6 py-3 text-[15px] font-semibold text-walnut hover:bg-oak hover:text-white"
            >
              Get a free concrete estimate &rarr;
            </Link>
            <Link
              href="/services"
              className="btn-lift rounded-full border border-ink/15 px-6 py-3 text-[15px] font-semibold text-ink hover:border-oak hover:text-oak"
            >
              View all services
            </Link>
          </Reveal>
        </section>

        <CTASection
          heading={<>Your concrete slab is<br />already a great floor.</>}
          body="Free on-site assessment. We examine your slab, show you sheen and stain options, and quote you on the spot."
        />
      </main>
      <Footer />
    </>
  );
}
