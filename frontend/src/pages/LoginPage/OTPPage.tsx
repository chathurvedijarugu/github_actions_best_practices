import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";
import Image from '../../components/atoms/ImageAtom'
import {Button} from "."
import OTPField from "../../components/molecules/OTPField";
const OTPPage=()=>{
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
                  Enter the OTP to verify your details
                </Typography>
              </Grid>
              <Grid item xs={12} marginTop={12}>
                <OTPField />
              </Grid>
              <Grid item xs={12} marginY={4}>
                <Button
                  fullWidth
                  sx={{ backgroundColor: '#C6CEF7', color: 'white' }}
                >
                  Verify
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )
}
export default OTPPage