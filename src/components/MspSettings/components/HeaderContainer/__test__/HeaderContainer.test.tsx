import React from 'react'
import { render, screen } from '@testing-library/react'
import HeaderContainer from '@msp/components/MspSettings/components/HeaderContainer'

describe('HeaderContainer component', () => {
  it('Should render the component with the proper children and props', () => {
    const mockHeaderText = 'My Header'
    const mockLabel = 'My label'

    render(
      <HeaderContainer label={mockLabel}>
        <h1>{mockHeaderText}</h1>
      </HeaderContainer>,
    )

    screen.getByText(mockHeaderText)
    screen.getByText(mockLabel)
  })
})
