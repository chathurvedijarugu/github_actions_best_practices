import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectAddressCard from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/SelectAddressCard",
  component: SelectAddressCard,
} as ComponentMeta<typeof SelectAddressCard>;

const Template: ComponentStory<typeof SelectAddressCard> = (args) => <SelectAddressCard {...args}/>;

export const selected = Template.bind({});
export const unselected = Template.bind({});
selected.args={
  index:1,
  activeId:1,
  addressData:{
    houseDetails:"2235 California Street",
    areaDetails:"Mountain View ",
    city:"Calfornia",
    zipcode:"500008"
  },
  handleOnClick:action("Clicked on Box")
}
unselected.args={
  index:1,
  activeId:2,
  addressData:{
    houseDetails:"2235 California Street",
    areaDetails:"Mountain View ",
    city:"Calfornia",
    zipcode:"500008"
  },
  handleOnClick:action("Clicked on Box")
}