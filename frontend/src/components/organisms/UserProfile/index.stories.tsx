import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserProfile from '.'
import { Dialog } from '@mui/material'

export default {
  title: 'Organisms/UserProfile',
  component: UserProfile,
} as ComponentMeta<typeof UserProfile>

const Template: ComponentStory<typeof UserProfile> = (args) => (
  <Dialog
    scroll="body"
    PaperProps={{ sx: { position: 'fixed', top: 10, right: 10, m: 0 } }}
    maxWidth={false}
    open={true}
  >
    <UserProfile {...args} />
  </Dialog>
)

export const UserProfileOrganism = Template.bind({})
UserProfileOrganism.args = {
  handleClose: () => console.log('Icon Closed Clicked'),
  handleLogOut: () => console.log('Logout Clicked'),
}
