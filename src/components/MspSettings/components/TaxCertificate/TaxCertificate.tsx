import React from 'react'
import s from './TaxCertificate.scss'
import TaxCertificateIcon from '@msp/components/icons/TaxCertificateIcon'
import DownloadIconOutlined from '@msp/components/icons/DownloadIconOutlined'

const TaxCertificate = () => {
  return (
    <div className={s.container}>
      <div className={s.iconHolder}>
        <TaxCertificateIcon />
      </div>
      <div className={s.certInfoHolder}>
        <span>Tax Cert.pdf</span>
        <span>13kb.</span>
      </div>
      <DownloadIconOutlined />
    </div>
  )
}

export default TaxCertificate
