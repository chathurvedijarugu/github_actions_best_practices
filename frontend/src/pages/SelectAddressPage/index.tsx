import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '../../components/atoms/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ProgressBar from '../../components/molecules/progressBar'
import Logo from '../../components/molecules/logo'
import logo from '../../assets/icons/logo.svg'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom'
import SelectAddress from '../../components/organisms/SelectAddress'
import {  ADDRESS_PAGE_BAR_VALUES } from '../../utils/constant'
import { getAddressDetails } from '../../services/services'

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
const SelectAddressPage = () => {
  let userId=1;
  const navigate = useNavigate()
  const handleClickonLogo = () => {
    navigate('/homePage')
  }
  const handleClickonBackButton = () => {
    navigate('/AddAddressPage')
  }
  const hanldeOnAddAddress = () => {
    navigate('/AddAddressPage')
  }
  const handleCompleteOrder = () => {
    navigate('/reviewOrder')
  }
  const [data,setData]=useState([])
  useEffect(() => {
   getAddressDetails(userId).then((res)=>{
     setData(res.addressDetails)
   })
  }, [])
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
              values={ ADDRESS_PAGE_BAR_VALUES}
              currentIndex={2}
            />
            </Box>
        </Grid>
      </Grid>
      
      <Box display="flex" paddingTop="2rem" justifyContent="center">
  <SelectAddress addressData={data} onAddAddressClick={hanldeOnAddAddress}/>
      </Box>
    </>
  )
}

export default SelectAddressPage