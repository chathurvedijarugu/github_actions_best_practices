import { Box, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/atoms/Button'
import ProgressBar from '../../components/molecules/progressBar'
import TestInfo from '../../components/molecules/TestInfo'
import MainTemplate from '../../components/templates/Main'

const Button = styled(CustomButton)({
  borderRadius: '0.5rem',
  height: '2.625rem',
  width: '13.875rem',
})

const CovidRTPCR = () => {
  const navigate = useNavigate()
  return (
    <MainTemplate
      nextClick={() => {
        navigate('/AddPatientDetailsPage')
      }}
      backClick={() => {
        navigate('/homePage')
      }}
      stepperComponent={
        <ProgressBar values={['Home', 'Covid RTPCR']} currentIndex={1} />
      }
      mainComponent={
        <Box width="583px" height="560px">
          <TestInfo />
        </Box>
      }
      footerTextComponent={undefined}
    ></MainTemplate>
  )
}
export default CovidRTPCR
