import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Our seven-step development process, discovery, planning, design, development, testing, deployment and support.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Process"
        title={<>From first idea to a product in production</>}
        description="A clear, transparent way of working that keeps projects predictable and moving. Seven steps, no black boxes."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Process" }]}
      />

      <section className="py-20 sm:py-28">
        <div className="container-x max-w-4xl">
          <ProcessTimeline />
        </div>
      </section>

      <section className="border-t border-line bg-surface-50 py-16">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold text-ink">
                Every engagement is a little different
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-body">
                We scale this process to fit the project, a focused MVP moves faster
                and lighter than a large platform build. What stays constant is the
                clarity: you always know what&apos;s happening and why.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
