import React from 'react'
import { Column } from 'react-table'
import { Plan } from './types'
import ArrowDownIcon from '@msp/components/icons/ArrowDownIcon'
import CheckIcon from '@msp/components/icons/CheckIcon'
import UncheckIcon from '@msp/components/icons/UncheckIcon'
import s from './Plans.scss'
import ActionsComponent from './components/ActionsComponent'

export const filterOptions = [
  { title: 'Filter by name', value: 'name' },
  { title: 'Filter by products', value: 'product' },
]

export const sortOptions = [
  { title: 'Show latest', value: 'latest' },
  { title: 'Sort by Name, A to Z', value: 'asc' },
  { title: 'Sort by Name, Z to A', value: 'desc' },
]

const sortableHeader = () => {
  return (
    <div className={s.tableHeaderHolder}>
      <p>Plan</p>
      <ArrowDownIcon />
    </div>
  )
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
    Header: 'Actions',
    id: 'edit',
    Cell: ActionsComponent,
  },
]
