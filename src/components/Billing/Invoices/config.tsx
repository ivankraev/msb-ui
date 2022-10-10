import React, { useEffect, useState } from 'react'
import { CellProps, Column } from 'react-table'
import { Invoice } from './types'
import DownloadIcon from '@msp/components/icons/DownloadIcon'
import ArrowDownIcon from '@msp/components/icons/ArrowDownIcon'
import s from '@msp/components/Billing/Invoices/Invoices.scss'

type CellComponent<T> = React.FC<CellProps<Invoice, T>>

const downloadHandler: CellComponent<Invoice['invoiceUrl']> = ({ value }) => (
  <DownloadIcon
    onClick={() => {
      console.log(value)
    }}
  />
)

const sortableHeader = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const resizeHandler = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [window.innerWidth])

  return (
    <div className={s.tableHeaderHolder}>
      <p>{screenWidth > 1850 ? 'Document Number' : 'Doc'}</p>
      <ArrowDownIcon />
    </div>
  )
}

export const COLUMNS: Column<Invoice>[] = [
  {
    Header: sortableHeader,
    accessor: 'documentNumber',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    accessor: 'invoiceUrl',
    Cell: downloadHandler,
  },
]
