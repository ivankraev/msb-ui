import React from 'react'
import BreadCrumb from '@common/PageHeader/components/BreadCrumb'
import s from './PageHeader.scss'

interface Props {
  label: string
  children?: React.ReactNode
}

const PageHeader = ({ label, children }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.headersHolder}>
        <BreadCrumb />
        <h1>{label}</h1>
      </div>
      <div className={s.buttonsHolder}>{children}</div>
    </div>
  )
}

export default PageHeader
