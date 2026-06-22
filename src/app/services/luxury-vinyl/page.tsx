import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Luxury Vinyl Plank Flooring Tucson AZ | Slab & Grain Flooring",
  description:
    "Luxury vinyl plank (LVP) installation in Tucson, AZ. Waterproof, scratch-resistant, and stunning — professionally installed over concrete slabs and slab-on-grade homes.",
  keywords: [
    "luxury vinyl plank Tucson",
    "LVP flooring Tucson AZ",
    "vinyl plank installation Tucson",
    "waterproof flooring Tucson",
    "vinyl flooring Tucson Arizona",
    "LVP installer Tucson",
  ],
  openGraph: {
    title: "Luxury Vinyl Plank Flooring Tucson AZ | Slab & Grain Flooring",
    description:
      "Waterproof LVP flooring installation for Tucson homes. Click-lock and glue-down methods over concrete slabs — same-day walk-on ready.",
    url: "https://slabandgrain.com/services/luxury-vinyl",
  },
};

const includes = [
  { item: "Click-lock LVP installation", detail: "Floating floor over concrete — no glue needed" },
  { item: "Glue-down LVP installation", detail: "Maximum stability for high-traffic areas" },
  { item: "Subfloor leveling & prep", detail: "Grinding highs, filling lows to 3/16\" tolerance" },
  { item: "Waterproof underlayment", detail: "Extra sound and moisture protection under LVP" },
  { item: "Transition strips & trim", detail: "T-moldings, reducers, and threshold transitions" },
  { item: "Baseboards & quarter-round", detail: "Clean finished edges throughout" },
  { item: "Furniture moving included", detail: "We move and replace all standard furniture" },
  { item: "Same-day walk-on ready", detail: "Most LVP installs are ready to walk immediately" },
];

const trust = [
  {
    h: "Built for slab-on-grade homes",
    p: "Tucson's slab-on-grade construction is ideal for LVP. The floating click-lock system handles minor slab movement without cracking or separating — and glue-down LVP creates a rock-solid bond directly to concrete.",
  },
  {
    h: "Desert heat won't warp it",
    p: "We only install LVP brands with temperature stability ratings suited to Arizona's 110°F summers. Cheap LVP expands and buckles in heat — we spec products engineered to stay flat from 55°F to 100°F.",
  },
  {
    h: "Fastest installation in the lineup",
    p: "Most whole-home LVP installs complete in 1–2 days. With no glue drying time on click-lock systems, you're back to normal life faster than any other flooring option.",
  },
  {
    h: "Flat subfloor guarantee",
    p: "LVP is unforgiving of subfloor imperfections. We grind, patch, and self-level every slab to meet the manufacturer's flatness spec before a single plank goes down — or the floor will telegraph every bump.",
  },
];

const faqs = [
  {
    q: "Is LVP a good choice for Tucson's climate?",
    a: "LVP is one of the best choices for Tucson. It handles Tucson's dry air without shrinking or cracking like hardwood can, it's 100% waterproof for any room including bathrooms and kitchens, and it goes directly over concrete slab without a moisture barrier in most cases.",
  },
  {
    q: "What's the difference between click-lock and glue-down LVP?",
    a: "Click-lock LVP floats over the subfloor — planks connect to each other, not to the slab. It's faster to install and easier to replace individual planks later. Glue-down bonds directly to concrete for maximum stability — preferred for commercial spaces or very large open areas.",
  },
  {
    q: "How flat does my concrete slab need to be for LVP?",
    a: "Most LVP manufacturers require the floor to be flat within 3/16\" over 10 feet. We test your slab and include subfloor prep in our estimate. Skipping this step causes hollow spots, squeaks, and cracked locking joints — we never skip it.",
  },
];

export default function LuxuryVinylPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Luxury Vinyl Plank · Tucson, AZ"
          title="Waterproof LVP flooring"
          highlight="for Tucson homes."
          subtitle="Click-lock and glue-down luxury vinyl plank installation on concrete slabs — durable, stunning, and walk-on ready the same day."
          seed={5}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-oak mb-3">What&apos;s included</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              A complete LVP install, zero surprises.
            </h2>
            <p className="mt-4 text-ink/60 leading-relaxed">
              Subfloor prep, full installation, transitions, trim, and furniture moving — everything needed to walk out of your house and come back to new floors.
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
                LVP done right for desert living.
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
            <h2 className="font-display font-bold text-3xl tracking-tight">Luxury vinyl plank FAQ</h2>
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
              Get a free LVP estimate &rarr;
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
          heading={<>New LVP floors in<br />one to two days.</>}
          body="Get a free in-home estimate. We bring samples, measure your space, and give you a written quote on the spot."
        />
      </main>
      <Footer />
    </>
  );
}
