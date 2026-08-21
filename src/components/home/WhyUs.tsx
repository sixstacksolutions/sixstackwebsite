import { Gauge, ShieldCheck, Sparkles, Users, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  {
    icon: Gauge,
    title: "Performance-obsessed",
    text: "Fast by default, we treat speed and Core Web Vitals as features, not afterthoughts.",
  },
  {
    icon: Layers,
    title: "Design + engineering",
    text: "One team across UX and code, so what's designed is exactly what ships.",
  },
  {
    icon: ShieldCheck,
    title: "Built to maintain",
    text: "Clean architecture and typed code your team can extend without us in the room.",
  },
  {
    icon: Users,
    title: "Genuinely collaborative",
    text: "Regular demos and honest communication, you always know where things stand.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-surface-50 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              kicker="Why Six Stack"
              title="A studio that ships like it's their own product"
              description="We're a compact, senior team that cares about the details most agencies skip, performance, maintainability and design that actually gets built."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-line bg-white p-6">
                <div className="flex items-center gap-2 text-brand-600">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-display text-[0.7rem] uppercase tracking-[0.18em]">
                    Our promise
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  Clear scope, honest timelines, and software you can be proud to put
                  your name on. If we wouldn&apos;t ship it, we won&apos;t ask you to.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-50 text-brand-600">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
