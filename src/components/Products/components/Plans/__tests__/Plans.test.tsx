import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CustomTable from '@common/CustomTable'
import MOCK_DATA from '@msp/mocks/plans.json'

import Plans from '../Plans'
import { Plan } from '../types'
import { COLUMNS } from '../config'
import { links } from '@msp/routes/links'
import { MemoryRouter } from 'react-router-dom'

const mockUseLocationValue = {
  pathname: links.products.plans.index,
  search: '',
  hash: '',
  state: null,
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => mockUseLocationValue),
}))

const mockedPlans: Plan[] = MOCK_DATA.data

afterEach(cleanup)

describe('Plans page', () => {
  it('Should consist of input, button, table svg elements', () => {
    const { container, queryByPlaceholderText } = render(<Plans />, { wrapper: MemoryRouter })
    expect(queryByPlaceholderText('Plan name')).not.toBeNull()
    expect(container.querySelector('button')).not.toBeNull()
    expect(container.querySelector('table')).not.toBeNull()
    expect(container.querySelector('svg')).not.toBeNull()
    expect(container.querySelector('select')).not.toBeNull()
    expect(container.querySelector('input')).not.toBeNull()
  })

  it('Render correct icon', async () => {
    render(<CustomTable columns={COLUMNS} data={mockedPlans} />)

    const trueIcons = screen.getAllByTestId('check')
    const falseIcons = screen.getAllByTestId('uncheck')

    trueIcons.forEach((trueIcon) => {
      expect(trueIcon.parentElement?.getAttribute('data-value')).toEqual('true')
    })
    falseIcons.forEach((falseIcon) => {
      expect(falseIcon.parentElement?.getAttribute('data-value')).toEqual('false')
    })
  })

  describe('Search input', () => {
    it('Should update plans according to search query', () => {
      const query = 'basic'
      const { queryByPlaceholderText, queryAllByTestId } = render(<Plans />, {
        wrapper: MemoryRouter,
      })
      const planInput = queryByPlaceholderText('Plan name')
      planInput && fireEvent.change(planInput, { target: { value: query } })
      const leftColumn = queryAllByTestId('left-column')
      leftColumn.forEach((item) => {
        expect(item.textContent?.toLowerCase()?.includes(query)).toBeTruthy()
      })
    })

    it('Should show all plans if no search query', () => {
      const { queryByPlaceholderText, queryAllByTestId } = render(<Plans />, {
        wrapper: MemoryRouter,
      })
      const planInput = queryByPlaceholderText('Plan name')

      planInput && fireEvent.change(planInput, { target: { value: '' } })

      const leftColumn = queryAllByTestId('left-column')
      expect(leftColumn).toHaveLength(5)
    })
  })

  describe('Selectors', () => {
    it('Should update plans according to sort select', () => {
      const { getAllByTestId, queryAllByTestId } = render(<Plans />, { wrapper: MemoryRouter })

      const select = getAllByTestId('select')[1]
      fireEvent.change(select, { target: { value: 'az' } })

      const leftColumnAZ = queryAllByTestId('left-column')
      expect(leftColumnAZ[0].textContent?.toLowerCase() === 'advanced')

      fireEvent.change(select, { target: { value: 'za' } })
      const leftColumnZA = queryAllByTestId('left-column')
      expect(leftColumnZA[0].textContent?.toLowerCase() === 'small businesses standard')
    })

    it('Should update plans according to filter select', async () => {
      const { getAllByTestId, queryAllByRole, queryByPlaceholderText } = render(<Plans />, {
        wrapper: MemoryRouter,
      })
      const query = 'cmd'
      const select = getAllByTestId('select')[0]
      const planInput = queryByPlaceholderText('Plan name')
      userEvent.selectOptions(select, 'products')
      planInput && userEvent.type(planInput, query)
      const columnHeaders = queryAllByRole('columnheader')
      expect(columnHeaders).toHaveLength(3)
    })

    it('Should show all plans if no search query', () => {
      const { queryByPlaceholderText, queryAllByRole, getAllByTestId } = render(<Plans />, {
        wrapper: MemoryRouter,
      })
      const planInput = queryByPlaceholderText('Plan name')
      const select = getAllByTestId('select')[0]
      userEvent.selectOptions(select, 'products')
      planInput && userEvent.click(planInput)
      const columnHeaders = queryAllByRole('columnheader')
      expect(columnHeaders).toHaveLength(8)
    })
  })
})
