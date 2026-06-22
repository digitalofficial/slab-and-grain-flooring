import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Service Areas | Slab & Grain Flooring Tucson",
  description: "Slab & Grain Flooring serves Tucson, Catalina Foothills, Oro Valley, Marana, Dove Mountain, Vail, Sahuarita, and Green Valley.",
};

const areas = [
  { name: "Tucson", desc: "Central, midtown, east side, and south Tucson — the heart of our install routes." },
  { name: "Catalina Foothills", desc: "Estate homes and luxury remodels with high-end hardwood, stone, and custom tile." },
  { name: "Oro Valley", desc: "From Rancho Vistoso to Steam Pump Ranch — LVP, tile, and hardwood specialists." },
  { name: "Marana", desc: "New construction, builder upgrades, and whole-home flooring replacements." },
  { name: "Dove Mountain", desc: "Custom desert homes with polished concrete, natural stone, and premium finishes." },
  { name: "Vail", desc: "Southeast Tucson — Rita Ranch, Civano, and the growing Vail corridor." },
  { name: "Sahuarita", desc: "Rancho Sahuarita, Quail Creek, and surrounding residential communities." },
  { name: "Green Valley", desc: "Retirement communities, tile replacements, and whole-home flooring updates." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Coverage"
          title="Flooring installation across"
          highlight="greater Tucson."
          subtitle="We keep our routes tight for scheduling reliability. If you're nearby and don't see your area, give us a call."
          seed={17}
        />

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a, i) => (
              <Reveal key={a.name} delay={(i % 4) * 80}>
                <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
                  <h2 className="font-display font-semibold text-lg">{a.name}</h2>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-10 text-center text-sm text-ink/55">Don&apos;t see your area? <a href="tel:+15200000000" className="font-semibold text-oak hover:text-honey">Call us</a> — we likely cover it.</p>
          </Reveal>
        </section>

        <CTASection
          heading={<>In your neighborhood?<br />Let&apos;s get started.</>}
          body="Tell us where you are and what floors you're dreaming of — we'll confirm coverage and schedule your free estimate."
        />
      </main>
      <Footer />
    </>
  );
}
