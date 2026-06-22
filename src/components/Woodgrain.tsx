/** Warm organic texture overlay — wood-grain noise for dark sections. */
export function Woodgrain({ seed = 7, opacity = 0.5 }: { seed?: number; opacity?: number }) {
  const id = `woodgrain-${seed}`;
  return (
    <div className="woodgrain" aria-hidden="true" style={{ opacity }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.04" numOctaves={3} seed={seed} stitchTiles="stitch" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.42  0 0 0 0 0.26  0 0 0 0 0.15  0 0 0 10 -4" />
        </filter>
        <rect width="600" height="600" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}
