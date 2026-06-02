import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-brand text-white shadow-[0_8px_32px_-8px_color-mix(in_oklch,var(--color-violet)_45%,transparent)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-surface-hover hover:border-border-strong",
  ghost: "text-muted hover:text-foreground hover:bg-surface",
  outline:
    "border border-border-strong text-foreground hover:bg-surface hover:border-border-accent",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-md gap-1.5",
  md: "h-11 px-5 text-sm rounded-lg gap-2",
  lg: "h-13 px-7 text-base rounded-xl gap-2.5",
};

const base =
  "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out whitespace-nowrap select-none disabled:opacity-50 disabled:pointer-events-none";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(base, variantStyles[variant], sizeStyles[size], className)}
      {...rest}
    />
  );
}

type ButtonLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  variant?: Variant;
  size?: Size;
  href: string;
  external?: boolean;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
