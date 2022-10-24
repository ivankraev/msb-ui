import React from 'react'

import s from './Card.scss'

interface Props {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className={s.container}>{children}</div>
}

export default Card
