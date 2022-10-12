import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import s from './Button.scss'

interface Props {
  contained?: boolean
  className?: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ contained = false, to = '', className, onClick, children }) => {
  const buttonClassName = cx(s.button, contained ? s.contained : s.empty, className)
  if (to) {
    return (
      <Link to={to} className={buttonClassName}>
        {children}
      </Link>
    )
  }
  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
