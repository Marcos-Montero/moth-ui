import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button as ButtonC } from "../../components";

export default {
  title: "UI/Button",
  component: ButtonC,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ButtonC>;

const Template: ComponentStory<typeof ButtonC> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    }}
  >
    <ButtonC {...args}>A</ButtonC>
    <ButtonC {...args}>B</ButtonC>
    <ButtonC {...args}>C</ButtonC>
    <ButtonC {...args}>A</ButtonC>
    <ButtonC {...args}>B</ButtonC>
    <ButtonC {...args}>C</ButtonC>
    <ButtonC {...args}>A</ButtonC>
    <ButtonC {...args}>B</ButtonC>
    <ButtonC {...args}>C</ButtonC>
  </div>
);

export const Button = Template.bind({});
Button.args = {
  primary: true,
  label: "Button",
};
