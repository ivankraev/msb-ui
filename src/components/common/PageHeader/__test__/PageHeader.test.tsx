import React from 'react'
import { render, screen } from '@testing-library/react'
import PageHeader from '@common/PageHeader'
import { MemoryRouter } from 'react-router-dom'

describe('PageHeader component', () => {
  it('Header should be rendered with the correct label', () => {
    const label = 'Test label'
    render(<PageHeader label={label} />, { wrapper: MemoryRouter })
    screen.getByText(label)
  })
})
