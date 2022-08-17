import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  styled,
  TextField as CustomTextField,
  Typography,
} from '@mui/material'
import React from 'react'
import CustomButton from '../../components/atoms/Button'
import Image from '../../components/atoms/ImageAtom'
import theme from '../../theme'
import Google from '../../assets/icons/Google.svg'
import Apple from '../../assets/icons/Apple.svg'
import Facebook from '../../assets/icons/Facebook.svg'
export const TextField = styled(CustomTextField)({
  '& input': {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
  },
})
export const Button = styled(CustomButton)({
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: '600',
  height: '2.625rem',
  borderRadius: '0.5rem',
  padding: '0px',
})

const LoginPage = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={5}
      p={5}
      width="25%"
      height="40%"
      justifyContent="center"
    >
      <Grid item xs={12} display="flex" justifyContent="center">
        <Image imgSrc={'https://svgshare.com/i/k5T.svg'} imgAlt="zemoso_logo" />
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <Typography
          variant="overline2"
          display="block"
          color={theme.palette.gammaLow.main}
        >
          First Name
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="eg: Patrick"
        ></TextField>
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <Typography
          variant="overline2"
          display="block"
          color={theme.palette.gammaLow.main}
        >
          Last Name
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="eg: Smith"
        ></TextField>
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <Typography
          variant="overline2"
          display="block"
          color={theme.palette.gammaLow.main}
        >
          Email id
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="eg: patricksmith@gmail.com"
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <Button sx={{ backgroundColor: '#C6CEF7', color: 'white' }} fullWidth>
          Continue
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="captionRegular"
          color={theme.palette.gammaLow.main}
        >
          Already have an account?
        </Typography>
        <Button>
          <Typography variant="caption1" color={theme.palette.gammaHigh.main}>
            Login
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider>
          <Typography variant="overline" color={theme.palette.grey['300']}>
            or sign up with
          </Typography>
        </Divider>
      </Grid>
      <Grid item>
        <Stack display="flex" justifyContent={'space-around'} direction={'row'}>
          <IconButton>
            <Box
              bgcolor={theme.palette.grey['50']}
              display="flex"
              alignItems="center"
              justifyContent={'center'}
              width="2.45rem"
              height="2.45rem"
            >
              <Image imgSrc={Google} imgAlt="google" />
            </Box>
          </IconButton>
          <IconButton>
            <Box
              bgcolor={theme.palette.grey['50']}
              display="flex"
              alignItems="center"
              justifyContent={'center'}
              width="2.45rem"
              height="2.45rem"
            >
              <Image imgSrc={Facebook} imgAlt="facebook" />
            </Box>
          </IconButton>

          <IconButton>
            <Box
              bgcolor={theme.palette.grey['50']}
              display="flex"
              alignItems="center"
              justifyContent={'center'}
              width="2.45rem"
              height="2.45rem"
            >
              <Image imgSrc={Apple} imgAlt="apple" />
            </Box>
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  )
}
export default LoginPage
