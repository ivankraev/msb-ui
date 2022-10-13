import React, { useState, useRef } from 'react'
import Container from '@common/Container'
import Button from '@common/Button'
import Logo from '@msp/assets/images/AcmeWidgetsLogo'
import TaxCertificate from '@msp/components/MspSettings/components/TaxCertificate'
import HeaderContainer from '@msp/components/MspSettings/components/HeaderContainer'
import SettingsContainer from '@msp/components/MspSettings/components/SettingsContainer'
import s from './MspSettings.scss'

const CERT_ALLOWED_FORMATS = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const MspSettings = () => {
  const [certificate, setCertificate] = useState<null | File>(null)
  const [certFileError, setCertFileError] = useState<string | null>(null)

  const hiddenFileInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    hiddenFileInput.current!.click()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const fileUploaded = event.target.files[0]
    if (!CERT_ALLOWED_FORMATS.includes(fileUploaded?.type)) {
      setCertFileError(
        `File format not allowed! Allowed types are ${CERT_ALLOWED_FORMATS.join(', ')}`,
      )

      return
    }

    setCertificate(fileUploaded)
    setCertFileError(null)
    event.target.value = ''
  }

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
            <input
              hidden
              type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              accept={CERT_ALLOWED_FORMATS.join(',')}
            />
            <Button onClick={handleClick}>{certificate ? 'change' : 'upload'}</Button>
          </HeaderContainer>
          <SettingsContainer label="Tax certificate">
            {certFileError && <span className={s.error}>{certFileError}</span>}
            <TaxCertificate file={certificate} />
          </SettingsContainer>
        </div>
      </div>
    </Container>
  )
}

export default MspSettings
