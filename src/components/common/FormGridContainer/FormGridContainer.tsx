import React from 'react'
import s from './FormGridContainer.scss'

interface Props {
  children: React.ReactNode
}

const FormGridContainer = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>
}

export default FormGridContainer
