import React from 'react'
import { render, screen } from '@testing-library/react'
import NavbarCheckbox from '@common/SubSidebar/components/NavbarCheckbox'

describe('NavbarCheckbox component', () => {
  it('Should render the component with the proper children and props', () => {
    const mockHeaderText = 'My Header'

    interface Item {
      label: string
      value: string
    }

    const items: Item[] = [
      { label: 'Option1', value: 'option1' },
      { label: 'Option2', value: 'option2' },
    ]

    render(
      <NavbarCheckbox items={items}>
        <h1>{mockHeaderText}</h1>
      </NavbarCheckbox>,
    )

    screen.getByText('Option1')
    screen.getByText('Option2')
    screen.getByText(mockHeaderText)
  })
})
