import type { WorkKind } from "@/components/ui/WorkArt";

/**
 * Which generated illustration a service falls back to when no photograph
 * exists at /images/services/<slug>.jpg.
 *
 * Keyed by slug rather than derived, because kindFromCategory() in WorkArt.ts
 * is written for project categories and silently resolves four of these slugs
 * to "web" — backend-development, ui-ux-design, cybersecurity and
 * software-consulting all miss its keyword checks. A wrong-but-plausible
 * illustration is harder to notice than a missing one, so the mapping is
 * spelled out.
 *
 * Shared by ServiceCard and ServicesPreview; both render the same set.
 */
export const kindBySlug: Record<string, WorkKind> = {
  "web-development": "web",
  "mobile-development": "mobile",
  "ai-development": "ai",
  "backend-development": "backend",
  "ui-ux-design": "design",
  "cloud-devops": "cloud",
  automation: "automation",
  cybersecurity: "security",
  "software-consulting": "consulting",
};
