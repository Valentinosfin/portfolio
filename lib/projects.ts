export type Project = {
  slug: string;
  title: string;
  url: string;
  /** Card one-liner */
  summary: string;
  /** Modal full copy */
  description: string;
  tech: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "orvyx",
    title: "Orvyx Clothing",
    url: "https://orvyxclothing.shop/",
    summary:
      "A modern e-commerce experience with a clean, premium product presentation and an intuitive path to purchase.",
    description:
      "A modern e-commerce website designed to present products in a clean, premium way while keeping the user journey simple and intuitive. Built to enhance brand perception and improve product discoverability.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/projects/orvyx.jpg",
  },
  {
    slug: "workspace",
    title: "Workspace Platform",
    url: "https://workspace-git-cursor-reviewlift-269fb2-valentinosfins-projects.vercel.app/",
    summary:
      "A structured SaaS-style platform built to support efficient workflows and reduce day-to-day friction.",
    description:
      "A structured SaaS-style platform focused on productivity and usability. Designed with a clear interface and scalable layout to support efficient workflows and reduce user friction.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/projects/workspace.jpg",
  },
  {
    slug: "alphaframe",
    title: "AlphaFrame",
    url: "https://alphaframe.vercel.app/",
    summary:
      "A performance-minded frontend with smooth motion and a responsive, polished feel across devices.",
    description:
      "A modern frontend project exploring clean UI design, smooth animations, and performance-focused development. Built to deliver a responsive and visually refined user experience.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/alphaframe.jpg",
  },
  {
    slug: "faf",
    title: "FAF Jakobstad",
    url: "https://faf-jakobstad.vercel.app/",
    summary:
      "An organizational site focused on clarity, structured content, and accessibility across every screen size.",
    description:
      "A professional website developed for an organization, focused on clear communication, structured content, and ease of use across all devices.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/projects/faf.jpg",
  },
];
