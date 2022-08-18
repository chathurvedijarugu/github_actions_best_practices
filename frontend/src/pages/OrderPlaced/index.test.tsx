import React from 'react';
import { render } from '@testing-library/react';
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