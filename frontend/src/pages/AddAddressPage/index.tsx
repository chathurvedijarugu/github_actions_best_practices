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
import { addAddressDetails } from '../../services/services'
import { addressDetailsType, ADDRESS_PAGE_BAR_VALUES } from '../../utils/constant'

const stylings = {
  footer: {
    boxShadow: '0px -4px 6px 0px #0000000F',
    display: 'flex',
    justifyContent: 'spacce-between',
    alignItems: 'center',
    height: '70px',
    bottom: 0,
  },
  cancelButton: {
    color: '#FC5C5C',
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '18px',
    borderRadius: '4px',
    height: '42px',
    '&:hover': {
      background: 'none',
    },
  },
  containedButton: {
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '18px',
    borderRadius: '4px',
    width: '222px',
    height: '42px',
  },
  newPatientButton: {
    color: '#6B4DE0',
    width: '10.937rem',
    height: '2.5rem',
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    size: '1rem',
    lineHeight: '1.5rem',
    padding: '0.5rem',
  },
  selectPatient: {
    width: '583px',
    height: '560px',
    borderRadius: '8px',
    boxShadow: '0px 0px 26px 0px #E9E8ED80',
  },
}
const AddPatientDetailsPage = () => {
  const navigate = useNavigate()
  const handleClickonLogo = () => {
    navigate('/homePage')
  }
  const handleClickonBackButton = () => {
    navigate('/selectAppointementPage')
  }
  const handleSaveAddress=async(details:addressDetailsType,userId:number)=>{
await addAddressDetails(details,userId)
    navigate('/reviewOrderPage')

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
        <Grid xs  item>
            <Box width="671px">
            <ProgressBar
              values={ADDRESS_PAGE_BAR_VALUES}
              currentIndex={2}
            />
            </Box>
        </Grid>
      </Grid>
      
      <Box display="flex" paddingTop="2rem" justifyContent="center">
        <AddAddress onSaveAddressClick={(addressDetails:addressDetailsType,userId:number)=>{
            handleSaveAddress(addressDetails,userId)
        }}/>
      </Box>
    </>
  )
}

export default AddPatientDetailsPage
