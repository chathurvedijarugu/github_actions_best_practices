import React from 'react'
import Timeline from '@mui/lab/Timeline'
import CustomTimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import Typography from '@mui/material/Typography'
import { Box, styled } from '@mui/material'
import theme from '../../../theme'
type TrackingStepperProps = {
  data: { icon: string; heading: React.ReactNode; caption: React.ReactNode }[]
  currentIndex: number
}
const TimelineItem = styled(CustomTimelineItem)({
  // "&. MuiTimelineItem::before":{
  //   display:"none"
  // }
})
export default function TrackingStepper({
  data,
  currentIndex,
}: TrackingStepperProps) {
  return (
    <Box width="50%">
      <Timeline sx={{ m: 0, width: '100%' }}>
        <Typography marginY={2} variant="subtitle1">
          Track your order
        </Typography>
        {data.map((value, index) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ display: 'none', flex: 0 }}
              ></TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  variant={index < currentIndex ? 'filled' : 'outlined'}
                  color={index <= currentIndex ? 'primary' : 'grey'}
                  sx={{
                    display: 'flex',
                    backgroundColor:
                      index < currentIndex
                        ? theme.palette.secondary['800']
                        : 'transparent',
                    justifyContent: 'center',
                    width: '2rem',
                    height: '2rem',
                    m: 0,
                  }}
                >
                  <img src={value.icon} />
                </TimelineDot>
                <TimelineConnector
                  sx={{
                    backgroundColor:
                      index < currentIndex
                        ? theme.palette.primary.main
                        : theme.palette.grey['300'],
                    display: index == data.length - 1 ? 'none' : '',
                    height: '3rem',
                    width: '1px',
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  display="block"
                  variant="body"
                  color={theme.palette.gammaMedium.main}
                >
                  {value.heading}
                </Typography>
                <Typography
                  display="flex"
                  alignItems="center"
                  width="fit-content"
                  color={theme.palette.gammaLow.main}
                  variant="overline"
                  bgcolor={
                    index == 1 ? theme.palette.grey['50'] : 'transparent'
                  }
                >
                  {value.caption}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          )
        })}
        {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <Check />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Order placed
          </Typography>
          <Typography variant="body1">
            Placed on Mon, 22 Feb, 11.00 AM
          </Typography>
        </TimelineContent>
      </TimelineItem> */}
      </Timeline>
    </Box>
  )
}
