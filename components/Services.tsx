"use client";

import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { ParallaxSection } from "@/components/ParallaxSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <ParallaxSection
      id="services"
      className="border-b border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I Can Help You With"
          description="Practical work that reduces friction, improves conversion, and removes repetitive manual effort."
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid gap-4 lg:grid-cols-2"
        >
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              className={s.featured ? "lg:col-span-2" : undefined}
            />
          ))}
        </motion.div>
      </Container>
    </ParallaxSection>
  );
}
