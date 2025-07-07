import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@workspace/ui";

type ComponentType = typeof Heading;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Elements/Heading",
  component: Heading,
  args: {
    children: "見出しタイトル",
    variant: "primary",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "accent"],
    },
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};

export const Variant: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <Heading>見出しタイトル</Heading>
        <Heading variant="secondary">見出しタイトル</Heading>
        <Heading variant="accent">見出しタイトル</Heading>
      </div>
    );
  },
};
