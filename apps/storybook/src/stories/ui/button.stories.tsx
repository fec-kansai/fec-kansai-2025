import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@workspace/ui/components/button";

type ComponentType = typeof Button;
type Story = StoryObj<ComponentType>;

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
  render: (args) => <Button {...args}>テストABC</Button>,
} satisfies Meta<ComponentType>;

export const Variants: Story = () => {
  const variants = [
    "neon-pink",
    "neon-blue",
    "neon-light-blue",
    "neon-red",
    "neon-green",
  ];
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
