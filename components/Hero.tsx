"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { clamp01, useSectionBounds } from "@/lib/use-section-bounds";

const headline =
  "Websites and Automation Systems That Help Your Business Work Smarter";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const words = headline.split(" ");
  const sectionRef = useRef<HTMLElement>(null);
  const boundsRef = useSectionBounds(sectionRef);
  const { scrollY } = useScroll();

  /* Window scroll + measured hero bounds — reliable when target refs skip layout sync */
  const heroT = useTransform(scrollY, (y) => {
    if (reduceMotion === true) return 0;
    const { top, bottom } = boundsRef.current;
    const h = bottom - top;
    if (h < 8) return 0;
    return clamp01((y - top) / h);
  });

  const gridY = useTransform(heroT, [0, 1], reduceMotion === true ? [0, 0] : [0, 320]);
  const orbBackY = useTransform(heroT, [0, 1], reduceMotion === true ? [0, 0] : [0, -220]);
  const orbFrontY = useTransform(heroT, [0, 1], reduceMotion === true ? [0, 0] : [0, -300]);
  const contentY = useTransform(heroT, [0, 1], reduceMotion === true ? [0, 0] : [0, -90]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <motion.div
        aria-hidden
        style={{ y: gridY }}
        className="pointer-events-none absolute -inset-[30%] grid-bg opacity-70 will-change-transform transform-gpu"
      />
      <motion.div
        aria-hidden
        style={{ y: orbBackY }}
        className="pointer-events-none absolute left-[12%] top-[18%] h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full bg-accent/[0.09] blur-3xl will-change-transform transform-gpu dark:bg-accent/[0.12]"
      />
      <motion.div
        aria-hidden
        style={{ y: orbFrontY }}
        className="pointer-events-none absolute bottom-[8%] right-[8%] h-[min(380px,55vw)] w-[min(380px,55vw)] rounded-full bg-accent/[0.06] blur-3xl will-change-transform transform-gpu dark:bg-accent/[0.09]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        style={{ y: contentY }}
        className="will-change-transform transform-gpu"
      >
        <Container className="relative py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground"
          >
            Web development · Automation · Efficiency
            </motion.p>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: reduceMotion ? 0 : 0.04 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.28em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.35 }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I design high-performing websites and build automation workflows that
              save time, improve efficiency, and convert more customers.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.55 }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button href="#projects" variant="primary" className="min-w-[180px]">
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="#contact" variant="ghost" className="min-w-[180px]">
                Get in Touch
              </Button>
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.75 }}
              className="mt-10 text-xs text-muted-foreground"
            >
              Based in Finland · EU citizen (Finland &amp; Cyprus)
            </motion.p>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
