import { Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { getReports } from '../../../services/services'
import theme from '../../../theme'
import AppointmentCard from '../../molecules/AppointmentCard'
import COVID from '../../../assets/icons/covid.svg'
import BODY from '../../../assets/icons/body.svg'
import { AppointmentCardProps } from '../../molecules/AppointmentCard'
import {
  REPORTS_LABEL,
  UPCOMING_TESTS,
  RECENT_TESTS,
  UserContext,
} from '../../utils/Constant'
export type AppointmentsPageProps = {
  upcomingItems: AppointmentCardProps[]
  recentItems: AppointmentCardProps[]
}

const ApponitmentsMainContent: React.FC = () => {
  const [userId] = useContext(UserContext)
  const [upcomingAppointments, setUpcomingAppointments] = useState([])
  useEffect(() => {
    getReports(userId).then((res) => {
      setUpcomingAppointments(res)
    })
  }, [])

  const testDetails: AppointmentsPageProps = {
    upcomingItems: [
      {
        dateTime: 'Wed 23, 7.00 am to 8.00 am',
        labName: 'Los Altos Center Lab',
        patientName: 'Patrick Smith',
        testName: 'Covid RTPCR',
        icon: COVID,
      },
    ],
    recentItems: [
      {
        dateTime: 'Wed 23, 7.00 am to 8.00 am',
        labName: 'Los Altos Center Lab',
        patientName: 'Patrick Smith',
        testName: 'Full Body Checkup',
        icon: BODY,
      },
    ],
  }
  const style = {
    root: {
      paddingTop: '40px',
      paddingLeft: '90px',
      paddingRight: '90px',
      width: '100%',
      height: '100%',
    },
    label: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  }
  return (
    <Grid container rowGap={2} sx={style.root}>
      <Grid item container rowGap={8}>
        <Grid item>
          <Typography
            data-testid="heading"
            variant="h1"
            color={theme.palette.gammaMedium.main}
          >
            {REPORTS_LABEL}
          </Typography>
        </Grid>

        <Grid item container rowGap={8}>
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={style.label}
              color={theme.palette.gammaMedium.main}
              data-testid="upcoming"
            >
              {UPCOMING_TESTS}
            </Typography>
          </Grid>
          <Grid item container direction="column" rowGap={8}>
            {testDetails.upcomingItems.map((test: AppointmentCardProps) => {
              return (
                <Grid item xs={4}>
                  <AppointmentCard
                    dateTime={test.dateTime}
                    labName={test.labName}
                    patientName={test.patientName}
                    testName={test.testName}
                    icon={test.icon}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Grid>

        <Grid item container rowGap={8}>
          <Grid item>
            <Typography
              variant="subtitle1"
              color={theme.palette.gammaMedium.main}
              data-testid="recent"
              sx={style.label}
            >
              {RECENT_TESTS}
            </Typography>
          </Grid>
          <Grid item container direction="column" rowGap={8}>
            {testDetails.recentItems.map((test: AppointmentCardProps) => {
              return (
                <Grid item xs={4}>
                  <AppointmentCard
                    dateTime={test.dateTime}
                    labName={test.labName}
                    patientName={test.patientName}
                    testName={test.testName}
                    icon={test.icon}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ApponitmentsMainContent
