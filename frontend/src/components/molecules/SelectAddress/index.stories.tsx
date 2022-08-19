import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectAddressCard from ".";

export default {
  title: "Molecules/SelectAddressCard",
  component: SelectAddressCard,
} as ComponentMeta<typeof SelectAddressCard>;

const Template: ComponentStory<typeof SelectAddressCard> = (args) => <SelectAddressCard {...args}/>;

export const card = Template.bind({});
card.args={
  index:1,
  activeId:1,
  addressData:{
    houseDetails:"2235 California Street",
    areaDetails:"Mountain View ",
    city:"Calfornia",
    zipcode:"500008"
  }
}