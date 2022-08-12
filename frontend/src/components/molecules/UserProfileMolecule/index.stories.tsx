import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserProfileMolecule from '.'
import { Dialog } from '@mui/material'

export default {
  title: 'Molecules/UserProfileMolecule',
  component: UserProfileMolecule,
} as ComponentMeta<typeof UserProfileMolecule>

const Template: ComponentStory<typeof UserProfileMolecule> = (args) => (
  <Dialog
    scroll="body"
    PaperProps={{ sx: { position: 'fixed', top: 10, right: 10, m: 0 } }}
    maxWidth={false}
    open={true}
  >
    <UserProfileMolecule {...args} />
  </Dialog>
)

export const UserProfile = Template.bind({})
UserProfile.args = {
  handleClose: () => console.log('Icon Closed Clicked'),
  handleLogOut: () => console.log('Logout Clicked'),
}
