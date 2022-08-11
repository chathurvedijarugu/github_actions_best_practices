import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import OTPField from '.'
describe('OTP field component', () => {
  it('should render the logo', () => {
    const wrapper = render(<OTPField />)
    expect(wrapper).toBeTruthy
  })
})
