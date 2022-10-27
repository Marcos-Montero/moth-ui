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
      flexWrap: "wrap",
      gap: "1em",
    }}
  >
    <ButtonC {...args}>{"<"}</ButtonC>
    <ButtonC {...args}>1</ButtonC>
    <ButtonC {...args}>2</ButtonC>
    <ButtonC {...args}>3</ButtonC>
    <ButtonC {...args}>{">"}</ButtonC>
  </div>
);
export const Button = Template.bind({});
Button.args = {
  primary: true,
  label: "Button",
};
