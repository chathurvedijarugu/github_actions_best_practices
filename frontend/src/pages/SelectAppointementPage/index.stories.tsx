import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectAppointementPage from ".";

export default {
  title: "pages/SelectAppointementPagePage",
  component: SelectAppointementPage,
} as ComponentMeta<typeof SelectAppointementPage>;

const Template: ComponentStory<typeof SelectAppointementPage> = (args) => <SelectAppointementPage />;

export const SlotPicker = Template.bind({});
