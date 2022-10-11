import React from 'react'
import { render, screen } from '@testing-library/react'
import NavbarHolder from '@common/SubSidebar/components/NavbarHolder'

describe('NavbarHolder component', () => {
  it('Should render the component with the proper children and props', () => {
    const mockTitle = 'My Title'
    const mockHeaderText = 'My Header'

    render(
      <NavbarHolder title={mockTitle}>
        <h1>{mockHeaderText}</h1>
      </NavbarHolder>,
    )

    screen.getByText(mockTitle)
    screen.getByText(mockHeaderText)
  })
})
