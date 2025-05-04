import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@workspace/ui"; // Header を適切なパスでインポートしてください

type ComponentType = typeof Header;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/Header",
  component: Header,
  args: {
    size: "md",
  },
  argTypes: {},
} satisfies Meta<ComponentType>;

export default meta;

export const Normal: Story = {
  render: () => {
    // body の padding をリセット
    if (typeof document !== "undefined") {
      document.body.style.margin = "0";
      document.body.style.padding = "0";
    }

    return (
      <>
        <Header />
      </>
    );
  },
};
