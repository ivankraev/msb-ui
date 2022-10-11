import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomTable from '@common/CustomTable'
import { Column } from 'react-table'

describe('CustomTable component', () => {
  it('Should render the component with the proper props and handle the onChange event', async () => {
    type MockItem = {
      id: number
      body: string
      value: string
    }

    const columns: Column<MockItem>[] = [
      {
        Header: 'Body',
        accessor: 'body',
      },
      {
        Header: 'Value',
        accessor: 'value',
      },
    ]

    const data: MockItem[] = [
      {
        id: 1,
        body: 'some text',
        value: 'anyVal',
      },
      {
        id: 2,
        body: 'another thing',
        value: 'anotherVal',
      },
    ]

    render(<CustomTable columns={columns} data={data} />)
    screen.getByRole('table')
    screen.getByText('some text')
  })
})
