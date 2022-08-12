import { Grid } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
type SignInProps = {
  component: React.ReactNode
}
const SignIn = ({ component }: SignInProps) => {
    console.log(component)
  return (
    <Grid
      width="100vw"
      height="97.7vh"
      container
      bgcolor={theme.palette.secondary['50']}
      justifyContent="center"
      maxWidth={"100%"}
      overflow="hidden"
      maxHeight={"100%"}
      alignItems={"center"}
    >
      <Grid item >{component}</Grid>
    </Grid>
  )
}
export default SignIn
