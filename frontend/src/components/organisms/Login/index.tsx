import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  styled,
  TextField as CustomTextField,
  Typography,
  ButtonProps as CustomButtonProps,
} from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CustomButton from '../../atoms/Button'
import Image from '../../atoms/ImageAtom'
import theme from '../../../theme'
import Google from '../../../assets/icons/Google.svg'
import Apple from '../../../assets/icons/Apple.svg'
import Facebook from '../../../assets/icons/Facebook.svg'
import { useLogin } from './hook'
import { useAuth0 } from '@auth0/auth0-react'
import { EMAIL, FIRST_NAME, LAST_NAME, UserContext } from '../../utils/Constant'
import { useNavigate } from 'react-router-dom'
export const TextField = styled(CustomTextField)({
  '& input': {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
  },
})
interface ButtonProps extends CustomButtonProps {
  bgcolor?: string
  fontColor?: string
}
export const Button = styled(CustomButton)<ButtonProps>(
  ({ bgcolor, fontColor }) => ({
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '600',
    height: '2.625rem',
    borderRadius: '0.5rem',
    padding: '0px',
    color: fontColor,
    backgroundColor: bgcolor,
    '&:hover': {
      backgroundColor: bgcolor ?? 'transparent',
    },
  })
)
interface LoginPageProps {
  buttonClick: () => void
}
const Login = ({ buttonClick }: LoginPageProps) => {
  const navigate = useNavigate()
  let { enable, details, onChangeDetails } = useLogin()
  let { loginWithRedirect, user, getAccessTokenSilently } = useAuth0()
  let [userID, setUserID] = useContext(UserContext)
  useEffect(() => {
    getAccessTokenSilently().then((value) => {
      console.log(value)
    })
    setUserID(user?.sub?.slice(user.sub.indexOf("|")+1,user.sub.length))
    console.log(user)
    console.log(userID)
  }, [user?.sub])
  useEffect(() => {
    if (userID != undefined) {
      navigate('/')
    }
  }, [userID])
  console.log(user)

  return (
    <Grid
      container
      direction="column"
      spacing={5}
      bgcolor="white"
      p={5}
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
          {FIRST_NAME}
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="eg: Patrick"
          value={details.firstName}
          onChange={(e) => {
            const key = 'firstName'
            const value = e.target.value
            onChangeDetails({ [key]: value })
          }}
        ></TextField>
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <Typography
          variant="overline2"
          display="block"
          color={theme.palette.gammaLow.main}
        >
          {LAST_NAME}
        </Typography>
        <TextField
          fullWidth
          value={details.lastName}
          variant="standard"
          onChange={(e) => {
            const key = 'lastName'
            const value = e.target.value
            onChangeDetails({ [key]: value })
          }}
          placeholder="eg: Smith"
        ></TextField>
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <Typography
          variant="overline2"
          display="block"
          color={theme.palette.gammaLow.main}
        >
          {EMAIL}
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          value={details.email}
          onChange={(e) => {
            const key = 'email'
            const value = e.target.value
            onChangeDetails({ [key]: value })
          }}
          placeholder="eg: patricksmith@gmail.com"
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={enable ? buttonClick : () => {}}
          bgcolor={
            enable ? theme.palette.primary.main : theme.palette.primary['100']
          }
          fontColor="white"
          fullWidth
        >
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
        <Button
          onClick={() => {
            loginWithRedirect()
          }}
        >
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
          <IconButton
            onClick={() => {
              loginWithRedirect()
            }}
          >
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
export default Login
