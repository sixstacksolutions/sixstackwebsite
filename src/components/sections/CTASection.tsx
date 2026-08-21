import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title = "Let's build something that lasts.",
  description = "Tell us about your product, timeline and goals. We'll come back with a clear, honest plan, no pressure, no jargon.",
  primary = { label: "Start a Project", href: "/contact" },
  secondary = { label: "View our work", href: "/projects" },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink-soft/40 bg-ink px-6 py-16 text-center sm:px-16 sm:py-20">
          {/* decorative */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "radial-gradient(60% 60% at 50% 0%, rgba(22,119,255,0.35), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(22,119,255,0.35), transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <span className="kicker text-brand-300">Start a project</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-display-md font-bold text-white">{title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
                {description}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primary.href} size="lg" withArrow>
                  {primary.label}
                </Button>
                <Button
                  href={secondary.href}
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                >
                  {secondary.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
