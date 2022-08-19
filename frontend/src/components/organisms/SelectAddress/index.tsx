import { Box, Button, Checkbox, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../../theme'
import AddIcon from '@mui/icons-material/Add'
import SelectAddressCard from '../../molecules/SelectAddressCard'

const stylings = {
  footer: {
    position: 'absolute',
    boxShadow: '0px -4px 6px 0px #0000000F',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    bottom: 0,
    width: '100%',
  },
  cancelButton: {
    color: '#FC5C5C',
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '18px',
    borderRadius: '4px',
    width: '222px',
    height: '42px',
    '&:hover': {
      background: 'none',
    },
  },
  containedButton: {
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '18px',
    borderRadius: '8px',
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
type SelectAddressProps = {
  addressData?: any
  onAddAddressClick?: () => void
  onCompleteClick?: (selected: any, userId: any) => void
}
const SelectAddress = ({
  addressData,
  onAddAddressClick,
  onCompleteClick,
}: SelectAddressProps) => {
  const [selected, setSelected] = useState(0)
  let userId = 10
  return (
    <>
      <Box sx={stylings.selectPatient}>
        <Box padding="1.5rem">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            height="54px"
          >
            <Grid item>
              <Typography
                variant="subtitle1"
                color={theme.palette.gammaMedium.main}
              >
                Select Address
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                data-testid="newPatientButton"
                sx={stylings.newPatientButton}
                onClick={onAddAddressClick}
                startIcon={<AddIcon />}
                children="Add Address"
              ></Button>
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap="1rem" paddingTop="1rem">
            {addressData.map((item: any, index: number) => {
              return (
                <Grid item>
                  <SelectAddressCard
                    addressData={item}
                    activeId={selected}
                    index={index}
                    handleOnClick={() => setSelected(index)}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
      <Box sx={stylings.footer}>
        <Grid container justifyContent="space-between" padding="6rem">
          <Grid item>
            <Button
              variant="text"
              children="Cancel"
              sx={stylings.cancelButton}
            ></Button>
          </Grid>
          <Grid item>
            <Button
              data-testid="comleteButton"
              variant="contained"
              onClick={() => onCompleteClick?.(selected, userId)}
              children="Complete Order"
              sx={stylings.containedButton}
            ></Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SelectAddress
