import React from 'react'
import { render } from '@testing-library/react'
import SettingsComponent from '@common/UserSettings/components/SettingsComponent'

describe('SettingsComponent component', () => {
  it('Should render the component with the proper children and props', () => {
    const mockHeaderText = 'My Header'
    const mockLabel = 'My label'

    const { getByText } = render(
      <SettingsComponent label={mockLabel}>
        <h1>{mockHeaderText}</h1>
      </SettingsComponent>,
    )

    getByText(mockHeaderText)
    getByText(mockLabel)
  })
})
