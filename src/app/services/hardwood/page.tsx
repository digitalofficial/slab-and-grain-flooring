import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hardwood Flooring Tucson AZ | Slab & Grain Flooring",
  description:
    "Expert hardwood flooring installation, sanding, staining & refinishing in Tucson, AZ. Solid & engineered hardwood acclimated for desert climates and concrete subfloors.",
  keywords: [
    "hardwood flooring Tucson",
    "hardwood flooring Tucson AZ",
    "hardwood installation Tucson",
    "engineered hardwood Tucson",
    "hardwood refinishing Tucson",
    "wood floor installation Tucson Arizona",
  ],
  openGraph: {
    title: "Hardwood Flooring Tucson AZ | Slab & Grain Flooring",
    description:
      "Solid & engineered hardwood installation, sanding, and refinishing for Tucson homes. Experts in desert-climate acclimation and concrete slab subfloor prep.",
    url: "https://slabandgrain.com/services/hardwood",
  },
};

const includes = [
  { item: "Solid hardwood installation", detail: "Nail-down and glue-down on concrete slabs" },
  { item: "Engineered hardwood installation", detail: "Floating, glue-down & staple-down methods" },
  { item: "Subfloor leveling & prep", detail: "Grinding, patching, and moisture testing" },
  { item: "Moisture barrier installation", detail: "Critical for Tucson slab-on-grade homes" },
  { item: "Custom staining & finishing", detail: "Oil-based and water-based topcoats" },
  { item: "Sanding & refinishing", detail: "Restore existing hardwood to factory-fresh" },
  { item: "Material acclimation", detail: "7–10 day climate acclimation in your home" },
  { item: "Furniture moving & cleanup", detail: "Full-service — we handle everything" },
];

const trust = [
  {
    h: "Desert-climate specialists",
    p: "Tucson's dry air (often below 20% RH) causes hardwood to contract. We acclimate every plank to your home's interior conditions for a minimum of 7 days — preventing gaps, cupping, and squeaks after install.",
  },
  {
    h: "Concrete slab expertise",
    p: "Nearly every Tucson home is slab-on-grade. We moisture-test, grind high spots, fill low areas, and apply the right moisture barrier before a single board goes down. Most companies skip this. We don't.",
  },
  {
    h: "Honest, line-by-line quotes",
    p: "You'll get a detailed written estimate — material, labor, subfloor prep, and any extras — with zero hidden fees. The price we quote is the price you pay.",
  },
  {
    h: "ROC licensed & insured",
    p: "Slab & Grain is fully licensed with Arizona's Registrar of Contractors and carries full liability and workers' comp insurance on every job.",
  },
];

const faqs = [
  {
    q: "Can hardwood be installed over a concrete slab in Tucson?",
    a: "Yes — with proper prep. We test moisture levels, apply a vapor barrier or epoxy moisture mitigation system, and use engineered hardwood or approved adhesives for solid hardwood. Tucson's dry climate actually helps keep moisture levels manageable.",
  },
  {
    q: "How long does hardwood need to acclimate?",
    a: "In Tucson's desert climate, we recommend 7–10 days minimum. We deliver materials early so they adjust to your home's temperature and humidity before installation begins.",
  },
  {
    q: "How long does hardwood floor installation take?",
    a: "A typical 1,000–1,500 sq ft installation takes 2–3 days including subfloor prep. Refinishing an existing floor usually takes 1–2 days plus 24–48 hours of drying time.",
  },
];

export default function HardwoodFlooringPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Hardwood Flooring · Tucson, AZ"
          title="Real hardwood floors"
          highlight="built for the desert."
          subtitle="Solid and engineered hardwood installation, sanding, staining, and refinishing — with proper acclimation and slab prep that makes your floor last decades."
          seed={7}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-oak mb-3">What&apos;s included</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              Every step covered, start to finish.
            </h2>
            <p className="mt-4 text-ink/60 leading-relaxed">
              From subfloor moisture testing to final coat and cleanup — our hardwood installs cover every detail so you never have to manage subcontractors or track down warranties.
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
                We know what Tucson slabs demand.
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
            <h2 className="font-display font-bold text-3xl tracking-tight">Hardwood flooring FAQ</h2>
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
              Get a free hardwood estimate &rarr;
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
          heading={<>Hardwood floors that<br />outlast the desert heat.</>}
          body="Schedule a free in-home estimate and we'll bring samples, measure your space, and quote you in writing — same day."
        />
      </main>
      <Footer />
    </>
  );
}
