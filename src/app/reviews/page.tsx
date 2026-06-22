import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reviews | Slab & Grain Flooring Tucson",
  description: "What Tucson homeowners say about Slab & Grain Flooring — real reviews from real installs.",
};

const reviews = [
  { quote: "Replaced carpet in the entire house with luxury vinyl plank. Finished in three days, moved all our furniture, and the floors look incredible. Best home upgrade we've done.", who: "Sarah M.", area: "Catalina Foothills" },
  { quote: "Had them polish and stain our concrete slab — went from builder-grade to magazine-worthy. Everyone who visits asks about our floors now.", who: "Mike & Laura K.", area: "Oro Valley" },
  { quote: "Tile work in two bathrooms and the kitchen. Grout lines are razor straight, transitions are flush. You can tell they actually care about the craft.", who: "David R.", area: "Marana" },
  { quote: "Engineered hardwood throughout the main floor. They acclimated the material for a full week before installing — no gaps, no buckling. Flawless.", who: "Jennifer P.", area: "Tucson" },
  { quote: "Epoxy floor in our three-car garage. It looks like a showroom now. Handled Arizona heat questions proactively and the coating has been bulletproof.", who: "Carlos T.", area: "Dove Mountain" },
  { quote: "Herringbone tile in our master bath — the layout is perfect, not a single lippage issue. They even suggested a better drain placement. Real pros.", who: "Patricia & Jim H.", area: "Sahuarita" },
];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reviews"
          title="What Tucson says about"
          highlight="Slab & Grain."
          subtitle="Real feedback from real installs across the Tucson metro."
          seed={11}
        />

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.who} delay={(i % 3) * 90}>
                <figure className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
                  <div className="text-honey mb-3 tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <blockquote className="text-[15px] text-ink/75 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4">
                    <div className="text-sm font-semibold text-ink">{r.who}</div>
                    <div className="text-xs text-ink/50">{r.area}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection
          heading={<>Ready to transform<br />your floors?</>}
          body="Get a free in-home estimate and see why Tucson homeowners trust Slab & Grain."
        />
      </main>
      <Footer />
    </>
  );
}
