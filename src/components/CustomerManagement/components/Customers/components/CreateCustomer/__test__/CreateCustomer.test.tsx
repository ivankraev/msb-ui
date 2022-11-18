import React from 'react'
import CreateCustomer from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/CreateCustomer'
import { renderWithProviders } from '@msp/utils/test-utils'

jest.mock('@msp/features/api/productApiSlice', () => ({
  useGetProductsQuery: jest.fn(() => ({
    data: [
      {
        consoleUrl: 'fakeConsoleUrl',
        createdAt: '2022-10-31T11:51:07.917Z',
        id: '99c7b00c-9a84-4616-a9c0-3cf062eca5d0',
        logoUrl: 'https://msp-hub-public-bucket.s3.eu-central-1.amazonaws.com/public/Umbrella.png',
        name: 'Umbrella',
        shortName: null,
        totalCustomers: 138,
        updatedAt: '2022-10-31T11:51:07.917Z',
        value: 'umbrella',
      },
    ],
  })),
}))

describe('Customers component', () => {
  it('Should render the content if the pathname matches', () => {
    const { container } = renderWithProviders(<CreateCustomer />)
    expect(container.querySelector('h1')?.textContent).toBe('New customer')
  })
})
