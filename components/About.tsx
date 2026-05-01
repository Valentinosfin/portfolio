"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Chip } from "@/components/ui/Chip";

const bullets = [
  "Leadership experience in fast-paced operations",
  "Customer-facing communication and expectation setting",
  "Engineering mindset applied to real business constraints",
] as const;

export function About() {
  const reduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  return (
    <ParallaxSection
      id="about"
      className="border-b border-border py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-border bg-muted/40 lg:mx-0">
              {!imageError ? (
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Valentinos Stylianou"
                  width={560}
                  height={700}
                  sizes="(max-width: 1024px) 70vw, 280px"
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : null}
              <div
                className={`absolute inset-0 grid-bg opacity-40 ${imageError ? "block" : "hidden"}`}
              />
              {imageError ? (
                <div className="relative flex h-full flex-col items-center justify-center gap-2 p-8">
                  <span className="text-4xl font-semibold tracking-tight text-foreground">
                    VS
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Add /public/profile.jpg
                  </span>
                </div>
              ) : null}
            </div>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <Chip>Based in Finland</Chip>
              <Chip>EU citizen (Finland &amp; Cyprus)</Chip>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.06 }}
            className="space-y-6"
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              About
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Websites that convert — systems that scale.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I don&apos;t just build websites — I help businesses improve how they
              operate by combining clean web development with practical automation
              solutions.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My background blends technical education in Computer Engineering with
              hands-on leadership at McDonald&apos;s and customer-facing service work.
              That mix keeps projects grounded: fast execution, clear communication,
              and measurable outcomes.
            </p>

            <ul className="space-y-3 pt-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </ParallaxSection>
  );
}
