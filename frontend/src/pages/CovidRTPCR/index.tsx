import { Box, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/atoms/Button'
import ProgressBar from '../../components/molecules/progressBar'
import TestInfo from '../../components/molecules/TestInfo'
import MainTemplate from '../../components/templates/Main'

const CovidRTPCR = () => {
  const navigate = useNavigate()
  return (
    <MainTemplate
      nextClick={() => {
        navigate('/AddPatientDetailsPage')
      }}
      backClick={() => {
        navigate('/')
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
      buttonLabel="Add Patient"
    ></MainTemplate>
  )
}
export default CovidRTPCR
