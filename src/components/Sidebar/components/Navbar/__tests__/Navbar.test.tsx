import { renderWithProviders } from '@msp/utils/test-utils'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Navbar from '../Navbar'

describe('Navbar component', () => {
  it('Should render link with correct href ', () => {
    const { getByRole } = renderWithProviders(<Navbar />)
    const overviewLinkElement = getByRole('link', { name: 'Overview' })
    expect(overviewLinkElement).toHaveAttribute('href', '/')
  })
  it('Should expand categories on click ', async () => {
    const { getByText, getByRole } = renderWithProviders(<Navbar />)
    const trainingExpandableElement = getByText('Training')
    userEvent.click(trainingExpandableElement)
    const trainingVideosLink = getByRole('link', { name: 'Secure MSP Hub Videos' })
    expect(trainingVideosLink).toBeVisible()
  })
})
