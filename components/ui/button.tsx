import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
    variant === "primary" && "bg-charcoal text-porcelain shadow-aura hover:-translate-y-0.5 hover:bg-cocoa",
    variant === "ghost" && "border border-charcoal/15 bg-porcelain/55 text-charcoal backdrop-blur hover:border-gold/50 hover:bg-porcelain",
    variant === "dark" && "border border-porcelain/20 bg-porcelain/10 text-porcelain backdrop-blur hover:bg-porcelain hover:text-charcoal",
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}
