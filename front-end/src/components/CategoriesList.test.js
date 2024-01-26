import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoriesList from "./CategoriesList";

test("renders categories list", () => {
  render(<CategoriesList />, { wrapper: MemoryRouter });
  expect(screen.getByText("Category")).toBeInTheDocument();
  expect(screen.getByText("Business")).toBeInTheDocument();
  expect(screen.getByText("Technology")).toBeInTheDocument();
  expect(screen.getByText("Entertainment")).toBeInTheDocument();
  expect(screen.getByText("General")).toBeInTheDocument();
  expect(screen.getByText("Health")).toBeInTheDocument();
  expect(screen.getByText("Science")).toBeInTheDocument();
  expect(screen.getByText("Sports")).toBeInTheDocument();
});
