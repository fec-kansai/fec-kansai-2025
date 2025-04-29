import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@workspace/ui/lib/utils";

const textVariants = cva("text-base/8", {
  variants: {
    colorScheme: {
      white: "text-white",
      red: "text-neon-red",
      blue: "text-neon-blue",
      green: "text-neon-green",
      pink: "text-neon-pink",
      lightBlue: "text-neon-light-blue",
      yellow: "text-neon-yellow",
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
    }
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
