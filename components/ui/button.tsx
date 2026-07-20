import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-burgundy disabled:opacity-50 disabled:pointer-events-none ring-offset-2";
    
    const variants = {
      primary: "bg-reef-burgundy text-white hover:bg-reef-burgundy/90 shadow-sm",
      secondary: "bg-reef-gold text-reef-charcoal hover:bg-reef-gold/90 shadow-sm",
      outline: "border border-reef-burgundy/20 bg-transparent hover:bg-reef-burgundy/5 text-reef-burgundy",
      ghost: "hover:bg-reef-burgundy/10 text-reef-charcoal hover:text-reef-burgundy",
      link: "underline-offset-4 hover:underline text-reef-burgundy",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-10 py-2 px-4 text-sm",
      lg: "h-11 px-8 text-base",
      icon: "h-10 w-10",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
