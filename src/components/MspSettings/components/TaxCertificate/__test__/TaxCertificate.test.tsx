import React from 'react'
import TaxCertificate from '@msp/components/MspSettings/components/TaxCertificate'
import { renderWithProviders } from '@msp/utils/test-utils'

const preloadedState = {
  settings: {
    mspName: 'Acme Widgets',
    logo: 'company-logo.png',
    certificate: {
      file: null,
      error: null,
    },
  },
}

describe('TaxCertificate component', () => {
  it('Should return string if file doesnt exist', () => {
    const { getByText } = renderWithProviders(<TaxCertificate />, { preloadedState })
    expect(getByText('No file uploaded')).toBeInTheDocument()
  })
})
