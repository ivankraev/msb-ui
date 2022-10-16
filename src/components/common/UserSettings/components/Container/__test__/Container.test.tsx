import React from 'react'
import { render } from '@testing-library/react'
import Container from '@common/UserSettings/components/Container'

describe('SettingsComponent component', () => {
  it('Should render the component with the proper children', () => {
    const mockHeaderText = 'My Header'

    const { getByText } = render(
      <Container>
        <h1>{mockHeaderText}</h1>
      </Container>,
    )

    getByText(mockHeaderText)
  })
})
