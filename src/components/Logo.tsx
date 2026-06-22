import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Slab & Grain Flooring — home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-oak text-white text-lg font-bold font-display">S</span>
      <span className="font-display font-bold text-lg tracking-tight text-ink">
        Slab<span className="text-oak">&amp;Grain</span>
      </span>
    </Link>
  );
}

export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-oak text-2xl font-bold font-display shadow-sm">S</span>
      <span className="font-display font-bold text-xl tracking-tight text-white">
        Slab<span className="text-honey">&amp;Grain</span>
      </span>
    </span>
  );
}
