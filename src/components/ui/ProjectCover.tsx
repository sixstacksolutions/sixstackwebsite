import { cn } from "@/lib/cn";

const accents: Record<string, { from: string; to: string; solid: string }> = {
  blue: { from: "#2E7DF7", to: "#0F65DD", solid: "#1677FF" },
  teal: { from: "#38A8FF", to: "#1677FF", solid: "#2E7DF7" },
  navy: { from: "#123A6B", to: "#071A33", solid: "#0E2C57" },
  indigo: { from: "#4C6FE6", to: "#1E3FA8", solid: "#2E56C8" },
};

/**
 * On-brand generated cover art (echoes the layered-stack logo motif).
 * Swap for a real screenshot by passing an <img> instead where used.
 */
export function ProjectCover({
  accent = "blue",
  label,
  className,
}: {
  accent?: "blue" | "teal" | "navy" | "indigo";
  label?: string;
  className?: string;
}) {
  const a = accents[accent] ?? accents.blue;
  const id = `pc-${accent}`;
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <svg
        viewBox="0 0 640 420"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="640" y2="420" gradientUnits="userSpaceOnUse">
            <stop stopColor={a.from} />
            <stop offset="1" stopColor={a.to} />
          </linearGradient>
          <linearGradient id={`${id}-plate`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.55" />
          </linearGradient>
          <pattern id={`${id}-grid`} width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0V34" fill="none" stroke="#ffffff" strokeOpacity="0.10" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="640" height="420" fill={`url(#${id}-bg)`} />
        <rect width="640" height="420" fill={`url(#${id}-grid)`} />
        <circle cx="510" cy="70" r="150" fill="#ffffff" opacity="0.08" />
        <circle cx="120" cy="360" r="120" fill="#000000" opacity="0.08" />

        {/* Isometric stack motif */}
        <g transform="translate(320 210)" opacity="0.95">
          {[0, 1, 2, 3].map((i) => {
            const y = -60 + i * 44;
            const op = 0.95 - i * 0.16;
            return (
              <path
                key={i}
                d={`M0 ${y} L120 ${y + 60} L0 ${y + 120} L-120 ${y + 60} Z`}
                fill={`url(#${id}-plate)`}
                opacity={op}
              />
            );
          })}
        </g>
      </svg>
      {label && (
        <span className="absolute bottom-4 left-4 rounded-full bg-black/25 px-3 py-1 font-display text-[0.62rem] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
