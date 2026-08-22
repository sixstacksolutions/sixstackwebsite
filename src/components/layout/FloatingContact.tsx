import Link from "next/link";
import { MessageSquare } from "lucide-react";

/**
 * Persistent contact CTA. A vertical tab on desktop (right edge), a compact
 * round button on mobile. Blue on white, unobtrusive.
 */
export function FloatingContact() {
  return (
    <>
      {/* desktop vertical tab */}
      <Link
        href="/contact"
        aria-label="Let's connect — contact us"
        className="group fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 items-center rounded-l-xl bg-brand-600 py-5 pl-3 pr-2 text-white shadow-lg transition-all duration-300 ease-premium hover:bg-brand-700 hover:pl-4 lg:flex"
      >
        <span
          className="text-xs font-bold uppercase tracking-[0.2em]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Let&apos;s Connect
        </span>
      </Link>

      {/* mobile round button */}
      <Link
        href="/contact"
        aria-label="Let's connect — contact us"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 lg:hidden"
      >
        <MessageSquare className="h-6 w-6" />
      </Link>
    </>
  );
}
