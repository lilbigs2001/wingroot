import StepperWizardStep from "@/components/StepperWizardStep";
import { FULL_SHADE, FULL_SUN, NO, PARTIAL_SUN, YES } from "@/constants";
import { render, screen, userEvent } from "@testing-library/react-native";

it("has correct text", () => {
  renderStepperWizard();
  expect(screen.getByRole("text", { name: SAMPLE_QUESTION })).toBeOnTheScreen();
});

it('displays a "Next" button', () => {
  renderStepperWizard();
  expect(screen.getByRole("button", { name: "Next" })).toBeOnTheScreen();
});

it("displays radio buttons", () => {
  render(
    <StepperWizardStep question={SAMPLE_QUESTION} link="/" radio={true} />,
  );
  expect(screen.getByRole("radio", { name: YES })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: NO })).toBeOnTheScreen();
});

it("displays multi-option selectors", () => {
  render(
    <StepperWizardStep
      question={SAMPLE_QUESTION}
      link="/"
      multiSelect={[FULL_SUN, PARTIAL_SUN, FULL_SHADE]}
    />,
  );
  expect(screen.getByRole("checkbox", { name: FULL_SUN })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: PARTIAL_SUN })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: FULL_SHADE })).toBeOnTheScreen();
});

it("selecting radio button checks it", async () => {
  const user = userEvent.setup();
  render(
    <StepperWizardStep question={SAMPLE_QUESTION} link="/" radio={true} />,
  );
  const yesRadio = screen.getByRole("radio", { name: YES });
  expect(yesRadio).not.toBeChecked();
  await user.press(yesRadio);
  expect(screen.getByRole("radio", { name: YES })).toBeChecked();
});

const renderStepperWizard = () => {
  render(<StepperWizardStep question={SAMPLE_QUESTION} link="/" />);
};
const SAMPLE_QUESTION = "Sample Question";
