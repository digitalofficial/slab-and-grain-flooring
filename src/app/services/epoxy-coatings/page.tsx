import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Epoxy Floor Coatings Tucson AZ | Slab & Grain Flooring",
  description:
    "Professional epoxy floor coatings and polyaspartic systems in Tucson, AZ. Garage floors, patios, and commercial spaces — engineered for Arizona's extreme heat.",
  keywords: [
    "epoxy floor coating Tucson",
    "epoxy flooring Tucson AZ",
    "garage floor epoxy Tucson",
    "polyaspartic floor coating Tucson",
    "epoxy floor installer Tucson Arizona",
    "commercial epoxy flooring Tucson",
  ],
  openGraph: {
    title: "Epoxy Floor Coatings Tucson AZ | Slab & Grain Flooring",
    description:
      "Durable epoxy and polyaspartic floor coatings for garages, patios, and commercial spaces in Tucson, AZ. Arizona heat-rated systems that won't peel or yellow.",
    url: "https://slabandgrain.com/services/epoxy-coatings",
  },
};

const includes = [
  { item: "Epoxy base coat systems", detail: "100% solids epoxy for maximum durability" },
  { item: "Polyaspartic topcoats", detail: "UV-stable, fast-cure finish rated for AZ heat" },
  { item: "Decorative flake finishes", detail: "Full broadcast vinyl flake for grip and style" },
  { item: "Metallic epoxy systems", detail: "Swirling pearlescent effects, unique to each floor" },
  { item: "Garage floor coatings", detail: "Hot-tire rated, chemical-resistant, easy-clean" },
  { item: "Patio & outdoor coatings", detail: "UV-resistant systems for covered Tucson patios" },
  { item: "Commercial & industrial", detail: "High-build systems for warehouses and shops" },
  { item: "Surface grinding & prep", detail: "Diamond grinding for maximum coating adhesion" },
];

const trust = [
  {
    h: "Engineered for Arizona heat",
    p: "Budget epoxy peels in garages that hit 130°F in summer. We use polyaspartic and 100% solids epoxy systems with heat distortion temperatures rated well above Arizona's extremes — and they're UV-stable so they won't yellow in direct sun.",
  },
  {
    h: "Proper surface prep every time",
    p: "Epoxy fails at the prep stage — not the application stage. We diamond-grind every slab to open the concrete pores, remove contaminants, and create mechanical adhesion. Shot blasting or acid-etching alone isn't good enough for a lasting bond.",
  },
  {
    h: "Hot-tire pickup resistant",
    p: "Car tires heat up dramatically after highway driving in Tucson summers. We spec coatings specifically rated to resist hot-tire pickup — so your garage floor won't peel when your car pulls in after a freeway run.",
  },
  {
    h: "Fast turnaround, same-day return",
    p: "Polyaspartic topcoats cure in hours, not days. Most garage floors are back in service within 24 hours. We coordinate around your schedule so you're never locked out of your garage for days on end.",
  },
];

const faqs = [
  {
    q: "Why does cheap epoxy peel in Tucson garages?",
    a: "Two reasons: poor prep and wrong product. Water-based DIY epoxies aren't designed for garage environments. And without diamond grinding, the coating bonds to dust and oils on the surface, not the concrete itself. The heat cracks the bond and the epoxy peels — usually within 1–2 summers.",
  },
  {
    q: "What's the difference between epoxy and polyaspartic?",
    a: "Epoxy is the base coat — it bonds to the concrete and provides build. Polyaspartic is a topcoat — UV-stable, hard, and abrasion-resistant. We typically apply both in a two-coat system for maximum durability. Polyaspartic alone can be used as a single-coat system for faster cure times.",
  },
  {
    q: "Can epoxy be applied to an outdoor patio in Tucson?",
    a: "Yes, with the right product. Standard epoxy yellows and chalks outdoors. We use UV-stable polyaspartic or specialty exterior coatings for covered patios. Fully exposed outdoor slabs need additional UV-protection topcoats.",
  },
];

export default function EpoxyCoatingsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Epoxy & Coatings · Tucson, AZ"
          title="Floor coatings built"
          highlight="for Arizona heat."
          subtitle="Epoxy, polyaspartic, and decorative flake systems for garages, patios, and commercial floors — rated for Tucson's extreme temperatures, UV, and hot-tire conditions."
          seed={17}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-oak mb-3">What&apos;s included</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              Every coating system, every surface.
            </h2>
            <p className="mt-4 text-ink/60 leading-relaxed">
              Garage floors, shop floors, patios, commercial spaces — we cover all surfaces with properly prepped, professionally applied coatings rated for Arizona conditions.
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
                Coatings that survive Tucson summers.
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
            <h2 className="font-display font-bold text-3xl tracking-tight">Epoxy coatings FAQ</h2>
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
              Get a free epoxy estimate &rarr;
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
          heading={<>A garage floor that<br />lasts Arizona summers.</>}
          body="Free on-site estimate. We assess your slab, recommend the right system, and send a written quote within one business day."
        />
      </main>
      <Footer />
    </>
  );
}
