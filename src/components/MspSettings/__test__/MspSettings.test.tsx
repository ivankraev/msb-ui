import React from 'react'
import { render } from '@testing-library/react'
import MsbSettings from '@msp/components/MspSettings'

describe('MsbSettings component', () => {
  it('Should render h1, h3, strong and svg elements', () => {
    const { container } = render(<MsbSettings />)
    expect(container.querySelector('h1')).not.toBeNull()
    expect(container.querySelector('h3')).not.toBeNull()
    expect(container.querySelector('strong')).not.toBeNull()
    expect(container.querySelector('svg')).not.toBeNull()
  })
})
