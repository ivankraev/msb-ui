import React from 'react'
import s from './ButtonsContainer.scss'

interface Props {
  children: React.ReactNode
}

const ButtonsContainer = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>
}

export default ButtonsContainer
