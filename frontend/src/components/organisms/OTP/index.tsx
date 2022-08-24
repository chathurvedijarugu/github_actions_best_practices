import { Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import Image from '../../atoms/ImageAtom'
import { Button } from '../Login'
import OTPField from '../../molecules/OTPField'
import { useOTP } from './hook'
import { useAuth0 } from '@auth0/auth0-react'
import { OTP_TEXT } from '../../utils/Constant'
interface OTPProps {
  buttonClick: () => void
}
const OTP = ({ buttonClick }: OTPProps) => {
  let {enable}=useOTP()
  let {user}=useAuth0()
  return (
    <Grid
      container
      p={5}
      bgcolor="white"
      spacing={5}
      minHeight="80%"
    >
      <Grid item xs={12} display="flex" justifyContent="center">
        <Image imgSrc={'https://svgshare.com/i/k5T.svg'} imgAlt="zemoso_logo" />
      </Grid>
      <Grid item xs={12} height="100%">
        <Grid container flexDirection="column" justifyContent={'space-between'}>
          <Grid item xs={12}>
            <Typography
              display="block"
              variant="body"
              color={theme.palette.gammaHigh.main}
            >
             {` Hey ${user?.name??"Guest"}`}
            </Typography>
            <Typography
              display="block"
              variant="captionRegular"
              color={theme.palette.gammaLow.main}
            >
              {OTP_TEXT}
            </Typography>
          </Grid>
          <Grid item xs={12} marginTop={12}>
            <OTPField />
          </Grid>
          <Grid item xs={12} marginY={4} paddingBottom={"30vh"}>
            <Button
              fullWidth
              onClick={enable ? buttonClick : () => {}}
              bgcolor={
                enable
                  ? theme.palette.primary.main
                  : theme.palette.primary['100']
              }
              fontColor="white"
            >
              Verify
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default OTP
