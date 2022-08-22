import { ThemeProvider } from '@mui/material'
import { render } from '@testing-library/react'
import React from 'react'
import ReviewOrder from '.'
import theme from '../../theme'
import { MemoryRouter } from 'react-router'

describe('Login Page test', () => {
  it('Truthy test', () => {
    const ele = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <ReviewOrder />
        </MemoryRouter>
      </ThemeProvider>
    )
    expect(ele).toBeTruthy()
  })
})
