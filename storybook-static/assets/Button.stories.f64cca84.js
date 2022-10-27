var a=Object.defineProperty;var e=(t,r)=>a(t,"name",{value:r,configurable:!0});import{B as n}from"./index.086c76e2.js";import{a as l,j as o}from"./jsx-runtime.449135ea.js";import"./iframe.3258a63d.js";const B={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{button:{startLoc:{col:49,line:14},endLoc:{col:1,line:30},startBody:{col:49,line:14},endBody:{col:1,line:30}}}}},title:"UI/Button",component:n,argTypes:{backgroundColor:{control:"color"}}},s=e(t=>l("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap",gap:"1em"},children:[o(n,{...t,children:"<"}),o(n,{...t,children:"1"}),o(n,{...t,children:"2"}),o(n,{...t,children:"3"}),o(n,{...t,children:">"})]}),"Template"),p=s.bind({});p.args={primary:!0,label:"Button"};const d=["Button"];export{p as Button,d as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories.f64cca84.js.map
