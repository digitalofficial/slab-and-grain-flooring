"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

const SERVICES = [
  { href: "/services/hardwood", label: "Hardwood" },
  { href: "/services/tile-stone", label: "Tile & Stone" },
  { href: "/services/luxury-vinyl", label: "Luxury Vinyl Plank" },
  { href: "/services/epoxy-coatings", label: "Epoxy & Coatings" },
  { href: "/services/polished-concrete", label: "Polished Concrete" },
  { href: "/services/floor-repair", label: "Repair & Refinishing" },
];

const NAV_LEFT = [
  { href: "/pricing", label: "Pricing" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass =
    "relative transition-colors hover:text-oak after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-honey after:transition-all hover:after:w-full";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 border-ink/10 backdrop-blur-md shadow-[0_8px_30px_-20px_rgba(44,30,20,.5)]"
          : "bg-paper/70 border-transparent backdrop-blur-sm"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-5 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink/70">

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className={`${linkClass} flex items-center gap-1 focus:outline-none`}
            >
              Services
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            {/* Flyout panel */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <div className="w-56 rounded-2xl border border-ink/[0.08] bg-paper shadow-[0_16px_48px_-16px_rgba(44,30,20,.28)] overflow-hidden">
                <div className="px-2 py-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13.5px] font-medium text-ink/70 transition-colors hover:bg-oak/[0.06] hover:text-oak"
                    >
                      <span className="text-honey text-[10px]">&#9670;</span>
                      {s.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-ink/[0.06] px-2 py-2">
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] font-medium text-ink/50 transition-colors hover:bg-oak/[0.06] hover:text-oak"
                  >
                    View all services &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {NAV_LEFT.map((n) => (
            <Link key={n.href} href={n.href} className={linkClass}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+15200000000" className="hidden lg:inline text-sm font-semibold text-oak">(520) 000-0000</a>
          <Link href="/contact" className="hidden sm:inline btn-lift rounded-full bg-oak px-4 py-2 text-sm font-semibold text-white hover:bg-walnut">
            Free estimate
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="mx-auto max-w-6xl px-5 pb-6 pt-2 flex flex-col gap-1 text-[15px] font-medium text-ink/80">

          {/* Mobile Services accordion */}
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-oak/[0.06] hover:text-oak text-left"
          >
            <span>Services</span>
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>

          {/* Mobile service sub-links */}
          <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${mobileServicesOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="ml-4 mb-1 flex flex-col gap-0.5 border-l border-ink/[0.08] pl-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[14px] text-ink/65 hover:bg-oak/[0.06] hover:text-oak"
                >
                  <span className="text-honey text-[9px]">&#9670;</span>
                  {s.label}
                </Link>
              ))}
              <Link
                href="/services"
                onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[13px] text-ink/45 hover:bg-oak/[0.06] hover:text-oak"
              >
                View all services &rarr;
              </Link>
            </div>
          </div>

          {NAV_LEFT.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-oak/[0.06] hover:text-oak">
              {n.label}
            </Link>
          ))}
          <Link href="/faq" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-oak/[0.06] hover:text-oak">FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-oak px-4 py-3 text-center font-semibold text-white">
            Free estimate
          </Link>
          <a href="tel:+15200000000" className="mt-1 px-3 py-2 text-center text-sm font-semibold text-oak">(520) 000-0000</a>
        </nav>
      </div>
    </header>
  );
}
