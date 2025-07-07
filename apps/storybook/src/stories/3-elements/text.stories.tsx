import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@workspace/ui";

type ComponentType = typeof Text;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Elements/Text",
  component: Text,
  args: {
    children: "テキストテキスト",
    colorScheme: "white",
  },
  argTypes: {
    asChild: { control: "boolean" },
    colorScheme: {
      options: ["white", "red", "blue", "green", "pink", "lightBlue", "yellow"],
    },
  },
} satisfies Meta<ComponentType>;

export default meta;

export const Default: Story = {
  args: {
    colorScheme: "white",
  },
};

export const colorScheme: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <Text colorScheme="white">テキストテキスト</Text>
        <Text colorScheme="red">テキストテキスト</Text>
        <Text colorScheme="blue">テキストテキスト</Text>
        <Text colorScheme="green">テキストテキスト</Text>
        <Text colorScheme="pink">テキストテキスト</Text>
        <Text colorScheme="lightBlue">テキストテキスト</Text>
        <Text colorScheme="yellow">テキストテキスト</Text>
      </div>
    );
  },
};

export const LongSentence: Story = {
  render: () => {
    return (
      <div className="max-w-[200px]">
        <Text colorScheme="white">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Text>
      </div>
    );
  },
};
