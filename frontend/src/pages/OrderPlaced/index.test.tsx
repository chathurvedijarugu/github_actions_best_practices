import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import OrderPlacedPage from '.';

it("renders the order placed page", () => {
    const wrapper = render(
        <BrowserRouter>
            <OrderPlacedPage></OrderPlacedPage>
        </BrowserRouter>
    );

    expect(wrapper).toBeTruthy();
});

it("renders the components of order placed page", () => {
    render(
        <BrowserRouter>
            <OrderPlacedPage></OrderPlacedPage>
        </BrowserRouter>
    );

    const logo = screen.getByText("Zemoso Diagnostics");
    const image = screen.getByAltText("payment-success");
    const orderPlaced = screen.getByTestId("order-placed");

    expect(logo).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(orderPlaced).toBeInTheDocument();
});