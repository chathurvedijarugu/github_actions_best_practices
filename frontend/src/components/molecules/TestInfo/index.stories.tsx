import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TestInfo from ".";

export default {
  title: "Molecules/TestInfo",
  component: TestInfo,
} as ComponentMeta<typeof TestInfo>;

const Template: ComponentStory<typeof TestInfo> = (args) => (
  <TestInfo {...args} />
);

export const RTPCRTest = Template.bind({});
