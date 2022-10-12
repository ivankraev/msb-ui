import React from 'react'
import Container from '@common/Container'
import Button from '@common/Button'
import Logo from '@msp/assets/images/AcmeWidgetsLogo'
import TaxCertificate from '@msp/components/MspSettings/components/TaxCertificate'
import s from './MspSettings.scss'

const MspSettings = () => {
  return (
    <Container label="Msp Settings">
      <div className={s.container}>
        <div className={s.generalSettingsHolder}>
          <div className={s.headerHolder}>
            <h3>Info</h3>
            <Button>edit info</Button>
          </div>
          <div className={s.settingsContainer}>
            <strong>MSP name</strong>
            <span>Acme Widgets</span>
          </div>
          <div className={s.settingsContainer}>
            <strong>MSP logo</strong>
            <Logo />
          </div>
          <hr />
          <div className={s.headerHolder}>
            <h3>Other settings</h3>
            <Button>change</Button>
          </div>
          <div className={s.settingsContainer}>
            <strong>Tax certificate</strong>
            <TaxCertificate />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MspSettings
