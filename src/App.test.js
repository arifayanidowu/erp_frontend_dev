import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("LOGIN", () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/LOGIN/i);
  expect(linkElement).toBeInTheDocument();
});
