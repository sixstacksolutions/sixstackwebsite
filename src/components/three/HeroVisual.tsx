"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Check, TrendingUp } from "lucide-react";

/**
 * Hero visual, an abstract, animated "product" graphic (a floating app window
 * with a mini chart plus floating status cards). No logo, no WebGL; motion
 * respects prefers-reduced-motion.
 */

const bars = [42, 66, 54, 78, 88, 70, 96];
const chips = [
  { label: "React", x: "-4%", y: "10%", d: 0 },
  { label: "AI / ML", x: "84%", y: "6%", d: 0.5 },
  { label: "Cloud", x: "90%", y: "74%", d: 1.0 },
];

export function HeroVisual() {
  const reduce = useReducedMotion();
  const float = (dur: number, dist = 10) =>
    reduce ? {} : { y: [0, -dist, 0], transition: { duration: dur, repeat: Infinity, ease: "easeInOut" } };

  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgba(22,119,255,0.24), rgba(91,147,251,0.14) 45%, transparent 70%)",
        }}
      />

      {/* main app window */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[78%] max-w-[380px] -translate-x-1/2 -translate-y-1/2"
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={float(7)}
          className="rounded-2xl border border-line bg-white p-5 shadow-[0_30px_70px_-30px_rgba(16,23,41,0.4)]"
        >
          {/* window header */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 h-2 w-24 rounded-full bg-surface-200" />
          </div>

          {/* metric row */}
          <div className="mt-5 flex items-end justify-between">
            <div>
              <div className="h-2 w-16 rounded bg-surface-200" />
              <div className="mt-2 text-2xl font-extrabold text-ink">Analytics</div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/10 px-2 py-1 text-xs font-semibold text-brand-600">
              <TrendingUp className="h-3.5 w-3.5" /> Live
            </span>
          </div>

          {/* bar chart */}
          <div className="mt-5 flex h-28 items-end gap-2.5">
            {bars.map((v, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-md bg-brand-gradient"
                initial={reduce ? { height: `${v}%` } : { height: "8%" }}
                animate={{ height: `${v}%` }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>

          {/* footer rows */}
          <div className="mt-5 space-y-2.5">
            <div className="h-2 w-full rounded bg-surface-200" />
            <div className="h-2 w-3/4 rounded bg-surface-200" />
          </div>
        </motion.div>
      </motion.div>

      {/* floating status card, top right */}
      <motion.div
        className="absolute right-[2%] top-[8%] z-10 hidden rounded-xl border border-line bg-white p-3 shadow-card sm:block"
        initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.div animate={float(5, 8)} className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600">
            <Check className="h-5 w-5" />
          </span>
          <div>
            <div className="text-xs font-bold text-ink">Deployed</div>
            <div className="text-[0.7rem] text-slate-muted">CI/CD passed</div>
          </div>
        </motion.div>
      </motion.div>

      {/* floating status card, bottom left */}
      <motion.div
        className="absolute bottom-[8%] left-[0%] z-10 hidden rounded-xl border border-line bg-white p-3 shadow-card sm:block"
        initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.div animate={float(6, 9)} className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            <Activity className="h-5 w-5" />
          </span>
          <div>
            <div className="text-xs font-bold text-ink">99.9% uptime</div>
            <div className="text-[0.7rem] text-slate-muted">All systems go</div>
          </div>
        </motion.div>
      </motion.div>

      {/* floating tech chips */}
      {chips.map((c) => (
        <motion.div
          key={c.label}
          className="absolute z-10 hidden rounded-full border border-line bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-soft backdrop-blur md:block"
          style={{ left: c.x, top: c.y }}
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, -8, 0] }}
          transition={
            reduce
              ? undefined
              : {
                  y: { duration: 4 + c.d, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.6, delay: 0.6 + c.d * 0.2 },
                }
          }
        >
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-500 align-middle" />
          {c.label}
        </motion.div>
      ))}
    </div>
  );
}
