import { render, screen } from "@testing-library/react-native";
import { ReactElement } from "react";

export const checkForText = (text: string, component: ReactElement) => {
  render(component);
  expect(screen.getByRole("text", { name: text })).toBeOnTheScreen();
};

export const checkForButton = (text: string, component: ReactElement) => {
  render(component);
  expect(screen.getByRole("button", { name: text })).toBeOnTheScreen();
};
