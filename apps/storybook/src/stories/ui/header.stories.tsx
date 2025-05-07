import type { Meta, StoryObj } from "@storybook/react";
import Header from "web/components/Header/";

type ComponentType = typeof Header;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/Header",
  component: Header,
  argTypes: {},
} satisfies Meta<ComponentType>;

export default meta;

export const Normal: Story = {
  render: () => {
    return (
      <>
        <Header />
      </>
    );
  },
};
