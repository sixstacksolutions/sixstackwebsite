import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CompanyStatement() {
  return (
    <section className="bg-white py-24 sm:py-36">
      <div className="container-x">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Who we are
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-8 max-w-5xl text-display-2xl font-extrabold leading-[0.95] text-ink">
            We don&apos;t just write code. We build{" "}
            <span className="text-brand-600">digital products</span> that scale.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal delay={0.12}>
            <p className="max-w-2xl text-xl leading-relaxed text-slate-body">
              From product strategy and design to engineering, AI and cloud, we help
              ambitious companies turn complex ideas into reliable software. One senior
              team, accountable from the first idea to production and beyond.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex items-end lg:justify-end">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-base font-semibold text-brand-600"
              >
                More about the studio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
