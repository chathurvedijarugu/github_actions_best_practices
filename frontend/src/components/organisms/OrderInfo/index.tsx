import { KeyboardArrowDown } from '@mui/icons-material'
import {
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import User from '../../../assets/icons/User.svg'
import Info from '../../../assets/icons/Info.svg'
import theme from '../../../theme'
import { ADDRESS } from '../../utils/Constant'
type OrderInfoProps = {
  patientDetails: { name: React.ReactNode; test: React.ReactNode }[]
  labAddress: React.ReactNode
  totalAmountPaid: React.ReactNode
}
const OrderInfo = ({
  labAddress,
  patientDetails,
  totalAmountPaid,
}: OrderInfoProps) => {
  const tempArray = [
    'Order placed',
    'Lab technician assigned',
    'Sample collection',
    'Sample being examined',
    'Report ready',
  ]
  return (
    <Grid
      container
      padding={4}
      direction="column"
      width="fit-content"
      boxShadow={theme.shadows[1]}
    >
      <Grid
        container
        border={`1px solid ${theme.palette.grey['50']}`}
        padding={1}
        spacing={1}
        boxShadow={theme.shadows[1]}
        direction="column"
        width="fit-content"
      >
        <Grid item>
          <Grid container>
            {patientDetails.map((value) => {
              return (
                <>
                  <Grid item paddingY={3} paddingX={3}>
                    <img src={User} />
                  </Grid>
                  <Grid item>
                    <Typography
                      display="block"
                      variant="caption2"
                      color={theme.palette.gammaHigh.main}
                    >
                      {value.name}
                    </Typography>
                    <Typography
                      display="block"
                      variant="caption2"
                      color={theme.palette.gammaLow.main}
                    >
                      {value.test}
                    </Typography>
                  </Grid>
                </>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item width="85%">
          <Typography
            variant="caption"
            display="block"
            noWrap={true}
            color={theme.palette.gammaMedium.main}
            textOverflow="ellipsis"
          >
            {labAddress}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption2" color={theme.palette.gammaMedium.main}>
            {`Total Amount Paid - $${totalAmountPaid}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        marginY={5}
        padding={1}
        display={'inline-flex'}
        alignItems="center"
        bgcolor={theme.palette.grey['100']}
        width="100%"
      >
        <img src={Info} />
        <Box
          width="100%"
          marginLeft={2}
          display="inline-flex"
          alignItems={'center'}
          justifyContent="space-between"
        >
          <Typography variant="overline2" color={theme.palette.primary['800']}>
            Instructions
          </Typography>
          <KeyboardArrowDown htmlColor={theme.palette.grey['300']} />
        </Box>
      </Grid>
    </Grid>
  )
}
export default OrderInfo
