import React from 'react'
import { useAppSelector } from '@msp/redux/hooks'
import SettingsComponent from '@common/UserSettings/components/SettingsComponent'
import InnerContainer from '@common/UserSettings/components/Container'
import Container from '@common/Container'
import Logo from '@common/Logo'
import s from './MspSettings.scss'
import EditableForm from '../UserProfile/components/EditableForm/EditableForm'
import { AdditionalSettingsFields, MspSettingsFields } from './config'

const MspSettings = () => {
  const {
    certificate: { file },
    logo,
    mspName,
  } = useAppSelector((state) => state.settings)

  return (
    <Container label="Msp Settings" styles={s.container}>
      <InnerContainer>
        <EditableForm
          formLabel="Profile info"
          ctaText={'Edit info'}
          fields={MspSettingsFields}
          initialValues={{
            mspName: mspName,
          }}
        />
        <SettingsComponent label="MSP logo">
          <Logo className={s.logo} link={logo!} />
        </SettingsComponent>
        <hr />
        <EditableForm
          formLabel="Other settings"
          ctaText={'Change'}
          fields={AdditionalSettingsFields}
          initialValues={{
            taxCertificate: file,
          }}
        />
      </InnerContainer>
    </Container>
  )
}

export default MspSettings
