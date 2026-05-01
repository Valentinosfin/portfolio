"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "default" | "compact";

export function ParallaxSection({
  children,
  className,
  id,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: Variant;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const aPx = variant === "compact" ? 72 : 130;
  const bPx = variant === "compact" ? 48 : 84;

  const blobAY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [aPx, -aPx]
  );
  const blobBY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [bPx, -bPx]
  );

  const blobOpacity =
    variant === "compact" ? "bg-accent/[0.045]" : "bg-accent/[0.07]";

  return (
    <section
      ref={ref}
      id={id}
      className={cn("relative isolate overflow-hidden", className)}
    >
      <motion.div
        aria-hidden
        style={{ y: blobAY }}
        className={cn(
          "pointer-events-none absolute -left-[min(28%,180px)] top-[12%] h-[min(380px,55vw)] w-[min(380px,55vw)] rounded-full blur-3xl",
          blobOpacity
        )}
      />
      <motion.div
        aria-hidden
        style={{ y: blobBY }}
        className={cn(
          "pointer-events-none absolute -right-[min(22%,140px)] bottom-[18%] h-[min(300px,48vw)] w-[min(300px,48vw)] rounded-full blur-3xl",
          variant === "compact"
            ? "bg-accent/[0.035]"
            : "bg-accent/[0.05]"
        )}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
