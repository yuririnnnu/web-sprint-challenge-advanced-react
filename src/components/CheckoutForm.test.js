import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';


// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
    const form = screen.queryByText(/checkout form/i)
    expect(form).toBeInTheDocument()
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/first name/i)
    userEvent.type(firstName, "Yuriko")
    const lastName = screen.getByLabelText(/last name/i)
    userEvent.type(lastName, "Takamiya")
    const address = screen.getByLabelText(/address/i)
    userEvent.type(address, "1234 5 ave")
    const city = screen.getByLabelText(/city/i)
    userEvent.type(city, "Green point")
    const state = screen.getByLabelText(/state/i)
    userEvent.type(state, "NY")
    const zip = screen.getByLabelText(/zip/i)
    userEvent.type(zip, "12345")
    const button = screen.getByRole(/button/i)
    userEvent.click(button)

    const outputName = screen.queryByText(/yuriko takamiya/i)
    const outputAddress = screen.queryByText("1234 5 ave")
    const outputTheRest = screen.queryByText(/green point, ny 12345/i)
    expect(outputName).toBeInTheDocument()
    expect(outputAddress).toBeInTheDocument()
    expect(outputTheRest).toBeInTheDocument()
     
});
