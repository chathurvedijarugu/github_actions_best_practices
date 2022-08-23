import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ReviewOrder from '.'

export default {
  title: 'pages/ReviewOrder',
  component: ReviewOrder,
} as ComponentMeta<typeof ReviewOrder>

const Template: ComponentStory<typeof ReviewOrder> = (args) => <ReviewOrder />

export const FinalOrder = Template.bind({})
