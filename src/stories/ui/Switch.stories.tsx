import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Switch as SwitchC } from "../../components";

export default {
  title: "UI/Switch",
  component: SwitchC,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SwitchC>;

const Template: ComponentStory<typeof SwitchC> = (args) => (
  <SwitchC {...args} />
);
export const Switch = Template.bind({});
