"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, index, onOpen }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.06 }}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className={cn(
          "group w-full rounded-2xl border border-border bg-card/60 text-left shadow-[var(--shadow-soft)] backdrop-blur-sm transition-colors",
          "hover:border-accent/35 hover:bg-muted/30 focus-ring"
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl border-b border-border">
          <Image
            src={project.image}
            alt={`${project.title} — preview`}
            width={800}
            height={500}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>

        <div className="space-y-3 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
              {project.title}
            </h3>
            <span className="sr-only">Open details</span>
          </div>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
      </button>
    </motion.article>
  );
}
