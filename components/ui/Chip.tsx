import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
