import Link from "next/link";
import { Reveal } from "./Reveal";

const reviews = [
  { quote: "Replaced carpet in the entire house with luxury vinyl plank. Finished in three days, moved all our furniture, and the floors look incredible. Best home upgrade we've done.", who: "Foothills homeowner" },
  { quote: "Had them polish and stain our concrete slab — went from builder-grade to magazine-worthy. Everyone who visits asks about our floors now.", who: "Oro Valley" },
  { quote: "Tile work in two bathrooms and the kitchen. Grout lines are razor straight, transitions are flush. You can tell they actually care about the craft.", who: "Marana" },
];

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow text-oak mb-3 text-center">What Tucson says</p>
        <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight text-center mb-12">Floors we&apos;ve laid, trust we&apos;ve earned.</h2>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.who} delay={i * 90}>
            <figure className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
              <div className="text-honey mb-3 tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="text-[15px] text-ink/75 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">{r.who}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="text-center text-sm text-ink/55 mt-8">
          <Link href="/reviews" className="font-semibold text-oak hover:text-honey">Read more Tucson reviews &rarr;</Link>
        </p>
      </Reveal>
    </section>
  );
}
