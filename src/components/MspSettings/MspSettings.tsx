import React, { useRef } from 'react'
import { settingsActions } from '@msp/features/settings/settingsSlice'
import { useAppSelector } from '@msp/redux/hooks'
import TaxCertificate from '@msp/components/MspSettings/components/TaxCertificate'
import SettingsComponent from '@common/UserSettings/components/SettingsComponent'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import InnerContainer from '@common/UserSettings/components/Container'
import Container from '@common/Container'
import Button from '@common/Button'
import Logo from '@common/Logo'
import s from './MspSettings.scss'

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
      return changeCertificateFail({ message: TEXT_ON_WRONG_FORMAT })
    }

    // TODO: Need to submit the file here

    const payload = {
      name: fileUploaded.name,
      size: fileUploaded.size,
      downloadUrl: URL.createObjectURL(fileUploaded),
    }

    changeCertificateSuccess(payload)
    event.target.value = ''
  }

  return (
    <Container label="Msp Settings" styles={s.container}>
      <InnerContainer>
        <HeaderComponent label="Info">
          <Button>edit info</Button>
        </HeaderComponent>
        <SettingsComponent label="MSP name">
          <span>{mspName}</span>
        </SettingsComponent>
        <SettingsComponent label="MSP logo">
          <Logo className={s.logo} link={logo!} />
        </SettingsComponent>
        <hr />
        <HeaderComponent label="Other settings">
          <input
            hidden
            type="file"
            data-testid="file-uploader"
            ref={hiddenFileInput}
            onChange={handleChange}
            accept={CERT_ALLOWED_FORMATS.join(',')}
          />
          <Button onClick={handleClick}>{file ? 'change' : 'upload'}</Button>
        </HeaderComponent>
        <SettingsComponent label="Tax certificate">
          {error && <span className={s.error}>{error.message}</span>}
          <TaxCertificate />
        </SettingsComponent>
      </InnerContainer>
    </Container>
  )
}

export default MspSettings
