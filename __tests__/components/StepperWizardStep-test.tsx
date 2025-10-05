import StepperWizardStep from "@/components/StepperWizardStep";
import { NO, YES } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it("has correct text", () => {
  renderStepperWizard();
  expect(screen.getByRole("text", { name: SAMPLE_QUESTION })).toBeOnTheScreen();
});

it(`displays ${YES} button`, () => {
  renderStepperWizard();
  expect(screen.getByRole("button", { name: YES })).toBeOnTheScreen();
});

it(`displays ${NO} button`, () => {
  renderStepperWizard();
  expect(screen.getByRole("button", { name: NO })).toBeOnTheScreen();
});

const renderStepperWizard = () => {
  render(<StepperWizardStep question={SAMPLE_QUESTION} link="/" />);
};
const SAMPLE_QUESTION = "Sample Question";
