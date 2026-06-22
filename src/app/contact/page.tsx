import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Estimate | Slab & Grain Flooring — Tucson, AZ",
  description: "Request a free in-home flooring estimate in Tucson. Detailed line-by-line quote within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-oak mb-3">Free estimate</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.05]">Let&apos;s talk about your floors.</h1>
            <p className="mt-5 text-ink/65 leading-relaxed max-w-sm">Send us a few details and we&apos;ll come back with a detailed estimate — usually same day. Prefer to talk?</p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+15200000000" className="flex items-center gap-3 font-semibold text-oak hover:text-honey">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-oak/[0.08]">&#9742;</span> (520) 000-0000
              </a>
              <a href="mailto:hello@slabandgrain.com" className="flex items-center gap-3 font-semibold text-oak hover:text-honey">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-oak/[0.08]">&#9993;</span> hello@slabandgrain.com
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-ink/[0.08] bg-white p-6 md:p-8 shadow-[0_24px_60px_-40px_rgba(44,30,20,.5)]">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
