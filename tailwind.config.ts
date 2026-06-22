import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        walnut: "#2C1E14",     // deep walnut — dark sections, footer
        oak: "#6B4226",        // rich brown — primary brand
        honey: "#D4A44C",      // warm amber — accents, CTAs, highlights
        grain: "#C49A6C",      // soft wood tone — secondary accent
        ink: "#2A1F17",        // dark warm brown — body text
        paper: "#FAF7F2",      // warm cream — page background
      },
    },
  },
  plugins: [],
};
export default config;
