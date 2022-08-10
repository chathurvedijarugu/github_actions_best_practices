import { Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import TestDetailCard from '../TestDetailCard'
import bodyTest from '../../../assets/illustrations/bodyTest.svg'
import cardiac from '../../../assets/illustrations/cardiac.svg'
import stressIllustration from '../../../assets/illustrations/stress.svg'

const stylings = {
  box: {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: '1.25rem',
  },
  color: `${theme.palette.gammaMedium.main}`,
}
const TestDetailMolecule = () => {
  return (
    <Grid container direction="column" rowGap="2rem">
      <Grid item sx={stylings.box}>
        <Typography variant="h1">Tests You Can Choose From</Typography>
        <Typography variant="caption2" color="#6B4DE0">
          {'See more>>'}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container columnGap="1.25rem">
          <Grid item>
            <TestDetailCard
              text="Full Body CheckUp"
              iconIllustation={bodyTest}
            ></TestDetailCard>
          </Grid>
          <Grid item>
            <TestDetailCard
              text="Cardiac Assessment"
              iconIllustation={cardiac}
            ></TestDetailCard>
          </Grid>
          <Grid item>
            <TestDetailCard
              text="Stress Assessment"
              iconIllustation={stressIllustration}
            ></TestDetailCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TestDetailMolecule
