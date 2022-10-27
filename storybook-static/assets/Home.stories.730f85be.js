var m=Object.defineProperty;var r=(o,t)=>m(o,"name",{value:t,configurable:!0});import{H as n}from"./index.086c76e2.js";import{j as e}from"./jsx-runtime.449135ea.js";import"./iframe.3258a63d.js";const p={parameters:{storySource:{source:`import React from "react";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
\r
import { Home as HomeC } from "../../components";\r
\r
export default {\r
  title: "Home",\r
  component: HomeC,\r
  argTypes: {\r
    backgroundColor: { control: "color" },\r
  },\r
} as ComponentMeta<typeof HomeC>;\r
\r
const Template: ComponentStory<typeof HomeC> = (args) => (\r
  <div\r
    style={{\r
      width: "90vw",\r
      height: "95vh",\r
      overflow: "hidden",\r
    }}\r
  >\r
    <HomeC />\r
  </div>\r
);\r
export const Home = Template.bind({});\r
`,locationsMap:{home:{startLoc:{col:47,line:14},endLoc:{col:1,line:24},startBody:{col:47,line:14},endBody:{col:1,line:24}}}}},title:"Home",component:n,argTypes:{backgroundColor:{control:"color"}}},s=r(o=>e("div",{style:{width:"90vw",height:"95vh",overflow:"hidden"},children:e(n,{})}),"Template"),d=s.bind({}),H=["Home"];export{d as Home,H as __namedExportsOrder,p as default};
//# sourceMappingURL=Home.stories.730f85be.js.map
