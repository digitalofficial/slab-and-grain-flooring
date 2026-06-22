import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhySlab } from "@/components/WhySlab";
import { ServiceArea } from "@/components/ServiceArea";
import { Reviews } from "@/components/Reviews";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";
import { Marquee } from "@/components/Marquee";

const trust = [
  "ROC Licensed & Insured",
  "Hardwood & Tile Specialists",
  "Flat-Rate Project Quotes",
  "Furniture Moving Included",
  "10+ Years in Tucson",
  "Locally Owned & Operated",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="border-b border-ink/5 bg-paper">
          <div className="mx-auto max-w-6xl"><Marquee items={trust} /></div>
        </div>
        <Services />
        <WhySlab />
        <Stats />
        <ServiceArea />
        <div className="mx-auto max-w-6xl px-5"><div className="plankline opacity-60" /></div>
        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
