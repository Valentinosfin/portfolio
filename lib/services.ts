import type { LucideIcon } from "lucide-react";
import {
  Globe2,
  ShoppingBag,
  Zap,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  /** Featured automation block uses this as the visible heading line */
  highlightTitle?: string;
  description: string;
  outcome: string;
  examples?: string[];
  featured?: boolean;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Website Design & Development",
    description:
      "Build modern, high-performing websites that present your business professionally.",
    outcome: "A clean, fast website that builds trust.",
    icon: Globe2,
  },
  {
    id: "ecommerce",
    title: "E-commerce Websites",
    description:
      "Create structured online stores with a smooth buying experience.",
    outcome: "Better product visibility and usability.",
    icon: ShoppingBag,
  },
  {
    id: "automation",
    title: "Automation & Workflows",
    highlightTitle: "Automate Repetitive Tasks and Save Time",
    description:
      "I build automation systems that handle repetitive processes like lead capture, email responses, notifications, and internal workflows.",
    examples: [
      "Auto-respond to new leads",
      "Connect forms to email or CRM",
      "Automate booking or inquiry flows",
      "Reduce manual work",
    ],
    outcome:
      "Less manual work, faster response times, and more efficient operations.",
    featured: true,
    icon: Zap,
  },
  {
    id: "landing",
    title: "Landing Pages",
    description:
      "Focused pages designed to convert visitors into customers.",
    outcome: "Higher engagement and more inquiries.",
    icon: LayoutTemplate,
  },
  {
    id: "uiux",
    title: "UI/UX Improvements",
    description:
      "Improve clarity and usability of existing websites.",
    outcome: "Better user experience and lower drop-off.",
    icon: Sparkles,
  },
];
