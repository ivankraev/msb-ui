import React from 'react'
import s from './InputContainer.scss'

interface Props {
  children: React.ReactNode
  label: string
}

const InputContainer = ({ children, label }: Props) => {
  return (
    <div className={s.container}>
      <strong>{label}</strong>
      {children}
    </div>
  )
}

export default InputContainer
