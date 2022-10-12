import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import Button from './Button'
import { MemoryRouter } from 'react-router'

afterEach(cleanup)

describe('Button component', () => {
  it('Button component should render', () => {
    render(<Button>Click me</Button>)
    const buttonComponent = screen.getByText('Click me')
    expect(buttonComponent).toBeVisible()
  })
  it('Button component is a button element', () => {
    render(<Button>Click me</Button>, { wrapper: MemoryRouter })
    const buttonComponent = screen.getByRole('button')
    expect(buttonComponent).toBeVisible()
  })
  it('Button component is a link element', () => {
    render(<Button to="/">Click me</Button>, { wrapper: MemoryRouter })
    const buttonComponent = screen.getByRole('link')
    expect(buttonComponent).toBeVisible()
  })
  it('Button component is a button element and handles click event', () => {
    const mockOnClick = jest.fn()
    render(<Button onClick={mockOnClick}>Click me</Button>, { wrapper: MemoryRouter })
    const buttonComponent = screen.getByRole('button')
    fireEvent.click(buttonComponent)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
