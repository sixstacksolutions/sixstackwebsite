"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

/**
 * Hero visual — the exact Six Stack logo, sliced into its layers so it builds
 * piece by piece: each plate drops in from above and stacks up (bottom first),
 * then the whole mark floats gently. Pixel-exact (uses real logo slices).
 * No WebGL; respects prefers-reduced-motion.
 */

// bottom → top so the base lands first, the "S" plate last
const order = [5, 4, 3, 2, 1, 0];

export function HeroStack() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      {/* soft blue backdrop, centered behind the mark */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[7%] h-[74%] w-[64%] -translate-x-1/2 rounded-[2.5rem] rounded-tr-[6rem]"
        style={{ background: "linear-gradient(160deg, #DCEBFF, #EAF2FF)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(22,119,255,0.16), transparent 70%)" }}
      />

      {/* floating group */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-[46%] max-w-[220px] sm:w-[48%]"
          style={{ aspectRatio: "298 / 484" }}
          animate={reduce ? undefined : { y: [0, -14, 0] }}
          transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.85 }}
        >
          {order.map((idx, step) => (
            <motion.img
              key={idx}
              // eslint-disable-next-line @next/next/no-img-element
              src={`/stack/layer-${idx}.png`}
              alt=""
              aria-hidden={idx !== 0 ? true : undefined}
              className="absolute inset-0 h-full w-full drop-shadow-[0_20px_40px_rgba(22,119,255,0.18)]"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -260 }}
              animate={{ opacity: 1, y: 0 }}
              // Snappy on purpose. This replays on every return to the home
              // page, so a leisurely build that reads well once reads as a
              // slow page on the fourth visit. Last plate now lands at ~0.55s
              // instead of ~1.55s, which keeps the effect and loses the wait.
              transition={
                reduce
                  ? undefined
                  : { duration: 0.42, delay: 0.05 + step * 0.07, ease: [0.22, 1, 0.36, 1] }
              }
            />
          ))}
        </motion.div>
      </div>

      {/* accessible label (images are decorative slices) */}
      <span className="sr-only">{site.name} logo</span>
    </div>
  );
}
