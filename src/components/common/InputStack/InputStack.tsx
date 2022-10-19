import React from 'react'
import s from './InputStack.scss'

interface Props {
  children: React.ReactNode
  label: string
}

const InputStack = ({ children, label }: Props) => {
  return (
    <div className={s.container}>
      <strong>{label}</strong>
      {children}
    </div>
  )
}

export default InputStack
