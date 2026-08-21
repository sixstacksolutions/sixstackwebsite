import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { kindFromCategory } from "./WorkArt";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.04]">
          <SmartImage
            src={project.image ?? `/images/projects/${project.slug}.jpg`}
            alt={project.title}
            kind={kindFromCategory(project.category)}
            label={project.category}
          />
        </div>
        <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-soft backdrop-blur transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          {project.tags.map((t) => (
            <span key={t} className="font-display text-[0.62rem] uppercase tracking-[0.16em] text-brand-600">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-2 text-lg font-bold text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-body">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-md bg-surface-100 px-2 py-0.5 text-[0.7rem] text-slate-body">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
