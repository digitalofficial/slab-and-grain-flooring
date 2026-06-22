import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Flooring Services in Tucson | Slab & Grain Flooring",
  description: "Hardwood, tile, luxury vinyl, epoxy, polished concrete, and floor refinishing across Tucson and the Foothills.",
};

const ICON = "h-6 w-6";
const services = [
  {
    title: "Hardwood Flooring",
    body: "Solid and engineered hardwood installation, sanding, staining, and refinishing. We acclimate materials to Tucson's dry climate and prep every subfloor for a flawless, long-lasting result.",
    includes: ["Solid hardwood install", "Engineered hardwood install", "Sanding & refinishing", "Custom staining", "Subfloor leveling & prep", "Moisture barrier installation"],
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18"/></svg>),
  },
  {
    title: "Tile & Stone",
    body: "Porcelain, ceramic, travertine, marble, and slate — precision-set with waterproof underlayment where it counts. Expert pattern layouts, clean grout lines, and flush transitions.",
    includes: ["Porcelain & ceramic tile", "Travertine & marble", "Shower & tub surrounds", "Backsplashes", "Heated floor systems", "Waterproof membrane prep"],
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>),
  },
  {
    title: "Luxury Vinyl Plank (LVP)",
    body: "Waterproof, scratch-resistant, and stunning. We install top-tier LVP brands with click-lock or glue-down methods — perfect for Tucson's slab-on-grade homes.",
    includes: ["Click-lock installation", "Glue-down installation", "Waterproof underlayment", "Transition strips & trim", "Furniture moving included", "Same-day walk-on ready"],
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14c2 0 2-1.5 4.5-1.5S11 14 13 14s2-1.5 4.5-1.5S20 14 21 14"/><path d="M3 18c2 0 2-1.5 4.5-1.5S11 18 13 18s2-1.5 4.5-1.5S20 18 21 18"/><path d="M12 3v6"/></svg>),
  },
  {
    title: "Epoxy & Coatings",
    body: "Garage floors, patios, showrooms, and commercial spaces. Durable epoxy, polyaspartic, and decorative flake systems that handle Arizona's extreme heat without peeling or yellowing.",
    includes: ["Epoxy floor coatings", "Polyaspartic systems", "Decorative flake finishes", "Metallic epoxy", "Garage floor coatings", "Commercial & industrial"],
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c4 4 7 7 7 11a7 7 0 0 1-14 0c0-4 3-7 7-11z"/></svg>),
  },
  {
    title: "Polished Concrete",
    body: "Transform your existing concrete slab into a sleek, modern floor. Multi-step grinding, honing, and polishing to your desired sheen — or add custom stains and dyes.",
    includes: ["Concrete grinding & honing", "High-gloss polishing", "Acid & water-based stains", "Decorative scoring", "Densifier & sealer application", "Existing slab restoration"],
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18M3 12h18"/></svg>),
  },
  {
    title: "Floor Repair & Refinishing",
    body: "Scratched hardwood, cracked tiles, worn vinyl, or water-damaged subfloors. We restore what can be saved and prep what needs replacing — no demo surprises.",
    includes: ["Hardwood refinishing", "Tile crack & chip repair", "Subfloor repair & leveling", "Water damage restoration", "Grout cleaning & resealing", "Old flooring removal"],
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.3 2.3-2.2-.5-.5-2.2 2.3-2.3z"/></svg>),
  },
];

const steps = [
  { n: "01", h: "Free in-home estimate", p: "We measure your space, discuss materials and design, and deliver a detailed line-by-line quote within one business day." },
  { n: "02", h: "Material selection", p: "Choose from our curated collection or bring your own. We help you pick the right floor for your lifestyle, traffic, and budget." },
  { n: "03", h: "Expert installation", p: "Furniture moved, old flooring removed, subfloor prepped, new floor installed — with dust containment and full cleanup." },
  { n: "04", h: "Final walkthrough", p: "We walk every room with you. If anything isn't perfect, we fix it on the spot before we leave." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="What we install"
          title="Every floor type for"
          highlight="Tucson homes."
          subtitle="Hardwood, tile, luxury vinyl, epoxy, and polished concrete — installed by specialists who obsess over the details."
          seed={9}
        />

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 90}>
                <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-oak/[0.08] text-oak">{s.icon}</div>
                  <h2 className="font-display font-semibold text-xl">{s.title}</h2>
                  <p className="mt-2.5 text-[15px] text-ink/60 leading-relaxed">{s.body}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[13.5px] text-ink/70">
                    {s.includes.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="mt-[3px] text-honey">✓</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-walnut text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-honey/90 mb-3">How it works</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">From old floors to dream floors in four steps.</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((st, i) => (
                <Reveal key={st.n} delay={i * 90}>
                  <div className="glass h-full rounded-2xl p-6">
                    <div className="font-display text-3xl font-bold text-honey/80">{st.n}</div>
                    <h3 className="mt-3 font-display font-semibold">{st.h}</h3>
                    <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{st.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="mt-10">
              <Link href="/pricing" className="btn-lift inline-flex rounded-full bg-honey px-6 py-3 text-[15px] font-semibold text-walnut hover:bg-white">
                See pricing &rarr;
              </Link>
            </Reveal>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
