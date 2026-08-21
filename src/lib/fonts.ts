import { Manrope, JetBrains_Mono } from "next/font/google";

// Single primary typeface — Manrope (geometric grotesk). Used for both
// display/headings (heavy weights) and body text.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Same family exposed as the body variable so everything is one typeface.
const manropeBody = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const fontDisplay = manrope;
export const fontSans = manropeBody;

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
