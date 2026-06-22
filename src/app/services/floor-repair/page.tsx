import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Floor Repair & Refinishing Tucson AZ | Slab & Grain Flooring",
  description:
    "Professional floor repair and refinishing in Tucson, AZ. Hardwood refinishing, tile repair, subfloor leveling, water damage restoration, and old flooring removal.",
  keywords: [
    "floor repair Tucson",
    "floor refinishing Tucson AZ",
    "hardwood refinishing Tucson",
    "subfloor repair Tucson",
    "water damage flooring Tucson Arizona",
    "floor restoration Tucson",
  ],
  openGraph: {
    title: "Floor Repair & Refinishing Tucson AZ | Slab & Grain Flooring",
    description:
      "Scratched hardwood, cracked tile, damaged subfloors — we restore Tucson floors without demo surprises. Licensed, honest estimates, no change orders.",
    url: "https://slabandgrain.com/services/floor-repair",
  },
};

const includes = [
  { item: "Hardwood sanding & refinishing", detail: "Drum sanding, edging, staining & recoat" },
  { item: "Screen & recoat", detail: "Light scuff and fresh topcoat — no sanding needed" },
  { item: "Tile crack & chip repair", detail: "Color-matched filler or replacement tile setting" },
  { item: "Grout cleaning & resealing", detail: "Restore grout to near-original color and seal" },
  { item: "Subfloor repair & leveling", detail: "Patch, level, and re-secure loose subfloor panels" },
  { item: "Water damage restoration", detail: "Remove, dry, and replace moisture-damaged flooring" },
  { item: "Old flooring removal", detail: "Tear-out and disposal of existing floor materials" },
  { item: "Vinyl & LVP plank replacement", detail: "Match and replace individual damaged planks" },
];

const trust = [
  {
    h: "We find the real problem",
    p: "A squeaky floor or cracked tile is usually a symptom of something below. We inspect the subfloor, the slab condition, and any moisture issues before recommending a repair. Treating the symptom without addressing the cause just means calling us back sooner.",
  },
  {
    h: "No demo surprises",
    p: "Before we touch a floor, we tell you exactly what we expect to find underneath — and what it will cost if we find something worse. We've worked on enough Tucson homes to know where the surprises hide, and we quote honestly for them upfront.",
  },
  {
    h: "Monsoon season specialists",
    p: "Tucson's monsoon storms push water under doors, through sliding glass tracks, and up through slab cracks. We've handled hundreds of water-damaged floors and know how to dry, assess, and restore without replacing more than necessary.",
  },
  {
    h: "Color matching & blending",
    p: "Patching a hardwood floor or replacing a few tiles requires color matching. We stock a wide range of stains and source replacement tiles to find the closest possible match. We'll show you the match before we commit — no surprises.",
  },
];

const faqs = [
  {
    q: "Can my hardwood floors be refinished instead of replaced?",
    a: "Most hardwood floors can be refinished 3–5 times over their lifetime. We measure the remaining wear layer — if there's at least 3/32\" above the tongue, we can sand and refinish. Engineered hardwood can typically be refinished 1–2 times depending on the veneer thickness.",
  },
  {
    q: "How do I know if my subfloor needs repair after a water leak?",
    a: "Signs include soft spots when walking, squeaking that wasn't there before, visible swelling or buckling, or persistent musty odor. In Tucson, monsoon leaks often go undetected for weeks. We use moisture meters and inspection to assess the full extent of damage before quoting.",
  },
  {
    q: "Can you match my existing tile if only a few are cracked?",
    a: "We'll try our best. Bring us a photo and, if possible, an extra tile from your original installation. If your tile is discontinued, we'll source the closest match and do a test set in an inconspicuous area first. Sometimes decorative grout or a feature inlay can make a patch into a design detail.",
  },
];

export default function FloorRepairPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Floor Repair & Refinishing · Tucson, AZ"
          title="Restore your floors"
          highlight="before replacing them."
          subtitle="Scratched hardwood, cracked tile, water-damaged subfloors, and worn vinyl — we diagnose the real problem and restore Tucson floors with honest quotes and no demo surprises."
          seed={31}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-oak mb-3">What&apos;s included</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              Every repair service under one roof.
            </h2>
            <p className="mt-4 text-ink/60 leading-relaxed">
              From a single cracked tile to a full subfloor replacement after a monsoon flood — we handle every type of floor repair for Tucson homes with the same attention to detail as our new installs.
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
                Diagnose first. Fix right. Quote honestly.
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
            <h2 className="font-display font-bold text-3xl tracking-tight">Floor repair FAQ</h2>
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
              Get a free repair estimate &rarr;
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
          heading={<>Don&apos;t replace it<br />until we&apos;ve seen it.</>}
          body="Free in-home inspection and written repair estimate. We'll tell you honestly what's worth fixing and what needs replacing."
        />
      </main>
      <Footer />
    </>
  );
}
