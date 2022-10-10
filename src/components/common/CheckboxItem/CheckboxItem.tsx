import React from 'react'
import CheckboxIcon from '@msp/components/icons/CheckboxSelectedIcon'
import s from './CheckboxItem.scss'

interface Props {
  label: string
}

const CheckboxItem = ({ label }: Props) => {
  return (
    <span className={s.container}>
      <CheckboxIcon />
      <p>{label}</p>
    </span>
  )
}

export default CheckboxItem
