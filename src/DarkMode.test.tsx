import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DarkMode from "./components/DarkMode";

test("renders dark mode component", () => {
  render(<DarkMode />);

  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
});

test("should toggles dark mode", () => {
  render(<DarkMode />);
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;

  expect(inputElement.checked).toEqual(false);
  fireEvent.click(inputElement);
  expect(inputElement.checked).toEqual(true);

  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});
