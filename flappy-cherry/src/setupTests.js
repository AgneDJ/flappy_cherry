// Control.test.js
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Control from ".src/flappy_cherry_components/control";

// describe("Counter component", () => {
//   test("initializes count at 0 and increments by 1 when button is clicked", () => {
//     render(<Counter />);
//     const countElement = screen.getByTestId("count");
//     expect(countElement).toHaveTextContent("0"); // Check initial value

//     const incrementButton = screen.getByText("Increment");
//     fireEvent.click(incrementButton);

//     expect(countElement).toHaveTextContent("1"); // Check incremented value
//   });
// });
