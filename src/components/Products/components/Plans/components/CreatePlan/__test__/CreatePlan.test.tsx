import React from 'react'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'
import { renderWithProviders } from '@msp/utils/test-utils'
import { preloadedState } from './preloadedState'
import CreatePlan from '@msp/components/Products/components/Plans/components/CreatePlan/CreatePlan'

const mockedNavigator = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}))

describe('New Plan page', () => {
  it('Should fill the form and display correct data on the review page', async () => {
    const { getAllByRole, getByText, getAllByTestId, getByRole } = renderWithProviders(
      <CreatePlan />,
      {
        preloadedState,
      },
    )
    userEvent.click(getAllByRole('checkbox')[0])
    userEvent.click(getAllByTestId('select')[0])
    userEvent.click(getByText('SIG Essentials'))
    userEvent.click(getAllByTestId('select')[1])
    userEvent.click(getByText('Default Policy 1'))
    userEvent.type(getAllByTestId('simple-input')[0], '20')
    userEvent.type(getAllByTestId('simple-input')[1], 'Test plan')
    expect(getByText(/NEXT/i).closest('button')).toBeDisabled()
    await waitFor(() => expect(getByText(/NEXT/i).closest('button')).toBeEnabled())
    userEvent.click(getByText(/NEXT/i))
    getByRole('table')
    getByText(/Save plan/i)
    getByText(/Default Policy 1/i)
    getByText(/SIG Essentials/i)
    getByText(/20/i)
  })

  it('Should go back to plans list if cancel button is clicked', () => {
    const { getByText, getAllByRole } = renderWithProviders(<CreatePlan />, {
      preloadedState,
    })
    userEvent.click(getAllByRole('checkbox')[0])
    userEvent.click(getByText('Cancel'))
    userEvent.click(getByText('Confirm'))
    expect(mockedNavigator).toHaveBeenCalledTimes(1)
  })
})
