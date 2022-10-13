import React from 'react'
import s from './TaxCertificate.scss'
import TaxCertificateIcon from '@msp/components/icons/TaxCertificateIcon'
import DownloadIconOutlined from '@msp/components/icons/DownloadIconOutlined'

interface Props {
  file: File | null
}

interface MyOjb extends File {
  downloadUrl: string
}

const TaxCertificate = ({ file }: Props) => {
  if (!file) return <span>No certificate uploaded</span>

  const handler = {
    get(obj: MyOjb, prop: keyof File) {
      obj.downloadUrl = URL.createObjectURL(file)

      if (prop === 'name' && obj[prop].length > 20) {
        return obj[prop].slice(0, 20).concat('...')
      }

      return obj[prop]
    },
  }

  const certProxy = new Proxy(file as MyOjb, handler)

  return (
    <div className={s.container}>
      <div className={s.iconHolder}>
        <TaxCertificateIcon />
      </div>
      <div className={s.certInfoHolder}>
        <span>{certProxy.name}</span>
        <span>{certProxy.size}</span>
      </div>

      <DownloadIconOutlined link={certProxy.downloadUrl} />
    </div>
  )
}

export default TaxCertificate
