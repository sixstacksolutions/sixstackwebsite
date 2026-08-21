import { cn } from "@/lib/cn";

/**
 * Themed, on-brand illustration for a kind of work (web, mobile, AI, cloud, …).
 * Clean white line-art on a blue gradient — no photos needed, always renders.
 * Drop a real photo at the matching /public/images path (via SmartImage) to
 * replace it.
 */

export type WorkKind =
  | "web"
  | "mobile"
  | "ai"
  | "cloud"
  | "backend"
  | "design"
  | "automation"
  | "security"
  | "ecommerce"
  | "saas"
  | "consulting";

const gradients: Record<string, [string, string]> = {
  a: ["#2E7DF7", "#0F65DD"],
  b: ["#3B8BFF", "#1462C9"],
  c: ["#1F6FEF", "#0E4FA8"],
};

function tone(kind: WorkKind): [string, string] {
  if (["ai", "security", "consulting"].includes(kind)) return gradients.c;
  if (["mobile", "cloud", "ecommerce"].includes(kind)) return gradients.b;
  return gradients.a;
}

function Motif({ kind }: { kind: WorkKind }) {
  const s = { fill: "none", stroke: "rgba(255,255,255,0.92)", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "web":
    case "saas":
      return (
        <g {...s}>
          <rect x="42" y="34" width="116" height="82" rx="8" />
          <line x1="42" y1="52" x2="158" y2="52" />
          <circle cx="52" cy="43" r="2.4" fill="#fff" stroke="none" />
          <circle cx="61" cy="43" r="2.4" fill="#fff" stroke="none" />
          <circle cx="70" cy="43" r="2.4" fill="#fff" stroke="none" />
          <line x1="54" y1="66" x2="96" y2="66" />
          <line x1="54" y1="78" x2="120" y2="78" />
          <rect x="54" y="90" width="40" height="16" rx="4" />
          <rect x="122" y="64" width="26" height="42" rx="4" opacity="0.7" />
        </g>
      );
    case "mobile":
      return (
        <g {...s}>
          <rect x="76" y="26" width="48" height="98" rx="10" />
          <line x1="90" y1="34" x2="110" y2="34" />
          <line x1="84" y1="48" x2="116" y2="48" />
          <line x1="84" y1="60" x2="106" y2="60" />
          <rect x="84" y="72" width="32" height="20" rx="4" opacity="0.75" />
          <circle cx="100" cy="112" r="4" />
        </g>
      );
    case "ai":
      return (
        <g {...s}>
          <circle cx="100" cy="42" r="8" />
          <circle cx="60" cy="86" r="8" />
          <circle cx="140" cy="86" r="8" />
          <circle cx="100" cy="118" r="8" />
          <line x1="100" y1="50" x2="64" y2="80" />
          <line x1="100" y1="50" x2="136" y2="80" />
          <line x1="66" y1="92" x2="94" y2="114" />
          <line x1="134" y1="92" x2="106" y2="114" />
          <line x1="68" y1="86" x2="132" y2="86" opacity="0.6" />
        </g>
      );
    case "cloud":
    case "backend":
      return (
        <g {...s}>
          <path d="M64 84 a20 20 0 0 1 8 -38 a24 24 0 0 1 46 6 a16 16 0 0 1 4 32 Z" />
          <rect x="66" y="96" width="68" height="12" rx="3" opacity="0.85" />
          <rect x="66" y="112" width="68" height="12" rx="3" opacity="0.6" />
          <circle cx="74" cy="102" r="2.2" fill="#fff" stroke="none" />
          <circle cx="74" cy="118" r="2.2" fill="#fff" stroke="none" />
        </g>
      );
    case "automation":
      return (
        <g {...s}>
          <circle cx="78" cy="74" r="20" />
          <circle cx="78" cy="74" r="7" />
          <circle cx="128" cy="92" r="14" />
          <circle cx="128" cy="92" r="5" />
          <path d="M100 52 a40 40 0 0 1 26 20" opacity="0.8" />
          <path d="M118 112 a40 40 0 0 1 -34 -8" opacity="0.8" />
        </g>
      );
    case "security":
      return (
        <g {...s}>
          <path d="M100 28 L138 42 V78 a40 40 0 0 1 -38 40 a40 40 0 0 1 -38 -40 V42 Z" />
          <path d="M86 74 l10 10 l20 -24" />
        </g>
      );
    case "ecommerce":
      return (
        <g {...s}>
          <path d="M60 46 h14 l10 52 h44 l10 -34 h-58" />
          <circle cx="90" cy="112" r="6" />
          <circle cx="122" cy="112" r="6" />
        </g>
      );
    case "design":
      return (
        <g {...s}>
          <rect x="48" y="38" width="104" height="74" rx="8" />
          <circle cx="66" cy="56" r="7" />
          <path d="M48 96 l30 -26 l22 18 l18 -14 l34 26" />
        </g>
      );
    case "consulting":
      return (
        <g {...s}>
          <path d="M52 112 h96" />
          <path d="M60 112 v-20 M84 112 v-38 M108 112 v-26 M132 112 v-52" />
          <path d="M60 92 l24 -18 l24 12 l24 -34" opacity="0.85" />
          <circle cx="132" cy="52" r="4" fill="#fff" stroke="none" />
        </g>
      );
    default:
      return (
        <g {...s}>
          <rect x="52" y="46" width="96" height="58" rx="8" />
        </g>
      );
  }
}

export function WorkArt({
  kind = "web",
  label,
  className,
}: {
  kind?: WorkKind;
  label?: string;
  className?: string;
}) {
  const [from, to] = tone(kind);
  const id = `wa-${kind}`;
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="200" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="200" height="150" fill={`url(#${id}-bg)`} />
        <circle cx="168" cy="20" r="46" fill="#ffffff" opacity="0.10" />
        <circle cx="24" cy="140" r="40" fill="#000000" opacity="0.08" />
        <Motif kind={kind} />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-black/25 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}

export function kindFromCategory(category: string): WorkKind {
  const c = category.toLowerCase();
  if (c.includes("mobile")) return "mobile";
  if (c.includes("ai")) return "ai";
  if (c.includes("saas")) return "saas";
  if (c.includes("automation")) return "automation";
  if (c.includes("commerce") || c.includes("shop")) return "ecommerce";
  if (c.includes("cloud") || c.includes("devops")) return "cloud";
  return "web";
}
