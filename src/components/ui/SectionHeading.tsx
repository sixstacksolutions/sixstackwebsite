import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type Props = {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <div className="mb-3">
            <span className="kicker">{kicker}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-display-md font-bold">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="lead mt-4">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
