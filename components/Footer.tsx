import Link from "next/link";
import { Container } from "@/components/ui/Container";

const quickLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-tight text-foreground">
              Valentinos Stylianou
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Web development &amp; business automation — Finland / EU
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Quick links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring rounded-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:valentinosstylianou0@gmail.com"
                  className="transition-colors hover:text-foreground focus-ring rounded-sm"
                >
                  valentinosstylianou0@gmail.com
                </a>
              </li>
              <li>
                <span className="text-muted-foreground" title="Add your profile URL">
                  GitHub (placeholder)
                </span>
              </li>
              <li>
                <span className="text-muted-foreground" title="Add your profile URL">
                  LinkedIn (placeholder)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-xs text-muted-foreground">
          © 2026 Valentinos Stylianou. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
