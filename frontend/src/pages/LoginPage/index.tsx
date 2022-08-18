import React, { useState } from 'react'
import Login from '../../components/organisms/Login'
import MobileNumber from '../../components/organisms/MobileNumber'
import OTP from '../../components/organisms/OTP'
const LoginPage = () => {
  let [counter, setCounter] = useState(0)
  const renderSwitch = () => {
    switch (counter) {
      case 0:
        return (
          <Login
            buttonClick={() => {
              setCounter((counter) => counter + 1)
            }}
          />
        )
      case 1:
        return (
          <MobileNumber
            buttonClick={() => {
              setCounter((counter) => counter + 1)
            }}
          />
        )
      case 2:
        return (
          <OTP
            buttonClick={() => {
              setCounter(0)
            }}
          />
        )
    }
  }
  return <>
  {
    renderSwitch()
  }
  </>
}

export default LoginPage