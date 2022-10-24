import React from 'react'
import cx from 'classnames'
import s from './CheckboxItem.scss'

interface Props {
  label: string
  checked: boolean
  onClick: () => void
  styles?: React.CSSProperties
  strong?: boolean
}

const CheckboxItem = ({ label, checked = true, onClick, styles, strong = false }: Props) => {
  return (
    <span className={cx(s.container, styles)}>
      <input id="1" type="checkbox" onClick={onClick} className={cx({ [s.checked]: checked })} />
      {strong ? <strong onClick={onClick}>{label}</strong> : <span>{label}</span>}
    </span>
  )
}

export default CheckboxItem
