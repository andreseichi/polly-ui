import{j as e}from"./jsx-runtime-0741ab7f.js";import{T as r,a as y,B as z,b as A,c as f,d as t}from"./index-af1c5a86.js";import"./index-902e4630.js";import"./_commonjsHelpers-725317a4.js";import"./extends-98964cd2.js";const P={title:"UI/Tooltip",component:r,argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},side:{options:["top","bottom","left","right"],control:{type:"inline-radio"}},hasArrow:{control:{type:"boolean"}}},args:{size:"md",side:"top",hasArrow:!1},parameters:{docs:{description:{component:"Tooltip component is used to display additional information when hovering over a target element. It can be used with any element, but it is recommended to use it with a button or a link."}}},decorators:[(o,w)=>e.jsx(y,{children:e.jsx(z,{style:{minHeight:"20vh",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(A,{children:[e.jsx(f,{children:e.jsx(t,{children:"hover me"})}),e.jsx(o,{args:w.args})]})})})]},s={render:o=>e.jsx(r,{...o,children:e.jsx(t,{children:"Content Tooltip"})}),args:{size:"lg",side:"top"}},n={render:o=>e.jsx(r,{...o,children:e.jsx(t,{children:"Content Tooltip"})}),args:{size:"lg",side:"top",hasArrow:!0}},i={render:o=>e.jsx(r,{...o,children:e.jsx(t,{children:"Content Tooltip"})}),args:{size:"sm",side:"top",hasArrow:!0}},a={render:o=>e.jsx(r,{...o,children:e.jsx(t,{children:"Content Tooltip"})}),args:{size:"md",side:"right",hasArrow:!0}};var l,p,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <TooltipContent {...args}>
      <Text>Content Tooltip</Text>
    </TooltipContent>,
  args: {
    size: "lg",
    side: "top"
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,T;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <TooltipContent {...args}>
      <Text>Content Tooltip</Text>
    </TooltipContent>,
  args: {
    size: "lg",
    side: "top",
    hasArrow: true
  }
}`,...(T=(m=n.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var g,h,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <TooltipContent {...args}>
      <Text>Content Tooltip</Text>
    </TooltipContent>,
  args: {
    size: "sm",
    side: "top",
    hasArrow: true
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var u,C,j;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <TooltipContent {...args}>
      <Text>Content Tooltip</Text>
    </TooltipContent>,
  args: {
    size: "md",
    side: "right",
    hasArrow: true
  }
}`,...(j=(C=a.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const _=["Primary","HasArrow","SmallTooltip","SideTooltip"];export{n as HasArrow,s as Primary,a as SideTooltip,i as SmallTooltip,_ as __namedExportsOrder,P as default};
//# sourceMappingURL=Tooltip.stories-29981905.js.map
