import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import SelectAndAddPatient from ".";
import { patientDetails } from "../../../utils/constant";
describe("Select & Add patient", () => {
  it("Truthy test", () => {
    const element = render(
      <SelectAndAddPatient
        onEditClick={() => {}}
        onCheckBoxClick={(x) => {console.log(x)}}
        patientDetails={patientDetails}
      />
    );
    expect(element).toBeTruthy();
    fireEvent.click(screen.getAllByText("Edit")[0], { button: 0 });
  });
});
