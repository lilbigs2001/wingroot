import StepperWizard from "@/app/modal";
import { NO, SOIL_MOISTURE_QUESTION, YES } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it("has correct text", () => {
  render(<StepperWizard />);
  expect(
    screen.getByRole("text", {
      name: SOIL_MOISTURE_QUESTION,
    }),
  ).toBeOnTheScreen();
});

it(`displays ${YES} button`, () => {
  render(<StepperWizard />);
  expect(screen.getByRole("button", { name: YES })).toBeOnTheScreen();
});

it(`displays ${NO} button`, () => {
  render(<StepperWizard />);
  expect(screen.getByRole("button", { name: NO })).toBeOnTheScreen();
});
