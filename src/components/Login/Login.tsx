import React, { useState } from 'react'
import { createOktaLink } from '@msp/utils/okta-helper'
import CiscoIcon from '@msp/components/icons/CiscoIcon'
import SimpleInput from '@common/SimpleInput'
import Button from '@common/Button'
import s from './Login.scss'

const Login = () => {
  const [credentials, setCredentials] = useState('')

  const handleLogin = async () => {
    window.location.href = createOktaLink(credentials)
  }

  return (
    <div className={s.container}>
      <div className={s.form}>
        <CiscoIcon />
        <h1>MSP Hub</h1>
        <SimpleInput
          name="email"
          label="Email or Username"
          onChangeHandler={(e) => setCredentials(e.target.value)}
          styles={s.inputHolder}
          onPressEnter={handleLogin}
        />
        <Button contained onClick={handleLogin} className={s.buttonHover}>
          log in
        </Button>
      </div>
    </div>
  )
}

export default Login
