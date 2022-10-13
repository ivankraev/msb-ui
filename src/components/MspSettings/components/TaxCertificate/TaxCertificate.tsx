import React, { useEffect } from 'react'
import s from './TaxCertificate.scss'
import TaxCertificateIcon from '@msp/components/icons/TaxCertificateIcon'
import DownloadIconOutlined from '@msp/components/icons/DownloadIconOutlined'
import { useAppSelector } from '@msp/redux/hooks'

const TaxCertificate = () => {
  const { file } = useAppSelector((state) => state.settings.certificate)

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file.downloadUrl)
      }
    }
  }, [])

  if (!file) return <span>No file uploaded</span>

  return (
    <div className={s.container}>
      <div className={s.iconHolder}>
        <TaxCertificateIcon />
      </div>
      <div className={s.certInfoHolder}>
        <span>{file.name}</span>
        <span>{(file.size / 1024).toFixed()}kb</span>
      </div>
      <DownloadIconOutlined link={file.downloadUrl} />
    </div>
  )
}

export default TaxCertificate
