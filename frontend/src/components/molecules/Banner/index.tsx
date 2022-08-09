import { Grid, Typography } from '@mui/material'
import React from 'react'
import theme, { PrimaryColors } from '../../../theme'
import FamilySVG from '../../../assets/illustrations/family.svg'
import Button from '../../atoms/Button'
type BannerProps = {
  onClick?: () => void
}
const Banner = ({ onClick }: BannerProps) => {
  return (
    <Grid
      container
      padding={8}
      justifyContent={'space-between'}
      bgcolor={PrimaryColors['800']}
      borderRadius={4}
    >
      <Grid item margin={1}>
        <Grid
          container
          justifyContent="space-between"
          direction="column"
          height="100%"
        >
          <Grid item>
            <Typography color={theme.palette.gammaWhite.main} variant="h1">
              60% off on your first order
            </Typography>
            <Typography
              variant="caption2"
              color={theme.palette.gammaWhite.main}
              marginY={2}
            >
              Your health is our priority
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={onClick ?? (() => {})}
              sx={{
                color: theme.palette.primary.main,
                backgroundColor: 'white',
              }}
            >
              <Typography>Book Now</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img src={FamilySVG} />
      </Grid>
    </Grid>
  )
}

export default Banner
