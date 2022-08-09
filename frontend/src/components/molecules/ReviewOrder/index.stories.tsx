import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ReviewOrder from "./index";
export default {
  title: "Molecules/ReviewOrder",
  component: ReviewOrder,
} as ComponentMeta<typeof ReviewOrder>;
const Template: ComponentStory<typeof ReviewOrder> = (args) => (
  <ReviewOrder {...args} />
);

export const AltosLab = Template.bind({});
