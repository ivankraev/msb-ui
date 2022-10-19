import React from 'react'
import cx from 'classnames'
import s from './ReadOnlyInput.scss'

interface Props {
  label: string
  styles?: React.CSSProperties
}

const ReadOnlyInput = ({ label, styles }: Props) => {
  return (
    <span className={cx(s.container, styles)}>
      <input id="1" type="text" placeholder={label} readOnly />
    </span>
  )
}

export default ReadOnlyInput
