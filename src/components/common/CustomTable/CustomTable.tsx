import React from 'react'
import { Column, useTable } from 'react-table'
import classNames from 'classnames'
import Pagination from '@common/CustomTable/components/Pagination'
import s from './CustomTable.scss'

interface Props<T extends Record<string, unknown>> {
  data: T[]
  columns: readonly Column<T>[]
  styles?: { container: React.CSSProperties }
}

const CustomTable = <T extends Record<string, unknown>>({ columns, data, styles }: Props<T>) => {
  const tableInstance = useTable({ columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

  return (
    <div className={classNames(s.container, styles?.container)}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            // eslint-disable-next-line
            prepareRow(row)
            return (
              // eslint-disable-next-line
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  // eslint-disable-next-line
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
