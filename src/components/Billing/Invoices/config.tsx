import React from 'react'
import { CellProps, Column } from 'react-table'
import DownloadIcon from '@msp/components/icons/DownloadIcon'
import ArrowDownIcon from '@msp/components/icons/ArrowDownIcon'
import s from '@msp/components/Billing/Invoices/Invoices.scss'

type Invoice = {
  id: number
  documentNumber: string
  status: string
  date: string
  amount: string
  type: string
  invoiceUrl: string
}

type CellComponent<T> = React.FC<CellProps<Invoice, T>>

const downloadHandler: CellComponent<Invoice['invoiceUrl']> = ({ value }) => (
  <DownloadIcon
    onClick={() => {
      console.log(value)
    }}
  />
)

const sortableHeader = () => (
  <div className={s.tableHeaderHolder}>
    <p>Document Number</p>
    <ArrowDownIcon />
  </div>
)

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

export const MOCK_DATA: Invoice[] = [
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
  {
    id: 1,
    documentNumber: '00123-0076',
    status: 'Posted',
    date: '2021-12-26',
    amount: '43.76',
    type: 'Debit Memo',
    invoiceUrl: 'fakeurl',
  },
]
