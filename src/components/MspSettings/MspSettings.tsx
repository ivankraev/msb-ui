import React from 'react'
import Container from '@common/Container'
import Button from '@common/Button'
import Logo from '@msp/assets/images/AcmeWidgetsLogo'
import TaxCertificate from '@msp/components/MspSettings/components/TaxCertificate'
import HeaderContainer from '@msp/components/MspSettings/components/HeaderContainer'
import SettingsContainer from '@msp/components/MspSettings/components/SettingsContainer'
import s from './MspSettings.scss'

const MspSettings = () => {
  return (
    <Container label="Msp Settings">
      <div className={s.container}>
        <div className={s.generalSettingsHolder}>
          <HeaderContainer label="Info">
            <Button>edit info</Button>
          </HeaderContainer>
          <SettingsContainer label="MSP name">
            <span>Acme Widgets</span>
          </SettingsContainer>
          <SettingsContainer label="MSP logo">
            <Logo />
          </SettingsContainer>
          <hr />
          <HeaderContainer label="Other settings">
            <Button>change</Button>
          </HeaderContainer>
          <SettingsContainer label="Tax certificate">
            <TaxCertificate />
          </SettingsContainer>
        </div>
      </div>
    </Container>
  )
}

export default MspSettings
