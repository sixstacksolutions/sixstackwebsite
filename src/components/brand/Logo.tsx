import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Brand logo assets (from the official logo file), background removed:
 *   /public/logo-full.png  → full lockup (icon + "SIXSTACK SOLUTIONS")
 *   /public/logo-mark.png  → icon only (the stacked-S mark)
 * Replace those files to update the logo everywhere.
 */

// Icon-only mark, used in the hero, loading screen and 404.
export function LogoMark({
  className = "h-9 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/logo-mark.png"
      alt={`${site.name} icon`}
      className={className}
      width={298}
      height={484}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

// Full lockup (icon + wordmark), used in the navbar and footer.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, home`}
      className={`group inline-flex items-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-full.png"
        alt={`${site.name} logo`}
        width={1189}
        height={484}
        className="h-9 w-auto transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 sm:h-10"
      />
    </Link>
  );
}
