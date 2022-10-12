import React from 'react'
import cx from 'classnames'

import s from './Logo.scss'

interface Props {
  className?: string
  link: string
}

const Logo: React.FC<Props> = ({ className, link }) => {
  return <img className={cx(s.logo, className)} src={link} alt="logo" />
}

export default Logo
