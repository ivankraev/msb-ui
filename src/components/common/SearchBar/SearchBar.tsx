import React from 'react'
import s from './SearchBar.scss'

interface Props {
  placeholder: string
}

const SearchBar = ({ placeholder }: Props) => {
  return <input placeholder={placeholder} className={s.container} type="search" />
}

export default SearchBar
