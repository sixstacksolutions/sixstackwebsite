"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { type WorkKind } from "@/components/ui/WorkArt";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

// `slug` keys the photograph at /images/industries/<slug>.jpg; `kind` stays as
// the fallback illustration SmartImage draws if that file is ever missing.
type Industry = { name: string; desc: string; kind: WorkKind; slug: string };

const industries: Industry[] = [
  { name: "FinTech", desc: "Secure payments, dashboards and reconciliation platforms.", kind: "consulting", slug: "fintech" },
  { name: "Healthcare", desc: "Compliant patient and clinical software, powered by data.", kind: "ai", slug: "healthcare" },
  { name: "E-commerce", desc: "Fast storefronts and checkout built to convert.", kind: "ecommerce", slug: "ecommerce" },
  { name: "Logistics", desc: "Real-time tracking, dispatch and fleet operations.", kind: "automation", slug: "logistics" },
  { name: "Education", desc: "Learning platforms and portals that scale to thousands.", kind: "web", slug: "education" },
  { name: "Real Estate", desc: "Marketplaces, listings and customer portals.", kind: "web", slug: "real-estate" },
];

export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-surface-50 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Industries
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-display-lg font-extrabold text-ink">
            Deep experience across regulated and fast-moving sectors
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* preview (desktop, left) */}
          <div className="hidden lg:block">
            <div className="sticky top-28 aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={industries[active].slug}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full"
                >
                  <SmartImage
                    src={`/images/industries/${industries[active].slug}.jpg`}
                    alt={industries[active].name}
                    kind={industries[active].kind}
                    label={industries[active].name}
                    className="saturate-[0.8] contrast-[1.04]"
                  />
                  {/* Same brand wash as the services panel, so the two sets
                      of photography read as one system rather than two. */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-brand-700/30 mix-blend-color"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-display text-lg font-bold text-white">
                      {industries[active].name}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* list */}
          <div className="border-t border-line">
            {industries.map((ind, i) => {
              const isActive = active === i;
              return (
                <div
                  key={ind.name}
                  onMouseEnter={() => setActive(i)}
                  className="group cursor-default border-b border-line py-6"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <h3
                      className={`text-3xl font-extrabold tracking-tight transition-all duration-300 sm:text-4xl ${
                        isActive ? "translate-x-1 text-brand-600" : "text-ink"
                      }`}
                    >
                      {ind.name}
                    </h3>
                    <p
                      className={`hidden max-w-xs text-right text-sm leading-relaxed text-slate-body transition-opacity duration-300 sm:block ${
                        isActive ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      {ind.desc}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body sm:hidden">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
