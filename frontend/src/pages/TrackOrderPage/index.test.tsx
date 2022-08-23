import TrackOrderPage from ".";
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

it("renders the track order page", () => {
    const wrapper = render(
        <BrowserRouter>
            <TrackOrderPage></TrackOrderPage>
        </BrowserRouter>
    );

    expect(wrapper).toBeTruthy();
});

it("renders the components of track order page", () => {
    render(
        <BrowserRouter>
            <TrackOrderPage></TrackOrderPage>
        </BrowserRouter>
    );

    const logo = screen.getByText("Zemoso Diagnostics");
    const orderInfo = screen.getByTestId("order-info");
    const trackingStepper = screen.getByTestId("tracking-stepper");
    const footer = screen.getByTestId("footer");

    expect(logo).toBeInTheDocument();
    expect(orderInfo).toBeInTheDocument();
    expect(trackingStepper).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
});