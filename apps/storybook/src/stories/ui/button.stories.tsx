import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "@workspace/ui";

type ComponentType = typeof Button;
type Story = StoryFn<ComponentType>;

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "neon-pink",
    size: "lg",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<ComponentType>;

export default meta;

export const Variants: Story = () => {
  const variants = [
    "neon-pink",
    "neon-blue",
    "neon-light-blue",
    "neon-red",
    "neon-green",
    "neon-yellow",
  ] as const;
  return (
    <>
      {variants.map((variant) => (
        <div key={variant} className="flex gap-2 mb-3">
          <Button variant={variant} size="lg">
            {variant}
          </Button>
          <Button variant={variant} size="sm">
            {variant}
          </Button>
        </div>
      ))}
    </>
  );
};
