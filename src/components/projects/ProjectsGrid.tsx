"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const reduce = useReducedMotion();

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  // Nothing published yet: category filters that filter nothing are just noise,
  // so the whole control row is withheld until there is something to sort.
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line-strong bg-white px-6 py-20 text-center">
        <p className="font-display text-xl font-semibold text-ink">
          Case studies coming soon
        </p>
        <p className="lead mx-auto mt-3 max-w-lg">
          We&apos;re preparing detailed write-ups of our recent work. If you&apos;d
          like to see examples relevant to your industry, get in touch and
          we&apos;ll share them with you directly.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 py-4 text-base font-semibold text-white shadow-[0_16px_40px_-16px_rgba(22,119,255,0.65)] transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-brand-700"
        >
          Request examples
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                isActive
                  ? "bg-ink text-white shadow-soft"
                  : "border border-line bg-white text-slate-body hover:border-brand-200 hover:text-ink"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout={!reduce}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-slate-muted">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
