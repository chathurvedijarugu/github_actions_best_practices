import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectAddressPage from ".";

export default {
  title: "Pages/SelectAddressPage",
  component: SelectAddressPage,
} as ComponentMeta<typeof SelectAddressPage>;

const Template: ComponentStory<typeof SelectAddressPage> = (args) => <SelectAddressPage />;

export const Faq = Template.bind({});
