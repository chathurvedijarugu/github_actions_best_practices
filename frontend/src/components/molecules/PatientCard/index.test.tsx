import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import PatientCard from ".";
import {patientDetails} from "../../../utils/constant";
describe("Patient Card test",()=>{
    it("Truthy test",()=>{
        const patient=patientDetails[0];
        const element=render(<PatientCard {...patient} />)
        expect(element).toBeTruthy()
    })
})