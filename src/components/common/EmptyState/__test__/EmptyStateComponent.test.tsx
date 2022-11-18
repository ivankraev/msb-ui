import React from 'react'
import { render } from '@testing-library/react'

import EmptyStateComponent from '..'

describe('EmptyState test', () => {
  it('EmptyState', () => {
    const { getByText } = render(
      <EmptyStateComponent
        title="Test title"
        message="Test message"
        btnName={'Test button'}
        cta={() => {
          console.log('Button')
        }}
      />,
    )
    expect(getByText('Test title')).toBeInTheDocument()
    expect(getByText('Test message')).toBeInTheDocument()
    expect(getByText('Test button')).toBeInTheDocument()
  })
})
