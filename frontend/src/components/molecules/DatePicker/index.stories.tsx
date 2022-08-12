import React, { ComponentProps } from "react";
import { action } from "@storybook/addon-actions";

import { Story } from "@storybook/react";

import BasicDatePicker, { DatePickerProps } from ".";

export default {
  title: "Molecules/DatePicker",
  component: BasicDatePicker,
};

const Template: Story<ComponentProps<typeof BasicDatePicker>> = (
  args: DatePickerProps
) => <BasicDatePicker {...args} />;

export const DatePickerStory = Template.bind({});

DatePickerStory.args = {
  label: "Date of Birth",
  intialValue: new Date("2022-01-04"),
  onChange: action("Input Value changed"),
};
