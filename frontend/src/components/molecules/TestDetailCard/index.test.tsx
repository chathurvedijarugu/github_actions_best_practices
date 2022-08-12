import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestDetailCard from "./index";
import bodyTest from '../../../assets/illustrations/bodyTest.svg'

describe("TestDetailCard Component", () => {
  it("should render Test Detail Card", () => {
    const wrapper = render(<TestDetailCard text="Full Body CheckUp" iconIllustation={bodyTest} />);
    expect(wrapper).toBeTruthy;
  });
});
