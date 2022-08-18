import { Grid } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
type SignInProps = {
  children: React.ReactNode
}
const SignIn = ({ children }: SignInProps) => {
  return (
    <Grid
      width="100vw"
      height="96vh"
      container
      bgcolor={theme.palette.secondary['50']}
      justifyContent="center"
      maxWidth={'100%'}
      overflow="hidden"
      maxHeight={'100%'}
      alignItems={'center'}
    >
      {children}
    </Grid>
  )
}
export default SignIn
