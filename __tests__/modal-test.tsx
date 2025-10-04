import StepperWizard from "@/app/modal";
import { SOIL_MOISTURE_QUESTION } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it("has correct text", () => {
  render(<StepperWizard />);
  expect(
    screen.getByRole("text", {
      name: SOIL_MOISTURE_QUESTION,
    }),
  ).toBeOnTheScreen();
});
