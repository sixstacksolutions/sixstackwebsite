import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
  tone = "white",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "surface" | "ink";
}) {
  const tones = {
    white: "bg-white",
    surface: "bg-surface-50",
    ink: "bg-ink text-white",
  };
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28", tones[tone], className)}
    >
      {children}
    </section>
  );
}
