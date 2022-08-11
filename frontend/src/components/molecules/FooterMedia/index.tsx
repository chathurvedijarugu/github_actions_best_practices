import React from 'react'
import GooglePlay from '../../../assets/socialmediaIcons/playstore.svg'
import AppStore from '../../../assets/socialmediaIcons/appstore.svg'
import Facebook from '../../../assets/socialmediaIcons/facebook.svg'
import Twitter from '../../../assets/socialmediaIcons/twitter.svg'
import { Grid } from '@mui/material'

let FooterMedia = () => {
  return (
    <Grid container direction="column" rowGap="1.288rem">
      <Grid item>
        <img src={GooglePlay} alt="Google play"></img>
      </Grid>
      <Grid item>
        <img src={AppStore} alt="App Store"></img>
      </Grid>
      <Grid item>
        <Grid container  columnGap="1.125rem" flexDirection="row-reverse">
          <Grid item>
            <img src={Twitter} alt="Twitter"></img>
          </Grid>
          <Grid item>
            <img src={Facebook} alt="FaceBook"></img>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FooterMedia
