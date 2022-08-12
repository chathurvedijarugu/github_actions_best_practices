import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import { profileMenu } from '../../../utils/constant'
import { text } from '../../atoms/Button/index.stories'
import UserProfileCard from '../UserProfileCard'
import profilePic from '../../../assets/userprofileIcons/Avatar.svg'
const stylings = {
  box: {
    width: '15.438rem',
    height: '5.125rem',
    // border: '1px solid #F8F8FA',
    // boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
    // borderRadius: '12px',
    paddingLeft:"7.688rem"
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  container: {
    columnGap: '0.875rem',
    padding: '0.5rem',
  },
  text1: {
    fontWeight: theme.typography.subtitle1.fontWeight,
    color: theme.palette.gammaHigh.main,
  },
  text2: {
    color: theme.palette.gammaMedium.main,
    paddingTop: '0.5rem',
  },
  text3: {
    color: theme.palette.gammaLow.main,
    paddingTop: '0.25rem',
  },
  text5: {
    paddingTop: '3.063rem',
    textDecoration: 'underline',
    fontWeight: theme.typography.subtitle1.fontWeight,
    color: theme.palette.gammaLow.main,
  },
}

const index = () => {
  return (
    <>
      <Box sx={stylings.box}>
        <Grid container sx={stylings.container}>
          <Grid item data-testid="illustrationImage">
            <img src={profilePic} alt="Text" />
          </Grid>
          <Grid item>
            <Box sx={stylings.innerBox}>
              <Typography variant="body" sx={stylings.text1}>
                Patrick Smith
              </Typography>
              <Typography variant="overline" sx={stylings.text3}>
                patricksmith@gmail.com{' '}
              </Typography>
              <Typography variant="overline" sx={stylings.text3}>
                + 1 330-617-22334
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container direction="column" rowGap="2rem">
        {profileMenu.map((item: any, index: number) => {
          return (
            <Grid item>
              <UserProfileCard
                icon={item.icon}
                heading={item.heading}
                subtext={item.subtext}
              ></UserProfileCard>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default index
