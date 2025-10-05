import { render, screen } from "@testing-library/react-native";
import { ReactElement } from "react";

export const checkForText = (text: string, component: ReactElement) => {
  render(component);
  return expect(screen.getByRole("text", { name: text })).toBeOnTheScreen();
};
