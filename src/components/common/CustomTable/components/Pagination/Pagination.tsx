import React from 'react'
import AngleRightIcon from '@msp/components/icons/AngleRightIcon'
import AngleLeftIcon from '@msp/components/icons/AngleLeftIcon'
import variables from '@msp/theme/variables.scss'
import s from './Pagination.scss'

const Pagination = () => {
  return (
    <div className={s.container}>
      <div>
        <p>Results per page: 15</p>
        <p>1-15 of 30</p>
        <AngleLeftIcon color={variables.secondaryColor} />
        <AngleRightIcon color={variables.secondaryColor} />
      </div>
    </div>
  )
}

export default Pagination
