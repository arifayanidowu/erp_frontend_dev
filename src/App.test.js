import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("LOGIN", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/LOGIN/i);
  expect(linkElement).toBeInTheDocument();
});
