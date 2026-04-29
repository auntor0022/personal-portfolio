import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primaryAccent text-white hover:bg-primaryAccent/90 hover:shadow-glow-primary hover:scale-105",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40 hover:scale-105",
        ghost: "hover:bg-white/10 hover:text-white",
        icon: "rounded-lg border border-white-10 bg-secondaryBg/50 text-white hover:bg-white/10 hover:scale-105 backdrop-blur-md",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // If we use asChild, we can't easily wrap with framer motion unless we do something complex, 
    // but for simple buttons we can just apply motion props directly if needed on the parent.
    // For now, we just implement the styles.
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
