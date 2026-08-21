"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { processSteps } from "@/data/process";

export function ProcessTimeline() {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-300 via-line to-transparent md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-10 md:space-y-16">
        {processSteps.map((step, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={step.number}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-16 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
            >
              {/* node */}
              <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white font-display text-sm font-bold text-brand-600 shadow-soft md:left-1/2 md:-translate-x-1/2">
                {step.number}
              </div>

              <div
                className={
                  left
                    ? "md:col-start-1 md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                }
              >
                <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand-600">{step.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">{step.details}</p>
                <ul
                  className={`mt-4 flex flex-wrap gap-2 ${
                    left ? "md:justify-end" : ""
                  }`}
                >
                  {step.outputs.map((o) => (
                    <li
                      key={o}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-50 px-3 py-1 text-xs text-slate-body"
                    >
                      <Check className="h-3 w-3 text-teal-500" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
