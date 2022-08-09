import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewOrder from "./index";

describe("ReviewOrder Component", () => {
  it("rendering component", () => {
    const wrapper = render(<ReviewOrder />);
    expect(wrapper).toBeTruthy;
  });
});
