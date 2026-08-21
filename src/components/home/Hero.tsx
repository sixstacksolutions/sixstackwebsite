"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroStack } from "@/components/three/HeroStack";

const ease = [0.22, 1, 0.36, 1] as const;
const stack = ["React", "Next.js", "Node.js", "Python", "Flutter", "AWS", "AI / ML"];

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease, delay },
  });

  return (
    <section className="relative overflow-hidden bg-white pt-[var(--nav-h)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -bottom-24 h-[440px] w-[440px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10), transparent 70%)" }}
      />

      <div className="container-x relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <motion.div {...rise(0)}>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Software engineering studio
            </span>
          </motion.div>

          <motion.h1 {...rise(0.08)} className="mt-5 text-display-xl font-extrabold text-ink">
            We build software that <span className="text-brand-600">grows</span> your business.
          </motion.h1>

          <motion.p {...rise(0.18)} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-body sm:text-xl">
            From websites and mobile apps to AI and cloud, we design and build digital
            products that are fast, reliable, and easy to use.
          </motion.p>

          <motion.div {...rise(0.26)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 py-4 text-base font-semibold text-white shadow-[0_16px_40px_-16px_rgba(22,119,255,0.65)] transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-600 px-7 py-4 text-base font-semibold text-brand-600 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>

        {/* animated 3D stack */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroStack />
        </motion.div>
      </div>

      {/* technologies strip */}
      <div className="container-x relative border-t border-line py-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-muted">
            Technologies we build with
          </span>
          {stack.map((t) => (
            <span key={t} className="text-sm font-semibold text-ink/60 transition-colors hover:text-brand-600">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
