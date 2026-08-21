import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-4" aria-hidden="true">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="heading-xl text-balance"
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 body-lg max-w-2xl text-pretty",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
