"use client";

import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";
    const sizes = {
      sm: "gap-1.5 px-3 py-2 text-xs",
      md: "gap-2 px-4 py-2.5 text-sm",
      lg: "gap-2 px-5 py-3 text-sm",
    };
    const variants = {
      primary:
        "bg-reef-gold text-reef-charcoal hover:bg-reef-burgundy hover:text-white",
      secondary:
        "bg-reef-burgundy text-white hover:bg-reef-charcoal",
      outline:
        "border border-reef-gold/40 bg-white text-reef-charcoal hover:border-reef-burgundy hover:text-reef-burgundy",
      ghost:
        "bg-transparent text-reef-charcoal hover:bg-reef-cream hover:text-reef-burgundy",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
