import Link from "next/link";
import { Woodgrain } from "./Woodgrain";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-walnut text-white">
      <div className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 18% 0%, #6B4226 0%, #4A2E1A 45%, #2C1E14 78%)" }} />
      <Woodgrain seed={7} opacity={0.5} />
      <div className="absolute bottom-0 left-0 right-0 plankline" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="eyebrow text-honey/90 mb-5">Premium flooring &middot; Tucson &amp; the Foothills</p>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[2.6rem] leading-[1.05] md:text-[4.2rem] max-w-3xl">
          Floors that define the<br /><span className="grain-text">whole room.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
          Hardwood, tile, luxury vinyl, epoxy, and polished concrete — expertly installed by a crew that&apos;s been transforming Tucson homes for over a decade.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="rounded-full bg-honey px-6 py-3.5 text-[15px] font-semibold text-walnut hover:bg-white transition-colors">Free estimate</Link>
          <a href="tel:+15200000000" className="rounded-full glass px-6 py-3.5 text-[15px] font-semibold text-white hover:border-honey/60 transition-colors">Call (520) 000-0000</a>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/55">
          <span className="flex items-center gap-2"><span className="text-honey">&#9670;</span> ROC Licensed &amp; Insured</span>
          <span className="flex items-center gap-2"><span className="text-honey">&#9670;</span> 10+ Years in Tucson</span>
          <span className="flex items-center gap-2"><span className="text-honey">&#9670;</span> Locally Owned &amp; Operated</span>
        </div>
      </div>
    </section>
  );
}
