import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@workspace/ui";

type ComponentType = typeof Avatar;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Elements/Avatar",
  component: Avatar,
  args: {
    displayName: "OkaKyo",
    avatar: "/staffs/okakyo.jpeg",
  },
  parameters: {
    layout: "padded",
  },
  render: (args) => (
    <div className="w-[100px]">
      <Avatar {...args} />
    </div>
  ),
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {};

export const WithUrl: Story = {
  render: (args) => {
    return (
      <div className=" flex flex-row gap-5">
        <Avatar {...args} url="https://example.com" displayName="With URL" />
        <Avatar {...args} x="31415O_Kyo" displayName="With X" />
        <Avatar {...args} github="okakyo" displayName="GitHub" />
      </div>
    );
  },
};

export const NoImage: Story = {
  args: {
    avatar: undefined,
  },
};
