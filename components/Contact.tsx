"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Loader2, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ParallaxSection } from "@/components/ParallaxSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const reduceMotion = useReducedMotion();
  const endpoint = useMemo(
    () => process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
    []
  );

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    if (!endpoint) {
      setStatus("error");
      setErrorMsg(
        "Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to your environment to enable submissions."
      );
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email directly.");
    }
  }

  return (
    <ParallaxSection id="contact" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            title="Let's Build Something That Works"
            description="Tell me what you're trying to improve — traffic, conversions, operations, or response time — and I'll propose a practical path."
          />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-card/50 p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:p-8"
          >
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-ring"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-ring"
                  placeholder="What problem should we solve first?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:pointer-events-none disabled:opacity-60 focus-ring sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </button>

              {status === "success" ? (
                <p className="text-sm text-muted-foreground" role="status">
                  Thanks — your message is on its way. I&apos;ll reply shortly.
                </p>
              ) : null}

              {status === "error" && errorMsg ? (
                <p className="text-sm text-red-500" role="alert">
                  {errorMsg}
                </p>
              ) : null}
            </form>

            <div className="mt-6 flex items-start gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <p>
                Prefer email?{" "}
                <a
                  className="font-medium text-foreground underline-offset-4 hover:underline focus-ring rounded-sm"
                  href="mailto:valentinosstylianou0@gmail.com"
                >
                  valentinosstylianou0@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </ParallaxSection>
  );
}
