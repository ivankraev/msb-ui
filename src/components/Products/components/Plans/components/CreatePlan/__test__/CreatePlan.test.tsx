import React from 'react'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'
import { renderWithProviders } from '@msp/utils/test-utils'
import CreatePlan from '@msp/components/Products/components/Plans/components/CreatePlan/CreatePlan'

const mockedNavigator = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}))

jest.mock('../config', () => ({
  ...jest.requireActual('../config'),
  useInitialProductsValues: jest.fn(() => ({
    initialValues: {
      plan: '',
      products: [
        {
          id: '99c7b00c-9a84-4616-a9c0-3cf062eca5d0',
          package: { value: 'dnsEssentials', title: 'DNS Essentials' },
          policy: { value: 'defaultPolicy', title: 'Default Policy' },
          seats: 0,
          selected: false,
          title: 'Umbrella',
          value: 'umbrella',
        },
      ],
    },
  })),
}))

describe('New Plan page', () => {
  it('Should fill the form and display correct data on the review page', async () => {
    const { getByText, getByRole } = renderWithProviders(<CreatePlan />)

    await waitFor(() => expect(getByText(/NEXT/i).closest('button')).toBeDisabled())
    const umbrellaContainer = getByText('Umbrella').closest('div')

    userEvent.click(umbrellaContainer!.querySelectorAll('input')[0])
    userEvent.click(umbrellaContainer!.querySelectorAll('li')[2])
    expect(umbrellaContainer!.querySelectorAll('li')[2]).toHaveAttribute('aria-selected', 'true')

    const seatsInput = umbrellaContainer!.querySelectorAll('input')[3]
    userEvent.clear(seatsInput)
    userEvent.type(seatsInput, '20')

    expect(seatsInput).toHaveDisplayValue('20')

    const planNameInput = getByText(/Plan name/)
      .closest('span')!
      .querySelector('input') as HTMLInputElement

    userEvent.type(planNameInput, 'test plan')

    expect(planNameInput).toHaveDisplayValue('test plan')

    await waitFor(() => expect(getByText(/NEXT/i).closest('button')).toBeEnabled())

    userEvent.click(getByText(/NEXT/i))
    await waitFor(() => getByRole('table'))
    getByText(/Save plan/i)
    getByText(/20/i)
    getByText(/test plan/i)
    getByText(/provisioned products/i)
    userEvent.click(getByText(/PREVIOUS/i))
    getByText(/NEXT/i)
  })

  it('Should go back to plans without confirming dialog if the form is not dirty', () => {
    const { getByText, getAllByRole } = renderWithProviders(<CreatePlan />)
    userEvent.click(getAllByRole('checkbox')[0])
    userEvent.click(getAllByRole('checkbox')[0])
    userEvent.click(getByText('cancel'))
    expect(mockedNavigator).toHaveBeenCalledTimes(1)
  })

  it('Should open a dialog if the form is dirty', () => {
    mockedNavigator.mockClear()
    const { getByText, getAllByRole } = renderWithProviders(<CreatePlan />)
    userEvent.click(getAllByRole('checkbox')[0])
    userEvent.click(getByText('cancel'))
    expect(mockedNavigator).toHaveBeenCalledTimes(0)
    userEvent.click(getByText('confirm'))
    expect(mockedNavigator).toHaveBeenCalledTimes(1)
  })
})
