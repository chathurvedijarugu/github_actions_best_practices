import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddAddress from ".";

export default {
  title: "pages/AddAddressPage",
  component: AddAddress,
} as ComponentMeta<typeof AddAddress>;

const Template: ComponentStory<typeof AddAddress> = (args) => <AddAddress />;

export const Faq = Template.bind({});
