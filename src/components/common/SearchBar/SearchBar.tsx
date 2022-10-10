import React from 'react'
import s from './SearchBar.scss'

interface Props {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ placeholder, onChange }: Props) => {
  return (
    <input onChange={onChange} placeholder={placeholder} className={s.container} type="search" />
  )
}

export default SearchBar
