import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  href,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 disabled:opacity-60 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-reef-gold text-reef-charcoal shadow-md hover:bg-reef-burgundy hover:text-white hover:shadow-lg focus-visible:ring-reef-gold/40",
    secondary:
      "bg-reef-burgundy text-white shadow-md hover:bg-reef-charcoal focus-visible:ring-reef-burgundy/40",
    outline:
      "border border-reef-gold/40 bg-white text-reef-charcoal hover:border-reef-burgundy hover:text-reef-burgundy focus-visible:ring-reef-gold/30",
    ghost:
      "text-reef-charcoal hover:bg-reef-cream hover:text-reef-burgundy focus-visible:ring-reef-gold/20",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={combinedClass} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
