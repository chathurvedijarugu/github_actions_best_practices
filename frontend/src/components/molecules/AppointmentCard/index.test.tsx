import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import AppointmentCard from '.'
import { APPOINTMENT_CARD } from '../../utils/Constant'

describe("AppointmentCard test",()=>{
    it("Should render",()=>{
        const element=render(<AppointmentCard {...APPOINTMENT_CARD} />)
        expect(element).toBeTruthy()
    })
})