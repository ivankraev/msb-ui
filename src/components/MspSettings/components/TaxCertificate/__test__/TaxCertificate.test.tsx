import React from 'react'
import { render } from '@testing-library/react'
import TaxCertificate from '@msp/components/MspSettings/components/TaxCertificate'

describe('TaxCertificate component', () => {
  it('Should render the component ', () => {
    render(<TaxCertificate />)
  })
})
