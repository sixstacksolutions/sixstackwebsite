import type { Metadata, Viewport } from "next";
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";
import { site } from "@/lib/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name}, ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software development",
    "web development",
    "mobile development",
    "AI development",
    "cloud & devops",
    "UI/UX design",
    "software consulting",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name}, ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    url: site.domain,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}, ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <FloatingContact />
        <WhatsAppButton />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
