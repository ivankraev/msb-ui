import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import BigCard from './BigCard'
import SmallCard from './SmallCard'
import Overview from './Overview'

afterEach(cleanup)

describe('Overview page', () => {
  it('Overview component should render', () => {
    const { queryByText } = render(<Overview />, { wrapper: MemoryRouter })
    expect(queryByText('Total customers')).toBeInTheDocument()
    expect(queryByText('Signed products')).toBeInTheDocument()
    expect(queryByText('Umbrella customers')).toBeInTheDocument()
    expect(queryByText('Secure Endpoints customers')).toBeInTheDocument()
    expect(queryByText('DUO customers')).toBeInTheDocument()
    expect(queryByText('CMD customers')).toBeInTheDocument()
    expect(queryByText('SecureX customers')).toBeInTheDocument()
  })
})

describe('BigCard component', () => {
  it('BigCard component should be rendered with provided properties', () => {
    const bigCardLink = {
      linkTitle: 'manage customers',
      linkAddress: '/customers',
    }
    const { queryByText } = render(<BigCard title="Title" count={300} link={bigCardLink} />, {
      wrapper: MemoryRouter,
    })
    expect(queryByText('Title')).toBeInTheDocument()
    expect(queryByText(300)).toBeInTheDocument()
    expect(queryByText('manage customers')).toBeTruthy()
    expect(queryByText('manage customers')?.parentElement?.getAttribute('href')).toBe(
      bigCardLink.linkAddress,
    )
  })
})
describe('SmallCard component', () => {
  it('SmallCard component should be rendered with provided properties', () => {
    const { queryByText } = render(<SmallCard title="Title" count={300} />, {
      wrapper: MemoryRouter,
    })
    expect(queryByText('Title customers')).toBeInTheDocument()
    expect(queryByText(300)).toBeInTheDocument()
  })
})
