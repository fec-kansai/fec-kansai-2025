import type { Meta, StoryObj } from "@storybook/react";

import { KaiyukanIcon } from "@workspace/ui/components/icons//ui/KaiyukanIcon";
import { Logo } from "@workspace/ui/components/icons//ui/Logo";
import { LogoHeader } from "@workspace/ui/components/icons//ui/LogoHeader";
import { OctopusIcon } from "@workspace/ui/components/icons//ui/OctopusIcon";
import { TakoyakiIcon } from "@workspace/ui/components/icons//ui/TakoyakiIcon";
import { TakoyakiBoxIcon } from "@workspace/ui/components/icons//ui/TakoyakisBoxIcon";
import { TowerOfSunIcon } from "@workspace/ui/components/icons//ui/TowerOfSunIcon";
import { TsuutenkakuIcon } from "@workspace/ui/components/icons//ui/TsuutenkakuIcon";

type ComponentType = typeof Logo;
type Story = StoryObj<ComponentType>;

const meta = {
  title: "Components/Icon",
  component: Logo,
  args: {
    width: 240,
    height: 200,
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
  render: (args) => <Logo {...args} />,
} satisfies Meta<ComponentType>;
export default meta;

export const LogoIcon: Story = {
  render: (args) => (
    <div className="flex space-x-4 w-full">
      <Logo width={240} height={200} {...args} />
    </div>
  ),
};

export const LogoHeaderIcon: Story = {
  render: (args) => <LogoHeader {...args} />,
};

export const KaiyukanIconIcon: Story = {
  render: (args) => <KaiyukanIcon {...args} />,
};

export const OctopusIconIcon: Story = {
  render: (args) => <OctopusIcon {...args} />,
};

export const TakoyakiIconIcon: Story = {
  render: (args) => <TakoyakiIcon {...args} />,
};

export const TakoyakiBoxIconIcon: Story = {
  render: (args) => <TakoyakiBoxIcon {...args} />,
};

export const TowerOfSunIconIcon: Story = {
  render: (args) => <TowerOfSunIcon {...args} />,
};

export const TsuutenkakuIconIcon: Story = {
  render: (args) => <TsuutenkakuIcon {...args} />,
};
