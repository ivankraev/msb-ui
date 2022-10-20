import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import EditableForm from '../EditableForm'

const mockedProps = {
  formLabel: 'General Settings',
  ctaText: 'Edit',
  fields: [{ name: 'name', type: 'text', label: 'Name' }],
  initialValues: { name: '' },
}

afterEach(cleanup)

describe('EditableForm component', () => {
  it('EditableForm component should render with label', () => {
    const { getByText } = render(<EditableForm {...mockedProps} />)
    const formLabelElement = getByText('Name')
    expect(formLabelElement).toBeVisible()
  })
  it('EditableForm component should have cta text according to editable state', () => {
    const { getByRole } = render(<EditableForm {...mockedProps} />)
    const ctaElement = getByRole('button')
    expect(ctaElement).toHaveTextContent(mockedProps.ctaText)
    fireEvent.click(ctaElement)
    expect(ctaElement).toHaveTextContent('Save')
  })
})
