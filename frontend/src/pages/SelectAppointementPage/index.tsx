import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '../../components/atoms/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ProgressBar from '../../components/molecules/progressBar'
import Logo from '../../components/molecules/logo'
import logo from '../../assets/icons/logo.svg'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom'
import AddAddress from '../../components/organisms/AddAdressDetails'
import SelectAppointement, { DateTimeProps, DateTimeType } from '../../components/organisms/SelectAppointment'
import { addAddressDetails, addSlotTime } from '../../services/services'
import {
  addressDetailsType,
  ADDRESS_PAGE_BAR_VALUES,
} from '../../utils/constant'

const SelectAppointementPage = () => {
  const navigate = useNavigate()
  const handleClickonLogo = () => {
    navigate('/homePage')
  }
  const handleClickonBackButton = () => {
    navigate('/labTestPage')
  }
  const handleAddAddressButton = async (
    slotSelected: DateTimeType,
    userId: number
  ) => {
    await addSlotTime(slotSelected,userId)
    navigate('/addAddressPage')
  }
  return (
    <>
      <Box onClick={handleClickonLogo}>
        <Logo img={logo} text="Zemoso Diagnostics" />
      </Box>
      <Grid
        container
        direction="row"
        columnGap="435px"
        alignItems="center"
        paddingTop="2rem"
      >
        <Grid item>
          <Button
            onClick={handleClickonBackButton}
            variant="text"
            startIcon={<ArrowBackIcon />}
            children={<Typography variant="body">Back</Typography>}
          />
        </Grid>
        <Grid xs item>
          <Box width="671px">
            <ProgressBar values={ADDRESS_PAGE_BAR_VALUES} currentIndex={1} />
          </Box>
        </Grid>
      </Grid>

      <Box display="flex" paddingTop="2rem" justifyContent="center">
        <SelectAppointement
          month={'January'}
          date={1}
          day={'Monday'}
          time={'6.00am - 7.00am'}
          getDateTime={(slotSelected:DateTimeType,userId:number)=>{handleAddAddressButton(slotSelected,userId)}}
        />
      </Box>
    </>
  )
}

export default SelectAppointementPage
