import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm border border-transparent",
  ghost:
    "bg-transparent text-foreground hover:bg-muted border border-border",
  outline:
    "bg-transparent text-foreground hover:bg-muted border border-border",
};

type Props = {
  className?: string;
  variant?: Variant;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  className,
  variant = "primary",
  href,
  target,
  rel,
  children,
  ...props
}: Props) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-colors focus-ring disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={cls} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
