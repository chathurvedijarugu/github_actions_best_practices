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