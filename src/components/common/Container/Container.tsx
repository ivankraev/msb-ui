import React from 'react'
import PageHeader from '@common/PageHeader'
import cx from 'classnames'
import s from './Container.scss'

interface Props {
  label: string
  children: React.ReactNode
  headerButtons?: React.ReactNode
  styles?: React.CSSProperties
}

const Container = ({ label = 'default', children, headerButtons, styles }: Props) => {
  return (
    <div className={cx(s.container, styles)}>
      <PageHeader label={label}>{headerButtons}</PageHeader>
      <div className={s.children}>{children}</div>
    </div>
  )
}

export default Container
