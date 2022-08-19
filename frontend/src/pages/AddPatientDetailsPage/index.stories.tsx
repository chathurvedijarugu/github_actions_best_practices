import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AddPatientDetailsPage from '.'

export default {
  title: 'Pages/AddPatientDetailsPage',
  component: AddPatientDetailsPage,
} as ComponentMeta<typeof AddPatientDetailsPage>

const Template: ComponentStory<typeof AddPatientDetailsPage> = (args) => (
  <AddPatientDetailsPage />
)

export const PatientDetails = Template.bind({})
