import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Selector from '@common/Selector'

describe('Selector component', () => {
  it('Should render the component with the proper props and handle the onChange event', () => {
    const mockOptions = [
      { value: 'mockValue', text: 'mockText' },
      { value: 'mockValue2', text: 'mockText2' },
    ]

    const onChangeHandler = jest.fn()

    const { getAllByTestId, getByTestId } = render(
      <Selector onChange={onChangeHandler} options={mockOptions} />,
    )
    const options = getAllByTestId('select-option') as HTMLOptionElement[]
    const select = getByTestId('select')
    fireEvent.change(select, { target: { value: 'mockValue' } })
    expect(options[0].selected).toBeTruthy()
    fireEvent.change(select, { target: { value: 'mockValue2' } })
    expect(options[1].selected).toBeTruthy()
  })
})
