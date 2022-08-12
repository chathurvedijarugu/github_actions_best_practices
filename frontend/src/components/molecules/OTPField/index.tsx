import React from 'react'
import { Box as MuiBox, TextField, Typography } from '@mui/material'
import styled from 'styled-components'
import theme from '../../../theme'

const Box = styled(MuiBox)`
  .label {
    color: ${theme.palette.gammaLow.main};
  }
  .otpInputs {
    display: flex;
    gap: 0.75rem;

    .otpField {
      width: 2.5rem;

      .MuiInput-root {
        color: '#E9E8ED';
      }

      .Mui-focused {
        color: black;
      }

      .MuiInput-underline::before {
        border-bottom: 1px solid #e9e8ed;
      }

      .MuiInput-underline::after {
        border-bottom: 2px solid black;
      }
    }
  }
`

const OTPField = () => {
  const [otp, setOtp] = React.useState<number[]>([NaN, NaN, NaN, NaN])
  const [pointer, setPointer] = React.useState<number>(0)
  const refs = React.useRef<Array<HTMLDivElement | null>>([])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const getValue = parseInt(event.target.value) % 10
    const otps = [...otp]

    if (!isNaN(getValue)) {
      otps[index] = getValue
      setOtp(otps)
      if (index < 3) {
        setPointer(index + 1)
      }
    }

    if (event.target.value === '') {
      otps[index] = NaN
      setOtp(otps)
      if (index > 0) {
        setPointer(index - 1)
      }
    }
  }

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      refs.current[pointer]?.focus()
    }, 10)

    return () => {
      clearTimeout(timeout)
    }
  }, [pointer, refs])

  return (
    <Box data-testid="otp-field">
      <Typography variant="caption2" className="label">
        {'OTP'}
      </Typography>
      <MuiBox className="otpInputs">
        {otp.map((field: number, index) => {
          return (
            <TextField
              variant="standard"
              sx={{ input: { textAlign: 'center' } }}
              value={isNaN(field) ? '' : field}
              key={index}
              inputRef={(element) => (refs.current[index] = element)}
              disabled={pointer !== index ? true : false}
              autoComplete="off"
              className="otpField"
              data-testid={`field-${index}`}
              onChange={(event) => handleChange(event, index)}
            />
          )
        })}
      </MuiBox>
    </Box>
  )
}
export default OTPField
