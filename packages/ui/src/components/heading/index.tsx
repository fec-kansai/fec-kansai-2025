import { cn } from "@workspace/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const headingVariants = cva("font-bold neon-base heading-neon-stroke-width", {
  variants: {
    variant: {
      primary: "effect-neon-pink text-2xl md:text-4xl",
      secondary: "effect-neon-blue  text-base  md:text-2xl",
      accent: "effect-neon-red text-base md:text-2xl",
      gold: "effect-neon-gold text-base md:text-2xl",
      silver: "effect-neon-silver text-base md:text-2xl",
      bronze: "effect-neon-bronze text-base md:text-2xl",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
function Heading(
  props: React.ComponentProps<"h2"> & VariantProps<typeof headingVariants>,
) {
  const { className, variant, children, ...rest } = props;
  const Component = variant === "primary" ? "h2" : "h3";

  return (
    <Component
      data-slot="heading"
      className={cn(headingVariants({ variant, className }))}
      {...rest}
    >
      {children}
    </Component>
  );
}

export { Heading, headingVariants };
