import React, { useRef } from 'react'
import { settingsActions } from '@msp/features/settings/settingsSlice'
import { useAppSelector } from '@msp/redux/hooks'
import Container from '@common/Container'
import Button from '@common/Button'
import TaxCertificate from '@msp/components/MspSettings/components/TaxCertificate'
import HeaderContainer from '@msp/components/MspSettings/components/HeaderContainer'
import SettingsContainer from '@msp/components/MspSettings/components/SettingsContainer'
import s from './MspSettings.scss'
import Logo from '@common/Logo'

const CERT_ALLOWED_FORMATS = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const TEXT_ON_WRONG_FORMAT = `File format not allowed! Allowed types are ${CERT_ALLOWED_FORMATS.join(
  ', ',
)}`

const MspSettings = () => {
  const { changeCertificateSuccess, changeCertificateFail } = settingsActions()
  const {
    certificate: { file, error },
    logo,
    mspName,
  } = useAppSelector((state) => state.settings)

  const hiddenFileInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    hiddenFileInput.current!.click()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const fileUploaded = event.target.files[0]
    if (!CERT_ALLOWED_FORMATS.includes(fileUploaded?.type)) {
      changeCertificateFail(TEXT_ON_WRONG_FORMAT)
      return
    }

    changeCertificateSuccess(fileUploaded)
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
            <span>{mspName}</span>
          </SettingsContainer>
          <SettingsContainer label="MSP logo">
            <Logo className={s.logo} link={logo!} />
          </SettingsContainer>
          <hr />
          <HeaderContainer label="Other settings">
            <input
              hidden
              type="file"
              data-testid="file-uploader"
              ref={hiddenFileInput}
              onChange={handleChange}
              accept={CERT_ALLOWED_FORMATS.join(',')}
            />
            <Button onClick={handleClick}>{file ? 'change' : 'upload'}</Button>
          </HeaderContainer>
          <SettingsContainer label="Tax certificate">
            {error && <span className={s.error}>{error}</span>}
            <TaxCertificate />
          </SettingsContainer>
        </div>
      </div>
    </Container>
  )
}

export default MspSettings
