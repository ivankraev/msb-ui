import React from 'react'
import { render, screen } from '@testing-library/react'
import SubSidebar from '@common/SubSidebar'

describe('SubSidebar component', () => {
  it('Should render the component with the proper children', () => {
    const mockHeaderText = 'My Header'

    render(
      <SubSidebar>
        <h1>{mockHeaderText}</h1>
      </SubSidebar>,
    )

    screen.getByText(mockHeaderText)
  })
})
