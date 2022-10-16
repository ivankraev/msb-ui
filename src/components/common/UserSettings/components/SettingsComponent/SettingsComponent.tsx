import React from 'react'
import s from './SettingsComponent.scss'

interface Props {
  label: string
  children: React.ReactNode
}

const SettingsComponent = ({ label, children }: Props) => {
  return (
    <div className={s.container}>
      <strong>{label}</strong>
      {children}
    </div>
  )
}

export default SettingsComponent
