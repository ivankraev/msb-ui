import React from 'react'
import { render } from '@testing-library/react'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'

describe('HeaderComponent component', () => {
  it('Should render the component with the proper children and props', () => {
    const mockHeaderText = 'My Header'
    const mockLabel = 'My label'

    const { getByText } = render(
      <HeaderComponent label={mockLabel}>
        <h1>{mockHeaderText}</h1>
      </HeaderComponent>,
    )

    getByText(mockHeaderText)
    getByText(mockLabel)
  })
})
