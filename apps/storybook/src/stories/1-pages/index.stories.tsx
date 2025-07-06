import type { Meta, StoryObj } from "@storybook/react/*";
import Index from "web/app/page";

type ComponentType = typeof Index;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Pages/Index",
  component: Index,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};
