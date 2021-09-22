import React from "react";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "../../../../redux/store";
import { darkTheme } from "../../../../themes";
import Button from "./Button.component";
import { ReactComponent as SettingsIcon } from "../../../../assets/images/icons/settings.svg";

export default {
  component: Button,
  title: "Components/UI/Atoms/Button",
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: { type: "boolean" } },
    icon: { control: null },
    name: { control: null },
    onClick: {
      action: "clicked",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    text: {},
    type: {
      options: ["button", "submit", "reset"],
      control: { type: "radio" },
    },
    value: { control: null },
  },
};

const DefaultWithIconTemplate = (args) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={darkTheme}>
      <Button {...args} icon={<SettingsIcon />} />
    </ThemeProvider>
  </ReduxProvider>
);

export const DefaultWithIcon = DefaultWithIconTemplate.bind({});
DefaultWithIcon.args = {
  backgroundColor: "#4d7ea8",
  disabled: false,
  name: null,
  size: "medium",
  text: "Button",
  type: "button",
  value: null,
};

export const DefaultWithIconDisabled = DefaultWithIconTemplate.bind({});
DefaultWithIconDisabled.args = {
  backgroundColor: "#4d7ea8",
  disabled: true,
  name: null,
  size: "medium",
  text: "Button",
  type: "button",
  value: null,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "#4d7ea8",
  disabled: false,
  icon: null,
  name: null,
  size: "medium",
  text: "Button",
  type: "button",
  value: null,
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  backgroundColor: "#4d7ea8",
  disabled: true,
  icon: null,
  name: null,
  size: "medium",
  text: "Button",
  type: "button",
  value: null,
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "#4d7ea8",
  disabled: false,
  icon: null,
  name: null,
  size: "small",
  text: "Button",
  type: "button",
  value: null,
};

export const Medium = Template.bind({});
Medium.args = {
  backgroundColor: "#4d7ea8",
  disabled: false,
  icon: null,
  name: null,
  size: "medium",
  text: "Button",
  type: "button",
  value: null,
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "#4d7ea8",
  disabled: false,
  icon: null,
  name: null,
  size: "large",
  text: "Button",
  type: "button",
  value: null,
};
