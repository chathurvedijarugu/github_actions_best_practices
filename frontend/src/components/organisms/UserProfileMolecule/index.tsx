import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import { profileMenu } from '../../../utils/constant'
import UserProfileCard from '../../molecules/UserProfileCard'
import profilePic from '../../../assets/userprofileIcons/Avatar.svg'
import closeIcon from '../../../assets/userprofileIcons/closeIcon.svg'

const stylings = {
  box: {
    width: '15.438rem',
    height: '5.125rem',
    paddingLeft: '7.688rem',
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
export type Props = {
  handleClose: () => void
  handleLogOut: () => void
}
const UserProfile = (props: Props) => {
  return (
    <Box
      sx={{
        paddingLeft: '3.75rem',
        paddingRight: '3.75rem',
        paddingTop: '2.5rem',
        paddingBottom: '7rem',
      }}
    >
      <Box
        
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '590px',
          cursor: 'pointer' 
        }}
      >
        <img onClick={props.handleClose} src={closeIcon} alt="closeicon"></img>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '428px',
        }}
      >
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
        <Typography variant="body2" color="#6B4DE0">
          Edit
        </Typography>
      </Box>
      <Grid container direction="column" rowGap="2rem" paddingTop="3rem">
        {profileMenu.map((item: any, index: number) => {
          return (
            <Grid
              item
              onClick={
                item.heading === 'Logout' ? props.handleLogOut : () => null
              }
            >
              <UserProfileCard
                icon={item.icon}
                heading={item.heading}
                subtext={item.subtext}
              ></UserProfileCard>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default UserProfile
