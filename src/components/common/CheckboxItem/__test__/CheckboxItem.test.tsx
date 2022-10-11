import React from 'react'
import { render, screen } from '@testing-library/react'
import CheckboxItem from '@common/CheckboxItem'

describe('Container component', () => {
  it('Should render the component with the proper props', () => {
    const mockLabel = 'My label'

    render(<CheckboxItem label={mockLabel} />)

    screen.getByText(mockLabel)
  })
})
