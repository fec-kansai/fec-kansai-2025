import type { Meta, StoryObj } from "@storybook/react";
import { Button, Text } from "@workspace/ui";

type ComponentType = typeof Button;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "ボタン",
    variant: "neon-pink",
    size: "lg",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};

export const Size: Story = {
  render: () => {
    return (
      <>
        <div className="flex flex-wrap gap-10">
          <Button size="lg" className="w-30">
            ボタン
          </Button>
          <Button className="w-30">ボタン</Button>
          <Button size="sm" className="w-30">
            ボタン
          </Button>
        </div>
      </>
    );
  },
};

export const Color: Story = {
  render: () => {
    const variants = [
      { label: "ピンク", value: "neon-pink" },
      { label: "青", value: "neon-blue" },
      { label: "水色", value: "neon-light-blue" },
      { label: "赤", value: "neon-red" },
      { label: "緑", value: "neon-green" },
      { label: "黄", value: "neon-yellow" },
    ] as const;
    return (
      <>
        {variants.map((variant) => (
          <div key={variant.label} className="flex items-center gap-10 mb-6">
            <div className="w-40">
              <Text className="font-bold">カラー：{variant.label}</Text>
            </div>
            <Button variant={variant.value}>ボタン</Button>
          </div>
        ))}
      </>
    );
  },
};
