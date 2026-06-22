import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const SITE = "https://slabandgrain.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Slab & Grain Flooring | Premium Flooring Installation in Tucson, AZ",
  description:
    "Hardwood, tile, luxury vinyl, epoxy, and polished concrete flooring installation for Tucson, the Catalina Foothills, Oro Valley, Marana, and beyond.",
  openGraph: {
    title: "Slab & Grain Flooring — Tucson, AZ",
    description: "Premium flooring installation built for the desert. Licensed, insured, locally owned.",
    url: SITE,
    siteName: "Slab & Grain Flooring",
    type: "website",
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
