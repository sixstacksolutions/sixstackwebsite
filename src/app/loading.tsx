import { LogoMark } from "@/components/brand/Logo";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LogoMark className="h-14 w-auto animate-float" />
        <span className="font-display text-xs uppercase tracking-[0.2em] text-slate-muted">
          Loading
        </span>
      </div>
    </div>
  );
}
