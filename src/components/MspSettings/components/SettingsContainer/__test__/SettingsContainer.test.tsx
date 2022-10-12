import React from 'react'
import { render, screen } from '@testing-library/react'
import SettingsContainer from '@msp/components/MspSettings/components/SettingsContainer'

describe('SettingsContainer component', () => {
  it('Should render the component with the proper children and props', () => {
    const mockHeaderText = 'My Header'
    const mockLabel = 'My label'

    render(
      <SettingsContainer label={mockLabel}>
        <h1>{mockHeaderText}</h1>
      </SettingsContainer>,
    )

    screen.getByText(mockHeaderText)
    screen.getByText(mockLabel)
  })
})
