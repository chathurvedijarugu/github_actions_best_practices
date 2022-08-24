import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/molecules/progressBar'
import SelectLabMainContent from '../../components/organisms/SelectLabMainContent'
import MainTemplate from '../../components/templates/Main'
import { getLabs } from '../../services/services'
const SelectLabPage = () => {
  const [tests, setTests] = useState<any>([])
  useEffect(() => {
    getLabs().then((res) => {
      setTests(res)
    })
  }, [])
  const navigate = useNavigate()
  return (
    <MainTemplate
      nextClick={() => {
        navigate('/appointementPage')
      }}
      backClick={() => {
        navigate('/AddPatientDetailsPage')
      }}
      stepperComponent={
        <ProgressBar
          values={[
            'Lab test',
            'Select appointment',
            'Add address',
            'Review order',
          ]}
          currentIndex={0}
        />
      }
      mainComponent={
        <Box width="583px" height="600px">
          <SelectLabMainContent tests={tests} />
        </Box>
      }
      footerTextComponent={undefined}
      buttonLabel="Select Date & Time"
    ></MainTemplate>
  )
}
export default SelectLabPage
