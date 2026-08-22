import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section className="relative bg-surface-50 py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="Selected work"
            title="Projects, not just pages"
            description="Case studies from our recent engagements are being prepared for publication."
          />
          {featured.length > 0 && (
            <div className="shrink-0">
              <Button href="/projects" variant="outline" withArrow>
                View all projects
              </Button>
            </div>
          )}
        </div>

        {featured.length === 0 ? (
          /*
            Shown while `projects` is empty. An honest "coming soon" reads far
            better than three placeholder cards a visitor can tell are fake —
            and it disappears on its own the moment a real entry is added.
          */
          <div className="mt-14 rounded-2xl border border-dashed border-line-strong bg-white px-6 py-16 text-center">
            <p className="font-display text-lg font-semibold text-ink">
              Case studies coming soon
            </p>
            <p className="lead mx-auto mt-3 max-w-md">
              We&apos;re writing up our recent work. In the meantime, tell us what
              you&apos;re building and we&apos;ll walk you through relevant projects
              directly.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="outline" withArrow>
                Talk to us about your project
              </Button>
            </div>
          </div>
        ) : (
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
