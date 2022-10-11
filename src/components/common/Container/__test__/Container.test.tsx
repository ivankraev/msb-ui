import React from 'react'
import { render, screen } from '@testing-library/react'
import Container from '@common/Container'

describe('Container component', () => {
  it('Should render the component with the proper children and props', () => {
    const mockHeaderText = 'My Header'
    const mockLabel = 'My label'

    render(
      <Container label={mockLabel} headerButtons={<h1>MyButton</h1>}>
        <h1>{mockHeaderText}</h1>
      </Container>,
    )

    screen.getByText(mockHeaderText)
    screen.getByText(mockLabel)
    screen.getByText('MyButton')
  })
})
