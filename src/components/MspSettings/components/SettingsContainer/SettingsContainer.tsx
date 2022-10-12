import React from 'react'
import s from './SettingsContainer.scss'

interface Props {
  label: string
  children: React.ReactNode
}

const SettingsContainer = ({ label, children }: Props) => {
  return (
    <div className={s.container}>
      <strong>{label}</strong>
      {children}
    </div>
  )
}

export default SettingsContainer
