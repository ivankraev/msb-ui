import React from 'react'
import s from './Container.scss'
import PageHeader from '@common/PageHeader'

interface Props {
  label: string
  children: React.ReactNode
  headerButtons?: React.ReactNode
}

const Container = ({ label, children, headerButtons }: Props) => {
  return (
    <div className={s.container}>
      <PageHeader label={label}>{headerButtons}</PageHeader>
      <div className={s.children}>{children}</div>
    </div>
  )
}

export default Container
