import { AccessTime } from '@mui/icons-material'
import { Divider, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import PDF from '../../../assets/icons/PDF.svg'
import PDFActive from '../../../assets/icons/PDFActive.svg'
import theme from '../../../theme'
import Download from '../../../assets/icons/download.svg'
type TestReportProps = {
  isCompleted: boolean
  testName: string
  labName: string
  date?: string
  time?: string
  onDownload?: () => void
}
const CustomTypography = styled(Typography)({
  color: theme.palette.gammaLow.main,
  ...theme.typography.overline,
})
const TestReport = ({
  isCompleted,
  labName,
  testName,
  date,
  time,
  onDownload,
}: TestReportProps) => {
  return (
    <Grid
      padding={2}
      sx={{ border: `1px solid ${theme.palette.grey['50']}` }}
      container
      width="100%"
      display="flex"
    >
      <Grid item margin={3}>
        <img src={!isCompleted ? PDF : PDFActive} />
      </Grid>
      <Grid item xs marginX={5}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Typography variant="caption1">{labName}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption2" fontWeight={'400'}>
              {testName}
            </Typography>
          </Grid>
          <Grid item display="inline-flex">
            {!isCompleted ? (
              <Typography
                display="flex"
                alignItems="center"
                fontWeight={400}
                variant="caption2"
                color={theme.palette.red500.main}
              >
                <AccessTime sx={{ fontSize: '14px', marginX: 1 }} />
                Pending
              </Typography>
            ) : (
              <>
                <CustomTypography>{date}</CustomTypography>
                <Divider
                  sx={{ color: 'grey', marginX: 1 }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
                <CustomTypography>{time}</CustomTypography>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
      {isCompleted ? (
        <Grid item>
          <img
            data-testid={'download-icon'}
            onClick={onDownload ?? (() => {})}
            src={Download}
          />
        </Grid>
      ) : (
        ''
      )}
    </Grid>
  )
}

export default TestReport
