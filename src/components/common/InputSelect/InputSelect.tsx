import React, { LegacyRef, useRef, useState } from 'react'
import cx from 'classnames'
import useClickOutside from '@msp/hooks/useClickOutside'
import { SelectOption } from '@msp/shared/interfaces/plans.interface'
import s from './InputSelect.scss'

interface Props<T> {
  options: T[]
  onChangeHandler: (option: T) => void
  value: T
  label: string
}

const InputSelect = ({ options, onChangeHandler, value, label }: Props<SelectOption>) => {
  const [isOptionsOpen, setOptionsOpen] = useState(false)

  const toggleOptions = () => {
    setOptionsOpen(!isOptionsOpen)
  }

  const ignoredElement = useRef<HTMLInputElement | null>(null)

  const menuRef = useClickOutside(toggleOptions, isOptionsOpen, ignoredElement) as
    | LegacyRef<HTMLUListElement>
    | undefined

  return (
    <div className={s.container}>
      <strong>{label}</strong>
      <div className={s.innerContainer}>
        <input
          data-testid="select"
          placeholder={value.title}
          onClick={toggleOptions}
          ref={ignoredElement}
          type="text"
          readOnly
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
        />

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

export default React.memo(InputSelect)
