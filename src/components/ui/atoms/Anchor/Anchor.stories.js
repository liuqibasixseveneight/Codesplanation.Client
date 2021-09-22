import React from "react";

import Anchor from "./Anchor.component";

export default {
  component: Anchor,
  title: "Components/UI/Atoms/Anchor",
  argTypes: {
    children: { control: null },
    download: { control: null },
    href: {},
    target: {
      options: ["_blank", "_parent", "_self", "_top"],
      control: { type: "radio" },
    },
  },
};

const DefaultTemplate = (args) => <Anchor {...args}>{args.children}</Anchor>;

export const Default = DefaultTemplate.bind({});
Default.args = {
  children: "Anchor",
  download: null,
  href: "https://www.google.com",
  target: "_self",
};
