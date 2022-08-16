import { Grid, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import CompanyLogo from '../../../assets/icons/companyLogo.svg'
import theme from '../../../theme'
import User from '../../../assets/icons/User.svg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MapPin from '../../../assets/icons/Mappin.svg'
import ChevronDown from '../../../assets/icons/ChevronDown.svg'
import SearchField from '../../molecules/searchField'
import {
  HOME_LABEL,
  MY_APPOINTMENT_LABEL,
  REPORTS_LABEL,
  NAVBAR_ADDRESS,
} from '../../utils/Constant'

import { NavLink } from 'react-router-dom'

const Header: React.FC = (props) => {
  const tabNames = ['Home', 'Reports', 'My Appointements']
  const tabValues = [
    <Typography>Home</Typography>,
    <Typography>Reports</Typography>,
    <Typography>My Appointements</Typography>,
  ]
  const useStyles = makeStyles({
    innerGrid: {
      height: '100%',
      width: '100%',
      padding: '10px 0 10px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.gammaMedium.main,
    },
    location: {
      display: 'flex',
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
      justifyContent: 'space-between',
    },
    typoAddress: {
      color: theme.palette.gammaHigh.main,
      paddingLeft: '10px',
    },
    chevronDown: {
      paddingLeft: '76px',
    },
    cartIcon: {
      color: theme.palette.grey[300],
    },
    Activelink: {
      textDecoration: 'none',
      color: theme.palette.primary.main,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  })
  const classes = useStyles()
  return (
    <Grid container className={classes.innerGrid}>
      <Grid item xs={3} md={4} className={classes.center}>
        <img src={CompanyLogo} alt="companyLogo" />
      </Grid>
      <Grid
        item
        container
        xs={3}
        md={4}
        className={classes.center}
        columnGap={6}
      >
        <Grid item>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? classes.Activelink : classes.link
            }
          >
            <Typography variant="caption1">{HOME_LABEL}</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? classes.Activelink : classes.link
            }
          >
            <Typography variant="caption1">{REPORTS_LABEL}</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/myAppointments"
            className={({ isActive }) =>
              isActive ? classes.Activelink : classes.link
            }
          >
            <Typography variant="caption1">{MY_APPOINTMENT_LABEL}</Typography>
          </NavLink>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={3}
        md={4}
        className={classes.center}
        columnSpacing={6}
        justifyContent="flex-end"
      >
        <Grid
          item
          container
          justifyContent="space-between"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <SearchField
              border="none"
              borderBottom={`1px solid ${theme.palette.grey[200]}`}
              startIcon={MapPin}
              endIcon={ChevronDown}
              borderRadius="none"
              padding="2px 0px 4px"
              defaultValue={NAVBAR_ADDRESS}
            />
          </Grid>
          <Grid item>
            <img src={User} alt="user" />
          </Grid>
          <Grid item>
            <ShoppingCartOutlinedIcon
              className={classes.cartIcon}
              fontSize="small"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
