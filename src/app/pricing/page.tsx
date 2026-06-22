import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing | Slab & Grain Flooring Tucson",
  description: "Transparent per-square-foot flooring pricing for Tucson. Detailed line-by-line quotes with no hidden fees.",
};

const pricing = [
  { type: "Luxury Vinyl Plank (LVP)", range: "$4 – $8", unit: "per sq ft installed" },
  { type: "Porcelain / Ceramic Tile", range: "$8 – $14", unit: "per sq ft installed" },
  { type: "Engineered Hardwood", range: "$9 – $16", unit: "per sq ft installed" },
  { type: "Solid Hardwood", range: "$12 – $20", unit: "per sq ft installed" },
  { type: "Natural Stone (travertine, marble)", range: "$14 – $25", unit: "per sq ft installed" },
  { type: "Polished Concrete", range: "$5 – $12", unit: "per sq ft" },
  { type: "Epoxy / Polyaspartic Coating", range: "$6 – $14", unit: "per sq ft" },
  { type: "Hardwood Refinishing", range: "$3 – $6", unit: "per sq ft" },
];

const faqs = [
  { q: "What's included in the price?", a: "Material, labor, subfloor prep, old flooring removal, furniture moving, transitions, trim, and full cleanup. Your quote is line-by-line so you see exactly what you're paying for." },
  { q: "Do I supply the material?", a: "You can, or we source it. We work with top distributors and pass along contractor pricing. Either way, installation quality is the same." },
  { q: "How long does installation take?", a: "Most rooms are done in 1-2 days. A full-home install typically takes 3-5 days depending on material and prep work needed." },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Transparent pricing,"
          highlight="no hidden fees."
          subtitle="Per-square-foot pricing with a detailed line-by-line quote. Material, labor, prep, and cleanup — all included."
          seed={5}
        />

        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-center mb-3">Installed pricing by floor type</h2>
            <p className="text-center text-sm text-ink/55 mb-10 max-w-lg mx-auto">Ranges depend on material grade, subfloor condition, and project scope. Your in-home estimate is exact.</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {pricing.map((p, i) => (
              <Reveal key={p.type} delay={(i % 2) * 80}>
                <div className="card-hover flex items-center justify-between rounded-2xl border border-ink/[0.08] bg-white px-6 py-5">
                  <div>
                    <span className="text-[15px] font-medium text-ink/80">{p.type}</span>
                    <span className="block text-xs text-ink/45 mt-0.5">{p.unit}</span>
                  </div>
                  <span className="font-display font-bold text-lg text-oak whitespace-nowrap">{p.range}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-8 text-center text-sm text-ink/50">
              Need an exact number? <Link href="/contact" className="font-semibold text-oak hover:text-honey">Request a free in-home estimate</Link>.
            </p>
          </Reveal>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-5 pb-20 md:pb-28">
            <Reveal as="h2" className="font-display font-bold text-2xl md:text-3xl tracking-tight text-center mb-10">
              Pricing questions, answered.
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 90}>
                  <div className="rounded-2xl border border-ink/[0.08] bg-white p-5 h-full">
                    <h3 className="font-display font-semibold text-[15px]">{f.q}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={100}>
              <p className="mt-8 text-center text-sm text-ink/55">
                More questions? <Link href="/faq" className="font-semibold text-oak hover:text-honey">Read the full FAQ &rarr;</Link>
              </p>
            </Reveal>
          </div>
        </section>

        <CTASection
          heading={<>Get your exact<br />estimate today.</>}
          body="We measure your space, walk you through options, and deliver a detailed quote — free, no obligation."
        />
      </main>
      <Footer />
    </>
  );
}
