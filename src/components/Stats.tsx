import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Woodgrain } from "./Woodgrain";

const stats = [
  { to: 2000, suffix: "+", label: "Tucson floors installed" },
  { to: 12, suffix: "yrs", label: "Locally owned & operated" },
  { to: 100, suffix: "%", label: "Licensed & insured" },
  { to: 48, suffix: "hr", label: "Estimate turnaround" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-oak text-white">
      <Woodgrain seed={15} opacity={0.3} />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="font-display text-4xl md:text-5xl font-bold grain-text">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/65 leading-snug">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
