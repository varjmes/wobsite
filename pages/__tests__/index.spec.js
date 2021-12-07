/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const headingElement = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(headingElement).toBeInTheDocument()
  })
})
