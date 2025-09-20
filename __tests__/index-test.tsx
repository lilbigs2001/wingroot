import {
  HELP_US_IMPROVE,
  PLAN_YOUR_GARDEN,
  REGIONAL_DISCLAIMER,
  WINGROOT,
  WINGROOT_LOGO_LABEL,
} from "@/constants";
import { render, screen } from "@testing-library/react-native";
import IndexScreen from "../app/(home)/index";

it("renders the app name", () => {
  render(<IndexScreen />);
  expect(screen.getByRole("text", { name: WINGROOT })).toBeOnTheScreen();
});

it("displays the app icon", () => {
  render(<IndexScreen />);
  const appIcon = screen.getByLabelText(WINGROOT_LOGO_LABEL);
  expect(appIcon).toBeOnTheScreen();
});

it(`displays ${PLAN_YOUR_GARDEN} button`, () => {
  render(<IndexScreen />);
  expect(
    screen.getByRole("button", { name: PLAN_YOUR_GARDEN }),
  ).toBeOnTheScreen();
});

it("renders regional planting disclaimer", () => {
  render(<IndexScreen />);
  expect(
    screen.getByRole("text", {
      name: REGIONAL_DISCLAIMER,
    }),
  ).toBeOnTheScreen();
});

it(`displays ${HELP_US_IMPROVE} button`, () => {
  render(<IndexScreen />);
  expect(
    screen.getByRole("button", { name: HELP_US_IMPROVE }),
  ).toBeOnTheScreen();
});
