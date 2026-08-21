import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  { k: "Senior", v: "team on every project, start to finish" },
  { k: "Full-stack", v: "from interface to infrastructure" },
  { k: "Built to last", v: "clean, typed, maintainable code" },
];

export function BlueFeature() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 85% 10%, rgba(255,255,255,0.18), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(9,30,66,0.35), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"
      />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
              Why Six Stack
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-display-lg font-extrabold leading-[0.98]">
              Software you can be proud to put your name on.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              We work like it is our own product: clear scope, honest timelines, and
              engineering that holds up long after launch.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-semibold text-brand-700 transition-all duration-300 ease-premium hover:-translate-y-0.5"
              >
                About the studio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.08}>
              <div>
                <div className="text-2xl font-extrabold sm:text-3xl">{p.k}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
