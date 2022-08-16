import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import theme from '../../../theme'
import OtpInput from 'react-otp-input'
import { OTP } from '../../utils/Constant'
const OTPStyles: Object = {
  border: '1px solid transparent',
  borderBottom: `1px solid ${theme.palette.grey[100]} `,
  width: '40px',
  height: '40px',
  backgroundColor: 'inherit',
  color: theme.palette.gammaLow.main,
}
const FocusStyles: Object = {
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  outline: 'none',
}
const OTPField: React.FC = () => {
  const [disabledVerify, setDisabledVerify] = useState<boolean>(true)

  const [otp, setOTP] = useState<string>()
  const handleChange = (otp: string) => {
    if (otp.length === 4) {
      setDisabledVerify(false)
    } else {
      setDisabledVerify(true)
    }
    setOTP(otp)
  }
  return (
    <Box sx={{ color: 'red' }}>
      <Typography color={theme.palette.gammaLow.main} variant="caption1">
        {OTP}
      </Typography>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        separator={<span style={{ width: '8px' }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={OTPStyles}
        focusStyle={FocusStyles}
      />
    </Box>
  )
}
export default OTPField
