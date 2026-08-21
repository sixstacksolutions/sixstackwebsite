import Link from "next/link";
import { LogoMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 pt-[var(--nav-h)]">
      <div className="text-center">
        <LogoMark className="mx-auto h-20 w-auto opacity-90" />
        <p className="mt-8 font-display text-sm uppercase tracking-[0.2em] text-brand-600">
          Error 404
        </p>
        <h1 className="mt-3 text-display-md font-bold">This page went off-stack</h1>
        <p className="lead mx-auto mt-4 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" withArrow>Back to home</Button>
          <Button href="/contact" variant="outline">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
