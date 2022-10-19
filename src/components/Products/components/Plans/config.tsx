import React from 'react'
import { CellProps, Column } from 'react-table'
import { Plan } from './types'
import ArrowDownIcon from '@msp/components/icons/ArrowDownIcon'
import CheckIcon from '@msp/components/icons/CheckIcon'
import UncheckIcon from '@msp/components/icons/UncheckIcon'
import s from './Plans.scss'

const sortableHeader = () => {
  return (
    <div className={s.tableHeaderHolder}>
      <p>Plan</p>
      <ArrowDownIcon />
    </div>
  )
}

const onEditHandler = (id: number) => {
  console.log(id, 'id')
}

export const COLUMNS: Column<Plan>[] = [
  {
    Header: sortableHeader,
    accessor: 'plan',
    Cell: ({ value }) => {
      return (
        <div className={s.leftColumn} data-testid="left-column">
          {value}
        </div>
      )
    },
  },
  {
    Header: 'Umbrella',
    accessor: 'umbrella',
    Cell: ({ value }) => {
      if (value) {
        return (
          <span data-value={value}>
            <CheckIcon />
          </span>
        )
      }
      return (
        <span data-value={value}>
          <UncheckIcon />
        </span>
      )
    },
  },
  {
    Header: 'Secure Endpoints',
    accessor: 'secure endpoints',
    Cell: ({ value }) => {
      if (value) {
        return (
          <span data-value={value}>
            <CheckIcon />
          </span>
        )
      }
      return (
        <span data-value={value}>
          <UncheckIcon />
        </span>
      )
    },
  },
  {
    Header: 'CMD',
    accessor: 'cmd',
    Cell: ({ value }) => {
      if (value) {
        return (
          <span data-value={value}>
            <CheckIcon />
          </span>
        )
      }
      return (
        <span data-value={value}>
          <UncheckIcon />
        </span>
      )
    },
  },
  {
    Header: 'DUO',
    accessor: 'duo',
    Cell: ({ value }) => {
      if (value) {
        return (
          <span data-value={value}>
            <CheckIcon />
          </span>
        )
      }
      return (
        <span data-value={value}>
          <UncheckIcon />
        </span>
      )
    },
  },
  {
    Header: 'SecureX',
    accessor: 'secureX',
    Cell: ({ value }) => {
      if (value) {
        return (
          <span data-value={value}>
            <CheckIcon />
          </span>
        )
      }
      return (
        <span data-value={value}>
          <UncheckIcon />
        </span>
      )
    },
  },
  {
    Header: 'Subscribers',
    accessor: 'subscribers',
  },
  {
    Header: '',
    id: 'edit',
    Cell: ({ cell }: CellProps<Plan>) => {
      return (
        <div className={s.dotColumnContainer}>
          <button className={s.dotsButton} onClick={() => onEditHandler(cell.row.original.id)}>
            ...
          </button>
        </div>
      )
    },
  },
]
