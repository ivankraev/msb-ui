import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '@common/SearchBar'

describe('SearchBar component', () => {
  it('Should render the component with the proper props and handle the onChange event', () => {
    const mockPlaceholder = 'search...'
    let value

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      value = e.target.value
    }

    render(<SearchBar placeholder={mockPlaceholder} onChange={onChangeHandler} />)
    const input = screen.getByRole('searchbox')
    fireEvent.change(input, { target: { value: 'myval' } })

    expect(value).toEqual('myval')
    screen.getByPlaceholderText(mockPlaceholder)
  })
})
