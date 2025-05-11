import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

const buttonVariants = cva(
  "border-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium duration-300 hover:cursor-pointer transform focus:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        "neon-pink":
          "text-white text-shadow-neon-pink text-stroke-neon-pink box-shadow-neon-pink border-[var(--neon-pink)] hover:bg-[rgba(236,67,193,0.5)]",
        "neon-blue":
          "text-white text-shadow-neon-blue text-stroke-neon-blue box-shadow-neon-blue border-[var(--neon-blue)] hover:bg-[rgba(67,92,236,0.5)]",
        "neon-light-blue":
          "text-white text-shadow-neon-light-blue text-stroke-neon-light-blue box-shadow-neon-light-blue border-[var(--neon-light-blue)] hover:bg-[rgba(67,222,236,0.5)]",
        "neon-red":
          "text-white text-shadow-neon-red text-stroke-neon-red box-shadow-neon-red border-[var(--neon-red)] hover:bg-[rgba(236,67,67,0.5)]",
        "neon-green":
          "text-white text-shadow-neon-green text-stroke-neon-green box-shadow-neon-green border-[var(--neon-green)] hover:bg-[rgba(67,236,98,0.5)]",
        "neon-yellow":
          "text-white text-shadow-neon-yellow text-stroke-neon-yellow box-shadow-neon-yellow border-[var(--neon-yellow)] hover:bg-[rgba(236,225,67,0.5)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "neon-pink",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
