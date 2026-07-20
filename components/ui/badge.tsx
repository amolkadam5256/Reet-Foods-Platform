import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "error";
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-reef-burgundy text-white hover:bg-reef-burgundy/80",
    secondary: "border-transparent bg-reef-gold text-reef-charcoal hover:bg-reef-gold/80",
    outline: "text-gray-950 border border-gray-200",
    success: "border-transparent bg-green-100 text-green-800",
    warning: "border-transparent bg-amber-100 text-amber-800",
    error: "border-transparent bg-red-100 text-red-800",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
  )
}

export { Badge }
