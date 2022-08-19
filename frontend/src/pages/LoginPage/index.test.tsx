import {fireEvent, render, screen} from "@testing-library/react";
import  userEvent  from "@testing-library/user-event";
import React from "react";
import LoginPage from ".";
describe("Login Page test",()=>{
    it("Truthy test",async()=>{
        const ele=render(<LoginPage />)
        fireEvent.click(screen.getByText('Continue'),{button:0})
        await userEvent.type(screen.getByPlaceholderText("eg: Patrick"),"S");
        await userEvent.type(screen.getByPlaceholderText("eg: Smith"),"S");
        await userEvent.type(screen.getByPlaceholderText("eg: patricksmith@gmail.com"),"S@");
        fireEvent.click(screen.getByText('Continue'),{button:0})
        await userEvent.type(screen.getByPlaceholderText("1234332487"),"S");
        fireEvent.click(screen.getByText('Get OTP'),{button:0})
        fireEvent.click(screen.getByText("Verify"),{button:0})
        expect(ele).toBeTruthy()
    })
})