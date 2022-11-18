import React, { useEffect } from 'react'
import { useAppSelector } from '@msp/redux/hooks'
import Container from '@common/Container'
import InnerContainer from '@common/UserSettings/components/Container'
import EditableForm from './components/EditableForm/EditableForm'
import {
  PreferencesFields,
  ProfileInfoFields,
  ProfileInfoFieldsValidationSchema,
  PreferencesFieldsValidationSchema,
} from './config'
import { userSliceActions } from '@msp/features/user/userSlice'
import { UserInfo } from '../../shared/interfaces/user.interface'
import { uiComponentsActions } from '@msp/features/uiComponents/uiComponentsSlice'
import { useUpdateUserMutation } from '@msp/features/api/userApiSlice'

import s from './UserProfile.scss'

const UserProfile = () => {
  const { userInfo } = useAppSelector((state) => state.user)
  const { setUserInfo } = userSliceActions()
  const { showSnackBar } = uiComponentsActions()

  const [updateUser, { error, data }] = useUpdateUserMutation()

  useEffect(() => {
    if (data) {
      setUserInfo(data)
      showSnackBar({
        text: 'Your data were updated',
        severity: 'info',
      })
    }
  }, [data, error])

  const updateProfile = (values: Partial<UserInfo>) => {
    if (values.timeZone) {
      values.timeZone = values.timeZone.toString()
    }
    return updateUser({ id: userInfo?.id, ...values })
  }

  return (
    <Container label="My Profile" styles={s.container}>
      <InnerContainer>
        <EditableForm
          formLabel="Profile info"
          ctaText={'Edit info'}
          fields={ProfileInfoFields}
          onSubmit={updateProfile}
          validationSchema={ProfileInfoFieldsValidationSchema}
          initialValues={{
            name: userInfo?.name,
            email: userInfo?.email,
            phone: userInfo?.phone,
          }}
        />
        <hr />
        <EditableForm
          formLabel="Preferences and settings"
          ctaText={'Change settings'}
          fields={PreferencesFields}
          onSubmit={updateProfile}
          validationSchema={PreferencesFieldsValidationSchema}
          initialValues={{
            timeZone: userInfo?.timeZone || '00',
            language: userInfo?.language || 'en',
          }}
        />
      </InnerContainer>
    </Container>
  )
}

export default UserProfile
