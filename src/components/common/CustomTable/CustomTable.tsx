import React from 'react'
import cx from 'classnames'
import { Column, useTable } from 'react-table'
import { PaginationProps } from './types'
import Pagination from '@common/CustomTable/components/Pagination'
import s from './CustomTable.scss'
import LoadingSkeleton from './components/LoadingSkeleton'

interface Props<T extends Record<string, unknown>> {
  data: T[]
  columns: readonly Column<T>[]
  styles?: React.CSSProperties
  paginationProps: PaginationProps
  isLoading?: boolean
}

const CustomTable = <T extends Record<string, unknown>>({
  columns,
  data = [],
  styles,
  paginationProps,
  isLoading = false,
}: Props<T>) => {
  const tableInstance = useTable({ columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

  return (
    <div className={cx(s.container, styles)}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          <>
            {isLoading && <LoadingSkeleton />}
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </>
        </tbody>
      </table>
      <Pagination {...paginationProps} />
    </div>
  )
}

export default CustomTable
