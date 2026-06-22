import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery | Slab & Grain Flooring Tucson",
  description: "Before-and-after photos and project showcases from Slab & Grain Flooring in Tucson, AZ.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our work"
          title="Tucson floors,"
          highlight="transformed."
          subtitle="Real installs from real Tucson homes. Hardwood, tile, LVP, epoxy, polished concrete — see the craft."
          seed={19}
        />

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-ink/55 leading-relaxed">
              Gallery photos coming soon. In the meantime, reach out and we&apos;ll share before-and-after examples relevant to your project.
            </p>
          </Reveal>
        </section>

        <CTASection
          heading={<>Want to see work<br />like yours?</>}
          body="Tell us about your project and we'll share photos of similar Tucson floors we've installed."
        />
      </main>
      <Footer />
    </>
  );
}
