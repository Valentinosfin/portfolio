"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/lib/projects";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";
import { useIsClient } from "@/lib/use-is-client";

const FOCUSABLE =
  "a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex=\"-1\"])";

type Props = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
  onExitComplete?: () => void;
};

export function ProjectModal({
  project,
  open,
  onClose,
  onExitComplete,
}: Props) {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const mounted = useIsClient();

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  const onTab = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const focusables = [
      ...panelRef.current.querySelectorAll(FOCUSABLE),
    ] as HTMLElement[];
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    if (!open || !project) return;
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keydown", onTab);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      cancelAnimationFrame(t);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keydown", onTab);
      document.body.style.overflow = prev;
    };
  }, [open, project, onKeyDown, onTab]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      {open && project ? (
        <motion.div
          key={project.slug}
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              "relative z-[101] flex max-h-[min(90vh,860px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl"
            )}
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
              <Image
                src={project.image}
                alt=""
                width={800}
                height={500}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4 sm:px-6">
              <div>
                <h2
                  id={titleId}
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  {project.title}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">Case study</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-muted/30 text-foreground transition-colors hover:bg-muted focus-ring"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>

            <div className="border-t border-border p-4 sm:px-6 sm:py-5">
              <Button
                className="w-full sm:w-auto"
                variant="primary"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
                <ExternalLink className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
