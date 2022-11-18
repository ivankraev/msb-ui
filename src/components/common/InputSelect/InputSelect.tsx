import React, { LegacyRef, useRef, useState } from 'react'
import cx from 'classnames'
import { SelectOption } from '@msp/shared/interfaces/plans.interface'
import useClickOutside from '@msp/hooks/useClickOutside'
import variables from '@msp/theme/variables.scss'
import AngleDownIcon from '@msp/components/icons/AngleDownIcon'
import s from './InputSelect.scss'

interface Props<T> {
  options: T[]
  onChangeHandler: (option: T) => void
  value: T
  label: string
  styles?: React.CSSProperties
}

const InputSelect = ({ options, onChangeHandler, value, label, styles }: Props<SelectOption>) => {
  const [isOptionsOpen, setOptionsOpen] = useState(false)

  const toggleOptions = () => {
    setOptionsOpen(!isOptionsOpen)
  }

  const ignoredElement = useRef<HTMLDivElement | null>(null)

  const menuRef = useClickOutside(toggleOptions, isOptionsOpen, ignoredElement) as
    | LegacyRef<HTMLUListElement>
    | undefined

  return (
    <div className={cx(s.container, styles)}>
      <strong>{label}</strong>
      <div>
        <div onClick={toggleOptions} className={s.inputContainer} ref={ignoredElement}>
          <input
            data-testid="select"
            placeholder={value.title}
            type="text"
            readOnly
            aria-haspopup="listbox"
            aria-expanded={isOptionsOpen}
          />
          <div className={s.icon}>
            <AngleDownIcon color={variables.secondaryColor} />
          </div>
        </div>

        <ul
          className={cx(s.menu, { [s.hide]: !isOptionsOpen })}
          role="listbox"
          ref={menuRef}
          aria-activedescendant={value.title}
        >
          <li>Select</li>
          {options.map((option) => (
            <li
              onClick={() => {
                setOptionsOpen(false)
                if (option.value === value.value) return
                onChangeHandler(option)
              }}
              key={option.value}
              id={option.value}
              role="option"
              aria-selected={value.title === option.title}
              tabIndex={0}
            >
              <span> {option.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InputSelect
