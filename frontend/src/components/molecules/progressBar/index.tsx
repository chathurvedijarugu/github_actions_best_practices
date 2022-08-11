import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
type ProgressBarProps = {
  values: string[]
  currentIndex: number
}
const ProgressBar = ({ currentIndex, values }: ProgressBarProps) => {
  const arrayValues = values.slice(1, values.length - 1)
  return (
    <Grid container direction="row">
      <Grid item>
        <Typography
          marginX={3}
          color={
            currentIndex == 0
              ? theme.palette.gammaHigh.main
              : theme.palette.gammaLow.main
          }
          variant={currentIndex == 0 ? 'caption1' : 'caption'}
        >
          {values[0]}
        </Typography>
      </Grid>
      {arrayValues.map((value, index) => {
        return (
          <Grid item xs key={value}>
            <Divider textAlign="center">
              <Typography
                marginX={3}
                color={
                  index + 1 == currentIndex
                    ? theme.palette.gammaHigh.main
                    : theme.palette.gammaLow.main
                }
                variant={index + 1 == currentIndex ? 'caption1' : 'caption'}
              >
                {value}
              </Typography>
            </Divider>
          </Grid>
        )
      })}
      <Grid item>
        <Typography
          marginX={3}
          color={
            currentIndex == values.length - 1
              ? theme.palette.gammaHigh.main
              : theme.palette.gammaLow.main
          }
          variant={currentIndex == values.length - 1 ? 'caption1' : 'caption'}
        >
          {values[values.length - 1]}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProgressBar
