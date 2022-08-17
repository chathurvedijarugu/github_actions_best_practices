import {
  Grid,
  InputAdornment,
  Typography,
} from '@mui/material'
import React from 'react'
import { Button, TextField } from '.'
import Image from '../../components/atoms/ImageAtom'
import theme from '../../theme'

const MobileNumber = () => {
  return (
    <Grid
      container
      direction="column"
      //   bgcolor={'red'}
      p={5}
      spacing={5}
      height="80%"
      width="25%"
    >
      <Grid item xs={12} display="flex" justifyContent="center">
        <Image imgSrc={'https://svgshare.com/i/k5T.svg'} imgAlt="zemoso_logo" />
      </Grid>
      <Grid item xs={12}>
        <Grid container flexDirection="column" justifyContent={'space-between'}>
          <Grid item xs={12}>
            <Typography
              display="block"
              variant="body"
              color={theme.palette.gammaHigh.main}
            >
              Hey Patrick
            </Typography>
            <Typography
              display="block"
              variant="captionRegular"
              color={theme.palette.gammaLow.main}
            >
              Enter your Mobile number
            </Typography>
          </Grid>
          <Grid item xs={12} marginTop={12}>
            <Typography
              display="block"
              variant="overline2"
              color={theme.palette.gammaLow.main}
            >
              Mobile Number
            </Typography>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"><Typography variant="captionRegular" color={theme.palette.gammaHigh.main}>+91</Typography></InputAdornment>
                ),
              }}
              variant="standard"
              placeholder='1234332487'
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} marginY={4}>
            <Button
              fullWidth
              sx={{ backgroundColor: '#C6CEF7', color: 'white' }}
            >
              Get OTP
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MobileNumber
