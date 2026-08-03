import React, { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?: "gold" | "burgundy" | "charcoal" | "green" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "gold",
  size = "sm",
  className = "",
}: BadgeProps) {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3.5 py-1 text-xs",
  };

  const variantStyles = {
    gold: "bg-reef-gold/20 text-reef-charcoal border border-reef-gold/40",
    burgundy: "bg-reef-burgundy/10 text-reef-burgundy border border-reef-burgundy/30",
    charcoal: "bg-reef-charcoal text-reef-gold border border-reef-gold/30",
    green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    outline: "bg-white text-reef-charcoal border border-reef-gold/30",
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full tracking-wider uppercase ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
