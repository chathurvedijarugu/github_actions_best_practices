import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./index";
import { Box } from "@mui/material";
export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const buttonText = {
  color: "#6B4DE0",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
  borderRadius: "4px",
  width: "130px",
  height: "36px",
};
const previewButtonText = {
  color: "#FC5C5C",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
  borderRadius: "4px",
  width: "130px",
  height: "36px",
  "&:hover": {
    background: "none",
  },
};
const DraftButtonText = {
  color: "#4C2CD9",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
  borderRadius: "4px",
  width: "130px",
  height: "36px",
  "&:hover": {
    background: "none",
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const contained = Template.bind({});
export const text = Template.bind({});
contained.args = {
  variant: "contained",
  sx: { ...buttonText },
  children: "Select",
};
text.args = {
  variant: "text",
  sx: { ...previewButtonText },
  children: "Cancel",
};

