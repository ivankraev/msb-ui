import React from 'react'
import { useAppSelector } from '@msp/redux/hooks'
import Container from '@common/Container'
import SettingsComponent from '@common/UserSettings/components/SettingsComponent'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import InnerContainer from '@common/UserSettings/components/Container'
import Button from '@common/Button'
import s from './UserProfile.scss'

const UserProfile = () => {
  // TODO: Add the other properties from the store
  const { userInfo } = useAppSelector((state) => state.user)

  return (
    <Container label="My Profile" styles={s.container}>
      <InnerContainer>
        <HeaderComponent label="Profile info">
          <Button>edit info</Button>
        </HeaderComponent>
        <SettingsComponent label="Name">
          <span>{userInfo?.name}</span>
        </SettingsComponent>
        <SettingsComponent label="Email">
          <span>rrogers@acme-widgets.com</span>
        </SettingsComponent>
        <SettingsComponent label="Phone number">
          <span>(539) 959-7029</span>
        </SettingsComponent>
        <hr />
        <HeaderComponent label="Preferences and settings">
          <Button>change settings</Button>
        </HeaderComponent>
        <SettingsComponent label="Time zone">
          <span>(UTC+00:00) UTC</span>
        </SettingsComponent>
        <SettingsComponent label="language">
          <span>English</span>
        </SettingsComponent>
      </InnerContainer>
    </Container>
  )
}

export default UserProfile
