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
  disabled?: boolean
}

const Button: React.FC<Props> = ({
  contained = false,
  to = '',
  className,
  onClick,
  children,
  disabled = false,
}) => {
  const buttonClassName = cx(s.button, contained ? s.contained : s.empty, className, {
    [s.disabledContained]: disabled && contained,
    [s.disabled]: disabled && !contained,
  })
  if (to) {
    return (
      <Link to={to} className={buttonClassName} onClick={onClick}>
        {children}
      </Link>
    )
  }
  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
