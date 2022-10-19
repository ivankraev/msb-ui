/* eslint-disable prettier/prettier */
import React, { useMemo } from 'react'
import Selector from '.'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

const FilterSelector = (props: Props) => {
  const sortOptions = useMemo(
    () => [
      { value: 'plans', text: 'Filter by plans' },
      { value: 'products', text: 'Filter by products' },
    ],
    [],
  )
  return <Selector options={sortOptions} {...props} defaultValue={'plans'} />
}

export default FilterSelector
