import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders the home page without crashing", () => {
  render(<App />);
});
