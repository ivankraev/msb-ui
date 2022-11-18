import React from 'react'
import { links } from '@msp/routes/links'
import { fireEvent, waitFor } from '@testing-library/react'
import { renderWithProviders } from '@msp/utils/test-utils'
import { useGetPlansQuery, useDeletePlanMutation } from '@msp/features/api/planApiSlice'
import Plans from '../Plans'

const mockUseLocationValue = {
  pathname: links.products.plans.index,
  search: '',
  hash: '',
  state: null,
}

const mockSuccessResponse = {
  data: {
    data: [
      {
        id: '13c21460-d8ba-4bd3-aa42-d0e94482bb44',
        name: 'Test Plan',
        options: [],
      },
    ],
    resultsCount: 1,
  },
  isFetching: false,
}

const mockBlankResponse = {
  data: {
    data: [],
    resultsCount: 0,
  },
  isFetching: false,
}

const mockDeleteMutation = () => {
  const deletePlan = jest.fn()
  const error = 'Something went wrong'
  const data = null
  return [deletePlan, { error, data }]
}
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => mockUseLocationValue),
}))

jest.mock('@msp/features/api/planApiSlice', () => ({
  useGetPlansQuery: jest.fn(),
  useDeletePlanMutation: jest.fn(),
}))

describe('Plans page', () => {
  beforeEach(() => {
    useGetPlansQuery.mockReset()
  })

  it('Should render plans from query', () => {
    useGetPlansQuery.mockImplementation(() => mockSuccessResponse)
    useDeletePlanMutation.mockImplementation(() => mockDeleteMutation())
    const { container, getByRole } = renderWithProviders(<Plans />)
    expect(container.querySelector('button')).toBeInTheDocument()
    expect(getByRole('table')).toBeInTheDocument()
  })

  it('Should render empty state if no data', () => {
    useGetPlansQuery.mockImplementation(() => mockBlankResponse)
    const { getByText, getAllByText } = renderWithProviders(<Plans />)
    expect(getAllByText('Create new plan').length).toBe(1)
    expect(getByText("You don't have any plans yet")).toBeInTheDocument()
  })

  it('Should show loading if fetching', () => {
    useGetPlansQuery.mockImplementation(() => ({ ...mockBlankResponse, isFetching: true }))
    const { getByTestId } = renderWithProviders(<Plans />)
    expect(getByTestId('loading-spinner')).toBeInTheDocument()
  })
  it('Input should be focused after typing started', async () => {
    useGetPlansQuery.mockImplementation(() => ({ ...mockSuccessResponse, isFetching: false }))
    const { getByRole } = renderWithProviders(<Plans />)
    const input = getByRole('searchbox')
    fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
    waitFor(() => expect(getByRole('searchbox')).toHaveFocus())
  })
})
