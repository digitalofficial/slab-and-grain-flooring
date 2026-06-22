import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tile & Stone Flooring Tucson AZ | Slab & Grain Flooring",
  description:
    "Professional tile & stone flooring installation in Tucson, AZ. Porcelain, travertine, slate, marble, and ceramic — precision-set on concrete slabs with clean grout lines.",
  keywords: [
    "tile flooring Tucson",
    "tile installation Tucson AZ",
    "travertine tile Tucson",
    "porcelain tile Tucson",
    "stone flooring Tucson Arizona",
    "tile floor installer Tucson",
  ],
  openGraph: {
    title: "Tile & Stone Flooring Tucson AZ | Slab & Grain Flooring",
    description:
      "Porcelain, ceramic, travertine, marble & slate installation in Tucson, AZ. Expert pattern layouts, waterproof underlayment, and flush transitions.",
    url: "https://slabandgrain.com/services/tile-stone",
  },
};

const includes = [
  { item: "Porcelain & ceramic tile", detail: "Large-format and standard field tile installation" },
  { item: "Travertine & natural stone", detail: "Filling, sealing, and precision layout" },
  { item: "Marble flooring", detail: "Cutting, polishing edges, and vein matching" },
  { item: "Slate & saltillo tile", detail: "Irregular stone set with proper mortar beds" },
  { item: "Shower & tub surrounds", detail: "Waterproof membrane + full tile finish" },
  { item: "Backsplashes & accent walls", detail: "Kitchen, bath, and feature walls" },
  { item: "Heated floor systems", detail: "In-floor radiant heat under tile" },
  { item: "Waterproof underlayment", detail: "Schluter, RedGard, and liquid membrane systems" },
];

const trust = [
  {
    h: "Perfect for Tucson's slab-on-grade",
    p: "Tile is one of the best options for Tucson's concrete subfloors. We properly prep and level the slab before setting, eliminating hollow spots and future cracking — common problems when amateurs skip thinset coverage.",
  },
  {
    h: "Desert-rated materials",
    p: "Tucson's UV intensity and temperature swings demand tile rated for high thermal movement. We spec and source porcelain and stone that holds up to Arizona's outdoor-to-indoor temperature variance.",
  },
  {
    h: "Precision layout, clean lines",
    p: "We laser-level and dry-lay every floor before committing to mortar. Patterns are centered, grout joints are consistent, and transitions to adjacent floors are flush and tight.",
  },
  {
    h: "Waterproofing done right",
    p: "For wet areas, we install a full waterproof membrane before any tile goes down. In Tucson's monsoon season, moisture protection isn't optional — it's the difference between a bathroom that lasts and one that fails.",
  },
];

const faqs = [
  {
    q: "What's the best tile for Tucson's climate?",
    a: "Porcelain is the top choice for most Tucson applications — it's dense, low-absorption, and handles extreme temperature swings without cracking. Travertine is beautiful but requires sealing every 1–2 years. We'll guide you through the right choice for your specific space.",
  },
  {
    q: "Can you tile over an existing concrete slab?",
    a: "Yes. Tucson's concrete slabs are actually ideal for tile. We moisture-test, grind high spots, fill low spots with self-leveling compound, and ensure proper thinset coverage so you don't get hollow tiles or cracking at grout joints.",
  },
  {
    q: "How long does tile installation take?",
    a: "A typical 400–600 sq ft floor takes 2–3 days including prep, setting, and grouting. Large format tile or complex patterns take longer. We'll give you a precise timeline in your estimate.",
  },
];

export default function TileStonePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Tile & Stone Flooring · Tucson, AZ"
          title="Precision tile & stone"
          highlight="set to last."
          subtitle="Porcelain, ceramic, travertine, marble, and slate — expertly set on Tucson's concrete slabs with clean lines, proper mortar coverage, and waterproof prep where it counts."
          seed={3}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-oak mb-3">What&apos;s included</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              Every surface, every stone type.
            </h2>
            <p className="mt-4 text-ink/60 leading-relaxed">
              From large-format porcelain to intricate travertine patterns — we handle full prep, precision layout, waterproofing, and grouting so the finished floor looks exactly as designed.
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
                Tile done right on Tucson slabs.
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
            <h2 className="font-display font-bold text-3xl tracking-tight">Tile & stone FAQ</h2>
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
              Get a free tile estimate &rarr;
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
          heading={<>Tile floors set right<br />the first time.</>}
          body="Free in-home estimate with pattern layout options, material samples, and a written quote delivered same day."
        />
      </main>
      <Footer />
    </>
  );
}
