"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { projects } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { ParallaxSection } from "@/components/ParallaxSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

const ProjectModal = dynamic(
  () =>
    import("@/components/ProjectModal").then((mod) => ({
      default: mod.ProjectModal,
    })),
  { ssr: false }
);

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  function handleOpen(project: Project) {
    setSelected(project);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleExitComplete() {
    setSelected(null);
  }

  return (
    <ParallaxSection
      id="projects"
      className="border-b border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="Real projects focused on clarity, performance, and outcomes — not just visuals."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              onOpen={handleOpen}
            />
          ))}
        </div>
      </Container>

      <ProjectModal
        project={selected}
        open={open}
        onClose={handleClose}
        onExitComplete={handleExitComplete}
      />
    </ParallaxSection>
  );
}
