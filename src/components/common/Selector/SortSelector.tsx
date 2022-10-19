/* eslint-disable prettier/prettier */
import React, { useMemo } from 'react'
import Selector from '.'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

const SortSelector = (props: Props) => {
  const sortOptions = useMemo(
    () => [
      { value: 'az', text: 'Sort by Name, A to Z' },
      { value: 'za', text: 'Sort by Name, Z to A' },
    ],
    [],
  )
  return <Selector options={sortOptions} {...props} />
}

export default SortSelector
