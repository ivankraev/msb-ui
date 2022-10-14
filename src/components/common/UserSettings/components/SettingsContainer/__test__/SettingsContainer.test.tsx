import React from 'react'
import { render } from '@testing-library/react'
import SettingsContainer from '@common/UserSettings/components/SettingsContainer'

describe('SettingsContainer component', () => {
  it('Should render the component with the proper children and props', () => {
    const mockHeaderText = 'My Header'
    const mockLabel = 'My label'

    const { getByText } = render(
      <SettingsContainer label={mockLabel}>
        <h1>{mockHeaderText}</h1>
      </SettingsContainer>,
    )

    getByText(mockHeaderText)
    getByText(mockLabel)
  })
})
