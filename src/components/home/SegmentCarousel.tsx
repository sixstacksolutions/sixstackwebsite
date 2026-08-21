"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { WorkArt, type WorkKind } from "@/components/ui/WorkArt";
import { icons } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type Segment = {
  key: string;
  label: string;
  icon: keyof typeof icons;
  accent: "blue" | "teal" | "navy" | "indigo";
  href: string;
  heading: string;
  body: string;
  points: string[];
};

// NetSol-style segment slider, edit these to change what auto-rotates.
const segments: Segment[] = [
  {
    key: "web",
    label: "Web",
    icon: "globe",
    accent: "blue",
    href: "/services/web-development",
    heading: "Web platforms that scale with you",
    body: "Fast, accessible websites, dashboards and SaaS products with clean architecture that stays maintainable as you grow.",
    points: ["SaaS dashboards & portals", "High-converting marketing sites", "Design systems & component libraries"],
  },
  {
    key: "mobile",
    label: "Mobile",
    icon: "smartphone",
    accent: "teal",
    href: "/services/mobile-development",
    heading: "Apps that feel native everywhere",
    body: "iOS and Android from one maintainable codebase, smooth, offline-ready and reliable to ship.",
    points: ["Cross-platform apps", "Offline-first sync", "Store release pipelines"],
  },
  {
    key: "ai",
    label: "AI / ML",
    icon: "brain",
    accent: "indigo",
    href: "/services/ai-development",
    heading: "AI features that reach production",
    body: "Grounded, measurable AI wrapped in dependable software, from prototype to a feature that moves real metrics.",
    points: ["LLM & RAG features", "Search & recommendations", "Evaluation & monitoring"],
  },
  {
    key: "cloud",
    label: "Cloud & DevOps",
    icon: "cloud",
    accent: "navy",
    href: "/services/cloud-devops",
    heading: "Infrastructure that makes shipping calm",
    body: "Cloud setup, CI/CD and monitoring so releases are automated, observable and cost-aware.",
    points: ["CI/CD pipelines", "Containers & orchestration", "Monitoring & cost control"],
  },
  {
    key: "automation",
    label: "Automation",
    icon: "workflow",
    accent: "blue",
    href: "/services/automation",
    heading: "Automate the work that drains your team",
    body: "Connect your tools and remove repetitive manual steps with reliable, monitored workflows.",
    points: ["Workflow automation", "System integrations", "Data pipelines & syncing"],
  },
];

const DURATION = 5000;

export function SegmentCarousel() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const seg = segments[active];

  const next = useCallback(() => setActive((i) => (i + 1) % segments.length), []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [active, paused, reduce, next]);

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      {/* backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 15% 0%, rgba(22,119,255,0.30), transparent 60%), radial-gradient(50% 50% at 100% 100%, rgba(91,147,251,0.22), transparent 60%)",
        }}
      />

      <div className="container-x relative">
        <SectionHeading
          kicker="What we build"
          title={<span className="text-white">Solutions across your whole stack</span>}
          description={
            <span className="text-white/70">
              One senior team, from the interface down to the infrastructure.
            </span>
          }
        />

        {/* tabs */}
        <div
          className="mt-10 flex flex-wrap gap-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {segments.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={cn(
                  "relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive ? "bg-white text-ink" : "border border-white/15 text-white/70 hover:text-white"
                )}
              >
                {s.label}
                {isActive && !reduce && !paused && (
                  <motion.span
                    key={active}
                    className="absolute bottom-0 left-0 h-0.5 bg-brand-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={seg.key}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {(() => {
                  const Icon = icons[seg.icon];
                  return (
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  );
                })()}
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">{seg.heading}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-white/70">{seg.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {seg.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-white/85">
                      <Check className="h-4 w-4 text-brand-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={seg.href}
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={seg.key}
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[16/11] overflow-hidden rounded-3xl border border-white/10 shadow-lift"
              >
                <WorkArt kind={seg.key as WorkKind} label={seg.label} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
