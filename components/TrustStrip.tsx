"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Target, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ParallaxSection } from "@/components/ParallaxSection";

const items = [
  {
    title: "Experience managing real teams and operations",
    icon: Users,
  },
  {
    title: "Strong understanding of customer behavior",
    icon: HeartHandshake,
  },
  {
    title: "Reliable and structured approach",
    icon: ShieldCheck,
  },
  {
    title: "Focused on practical business results",
    icon: Target,
  },
] as const;

export function TrustStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <ParallaxSection
      variant="compact"
      className="border-b border-border bg-muted/20"
    >
      <Container className="py-14 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : i * 0.06 }}
              className="rounded-2xl border border-border bg-card/60 p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm"
            >
              <item.icon
                className="mb-3 h-5 w-5 text-accent"
                strokeWidth={1.75}
                aria-hidden
              />
              <p className="text-sm leading-snug text-foreground">{item.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Manager at McDonald&apos;s · Customer Service · Computer Engineering
          background — Finland / EU
        </motion.p>
      </Container>
    </ParallaxSection>
  );
}
