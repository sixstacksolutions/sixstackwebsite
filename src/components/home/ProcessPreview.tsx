import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function ProcessPreview() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="How we work"
            title="A clear path from idea to launch"
            description="A proven seven-step process that keeps projects predictable, transparent and moving."
          />
          <div className="shrink-0">
            <Button href="/process" variant="outline" withArrow>
              See the full process
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.slice(0, 4).map((step, i) => (
            <Reveal key={step.number} delay={i * 0.07}>
              <div className="group relative h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="font-display text-3xl font-bold text-brand-100 transition-colors group-hover:text-brand-200">
                  {step.number}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">{step.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-sm font-medium text-slate-muted">
Then 05 Testing, 06 Deployment, and 07 Support
          </p>
        </Reveal>
      </div>
    </section>
  );
}
