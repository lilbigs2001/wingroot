import DeerPage from "@/app/(stepper-wizard)/deer-page";
import TreesAndShrubsPage from "@/app/(stepper-wizard)/trees-and-shrubs-page";
import { NO, YES } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it.each([
  ["DeerPage", DeerPage],
  ["TreesAndShrubsPage", TreesAndShrubsPage],
])(`renders ${YES} and ${NO} radio buttons on %s`, (_, component) => {
  render(component());
  expect(screen.getByRole("radio", { name: YES })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: NO })).toBeOnTheScreen();
});
