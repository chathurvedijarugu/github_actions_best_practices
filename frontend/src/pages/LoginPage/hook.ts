import React, { useContext, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { UserContext } from '../../components/utils/Constant'
import { useNavigate } from 'react-router-dom'
export const useLoginPage = () => {
  let { getAccessTokenSilently, user } = useAuth0()
  let [userID, setUserID] = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    getAccessTokenSilently().then((value) => {
      console.log(value)
    })
    setUserID(user?.sub?.slice(user.sub.indexOf('|') + 1, user.sub.length))
    console.log(user)
    console.log(userID)
  }, [user?.sub])
  useEffect(() => {
    if (userID != undefined) {
      navigate('/')
    }
  }, [userID])
}
