import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import PaymentDetails from '../../components/molecules/paymentDetails'
import ReviewOrder from '../../components/molecules/ReviewOrder'
import MainTemplate from '../../components/templates/Main'
import { paymentOptions } from '../../components/utils/Constant'
const CheckoutPage = () => {
  return (
    <MainTemplate
      mainComponent={
        <Grid container justifyContent={'space-between'}>
          <Grid
            item
            xs={7}
            paddingX={18}
            paddingY={5}
            boxShadow={'0px 0px 26px 0px rgba(233, 232, 237, 0.5)'}
          >
            <ReviewOrder
              patients={[
                {
                  patientName: 'Patrick Smith',
                  testName: 'COVID RT-PCR Test',
                  age: 30,
                  gender: 'M',
                  relation: 'Self',
                  testCost: 2000,
                },
                {
                  patientName: 'Patrick Smith',
                  testName: 'COVID RT-PCR Test',
                  age: 30,
                  gender: 'M',
                  relation: 'Self',
                  testCost: 2000,
                },
              ]}
              address="2235 California Street Mountain View California APT#021 - 11023"
              date="Tue, Feb 23, 2022"
              time="07.00 - 08.00 AM"
              discount={200}
            />
          </Grid>
          <Grid item xs={4}>
            <PaymentDetails
              cardNumber={'1244 1234 1345 3255'}
              cardHolder={'Yessie'}
              expiryDate={'02/25'}
              paymentOptions={paymentOptions}
            />
          </Grid>
        </Grid>
      }
      buttonLabel="Pay Now"
      nextClick={() => {}}
      stepperComponent={
        <Box justifySelf={'left'}>
          <Typography>Checkout</Typography>
        </Box>
      }
    />
  )
}
export default CheckoutPage
