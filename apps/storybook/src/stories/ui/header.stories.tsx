import type { Meta, StoryFn } from "@storybook/react";
import { Header } from "@workspace/ui"; // Header を適切なパスでインポートしてください

type ComponentType = typeof Header;
type Story = StoryFn<ComponentType>;

const meta = {
  title: "Components/Header",
  component: Header,
  args: {
    size: "md",
  },
  argTypes: {},
} satisfies Meta<ComponentType>;

export default meta;

export const Normal: Story = () => {
  return (
    <>
      <Header />
    </>
  );
};
