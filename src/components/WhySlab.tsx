import Link from "next/link";
import { Reveal } from "./Reveal";

const points = [
  { h: "Desert-tested installation", p: "We know how Tucson's dry air, concrete slabs, and temperature swings affect every flooring type — and we prep accordingly." },
  { h: "Showroom-quality finish", p: "Precision cuts, tight seams, level transitions, and clean grout lines. We obsess over the details so your floor looks flawless." },
  { h: "Licensed, insured crew", p: "ROC-licensed, background-checked installers who respect your home. Furniture moved, dust contained, cleanup done." },
  { h: "Transparent, flat-rate quotes", p: "Material and labor quoted upfront, line by line. No change orders mid-job, no mystery fees at the end." },
];

export function WhySlab() {
  return (
    <section id="why" className="bg-walnut text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-honey/90 mb-3">Why Slab &amp; Grain</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">The difference is in the details underfoot.</h2>
            <p className="mt-5 text-white/65 leading-relaxed max-w-md">Most flooring companies rush the prep to start the install. We spend the time on subfloor prep, acclimation, and layout — because that&apos;s what separates a floor that lasts from one that doesn&apos;t.</p>
            <Link href="/contact" className="btn-lift mt-8 inline-flex rounded-full bg-honey px-6 py-3 text-[15px] font-semibold text-walnut hover:bg-white">Get a free estimate</Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((pt, i) => (
              <Reveal key={pt.h} delay={i * 90}>
                <div className="glass h-full rounded-2xl p-5">
                  <div className="text-honey mb-3">&#9670;</div>
                  <h3 className="font-display font-semibold">{pt.h}</h3>
                  <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{pt.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
