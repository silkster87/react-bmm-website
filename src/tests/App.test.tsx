import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders the welcome heading', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /welcome to bromley music makers/i })).toBeInTheDocument()
})
