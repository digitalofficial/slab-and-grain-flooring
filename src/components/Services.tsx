import Link from "next/link";
import { Reveal } from "./Reveal";

const ICON = "h-[22px] w-[22px]";
const services = [
  { title: "Hardwood Flooring", body: "Solid and engineered hardwood installation, sanding, and refinishing. Real wood warmth that lasts decades in desert conditions.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18"/></svg>) },
  { title: "Tile & Stone", body: "Porcelain, ceramic, travertine, and natural stone — precision-set with clean grout lines and waterproof prep where it matters.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>) },
  { title: "Luxury Vinyl Plank", body: "Waterproof, scratch-resistant, and looks like real wood or stone. The fastest-growing choice for Tucson homes — we install the best brands.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14c2 0 2-1.5 4.5-1.5S11 14 13 14s2-1.5 4.5-1.5S20 14 21 14"/><path d="M3 18c2 0 2-1.5 4.5-1.5S11 18 13 18s2-1.5 4.5-1.5S20 18 21 18"/><path d="M12 3v6"/></svg>) },
  { title: "Epoxy & Coatings", body: "Garage floors, patios, and commercial spaces — durable epoxy, polyaspartic, and decorative flake coatings built for Arizona heat.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c4 4 7 7 7 11a7 7 0 0 1-14 0c0-4 3-7 7-11z"/></svg>) },
  { title: "Polished Concrete", body: "Existing slabs transformed into sleek, modern floors. Grind, hone, and polish to a mirror finish — or stain for a custom look.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18M3 12h18"/></svg>) },
  { title: "Floor Repair & Refinish", body: "Scratched hardwood, cracked tile, or worn-out floors — we restore what you have or prep the subfloor for something new.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.3 2.3-2.2-.5-.5-2.2 2.3-2.3z"/></svg>) },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="flex items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow text-oak mb-3">What we install</p>
          <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight max-w-xl leading-tight">Every floor type, one expert crew.</h2>
        </div>
        <Link href="/services" className="hidden md:inline text-sm font-semibold text-oak whitespace-nowrap hover:text-honey">All services &rarr;</Link>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 80}>
            <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-oak/[0.08] text-oak">{s.icon}</div>
              <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
