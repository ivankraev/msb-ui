import React from 'react'
import SearchIcon from '@msp/components/icons/SearchIcon'
import cx from 'classnames'
import s from './SearchBar.scss'

interface Props {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string
  styles?: React.CSSProperties
}

const SearchBar = ({ placeholder, onChange, defaultValue, styles }: Props) => {
  return (
    <div className={cx(s.container, styles)}>
      <div className={s.icon}>
        <SearchIcon />
      </div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className={s.container}
        type="search"
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default SearchBar
