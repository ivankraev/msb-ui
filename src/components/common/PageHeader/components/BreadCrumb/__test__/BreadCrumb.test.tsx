import React from 'react'
import { render, screen } from '@testing-library/react'
import BreadCrumb from '@common/PageHeader/components/BreadCrumb'

describe('BreadCrumb component', () => {
  it('BreadCrumb should consist of the correct paths', () => {
    window.history.pushState({}, '', '/test/breadcrumb/someUrl')
    render(<BreadCrumb />)
    const paths = window.location.pathname.split('/').filter((path) => path.length > 0)
    const pathOnTheScreen = screen.getAllByRole(`listitem`)
    const renderedPaths: string[] = []
    pathOnTheScreen.forEach((el) => el.textContent !== null && renderedPaths.push(el.textContent))
    expect(paths).toStrictEqual(renderedPaths)
  })
})
