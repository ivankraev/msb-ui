import React from 'react'
import { render, screen } from '@testing-library/react'
import PageHeader from '@common/PageHeader'

describe('PageHeader component', () => {
  it('Header should be rendered with the correct label', () => {
    const label = 'Test label'
    render(<PageHeader label={label} />)
    screen.getByText(label)
  })
  it('Header should be rendered with the correct breadcrumb', () => {
    window.history.pushState({}, '', '/testurl/breadcrumb/someUrl')
    render(<PageHeader label="Test label" />)
    const paths = ['testurl', 'breadcrumb', 'someUrl']
    paths.forEach((el) => {
      screen.getByText(el)
    })
  })
})
