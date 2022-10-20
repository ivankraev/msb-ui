import React from 'react'
import { useAppSelector } from '@msp/redux/hooks'
import Container from '@common/Container'
import InnerContainer from '@common/UserSettings/components/Container'
import EditableForm from './components/EditableForm/EditableForm'
import { PreferencesFields, ProfileInfoFields } from './config'

import s from './UserProfile.scss'

const UserProfile = () => {
  const { userInfo } = useAppSelector((state) => state.user)

  return (
    <Container label="My Profile" styles={s.container}>
      <InnerContainer>
        <EditableForm
          formLabel="Profile info"
          ctaText={'Edit info'}
          fields={ProfileInfoFields}
          initialValues={{
            name: userInfo?.name,
            email: userInfo?.email,
            phone: userInfo?.phoneNumber,
          }}
        />
        <hr />
        <EditableForm
          formLabel="Preferences and settings"
          ctaText={'Change settings'}
          fields={PreferencesFields}
          initialValues={{
            timezone: 0,
            language: 'en',
          }}
        />
      </InnerContainer>
    </Container>
  )
}

export default UserProfile
