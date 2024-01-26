import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CompaniesList from "./CompaniesList";

test("renders companies list", () => {
  render(<CompaniesList />, { wrapper: MemoryRouter });
  expect(screen.getByText("Apple")).toBeInTheDocument();
  expect(screen.getByText("Microsoft")).toBeInTheDocument();
  expect(screen.getByText("Amazon")).toBeInTheDocument();
  expect(screen.getByText("Google")).toBeInTheDocument();
  expect(screen.getByText("Tesla")).toBeInTheDocument();
  expect(screen.getByText("Meta")).toBeInTheDocument();
  expect(screen.getByText("JP Morgan")).toBeInTheDocument();
  expect(screen.getByText("Nike")).toBeInTheDocument();
  expect(screen.getByText("Boeing")).toBeInTheDocument();
  expect(screen.getByText("Visa")).toBeInTheDocument();
  expect(screen.getByText("Walmart")).toBeInTheDocument();
  expect(screen.getByText("Pfizer")).toBeInTheDocument();
  expect(screen.getByText("Netflix")).toBeInTheDocument();
  expect(screen.getByText("Samsung")).toBeInTheDocument();
  expect(screen.getByText("Oracle")).toBeInTheDocument();
  expect(screen.getByText("Toyota")).toBeInTheDocument();
});
