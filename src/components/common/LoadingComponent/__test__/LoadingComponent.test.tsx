import React from 'react'
import { render } from '@testing-library/react'

import LoadingCompoent from '..'

describe('Loading Component test', () => {
  it('Loading  message is shown', () => {
    const { getByText } = render(<LoadingCompoent message="Test message" />)
    expect(getByText('Test message')).toBeInTheDocument()
  })
})
