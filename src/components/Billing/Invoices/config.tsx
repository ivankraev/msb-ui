import React, { useEffect, useState } from 'react'
import { CellProps, Column } from 'react-table'
import { Invoice } from './types'
import DownloadIcon from '@msp/components/icons/DownloadIcon'
import ArrowDownIcon from '@msp/components/icons/ArrowDownIcon'
import ClockIcon from '@msp/components/icons/Calendar'
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

export const periods = [
  { label: 'This Month', value: 'thisMonth', icon: ClockIcon },
  { label: 'Previous Month', value: 'previousMonth', icon: ClockIcon },
  { label: 'Three Months', value: 'threeMonths', icon: ClockIcon },
  { label: 'Six Months', value: 'sixMonths', icon: ClockIcon },
  { label: 'Custom Period', value: 'customPeriod', icon: ClockIcon },
]

export const productItems = [
  { label: 'Umbrella', value: 'umbrella' },
  { label: 'Secure Endpoints', value: 'secureEndpoints' },
  { label: 'DUO', value: 'duo' },
  { label: 'Cloud Mailbox Defense', value: 'cloudMailboxDefense' },
  { label: 'SecureX', value: 'secureX' },
]

export const CITIES = [
  { label: 'Albuquerque', value: 'albuquerque' },
  { label: 'Austin', value: 'austin' },
  { label: 'Baltimore', value: 'baltimore' },
  { label: 'Las Vegas', value: 'lasVegas' },
  { label: 'New Orlens', value: 'newOrleans' },
  { label: 'Okhlahoma City', value: 'OkhlahomaCity' },
  { label: 'Sacremento', value: 'sacremento' },
  { label: 'San Antonio', value: 'sanAntonio' },
  { label: 'San Diego', value: 'sanDiego' },
  { label: 'Alabama', value: 'alabama' },
  { label: 'Texas', value: 'texas' },
  { label: 'Phoenix', value: 'phoenix' },
  { label: 'Philadelphia', value: 'philadelphia' },
  { label: 'Dallas', value: 'dallas' },
  { label: 'San Jose', value: 'sanJose' },
]
