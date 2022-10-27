import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Home as HomeC } from "../../components/Home";

export default {
  title: "Home",
  component: HomeC,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof HomeC>;

const Template: ComponentStory<typeof HomeC> = (args) => (
  <div
    style={{
      width: "90vw",
      height: "95vh",
      overflow: "hidden",
    }}
  >
    <HomeC />
  </div>
);
export const Home = Template.bind({});
