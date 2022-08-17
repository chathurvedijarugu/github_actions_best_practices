import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './index'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
describe('Header Component', () => {
  it('should render component', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )
    expect(wrapper).toBeInTheDocument
    expect(wrapper).toBeTruthy
  })
})
