import { Woodgrain } from "./Woodgrain";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  seed = 11,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  seed?: number;
}) {
  return (
    <section className="relative overflow-hidden bg-walnut text-white">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 22% 0%, #6B4226 0%, #4A2E1A 48%, #2C1E14 80%)" }}
      />
      <Woodgrain seed={seed} opacity={0.42} />
      <div className="absolute bottom-0 left-0 right-0 plankline" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 md:pt-28 md:pb-20">
        <Reveal as="p" className="eyebrow text-honey/90 mb-4">
          {eyebrow}
        </Reveal>
        <Reveal as="h1" delay={80} className="font-display font-bold tracking-[-0.02em] text-[2.3rem] leading-[1.06] md:text-[3.6rem] max-w-3xl">
          {title} {highlight && <span className="grain-text">{highlight}</span>}
        </Reveal>
        {subtitle && (
          <Reveal as="p" delay={160} className="mt-5 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            {subtitle}
          </Reveal>
        )}
      </div>
    </section>
  );
}
