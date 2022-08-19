import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectAddress from ".";

export default {
  title: "Organisms/SelectAddress",
  component: SelectAddress,
} as ComponentMeta<typeof SelectAddress>;

const Template: ComponentStory<typeof SelectAddress> = (args) => <SelectAddress />;

export const Faq = Template.bind({});
