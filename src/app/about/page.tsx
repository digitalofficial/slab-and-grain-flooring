import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Woodgrain } from "@/components/Woodgrain";

export const metadata: Metadata = {
  title: "About | Slab & Grain Flooring Tucson",
  description: "Locally owned, licensed flooring installation for Tucson and the Foothills. Meet the crew that transforms rooms from the ground up.",
};

const stats = [
  { to: 2000, suffix: "+", label: "Floors installed" },
  { to: 12, suffix: "yrs", label: "Serving Tucson" },
  { to: 100, suffix: "%", label: "Licensed & insured" },
  { to: 48, suffix: "hr", label: "Estimate turnaround" },
];

const values = [
  { h: "Prep before we install", p: "We never shortcut subfloor prep. Level surfaces, moisture barriers, and proper acclimation are why our floors last decades, not years." },
  { h: "Obsess over details", p: "Tight seams, straight grout lines, flush transitions, and clean edges. We walk every room with you before we leave." },
  { h: "Respect your home", p: "Dust containment, furniture protection, daily cleanup. You'll barely know we were there — except for the new floors." },
  { h: "Quote honestly", p: "Line-by-line estimates, no change orders mid-job, no surprise fees. The price we quote is the price you pay." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our story"
          title="Flooring done the"
          highlight="right way."
          subtitle="We started Slab & Grain because Tucson deserved a flooring installer that obsesses over prep, nails the details, and quotes honestly."
          seed={13}
        />

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
            <Reveal>
              <p className="eyebrow text-oak mb-3">Why we exist</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight">
                Desert slabs are tricky. We know exactly how to handle them.
              </h2>
              <div className="mt-5 space-y-4 text-ink/65 leading-relaxed max-w-xl">
                <p>
                  Tucson&apos;s concrete slabs crack, shift, and hold moisture differently than anywhere else. Too many flooring companies skip the prep and install over problems — then the homeowner pays for it a year later.
                </p>
                <p>
                  We built Slab &amp; Grain on the principle that prep is everything. Every subfloor is leveled, every moisture reading is taken, every material is acclimated. The install is the easy part when the prep is done right.
                </p>
                <p>
                  Whether it&apos;s hardwood in the Foothills or LVP across a whole home in Marana, we treat every floor like it&apos;s going in our own house.
                </p>
              </div>
            </Reveal>
            <Reveal scale delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-walnut">
                <div className="absolute inset-0" style={{ background: "radial-gradient(120% 100% at 30% 10%, #6B4226 0%, #4A2E1A 55%, #2C1E14 85%)" }} />
                <Woodgrain seed={21} opacity={0.55} />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="self-start glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float">&#9670; ROC Licensed</span>
                  <span className="self-end glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "1.2s" }}>&#9670; Detail Obsessed</span>
                  <span className="self-start glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "2.4s" }}>&#9670; Locally Owned</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-walnut text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="font-display text-4xl md:text-5xl font-bold grain-text">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-white/55">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-oak mb-3">What we stand for</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">Four promises we don&apos;t break.</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.h} delay={(i % 2) * 90}>
                <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-7">
                  <div className="mb-3 text-honey text-xl">&#9670;</div>
                  <h3 className="font-display font-semibold text-lg">{v.h}</h3>
                  <p className="mt-2 text-[15px] text-ink/60 leading-relaxed">{v.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection
          heading={<>Meet your new<br />flooring crew.</>}
          body="Locally owned, detail-obsessed, and built for desert slabs. Let's transform your floors."
        />
      </main>
      <Footer />
    </>
  );
}
