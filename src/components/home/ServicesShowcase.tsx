"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type WorkKind } from "@/components/ui/WorkArt";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

/**
 * `slug` drives the preview photo at /images/services/<slug>.jpg. Until that
 * file exists SmartImage falls back to the generated WorkArt for `kind`, so
 * photos can be added one at a time without ever showing a broken image.
 */
type Row = { no: string; title: string; desc: string; href: string; kind: WorkKind; slug: string };

const rows: Row[] = [
  { no: "01", title: "Software Development", desc: "Scalable web, mobile and custom software, from idea to production.", href: "/services/web-development", kind: "web", slug: "web-development" },
  { no: "02", title: "AI & Data", desc: "Turn data into intelligent products and automated decisions.", href: "/services/ai-development", kind: "ai", slug: "ai-development" },
  { no: "03", title: "Cloud & DevOps", desc: "Infrastructure and delivery pipelines built for scale and reliability.", href: "/services/cloud-devops", kind: "cloud", slug: "cloud-devops" },
  { no: "04", title: "Product Design", desc: "Digital experiences people actually enjoy using.", href: "/services/ui-ux-design", kind: "design", slug: "ui-ux-design" },
  { no: "05", title: "Cybersecurity", desc: "Protect applications, infrastructure and data by design.", href: "/services/cybersecurity", kind: "security", slug: "cybersecurity" },
  { no: "06", title: "Automation", desc: "Remove repetitive work with reliable, monitored workflows.", href: "/services/automation", kind: "automation", slug: "automation" },
];

export function ServicesShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                What we do
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-2xl text-display-lg font-extrabold text-ink">
                A complete software team, one partner
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/services" className="group inline-flex items-center gap-2 text-base font-semibold text-brand-600">
              All services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* rows */}
          <div className="border-t border-line">
            {rows.map((r, i) => {
              const isActive = active === i;
              return (
                <Link
                  key={r.no}
                  href={r.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group block border-b border-line py-7 transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <span className={`mt-1 text-sm font-bold tabular-nums transition-colors ${isActive ? "text-brand-600" : "text-slate-muted"}`}>
                      {r.no}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`text-2xl font-extrabold tracking-tight transition-all duration-300 sm:text-3xl ${
                            isActive ? "translate-x-1 text-brand-600" : "text-ink"
                          }`}
                        >
                          {r.title}
                        </h3>
                        <ArrowRight
                          className={`h-6 w-6 shrink-0 text-brand-600 transition-all duration-300 ${
                            isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                          }`}
                        />
                      </div>
                      <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-body">{r.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* preview image (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={rows[active].slug}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full"
                >
                  <SmartImage
                    src={`/images/services/${rows[active].slug}.jpg`}
                    alt={rows[active].title}
                    kind={rows[active].kind}
                    label={rows[active].title}
                    className="saturate-[0.8] contrast-[1.04]"
                  />
                  {/*
                    Stock photos arrive in wildly different palettes — greyscale,
                    warm, pastel — which reads as a slideshow of unrelated stock
                    rather than one brand. `mix-blend-color` keeps each photo's
                    luminance but takes the brand hue, so the whole set resolves
                    to the same blue. The gradient grounds the bottom edge so
                    every panel ends the same way regardless of its source.
                  */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-brand-700/30 mix-blend-color"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
