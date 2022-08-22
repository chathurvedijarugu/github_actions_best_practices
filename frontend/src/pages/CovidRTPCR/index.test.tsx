import { ThemeProvider } from '@mui/material'
import { render } from '@testing-library/react'
import React from 'react'
import CovidRTPCR from '.'
import theme from '../../theme'
import { MemoryRouter } from 'react-router'
describe('Covid RTPCR Page test', () => {
  it('should be truthy', () => {
    const ele = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <CovidRTPCR />
        </MemoryRouter>
      </ThemeProvider>
    )
    expect(ele).toBeTruthy()
  })
})
