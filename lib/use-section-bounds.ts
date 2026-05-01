"use client";

import { type RefObject, useLayoutEffect, useRef } from "react";

export type SectionBounds = { top: number; bottom: number };

/** Document-space top/bottom; updates on resize / layout (not per scroll tick). */
export function useSectionBounds(ref: RefObject<HTMLElement | null>) {
  const boundsRef = useRef<SectionBounds>({ top: 0, bottom: 0 });
  const rafRef = useRef(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    function measure() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const st = window.scrollY;
        boundsRef.current = {
          top: rect.top + st,
          bottom: rect.bottom + st,
        };
      });
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ref]);

  return boundsRef;
}

export function clamp01(v: number) {
  return Math.min(Math.max(v, 0), 1);
}
