import React from 'react'
import FileIcon from '@msp/components/icons/FileIcon'
import DownloadIconOutlined from '@msp/components/icons/DownloadIconOutlined'
import { formatSize } from '@msp/utils/size-format'

import s from './UploadedFile.scss'

const UploadedFile = ({ file }: { file: File }) => {
  return (
    <div className={s.container}>
      <div className={s.iconHolder}>
        <FileIcon />
      </div>
      <div className={s.fileInfoContainer}>
        <span>{file.name}</span>
        <span>{formatSize(file.size)}</span>
      </div>
      <DownloadIconOutlined link={URL.createObjectURL(file)} />
    </div>
  )
}

export default UploadedFile
