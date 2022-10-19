import React from 'react'
import { Column, useTable } from 'react-table'
import cx from 'classnames'
import Pagination from '@common/CustomTable/components/Pagination'
import s from './CustomTable.scss'

interface Props<T extends Record<string, unknown>> {
  data: T[]
  columns: readonly Column<T>[]
  styles?: React.CSSProperties
}

const CustomTable = <T extends Record<string, unknown>>({ columns, data, styles }: Props<T>) => {
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
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default CustomTable
