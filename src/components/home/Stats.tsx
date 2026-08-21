"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Capability stats (not client metrics). Edit the numbers/labels freely.
const stats = [
  { value: 9, suffix: "", label: "Core disciplines" },
  { value: 30, suffix: "+", label: "Technologies we build with" },
  { value: 6, suffix: "", label: "Industries served" },
  { value: 100, suffix: "%", label: "Senior engineers" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, reduce]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-surface-100 py-20 sm:py-24">
      <div className="container-x">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
          Built to deliver at any scale
        </p>
        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <div className="text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm font-medium text-slate-body">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
