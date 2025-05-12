import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const textVariants = cva("text-base/8 neon-base text-neon-stroke-width", {
  variants: {
    colorScheme: {
      white: "text-white",
      red: "effect-neon-red",
      blue: "effect-neon-blue",
      green: "effect-neon-green",
      pink: "effect-neon-pink",
      lightBlue: "effect-neon-light-blue",
      yellow: "effect-neon-yellow",
      link: "cursor-pointer transition-duration-300 text-link-gray hover:text-link-gray",
    },
  },
  defaultVariants: {
    colorScheme: "white",
  },
});

function Text(
  props: React.ComponentProps<"p"> &
    VariantProps<typeof textVariants> & {
      asChild?: boolean;
    },
) {
  const { className, colorScheme, asChild = false, children, ...rest } = props;
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="p"
      className={cn(textVariants({ colorScheme, className }))}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export { Text, textVariants };
