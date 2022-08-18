import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event/'
import "@testing-library/jest-dom";
import React from 'react'
import Login from '.'
describe('Login', () => {
  it('Truthy Test', async() => {
    const ele = render(
      <Login
        buttonClick={() => {
          console.log('clicked')
        }}
      />
    )
    fireEvent.click(screen.getByText('Continue'), { button: 0 })
    await userEvent.type(screen.getByPlaceholderText('eg: Smith'), 'S')
    console.log(screen.getByPlaceholderText('eg: Smith'))
    expect(screen.getByPlaceholderText('eg: Smith')).toHaveValue('S')
    await userEvent.type(screen.getByPlaceholderText('eg: Patrick'), 'SS')
    expect(screen.getByPlaceholderText('eg: Patrick')).toHaveValue('SS')
    await userEvent.type(
      screen.getByPlaceholderText('eg: patricksmith@gmail.com'),
      'SS@'
    )
    expect(screen.getByPlaceholderText('eg: patricksmith@gmail.com')).toHaveValue('SS@')
    expect(ele).toBeTruthy()
  })
})
