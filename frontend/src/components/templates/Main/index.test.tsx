import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../../theme'
import React from 'react'
import MainTemplate from '.'
import ProgressBar from '../../molecules/progressBar'
import { Box } from '@mui/material'
describe('Main Template test', () => {
  it('Should render', () => {
    const ele = render(
      <ThemeProvider theme={theme}>
        <MainTemplate
          nextClick={() => {}}
          backClick={() => {}}
          mainComponent={<Box width="583px" height="560px"></Box>}
          stepperComponent={
            <ProgressBar values={['Home', 'Covid RTPCR']} currentIndex={1} />
          }
          footerTextComponent={undefined}
          buttonLabel="Add Patient"
        />
      </ThemeProvider>
    )
    console.log(screen.getByText('Cancel'))
    fireEvent.click(screen.getByText('Cancel'), { button: 0 })
    fireEvent.click(screen.getByText('Add Patient'), { button: 0 })
    expect(ele).toBeTruthy()
  })
  it('should execute without backClick', () => {
    const ele = render(
      <ThemeProvider theme={theme}>
        <MainTemplate
          nextClick={() => {}}
          mainComponent={<Box width="583px" height="560px"></Box>}
          stepperComponent={
            <ProgressBar values={['Home', 'Covid RTPCR']} currentIndex={1} />
          }
          footerTextComponent={undefined}
          buttonLabel="Add Patient"
        />
      </ThemeProvider>
    )
    fireEvent.click(screen.getByText('Cancel'), { button: 0 })
    fireEvent.click(screen.getByText('Add Patient'), { button: 0 })
    expect(ele).toBeTruthy()
  })
})
