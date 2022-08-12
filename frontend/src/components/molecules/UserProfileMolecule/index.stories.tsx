import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserProfileMolecule from ".";

export default {
  title: "Molecules/UserProfileMolecule",
  component: UserProfileMolecule,
} as ComponentMeta<typeof UserProfileMolecule>;

const Template: ComponentStory<typeof UserProfileMolecule> = (args) => <UserProfileMolecule />;

export const UserProfile = Template.bind({});
