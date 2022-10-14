import React from 'react'
import { render } from '@testing-library/react'
import HeaderContainer from '@common/UserSettings/components/HeaderContainer'

describe('HeaderContainer component', () => {
  it('Should render the component with the proper children and props', () => {
    const mockHeaderText = 'My Header'
    const mockLabel = 'My label'

    const { getByText } = render(
      <HeaderContainer label={mockLabel}>
        <h1>{mockHeaderText}</h1>
      </HeaderContainer>,
    )

    getByText(mockHeaderText)
    getByText(mockLabel)
  })
})
