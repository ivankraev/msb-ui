import React from 'react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@msp/utils/test-utils'
import { preloadedState } from './preloadedState'
import New from '@msp/components/Products/components/Plans/components/New/New'

const mockedNavigator = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}))

describe('New Plan page', () => {
  it('Should fill the form and display correct data on the review page', () => {
    const { getAllByRole, getByText, getAllByTestId } = renderWithProviders(<New />, {
      preloadedState,
    })
    userEvent.click(getAllByRole('checkbox')[0])
    userEvent.click(getAllByTestId('select')[0])
    userEvent.click(getByText('SIG Essentials'))
    userEvent.click(getAllByTestId('select')[1])
    userEvent.click(getByText('Default Policy 1'))
    userEvent.type(getAllByTestId('simple-input')[1], 'Test plan')
    userEvent.click(getByText('next'))

    expect(getByText('Provisioned products')).toBeInTheDocument()
    expect(getByText('SIG Essentials')).toBeInTheDocument()
    expect(getByText('Test plan')).toBeInTheDocument()
    expect(getByText('Default Policy 1')).toBeInTheDocument()
  })

  it('Should go back to plans list if cancel button is clicked', () => {
    const { getByText } = renderWithProviders(<New />, {
      preloadedState,
    })
    userEvent.click(getByText('Cancel'))
    expect(mockedNavigator).toHaveBeenCalledTimes(1)
  })
})
