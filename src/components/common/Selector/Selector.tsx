import React from 'react'
import cx from 'classnames'
import s from './Selector.scss'
import { optionType } from './types'

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
  options: optionType[]
}

const Selector = ({ onChange, className, options }: Props) => {
  const selectClassName = cx(s.container, className)
  return (
    <select className={selectClassName} onChange={onChange} data-testid="select">
      {options.map((o) => {
        return (
          <option value={o.value} disabled={o.disabled} key={o.value} data-testid="select-option">
            {o.text}
          </option>
        )
      })}
    </select>
  )
}

export default Selector
