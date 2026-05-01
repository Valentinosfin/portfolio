import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  const Icon = service.icon;

  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-card/60 p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm",
        service.featured
          ? "border-accent/45 bg-gradient-to-b from-accent/10 via-card/40 to-card/40"
          : "border-border hover:border-border/80",
        className
      )}
    >
      {service.featured ? (
        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
          Most requested
        </span>
      ) : null}

      <div className="flex items-start gap-4">
        <span
          className={cn(
            "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border",
            service.featured
              ? "border-accent/35 bg-accent/10 text-accent"
              : "border-border bg-muted/40 text-foreground"
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </span>
        <div className="min-w-0 space-y-2">
          {!service.featured ? (
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {service.title}
            </h3>
          ) : (
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {service.title}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                {service.highlightTitle ?? service.title}
              </h3>
            </div>
          )}

          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>

          {service.examples?.length ? (
            <ul className="mt-4 space-y-2 border-t border-border/70 pt-4">
              {service.examples.map((ex) => (
                <li key={ex} className="flex gap-2 text-sm text-muted-foreground">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <p className="pt-4 text-sm text-foreground">
            <span className="font-medium">Outcome: </span>
            <span className="text-muted-foreground">{service.outcome}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
