import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/molecules/progressBar'
import ReviewOrder from '../../components/molecules/ReviewOrder'
import MainTemplate from '../../components/templates/Main'
const FinalOrder = () => {
  const navigate = useNavigate()
  return (
    <MainTemplate
      nextClick={() => {
        navigate('/checkout')
      }}
      backClick={() => {
        navigate('/addAddress')
      }}
      stepperComponent={
        <ProgressBar
          values={[
            'Lab test',
            'Select appointment',
            'Add address',
            'Review order',
          ]}
          currentIndex={3}
        />
      }
      mainComponent={
        <Box width="583px">
          <ReviewOrder
            patients={[
              {
                patientName: 'Patrick Smith',
                testName: 'COVID RT-PCR Test',
                age: 30,
                gender: 'M',
                relation: 'Self',
                testCost: 2000,
              },
            ]}
            address="2235 California Street Mountain View California APT#021 - 11023"
            date="Tue, Feb 23, 2022"
            time="07.00 - 08.00 AM"
            discount={200}
          />
        </Box>
      }
      footerTextComponent={undefined}
      buttonLabel="Continue"
    ></MainTemplate>
  )
}
export default FinalOrder
