import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../utils/Constant'
import { useAuth0 } from '@auth0/auth0-react'
type UserLogin = {
  firstName: string
  lastName: string
  email: string
}
export const useLogin = () => {
  let [details, setDetails] = useState<UserLogin>({
    firstName: '',
    email: '',
    lastName: '',
  })
  const navigate = useNavigate()
  let { loginWithRedirect, user, getAccessTokenSilently } = useAuth0()
  let [userID, setUserID] = useContext(UserContext)
  let [enable, setEnable] = useState<boolean>(false)
  useEffect(() => {
    if (
      details?.email.length > 0 &&
      details?.firstName.length > 0 &&
      details?.lastName.length > 0 &&
      details?.email.includes('@')
    ) {
      setEnable(true)
    } else {
      setEnable(false)
    }
  }, [details])
  const onChangeDetails = (d: { [key: string]: string }) => {
    setDetails((prev) => ({ ...prev, ...d }))
  }
  return { enable, details, onChangeDetails }
}
