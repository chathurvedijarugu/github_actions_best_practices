import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Banner from '.'
export default {
  title: 'molecules/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = () => (
  <Box width="100%">
    <Banner />
  </Box>
)
export const Primary = Template.bind({})
