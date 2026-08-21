import { trustStrip } from "@/data/technologies";

export function TechMarquee() {
  const row = [...trustStrip, ...trustStrip];
  return (
    <div className="mask-fade-x overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {row.map((tech, i) => (
          <div key={`${tech}-${i}`} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-display text-lg font-semibold text-slate-muted transition-colors hover:text-ink">
              {tech}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-200" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
