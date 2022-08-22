import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '.';

it("renders the home page", () => {
    const wrapper = render(
        <BrowserRouter>
            <HomePage></HomePage>
        </BrowserRouter>
    );
    expect(wrapper).toBeTruthy();
});

it("renders components in home page", () => {
    render(
        <BrowserRouter>
            <HomePage></HomePage>
        </BrowserRouter>
    );
    const searchBar = screen.getByPlaceholderText("Search for lab test, packages");
    const banner = screen.getByText("Your health is our priority");
    const testsGrid = screen.getByText("Commonly Booked Test");
    const chooseUsGrid = screen.getByTestId("choose-us");
    const testDetailGrid = screen.getByTestId("test-detail");
    const testimonialGrid = screen.getByText("Customer Testimonials");
    const faq = screen.getByTestId("faq");
    const footer = screen.getByTestId("footer");

    expect(searchBar).toBeInTheDocument();
    expect(banner).toBeInTheDocument();
    expect(testsGrid).toBeInTheDocument();
    expect(chooseUsGrid).toBeInTheDocument();
    expect(testDetailGrid).toBeInTheDocument();
    expect(testimonialGrid).toBeInTheDocument();
    expect(faq).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
})