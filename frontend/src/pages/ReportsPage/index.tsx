import React from 'react'
import LabTest from '../../components/templates/labTest'
import ReportsMainContent from '../../components/organisms/ReportsMainContent'
import { Grid } from '@mui/material'

const ReportsPage: React.FC = () => {
  const style = {
    root: {
      paddingLeft: '90px',
      paddingRight: '90px',
    },
  }
  return (
    <Grid item sx={style.root}>
      <LabTest children={<ReportsMainContent />} />
    </Grid>
  )
}

export default ReportsPage
