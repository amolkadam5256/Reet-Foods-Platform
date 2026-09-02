import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-burgundy disabled:opacity-50 disabled:pointer-events-none ring-offset-2";

    const variants = {
      primary:
        "bg-reef-gold text-[#1c1c1c] hover:bg-reef-burgundy hover:text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
      secondary:
        "bg-reef-burgundy text-white hover:bg-[#5d0013] shadow-md hover:shadow-lg hover:-translate-y-0.5",
      outline:
        "border-2 border-reef-gold/40 bg-white text-reef-charcoal hover:border-reef-burgundy hover:bg-reef-burgundy hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
      ghost:
        "hover:bg-reef-cream text-reef-charcoal hover:text-reef-burgundy",
      link: "underline-offset-4 hover:underline text-reef-burgundy",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs gap-1.5",
      md: "h-11 py-2.5 px-5 text-sm gap-2",
      lg: "h-12 px-8 text-base gap-2.5",
      icon: "h-10 w-10",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return <button className={classes} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button };
