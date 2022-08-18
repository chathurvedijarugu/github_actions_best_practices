import { Grid, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { makeStyles } from '@mui/styles'
import React from 'react'
import theme from '../../../theme'
import Altos from '../../../assets/icons/altos.svg'
import Calender from '../../../assets/icons/calendar1.svg'
import PatientInfo from '../PatientInfo/index'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import {
  LAB_NAME,
  PRICE,
  ITEM_TOTAL,
  LABEL_GRAND_TOTAL,
  FINAL_PRICE,
  DISCOUNT_PRICE,
  LABEL_DISCOUNT,
  SLOT_SELECTED,
  CHANGE,
  DATE,
  TIME,
  HEADING_ADDRESS,
  ADDRESS,
} from '../../utils/Constant'
const ReviewOrder: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      height: '100%',
      width: '100%',
    },
    labDetailsContainer: {
      height: '100%',
      width: '100%',
      border: `1px solid ${theme.palette.grey[100]}`,
      borderRadius: '8px',
      padding: '16px',
    },
    labDetailsCon: {
      height: '100%',
      width: '100%',
      border: `1px solid ${theme.palette.grey[100]}`,
      borderRadius: '8px',
      paddingTop: '6px',
      paddingBottom: '6px',
      paddingLeft: '6px',
      paddingRight: '19.33px',
    },
    labLogo: {
      borderRadius: '50%',
      height: '45px',
      width: '45px',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      border: `1px solid ${theme.palette.grey[100]}`,
    },
    labName: {
      paddingLeft: '14.56px',
      color: theme.palette.gammaHigh.main,
    },
    labDetails: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceContainer: {
      boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
      borderRadius: '12px',
      paddingLeft: '19.33px',
      paddingRight: '19.33px',
    },
    label: {
      color: theme.palette.gammaMedium.main,
    },
    price: {
      color: theme.palette.green.main,
    },
    finalPrice: {
      fontWeight: '700',
      fontSize: '14px',
      lineHeight: '20px',
      color: theme.palette.gammaHigh.main,
    },
    heading: {
      paddingLeft: '14.56px',
      fontWeight: '500',
      color: theme.palette.gammaLow.main,
    },
    mainHeading: {
      alignItems: 'center',
      display: 'flex',
      paddingRight: '0.5%',
    },
    change: {
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '18px',
      color: '#6B4DE0',
    },
    slot: {
      fontWeight: '500',
      color: theme.palette.gammaHigh.main,
    },
    dateTime: {
      paddingTop: '16px',
    },
  })
  const classes = useStyles()
  return (
    <Grid container rowGap={4} className={classes.root}>
      <Grid item className={classes.labDetailsCon}>
        <div className={classes.labDetails}>
          <div className={classes.labLogo}>
            <img src={Altos} alt="labLogo" />
          </div>
          <div className={classes.labName}>
            <Typography variant="body">{LAB_NAME}</Typography>
          </div>
        </div>
      </Grid>

      <Grid item container spacing={1} className={classes.priceContainer}>
        <Grid item container>
          <Grid item xs={6}>
            <Typography variant="caption2" className={classes.label}>
              {ITEM_TOTAL}
            </Typography>
          </Grid>
          <Grid item container justifyContent="flex-end" xs={6}>
            <Typography variant="caption2" className={classes.label}>
              ${PRICE}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <Typography variant="caption2" className={classes.label}>
              {LABEL_DISCOUNT}
            </Typography>
          </Grid>
          <Grid item container justifyContent="flex-end" xs={6}>
            <Typography variant="caption2" className={classes.price}>
              -${DISCOUNT_PRICE}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <Typography variant="caption2" className={classes.label}>
              {LABEL_GRAND_TOTAL}
            </Typography>
          </Grid>
          <Grid item container justifyContent="flex-end" xs={6}>
            <Typography variant="caption1" className={classes.finalPrice}>
              ${FINAL_PRICE}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <PatientInfo
          age={30}
          gender="M"
          patientName="Patrick Smith"
          relation="Self"
          testCost={3000}
          testName="COVID RT-PCR Test"
        />
      </Grid>
      <Grid item container className={classes.labDetailsContainer}>
        <Grid item container className={classes.mainHeading}>
          <Grid item xs={6} container className={classes.mainHeading}>
            <img src={Calender} alt="calender" />
            <Typography variant="overline" className={classes.heading}>
              {SLOT_SELECTED}
            </Typography>
          </Grid>
          <Grid item container xs={6} justifyContent="flex-end">
            <Typography variant="overline" className={classes.change}>
              {CHANGE}
            </Typography>
          </Grid>
          <Divider variant="fullWidth" style={{ width: '100%' }} />
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          className={classes.dateTime}
          xs={6}
        >
          <Grid item>
            <Typography variant="overline">{DATE}</Typography>
          </Grid>
          <Divider variant="fullWidth" orientation="vertical" />
          <Grid item>
            <Typography variant="overline">{TIME}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container className={classes.labDetailsContainer}>
        <Grid item container className={classes.mainHeading}>
          <Grid item xs={6} container className={classes.mainHeading}>
            <HomeOutlinedIcon sx={{ color: theme.palette.grey[300] }} />
            <Typography variant="overline" className={classes.heading}>
              {HEADING_ADDRESS}
            </Typography>
          </Grid>
          <Grid item container xs={6} justifyContent="flex-end">
            <Typography variant="overline" className={classes.change}>
              {CHANGE}
            </Typography>
          </Grid>
          <Divider variant="fullWidth" style={{ width: '100%' }} />
        </Grid>
        <Grid
          item
          container
          style={{
            paddingTop: '16px',
            justifyContent: 'space-between',
          }}
          xs={6}
        >
          <Grid item className={classes.slot}>
            <Typography variant="overline" className={classes.slot}>
              {ADDRESS}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ReviewOrder
