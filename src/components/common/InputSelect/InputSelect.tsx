import React, { LegacyRef, useRef, useState } from 'react'
import cx from 'classnames'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import useClickOutside from '@msp/hooks/useClickOutside'
import { SelectOption } from '@msp/shared/interfaces/select-option.interface'
import s from './InputSelect.scss'

interface Props<T> {
  optionsList: T[]
  setSelectedOption: ActionCreatorWithPayload<T> | ((option: T) => void)
  selectedOption: T
}

const InputSelect = ({ optionsList, setSelectedOption, selectedOption }: Props<SelectOption>) => {
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
      <div className={s.innerContainer}>
        <input
          data-testid="select"
          placeholder={selectedOption.title}
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
          aria-activedescendant={selectedOption.title}
        >
          <li>Select</li>
          {optionsList.map((option) => (
            <li
              onClick={() => {
                setOptionsOpen(false)
                if (option.value === selectedOption.value) return
                setSelectedOption(option)
              }}
              key={option.title}
              id={option.title}
              role="option"
              aria-selected={selectedOption.title === option.title}
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
