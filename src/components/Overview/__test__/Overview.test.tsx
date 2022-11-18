import React from 'react'
import { renderWithProviders } from '@msp/utils/test-utils'
import BigCard from '../components/BigCard'
import SmallCard from '../components/SmallCard'
import Overview from '../Overview'

jest.mock('@msp/features/api/productApiSLice', () => ({
  useGetProductsQuery: jest.fn(),
  useGetTotalCustomersQuery: jest.fn(),
}))

import { useGetProductsQuery, useGetTotalCustomersQuery } from '@msp/features/api/productApiSlice'

describe('Overview page', () => {
  beforeEach(() => {
    useGetProductsQuery.mockReset()
    useGetTotalCustomersQuery.mockReset()
  })
  it('Overview component should render', () => {
    useGetProductsQuery.mockImplementation(() => ({
      data: [
        {
          id: 'fakeId',
          logoUrl: 'fakeLogoUrl',
          name: 'Umbrella',
          shortName: null,
          totalCustomers: 50,
        },
      ],
    }))
    useGetTotalCustomersQuery.mockImplementation(() => ({
      data: 205,
    }))
    const { getByText } = renderWithProviders(<Overview />)

    expect(getByText('Total customers')).toBeInTheDocument()
    expect(getByText('Signed products')).toBeInTheDocument()
    expect(getByText('Umbrella customers')).toBeInTheDocument()
    expect(getByText('205')).toBeInTheDocument()
  })
  it('Empty state should render if no data', () => {
    useGetProductsQuery.mockImplementation(() => ({
      data: [],
      isFetching: false,
    }))
    useGetTotalCustomersQuery.mockImplementation(() => ({
      data: null,
      isFetching: false,
    }))
    const { getByText } = renderWithProviders(<Overview />)

    expect(getByText('You have no products and no customers')).toBeInTheDocument()
  })
  it('Loading state should render if data is fetching', () => {
    useGetProductsQuery.mockImplementation(() => ({
      data: [],
      isFetching: true,
    }))
    useGetTotalCustomersQuery.mockImplementation(() => ({
      data: null,
      isFetching: true,
    }))
    const { getByText } = renderWithProviders(<Overview />)

    expect(getByText('We are loading your products')).toBeInTheDocument()
  })
})

describe('BigCard component', () => {
  it('BigCard component should be rendered with provided properties', () => {
    const bigCardLink = {
      linkTitle: 'manage customers',
      linkAddress: '/customers',
    }
    const { getByText } = renderWithProviders(
      <BigCard title="Title" count={300} link={bigCardLink} />,
    )
    expect(getByText('Title')).toBeInTheDocument()
    expect(getByText(300)).toBeInTheDocument()
    expect(getByText('manage customers')).toBeTruthy()
    expect(getByText('manage customers')?.parentElement?.getAttribute('href')).toBe(
      bigCardLink.linkAddress,
    )
  })
})
describe('SmallCard component', () => {
  it('SmallCard component should be rendered with provided properties', () => {
    const { getByText } = renderWithProviders(<SmallCard title="Title" count={300} />)
    expect(getByText('Title customers')).toBeInTheDocument()
    expect(getByText(300)).toBeInTheDocument()
  })
})
