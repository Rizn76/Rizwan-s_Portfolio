"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ReactNode, ElementType } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
