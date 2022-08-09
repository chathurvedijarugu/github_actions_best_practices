import { render, screen } from '@testing-library/react'
import React from 'react'
import Banner from '.'
describe('Banner test', () => {
  it('Truthy test', () => {
    const element = render(<Banner />)
    expect(element).toBeTruthy()
  })
  it('onclick function', () => {
    const element = render(
      <Banner
        onClick={() => {
          console.log('clicked banner')
        }}
      />
    )
    expect(element).toBeTruthy()
  })
})
