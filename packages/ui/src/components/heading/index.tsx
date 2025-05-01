import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@workspace/ui/lib/utils";

const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      primary: "text-neon-pink text-4xl",
      secondary: "text-neon-blue text-2xl",
      accent: "text-neon-red text-2xl",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
function Heading(
  props: React.ComponentProps<"h1"> &
    VariantProps<typeof headingVariants>
) {
  const { className, variant,  children, ...rest } = props;
  const Component = variant === "primary" ? "h1": "h2";

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
