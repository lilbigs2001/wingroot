import {
  HELP_US_IMPROVE,
  PLAN_YOUR_GARDEN,
  REGIONAL_DISCLAIMER,
  WINGROOT,
  WINGROOT_LOGO_LABEL,
} from "@/constants";
import { checkForButton, checkForText } from "@/test-utils";
import { render, screen } from "@testing-library/react-native";
import IndexScreen from "../app/index";

it("renders the app name", () => {
  checkForText(WINGROOT, IndexScreen());
});

it("displays the app icon", () => {
  render(<IndexScreen />);
  const appIcon = screen.getByLabelText(WINGROOT_LOGO_LABEL);
  expect(appIcon).toBeOnTheScreen();
});

it(`displays ${PLAN_YOUR_GARDEN} button`, () => {
  checkForButton(PLAN_YOUR_GARDEN, IndexScreen());
});

it("renders regional planting disclaimer", () => {
  checkForText(REGIONAL_DISCLAIMER, IndexScreen());
});

it(`displays ${HELP_US_IMPROVE} button`, () => {
  checkForButton(HELP_US_IMPROVE, IndexScreen());
});
