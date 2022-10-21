import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import { Formik } from 'formik'
import Field from '../Field'

afterEach(cleanup)

describe('Field component ', () => {
  it('Field component should render with proper value', () => {
    render(
      <Formik
        initialValues={{
          name: 'Rebecca',
        }}
        onSubmit={() => {
          return
        }}
      >
        <Field type="text" name="name" label="Name" />
      </Formik>,
    )
    const inputElement = screen.getByLabelText('Name')
    expect(inputElement).toHaveValue('Rebecca')
  })
  it('Field component should have set attributes', () => {
    render(
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={() => {
          return
        }}
      >
        <Field type="text" name="name" label="Name" required />
      </Formik>,
    )
    const inputElement = screen.getByLabelText('Name')
    expect(inputElement).toHaveAttribute('required')
  })
})
